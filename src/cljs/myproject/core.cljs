(ns myproject.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [myproject.audio :as audio]
              ))

;; -------------------------
;; Views
(defonce total-seconds 90)
(defonce warning-threshold 30)
(defonce ending-threshold 5)
(defonce normal-timer-color "#000")
(defonce warning-time-color "#f34")
(defonce time-color (atom "#000"))
(defonce seconds-left (atom total-seconds))
(defonce is-paused? (atom true))

(defn play [base64]
  (.play base64))

(defn reset []
  (reset! seconds-left total-seconds)
  (reset! time-color normal-timer-color))

(defn reset-component []
  [:input {:type "button"
           :value "重置"
           :id "reset-button"
           :on-click #(reset)}])

(defn toggle-component []
  (let [toggle-component-value #(if is-paused?.state "开始" "暂停")
        button-value (atom (toggle-component-value))]
    (fn []
      [:input {:type "button"
               :value @button-value
               :id "toggle-button"
               :on-click (fn[]
                           (reset! is-paused? (not is-paused?.state))
                           (reset! button-value (toggle-component-value))
                           )}])))

(defn timer-component []
  (js/setInterval
   (fn []
     (if-not is-paused?.state
       ((swap! seconds-left dec)
        (if (== seconds-left.state warning-threshold)
          ((reset! time-color warning-time-color)
           (play audio/warning-beep-base64)))
        (if (== seconds-left.state ending-threshold)
          (play audio/ending-beep-base64))
        (if (== seconds-left.state -1)
          (reset))
        )))
   1000)
  (fn []
    [:div
     [:div
      {:style {:color @time-color :font-size "30vh" :line-height 2
               }}
      @seconds-left]
     [:div
      [reset-component]
      [toggle-component]]]))

(defn home-page []
  [:div [:h2 "HACKS"]
   [:div [:a {:href "/timer"} "Timer"]]
   ])

(defn timer-page-key-down-listner [event]
  (if (= (.-which event) 34)
    (.click (.getElementById js/document "reset-button")))
  (if (= (.-which event) 33)
    (.click (.getElementById js/document "toggle-button")))
  )

(defn timer-page []
  [:div {:style {:text-align "center"}}
   [:h2 "U8K Timer"]
   [timer-component]
   (.addEventListener js/window "keydown" timer-page-key-down-listner)])

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
