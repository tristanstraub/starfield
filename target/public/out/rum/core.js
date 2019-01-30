// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__4328 = cljs.core.seq.call(null,props);
var chunk__4330 = null;
var count__4331 = (0);
var i__4332 = (0);
while(true){
if((i__4332 < count__4331)){
var vec__4334 = cljs.core._nth.call(null,chunk__4330,i__4332);
var k = cljs.core.nth.call(null,vec__4334,(0),null);
var v = cljs.core.nth.call(null,vec__4334,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__4340 = seq__4328;
var G__4341 = chunk__4330;
var G__4342 = count__4331;
var G__4343 = (i__4332 + (1));
seq__4328 = G__4340;
chunk__4330 = G__4341;
count__4331 = G__4342;
i__4332 = G__4343;
continue;
} else {
var G__4344 = seq__4328;
var G__4345 = chunk__4330;
var G__4346 = count__4331;
var G__4347 = (i__4332 + (1));
seq__4328 = G__4344;
chunk__4330 = G__4345;
count__4331 = G__4346;
i__4332 = G__4347;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__4328);
if(temp__5457__auto__){
var seq__4328__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4328__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4328__$1);
var G__4348 = cljs.core.chunk_rest.call(null,seq__4328__$1);
var G__4349 = c__4319__auto__;
var G__4350 = cljs.core.count.call(null,c__4319__auto__);
var G__4351 = (0);
seq__4328 = G__4348;
chunk__4330 = G__4349;
count__4331 = G__4350;
i__4332 = G__4351;
continue;
} else {
var vec__4337 = cljs.core.first.call(null,seq__4328__$1);
var k = cljs.core.nth.call(null,vec__4337,(0),null);
var v = cljs.core.nth.call(null,vec__4337,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__4352 = cljs.core.next.call(null,seq__4328__$1);
var G__4353 = null;
var G__4354 = (0);
var G__4355 = (0);
seq__4328 = G__4352;
chunk__4330 = G__4353;
count__4331 = G__4354;
i__4332 = G__4355;
continue;
} else {
var G__4356 = cljs.core.next.call(null,seq__4328__$1);
var G__4357 = null;
var G__4358 = (0);
var G__4359 = (0);
seq__4328 = G__4356;
chunk__4330 = G__4357;
count__4331 = G__4358;
i__4332 = G__4359;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__4361_SHARP_,p2__4360_SHARP_){
return p2__4360_SHARP_.call(null,p1__4361_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4363_SHARP_,p2__4362_SHARP_){
return p2__4362_SHARP_.call(null,old_state,p1__4363_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3922__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4364_SHARP_){
return p1__4364_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__4366 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__4366,(0),null);
var next_state = cljs.core.nth.call(null,vec__4366,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4365_SHARP_){
return p1__4365_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__4369__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__4369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4370__i = 0, G__4370__a = new Array(arguments.length -  0);
while (G__4370__i < G__4370__a.length) {G__4370__a[G__4370__i] = arguments[G__4370__i + 0]; ++G__4370__i;}
  args = new cljs.core.IndexedSeq(G__4370__a,0,null);
} 
return G__4369__delegate.call(this,args);};
G__4369.cljs$lang$maxFixedArity = 0;
G__4369.cljs$lang$applyTo = (function (arglist__4371){
var args = cljs.core.seq(arglist__4371);
return G__4369__delegate(args);
});
G__4369.cljs$core$IFn$_invoke$arity$variadic = G__4369__delegate;
return G__4369;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__4372__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__4372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4373__i = 0, G__4373__a = new Array(arguments.length -  0);
while (G__4373__i < G__4373__a.length) {G__4373__a[G__4373__i] = arguments[G__4373__i + 0]; ++G__4373__i;}
  args = new cljs.core.IndexedSeq(G__4373__a,0,null);
} 
return G__4372__delegate.call(this,args);};
G__4372.cljs$lang$maxFixedArity = 0;
G__4372.cljs$lang$applyTo = (function (arglist__4374){
var args = cljs.core.seq(arglist__4374);
return G__4372__delegate(args);
});
G__4372.cljs$core$IFn$_invoke$arity$variadic = G__4372__delegate;
return G__4372;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__4375__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__4375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4376__i = 0, G__4376__a = new Array(arguments.length -  0);
while (G__4376__i < G__4376__a.length) {G__4376__a[G__4376__i] = arguments[G__4376__i + 0]; ++G__4376__i;}
  args = new cljs.core.IndexedSeq(G__4376__a,0,null);
} 
return G__4375__delegate.call(this,args);};
G__4375.cljs$lang$maxFixedArity = 0;
G__4375.cljs$lang$applyTo = (function (arglist__4377){
var args = cljs.core.seq(arglist__4377);
return G__4375__delegate(args);
});
G__4375.cljs$core$IFn$_invoke$arity$variadic = G__4375__delegate;
return G__4375;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3922__auto__ = (function (){var and__3911__auto__ = typeof window !== 'undefined';
if(and__3911__auto__){
var or__3922__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__){
return (function (p1__4378_SHARP_){
return setTimeout(p1__4378_SHARP_,(16));
});
;})(or__3922__auto__))
}
})();
rum.core.batch = (function (){var or__3922__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return ((function (or__3922__auto____$1,or__3922__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3922__auto____$1,or__3922__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__4379 = cljs.core.seq.call(null,queue);
var chunk__4381 = null;
var count__4382 = (0);
var i__4383 = (0);
while(true){
if((i__4383 < count__4382)){
var comp = cljs.core._nth.call(null,chunk__4381,i__4383);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__4385 = seq__4379;
var G__4386 = chunk__4381;
var G__4387 = count__4382;
var G__4388 = (i__4383 + (1));
seq__4379 = G__4385;
chunk__4381 = G__4386;
count__4382 = G__4387;
i__4383 = G__4388;
continue;
} else {
var G__4389 = seq__4379;
var G__4390 = chunk__4381;
var G__4391 = count__4382;
var G__4392 = (i__4383 + (1));
seq__4379 = G__4389;
chunk__4381 = G__4390;
count__4382 = G__4391;
i__4383 = G__4392;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__4379);
if(temp__5457__auto__){
var seq__4379__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4379__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4379__$1);
var G__4393 = cljs.core.chunk_rest.call(null,seq__4379__$1);
var G__4394 = c__4319__auto__;
var G__4395 = cljs.core.count.call(null,c__4319__auto__);
var G__4396 = (0);
seq__4379 = G__4393;
chunk__4381 = G__4394;
count__4382 = G__4395;
i__4383 = G__4396;
continue;
} else {
var comp = cljs.core.first.call(null,seq__4379__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__4397 = cljs.core.next.call(null,seq__4379__$1);
var G__4398 = null;
var G__4399 = (0);
var G__4400 = (0);
seq__4379 = G__4397;
chunk__4381 = G__4398;
count__4382 = G__4399;
i__4383 = G__4400;
continue;
} else {
var G__4401 = cljs.core.next.call(null,seq__4379__$1);
var G__4402 = null;
var G__4403 = (0);
var G__4404 = (0);
seq__4379 = G__4401;
chunk__4381 = G__4402;
count__4382 = G__4403;
i__4383 = G__4404;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__4406 = arguments.length;
switch (G__4406) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_4408 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__4409 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__4409,(0),null);
var next_state = cljs.core.nth.call(null,vec__4409,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__4412_4424 = cljs.core.seq.call(null,old_reactions);
var chunk__4413_4425 = null;
var count__4414_4426 = (0);
var i__4415_4427 = (0);
while(true){
if((i__4415_4427 < count__4414_4426)){
var ref_4428 = cljs.core._nth.call(null,chunk__4413_4425,i__4415_4427);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_4428)){
} else {
cljs.core.remove_watch.call(null,ref_4428,key);
}


var G__4429 = seq__4412_4424;
var G__4430 = chunk__4413_4425;
var G__4431 = count__4414_4426;
var G__4432 = (i__4415_4427 + (1));
seq__4412_4424 = G__4429;
chunk__4413_4425 = G__4430;
count__4414_4426 = G__4431;
i__4415_4427 = G__4432;
continue;
} else {
var temp__5457__auto___4433 = cljs.core.seq.call(null,seq__4412_4424);
if(temp__5457__auto___4433){
var seq__4412_4434__$1 = temp__5457__auto___4433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4412_4434__$1)){
var c__4319__auto___4435 = cljs.core.chunk_first.call(null,seq__4412_4434__$1);
var G__4436 = cljs.core.chunk_rest.call(null,seq__4412_4434__$1);
var G__4437 = c__4319__auto___4435;
var G__4438 = cljs.core.count.call(null,c__4319__auto___4435);
var G__4439 = (0);
seq__4412_4424 = G__4436;
chunk__4413_4425 = G__4437;
count__4414_4426 = G__4438;
i__4415_4427 = G__4439;
continue;
} else {
var ref_4440 = cljs.core.first.call(null,seq__4412_4434__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_4440)){
} else {
cljs.core.remove_watch.call(null,ref_4440,key);
}


var G__4441 = cljs.core.next.call(null,seq__4412_4434__$1);
var G__4442 = null;
var G__4443 = (0);
var G__4444 = (0);
seq__4412_4424 = G__4441;
chunk__4413_4425 = G__4442;
count__4414_4426 = G__4443;
i__4415_4427 = G__4444;
continue;
}
} else {
}
}
break;
}

var seq__4416_4445 = cljs.core.seq.call(null,new_reactions);
var chunk__4417_4446 = null;
var count__4418_4447 = (0);
var i__4419_4448 = (0);
while(true){
if((i__4419_4448 < count__4418_4447)){
var ref_4449 = cljs.core._nth.call(null,chunk__4417_4446,i__4419_4448);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_4449)){
} else {
cljs.core.add_watch.call(null,ref_4449,key,((function (seq__4416_4445,chunk__4417_4446,count__4418_4447,i__4419_4448,ref_4449,comp,old_reactions,vec__4409,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4408){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__4416_4445,chunk__4417_4446,count__4418_4447,i__4419_4448,ref_4449,comp,old_reactions,vec__4409,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4408))
);
}


var G__4450 = seq__4416_4445;
var G__4451 = chunk__4417_4446;
var G__4452 = count__4418_4447;
var G__4453 = (i__4419_4448 + (1));
seq__4416_4445 = G__4450;
chunk__4417_4446 = G__4451;
count__4418_4447 = G__4452;
i__4419_4448 = G__4453;
continue;
} else {
var temp__5457__auto___4454 = cljs.core.seq.call(null,seq__4416_4445);
if(temp__5457__auto___4454){
var seq__4416_4455__$1 = temp__5457__auto___4454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4416_4455__$1)){
var c__4319__auto___4456 = cljs.core.chunk_first.call(null,seq__4416_4455__$1);
var G__4457 = cljs.core.chunk_rest.call(null,seq__4416_4455__$1);
var G__4458 = c__4319__auto___4456;
var G__4459 = cljs.core.count.call(null,c__4319__auto___4456);
var G__4460 = (0);
seq__4416_4445 = G__4457;
chunk__4417_4446 = G__4458;
count__4418_4447 = G__4459;
i__4419_4448 = G__4460;
continue;
} else {
var ref_4461 = cljs.core.first.call(null,seq__4416_4455__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_4461)){
} else {
cljs.core.add_watch.call(null,ref_4461,key,((function (seq__4416_4445,chunk__4417_4446,count__4418_4447,i__4419_4448,ref_4461,seq__4416_4455__$1,temp__5457__auto___4454,comp,old_reactions,vec__4409,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4408){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__4416_4445,chunk__4417_4446,count__4418_4447,i__4419_4448,ref_4461,seq__4416_4455__$1,temp__5457__auto___4454,comp,old_reactions,vec__4409,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4408))
);
}


var G__4462 = cljs.core.next.call(null,seq__4416_4455__$1);
var G__4463 = null;
var G__4464 = (0);
var G__4465 = (0);
seq__4416_4445 = G__4462;
chunk__4417_4446 = G__4463;
count__4418_4447 = G__4464;
i__4419_4448 = G__4465;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_4408;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_4466 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__4420_4467 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__4421_4468 = null;
var count__4422_4469 = (0);
var i__4423_4470 = (0);
while(true){
if((i__4423_4470 < count__4422_4469)){
var ref_4471 = cljs.core._nth.call(null,chunk__4421_4468,i__4423_4470);
cljs.core.remove_watch.call(null,ref_4471,key_4466);


var G__4472 = seq__4420_4467;
var G__4473 = chunk__4421_4468;
var G__4474 = count__4422_4469;
var G__4475 = (i__4423_4470 + (1));
seq__4420_4467 = G__4472;
chunk__4421_4468 = G__4473;
count__4422_4469 = G__4474;
i__4423_4470 = G__4475;
continue;
} else {
var temp__5457__auto___4476 = cljs.core.seq.call(null,seq__4420_4467);
if(temp__5457__auto___4476){
var seq__4420_4477__$1 = temp__5457__auto___4476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4420_4477__$1)){
var c__4319__auto___4478 = cljs.core.chunk_first.call(null,seq__4420_4477__$1);
var G__4479 = cljs.core.chunk_rest.call(null,seq__4420_4477__$1);
var G__4480 = c__4319__auto___4478;
var G__4481 = cljs.core.count.call(null,c__4319__auto___4478);
var G__4482 = (0);
seq__4420_4467 = G__4479;
chunk__4421_4468 = G__4480;
count__4422_4469 = G__4481;
i__4423_4470 = G__4482;
continue;
} else {
var ref_4483 = cljs.core.first.call(null,seq__4420_4477__$1);
cljs.core.remove_watch.call(null,ref_4483,key_4466);


var G__4484 = cljs.core.next.call(null,seq__4420_4477__$1);
var G__4485 = null;
var G__4486 = (0);
var G__4487 = (0);
seq__4420_4467 = G__4484;
chunk__4421_4468 = G__4485;
count__4422_4469 = G__4486;
i__4423_4470 = G__4487;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4494 = arguments.length;
var i__4500__auto___4495 = (0);
while(true){
if((i__4500__auto___4495 < len__4499__auto___4494)){
args__4502__auto__.push((arguments[i__4500__auto___4495]));

var G__4496 = (i__4500__auto___4495 + (1));
i__4500__auto___4495 = G__4496;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__4491){
var map__4492 = p__4491;
var map__4492__$1 = ((((!((map__4492 == null)))?(((((map__4492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4492):map__4492);
var options = map__4492__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq4488){
var G__4489 = cljs.core.first.call(null,seq4488);
var seq4488__$1 = cljs.core.next.call(null,seq4488);
var G__4490 = cljs.core.first.call(null,seq4488__$1);
var seq4488__$2 = cljs.core.next.call(null,seq4488__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4489,G__4490,seq4488__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4500 = arguments.length;
var i__4500__auto___4501 = (0);
while(true){
if((i__4500__auto___4501 < len__4499__auto___4500)){
args__4502__auto__.push((arguments[i__4500__auto___4501]));

var G__4502 = (i__4500__auto___4501 + (1));
i__4500__auto___4501 = G__4502;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq4497){
var G__4498 = cljs.core.first.call(null,seq4497);
var seq4497__$1 = cljs.core.next.call(null,seq4497);
var G__4499 = cljs.core.first.call(null,seq4497__$1);
var seq4497__$2 = cljs.core.next.call(null,seq4497__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4498,G__4499,seq4497__$2);
});


//# sourceMappingURL=core.js.map
