(ns starfield.client
  (:require [rum.core :as r]
            [goog.dom :as dom]
            [cljs.core.match :refer-macros [match]]
            [impi.core :as impi]))

(enable-console-print!)

(defmethod impi/update-prop! :pixi.event/pointer-down [object index _ listener]
  (impi/replace-listener object "pointerdown" index listener))

(defmethod impi/update-prop! :pixi.event/pointer-up [object index _ listener]
  (impi/replace-listener object "pointerup" index listener))

(defmethod impi/update-prop! :pixi.event/pointer-move [object index _ listener]
  (impi/replace-listener object "pointermove" index listener))

(defmethod impi/update-prop! :pixi.object/button-mode? [^js/PIXI.DisplayObject object _ _ button-mode?]
  (set! (.-buttonMode object) button-mode?))

(defonce stars
  (for [i (range 3000)]
    {:pixi.shape/type     :pixi.shape.type/rectangle
     :pixi.shape/position [(rand-int 2000)
                           (rand-int 2000)]
     :pixi.shape/size     [1 1]
     :pixi.shape/fill     {:pixi.fill/color 0xffffff
                           :pixi.fill/alpha 1}}))

(defn pointer-down!
  [app-state-atom]
  (fn [^js/PIXI.interaction.InteractionEvent e]
    (let [app-state      @app-state-atom
          {:keys [drag]} app-state
          {:keys [x y]}        drag]
      (swap! app-state-atom update :drag
             assoc
             :mx0       (.. e -data -originalEvent -clientX)
             :my0       (.. e -data -originalEvent -clientY)
             :x0        x
             :y0        y
             :dragging? true))))

(defn pointer-move!
  [app-state-atom]
  (fn [^js/PIXI.interaction.InteractionEvent e]
    (let [app-state      @app-state-atom
          {:keys [drag]} app-state]
      (when (:dragging? drag)

        (let [{:keys [x y
                      mx0 my0
                      x0 y0]} drag
              dmx (- mx0 (.. e -data -originalEvent -clientX))
              dmy (- my0 (.. e -data -originalEvent -clientY))]
          (swap! app-state-atom update :drag
                 assoc
                 :x (- x0 dmx)
                 :y (- y0 dmy)))))))

(defn pointer-up!
  [app-state-atom]
  (fn [_]
    (let [app-state      @app-state-atom
          {:keys [drag]} app-state]
      (swap! app-state-atom update :drag assoc :dragging? false))))

(defn stage
  [app-state-atom {:keys [width height drag] :as app-state}]
  {:pixi/renderer {:pixi.renderer/size [width height]
                   :pixi.renderer/background-color 0x000000}

   :pixi/listeners {:pointer-down (pointer-down! app-state-atom)
                    :pointer-move (pointer-move! app-state-atom)
                    :pointer-up   (pointer-up! app-state-atom)}

   :pixi/stage    {:impi/key :background
                   :pixi.object/type :pixi.object.type/container
                   :pixi.container/children
                   [{:impi/key                      :stage
                     :pixi.object/type              :pixi.object.type/container
                     :pixi.object/position          [(get drag :x 0)
                                                     (get drag :y 0)]

                     :pixi.object/scale             [(get drag :scale-x 1)
                                                     (get drag :scale-y 1)]

                     :pixi.object/interactive?      true
                     :pixi.object/contains-point    (constantly true)
                     :pixi.event/pointer-down       [:pointer-down]
                     :pixi.event/pointer-up         [:pointer-up]
                     :pixi.event/pointer-move       [:pointer-move]
                     :pixi.container/children

                     [{:impi/key             :stars
                       :pixi.object/type     :pixi.object.type/graphics
                       :pixi.graphics/shapes stars}]}]}})

(defn render-stage!
  [el stage-id app-state-atom app-state]
  (impi/mount stage-id (stage app-state-atom app-state) el))

(def impi
  {:did-mount (fn [state]
                (apply render-stage! (r/dom-node state) :gameboard (:rum/args state))
                state)

   :will-update (fn [state]
                  (apply render-stage! (r/dom-node state) :gameboard (:rum/args state))
                  state)

   :will-unmount (fn [state]
                   (impi/unmount :gameboard)
                   state)})

(r/defc gameboard < impi
  [app-state-atom app-state]
  [:div])

(r/defc root < r/reactive
  [state]
  (gameboard state (r/react state)))

(defonce state
  (atom {:timestamp 0
         :objects   {}
         :drag      {:x 0
                     :y 0
                     :scale-x 1
                     :scale-y 1}}))

(defn zoom
  [old-pos old-scale s x y]
  (let [s              (if (> s 0) 1.1 0.9)
        world-pos      [(/ (- x (old-pos 0)) (old-scale 0))
                        (/ (- y (old-pos 1)) (old-scale 1))]
        new-scale      [(* s (old-scale 0))
                        (* s (old-scale 1))]
        new-screen-pos [(+ (old-pos 0) (* (world-pos 0) (new-scale 0)))
                        (+ (old-pos 1) (* (world-pos 1) (new-scale 1)))]

        new-stage-pos  [(- (old-pos 0) (- (new-screen-pos 0) x))
                        (- (old-pos 1) (- (new-screen-pos 1) y))]]
    [new-stage-pos new-scale]))

(defn listen!
  []
  (fn [^js/WheelEvent e]
    (.preventDefault e)

    (let [[new-stage-pos new-scale] (zoom [(get (:drag @state) :x 0)
                                           (get (:drag @state) :y 0)]
                                          [(get (:drag @state) :scale-x 1)
                                           (get (:drag @state) :scale-y 1)]
                                          (- (.. e -deltaY)) (.. e -offsetX) (.. e -offsetY))]
      (swap! state update :drag (fn [drag]
                                  (assoc drag
                                         :x (new-stage-pos 0)
                                         :y (new-stage-pos 1)
                                         :scale-x (new-scale 0)
                                         :scale-y (new-scale 1)))))))

(defn ^:expose main
  []
  (let [size (dom/getViewportSize)
        w (.-width size)
        h (.-height size)]

    (swap! state assoc :width w :height h)

    (.addEventListener (dom/getElement "app") "mousewheel" (listen!))

    (r/mount (root state)
             (dom/getElement "app"))))
