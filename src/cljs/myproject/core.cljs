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

(def beep-base64 (js/Audio. "data:audio/wav;base64,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"))

(defn beep []
  (.play beep-base64))

(defn reset-component [seconds]
  [:input {:type "button" :value "Reset"
           :on-click (fn [] ((reset! seconds total-seconds)
                             (reset! time-color "#000")))}])

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
             (beep)))
          (if (== seconds-left.state 0)
            ((beep)))
          (if (== seconds-left.state -1)
            ((reset! seconds-left total-seconds)
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
