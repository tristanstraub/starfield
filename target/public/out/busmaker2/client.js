// Compiled by ClojureScript 1.10.238 {}
goog.provide('busmaker2.client');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('goog.dom');
goog.require('cljs.core.match');
goog.require('impi.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointerdown",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointerup",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"pointermove",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","button-mode?","pixi.object/button-mode?",1263436143),(function (object,_,___$1,button_mode_QMARK_){
return object.buttonMode = button_mode_QMARK_;
}));
if(typeof busmaker2.client.stars !== 'undefined'){
} else {
busmaker2.client.stars = (function (){var iter__4292__auto__ = (function busmaker2$client$iter__4007(s__4008){
return (new cljs.core.LazySeq(null,(function (){
var s__4008__$1 = s__4008;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4008__$1);
if(temp__5457__auto__){
var s__4008__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4008__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4008__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4010 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4009 = (0);
while(true){
if((i__4009 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__4009);
cljs.core.chunk_append.call(null,b__4010,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pixi.shape","type","pixi.shape/type",-155162647),new cljs.core.Keyword("pixi.shape.type","rectangle","pixi.shape.type/rectangle",-96727735),new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(2000)),cljs.core.rand_int.call(null,(2000))], null),new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232),(16777215),new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046),(1)], null)], null));

var G__4011 = (i__4009 + (1));
i__4009 = G__4011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4010),busmaker2$client$iter__4007.call(null,cljs.core.chunk_rest.call(null,s__4008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4010),null);
}
} else {
var i = cljs.core.first.call(null,s__4008__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pixi.shape","type","pixi.shape/type",-155162647),new cljs.core.Keyword("pixi.shape.type","rectangle","pixi.shape.type/rectangle",-96727735),new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(2000)),cljs.core.rand_int.call(null,(2000))], null),new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232),(16777215),new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046),(1)], null)], null),busmaker2$client$iter__4007.call(null,cljs.core.rest.call(null,s__4008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3000)));
})();
}
busmaker2.client.render_stage_BANG_ = (function busmaker2$client$render_stage_BANG_(el,stage_id,app_state_atom,app_state){
var vec__4012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(app_state)], null);
var w = cljs.core.nth.call(null,vec__4012,(0),null);
var h = cljs.core.nth.call(null,vec__4012,(1),null);
var map__4015 = app_state;
var map__4015__$1 = ((((!((map__4015 == null)))?(((((map__4015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4015):map__4015);
var drag = cljs.core.get.call(null,map__4015__$1,new cljs.core.Keyword(null,"drag","drag",449951290));
var stage = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),new cljs.core.Keyword("pixi.renderer","background-color","pixi.renderer/background-color",581973363),(0)], null),new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430),((function (vec__4012,w,h,map__4015,map__4015__$1,drag){
return (function (e){
var app_state__$1 = cljs.core.deref.call(null,app_state_atom);
var map__4017 = app_state__$1;
var map__4017__$1 = ((((!((map__4017 == null)))?(((((map__4017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4017):map__4017);
var drag__$1 = cljs.core.get.call(null,map__4017__$1,new cljs.core.Keyword(null,"drag","drag",449951290));
var map__4018 = drag__$1;
var map__4018__$1 = ((((!((map__4018 == null)))?(((((map__4018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4018):map__4018);
var x = cljs.core.get.call(null,map__4018__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4018__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.swap_BANG_.call(null,app_state_atom,cljs.core.update,new cljs.core.Keyword(null,"drag","drag",449951290),cljs.core.assoc,new cljs.core.Keyword(null,"mx0","mx0",1546857204),e.data.originalEvent.clientX,new cljs.core.Keyword(null,"my0","my0",-1024732305),e.data.originalEvent.clientY,new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
});})(vec__4012,w,h,map__4015,map__4015__$1,drag))
,new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217),((function (vec__4012,w,h,map__4015,map__4015__$1,drag){
return (function (e){
var app_state__$1 = cljs.core.deref.call(null,app_state_atom);
var map__4021 = app_state__$1;
var map__4021__$1 = ((((!((map__4021 == null)))?(((((map__4021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4021):map__4021);
var drag__$1 = cljs.core.get.call(null,map__4021__$1,new cljs.core.Keyword(null,"drag","drag",449951290));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(drag__$1))){
var map__4023 = drag__$1;
var map__4023__$1 = ((((!((map__4023 == null)))?(((((map__4023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4023):map__4023);
var x = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var mx0 = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"mx0","mx0",1546857204));
var my0 = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"my0","my0",-1024732305));
var x0 = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.call(null,map__4023__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dmx = (mx0 - e.data.originalEvent.clientX);
var dmy = (my0 - e.data.originalEvent.clientY);
return cljs.core.swap_BANG_.call(null,app_state_atom,cljs.core.update,new cljs.core.Keyword(null,"drag","drag",449951290),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(x0 - dmx),new cljs.core.Keyword(null,"y","y",-1757859776),(y0 - dmy));
} else {
return null;
}
});})(vec__4012,w,h,map__4015,map__4015__$1,drag))
,new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732),((function (vec__4012,w,h,map__4015,map__4015__$1,drag){
return (function (_){
var app_state__$1 = cljs.core.deref.call(null,app_state_atom);
var map__4025 = app_state__$1;
var map__4025__$1 = ((((!((map__4025 == null)))?(((((map__4025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4025):map__4025);
var drag__$1 = cljs.core.get.call(null,map__4025__$1,new cljs.core.Keyword(null,"drag","drag",449951290));
return cljs.core.swap_BANG_.call(null,app_state_atom,cljs.core.update,new cljs.core.Keyword(null,"drag","drag",449951290),cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
});})(vec__4012,w,h,map__4015,map__4015__$1,drag))
], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("impi","key","impi/key",-1519343542),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("pixi.event","pointer-up","pixi.event/pointer-up",-1050865502),new cljs.core.Keyword("pixi.object","scale","pixi.object/scale",-1402499546),new cljs.core.Keyword("impi","key","impi/key",-1519343542),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.event","pointer-move","pixi.event/pointer-move",1358073425),new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),new cljs.core.Keyword("pixi.event","pointer-down","pixi.event/pointer-down",1358967548),new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-up","pointer-up",2064730732)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1)),cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1))], null),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-move","pointer-move",-1201253217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,drag,new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null),true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer-down","pointer-down",-1200366430)], null),cljs.core.constantly.call(null,true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("impi","key","impi/key",-1519343542),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword("pixi.object.type","graphics","pixi.object.type/graphics",1364862706),new cljs.core.Keyword("pixi.graphics","shapes","pixi.graphics/shapes",1500084814),busmaker2.client.stars], null)], null)])], null)], null)], null);
return impi.core.mount.call(null,stage_id,stage,el);
});
busmaker2.client.impi = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
cljs.core.apply.call(null,busmaker2.client.render_stage_BANG_,rum.core.dom_node.call(null,state),new cljs.core.Keyword(null,"gameboard","gameboard",-861792586),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));

return state;
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
cljs.core.apply.call(null,busmaker2.client.render_stage_BANG_,rum.core.dom_node.call(null,state),new cljs.core.Keyword(null,"gameboard","gameboard",-861792586),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
impi.core.unmount.call(null,new cljs.core.Keyword(null,"gameboard","gameboard",-861792586));

return state;
})], null);
busmaker2.client.gameboard = rum.core.build_defc.call(null,(function (app_state_atom,app_state){
return React.createElement("div",null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [busmaker2.client.impi], null),"gameboard");
busmaker2.client.root = rum.core.build_defc.call(null,(function (state){
return sablono.interpreter.interpret.call(null,busmaker2.client.gameboard.call(null,state,rum.core.react.call(null,state)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"root");
if(typeof busmaker2.client.state !== 'undefined'){
} else {
busmaker2.client.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(0),new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null)], null));
}
busmaker2.client.update_object_state = (function busmaker2$client$update_object_state(state,object){
var timestamp = new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(state);
var movement = new cljs.core.Keyword("event","movement","event/movement",1823590603).cljs$core$IFn$_invoke$arity$1(object);
var dt = (timestamp - new cljs.core.Keyword("movement","timestamp","movement/timestamp",675555244).cljs$core$IFn$_invoke$arity$1(movement));
if(cljs.core.not.call(null,movement)){
return object;
} else {
if((dt < (0))){
return cljs.core.assoc.call(null,object,new cljs.core.Keyword("object","position","object/position",-887896203),new cljs.core.Keyword("movement","start","movement/start",-475926116).cljs$core$IFn$_invoke$arity$1(movement));
} else {
if((dt <= new cljs.core.Keyword("movement","duration","movement/duration",1542274299).cljs$core$IFn$_invoke$arity$1(movement))){
var delta_xu = cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.map.call(null,cljs.core._,new cljs.core.Keyword("movement","end","movement/end",-61485623).cljs$core$IFn$_invoke$arity$1(movement),new cljs.core.Keyword("movement","start","movement/start",-475926116).cljs$core$IFn$_invoke$arity$1(movement)),cljs.core.repeat.call(null,new cljs.core.Keyword("movement","duration","movement/duration",1542274299).cljs$core$IFn$_invoke$arity$1(movement)));
var delta_x = cljs.core.map.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,dt),delta_xu);
return cljs.core.update.call(null,object,new cljs.core.Keyword("object","position","object/position",-887896203),((function (delta_xu,delta_x,timestamp,movement,dt){
return (function (){
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.Keyword("movement","start","movement/start",-475926116).cljs$core$IFn$_invoke$arity$1(movement),delta_x);
});})(delta_xu,delta_x,timestamp,movement,dt))
);
} else {
return cljs.core.assoc.call(null,object,new cljs.core.Keyword("object","position","object/position",-887896203),new cljs.core.Keyword("movement","end","movement/end",-61485623).cljs$core$IFn$_invoke$arity$1(movement));

}
}
}
});
busmaker2.client.zoom = (function busmaker2$client$zoom(old_pos,old_scale,s,x,y){
var s__$1 = (((s > (0)))?1.1:0.9);
var world_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - old_pos.call(null,(0))) / old_scale.call(null,(0))),((y - old_pos.call(null,(1))) / old_scale.call(null,(1)))], null);
var new_scale = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s__$1 * old_scale.call(null,(0))),(s__$1 * old_scale.call(null,(1)))], null);
var new_screen_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(old_pos.call(null,(0)) + (world_pos.call(null,(0)) * new_scale.call(null,(0)))),(old_pos.call(null,(1)) + (world_pos.call(null,(1)) * new_scale.call(null,(1))))], null);
var new_stage_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(old_pos.call(null,(0)) - (new_screen_pos.call(null,(0)) - x)),(old_pos.call(null,(1)) - (new_screen_pos.call(null,(1)) - y))], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_stage_pos,new_scale], null);
});
busmaker2.client.main = (function busmaker2$client$main(){
var size = goog.dom.getViewportSize();
var w = size.width;
var h = size.height;
cljs.core.swap_BANG_.call(null,busmaker2.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h);

goog.dom.getElement("app").addEventListener("mousewheel",((function (size,w,h){
return (function (e){
e.preventDefault();

var vec__4029 = busmaker2.client.zoom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,busmaker2.client.state)),new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,busmaker2.client.state)),new cljs.core.Keyword(null,"y","y",-1757859776),(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,busmaker2.client.state)),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1)),cljs.core.get.call(null,new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,busmaker2.client.state)),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1))], null),(- e.deltaY),e.offsetX,e.offsetY);
var new_stage_pos = cljs.core.nth.call(null,vec__4029,(0),null);
var new_scale = cljs.core.nth.call(null,vec__4029,(1),null);
return cljs.core.swap_BANG_.call(null,busmaker2.client.state,cljs.core.update,new cljs.core.Keyword(null,"drag","drag",449951290),((function (vec__4029,new_stage_pos,new_scale,size,w,h){
return (function (drag){
return cljs.core.assoc.call(null,drag,new cljs.core.Keyword(null,"x","x",2099068185),new_stage_pos.call(null,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new_stage_pos.call(null,(1)),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new_scale.call(null,(0)),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new_scale.call(null,(1)));
});})(vec__4029,new_stage_pos,new_scale,size,w,h))
);
});})(size,w,h))
);

return rum.core.mount.call(null,busmaker2.client.root.call(null,busmaker2.client.state),goog.dom.getElement("app"));
});
cljs.core.reset_BANG_.call(null,busmaker2.client.state,cljs.core.deref.call(null,busmaker2.client.state));

//# sourceMappingURL=client.js.map
