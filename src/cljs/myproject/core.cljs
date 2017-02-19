(ns myproject.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [reagent.core :as r]
              ))

;; -------------------------
;; Views
(defn timer-component []
  (let [seconds-elapsed (r/atom 3)]
    (fn []
      (js/setTimeout
       (fn []
         (js/console.log seconds-elapsed)
         (if (== seconds-elapsed.state 0)
           (reset! seconds-elapsed 3)
           (swap! seconds-elapsed dec)))
       1000)
      [:div
       @seconds-elapsed])))

(defn home-page []
  [:div [:h2 "HACKS"]
   [:div [:a {:href "/timer"} "计时器"]]
   ])

(defn timer-page []
  [:div [:h2 "计时器"]
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
