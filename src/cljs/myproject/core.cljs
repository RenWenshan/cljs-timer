(ns myproject.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              ))

;; -------------------------
;; Views
(def total-seconds 10)
(def warning-threshold 5)

(def time-color (atom "#000"))

(defn reset-component [seconds]
  [:input {:type "button" :value "Reset"
           :on-click #(reset! seconds total-seconds)}])

(defn toggle-component [is-paused?]
  (let [toggle-component-value #(if is-paused?.state "Start" "Pause")
        button-value (atom (toggle-component-value))]
    (fn []
      [:input {:type "button"
               :value @button-value
               :on-click (fn[]
                           (reset! is-paused? (not is-paused?.state))
                           (reset! button-value (toggle-component-value))
                           )}])))

(defn timer-component []
  (let [seconds-left (atom total-seconds)
        is-paused? (atom false)]
    (js/setInterval
     (fn []
       (if-not is-paused?.state
         ((swap! seconds-left dec)
          (if (== seconds-left.state warning-threshold)
            (
             (reset! time-color "#f34")
             ;; (beep)
             )
            )
          (if (== seconds-left.state -1)
            (;; (beep-ending)
             (reset! seconds-left total-seconds)
             (reset! time-color "#000")))
          )))
     1000)
    (fn []
      [:div
       [:div
        {:style {:color @time-color}}
        @seconds-left]
       [reset-component seconds-left]
       [toggle-component is-paused?]
       ]
      )))

(defn home-page []
  [:div [:h2 "HACKS"]
   [:div [:a {:href "/timer"} "Timer"]]
   ])

(defn timer-page []
  [:div [:h2 "U8K Timer"]
   [timer-component]
   ])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/timer" []
  (session/put! :current-page #'timer-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
