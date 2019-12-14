// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.core');
goog.require('cljs.core');
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
var seq__14150 = cljs.core.seq.call(null,props);
var chunk__14152 = null;
var count__14153 = (0);
var i__14154 = (0);
while(true){
if((i__14154 < count__14153)){
var vec__14156 = cljs.core._nth.call(null,chunk__14152,i__14154);
var k = cljs.core.nth.call(null,vec__14156,(0),null);
var v = cljs.core.nth.call(null,vec__14156,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__14162 = seq__14150;
var G__14163 = chunk__14152;
var G__14164 = count__14153;
var G__14165 = (i__14154 + (1));
seq__14150 = G__14162;
chunk__14152 = G__14163;
count__14153 = G__14164;
i__14154 = G__14165;
continue;
} else {
var G__14166 = seq__14150;
var G__14167 = chunk__14152;
var G__14168 = count__14153;
var G__14169 = (i__14154 + (1));
seq__14150 = G__14166;
chunk__14152 = G__14167;
count__14153 = G__14168;
i__14154 = G__14169;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14150);
if(temp__5457__auto__){
var seq__14150__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14150__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14150__$1);
var G__14170 = cljs.core.chunk_rest.call(null,seq__14150__$1);
var G__14171 = c__4319__auto__;
var G__14172 = cljs.core.count.call(null,c__4319__auto__);
var G__14173 = (0);
seq__14150 = G__14170;
chunk__14152 = G__14171;
count__14153 = G__14172;
i__14154 = G__14173;
continue;
} else {
var vec__14159 = cljs.core.first.call(null,seq__14150__$1);
var k = cljs.core.nth.call(null,vec__14159,(0),null);
var v = cljs.core.nth.call(null,vec__14159,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__14174 = cljs.core.next.call(null,seq__14150__$1);
var G__14175 = null;
var G__14176 = (0);
var G__14177 = (0);
seq__14150 = G__14174;
chunk__14152 = G__14175;
count__14153 = G__14176;
i__14154 = G__14177;
continue;
} else {
var G__14178 = cljs.core.next.call(null,seq__14150__$1);
var G__14179 = null;
var G__14180 = (0);
var G__14181 = (0);
seq__14150 = G__14178;
chunk__14152 = G__14179;
count__14153 = G__14180;
i__14154 = G__14181;
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
return (function (p1__14183_SHARP_,p2__14182_SHARP_){
return p2__14182_SHARP_.call(null,p1__14183_SHARP_);
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
return (function (p1__14185_SHARP_,p2__14184_SHARP_){
return p2__14184_SHARP_.call(null,old_state,p1__14185_SHARP_);
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
return (function (p1__14186_SHARP_){
return p1__14186_SHARP_.call(null,old_state,new_state);
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
var vec__14188 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__14188,(0),null);
var next_state = cljs.core.nth.call(null,vec__14188,(1),null);
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
return (function (p1__14187_SHARP_){
return p1__14187_SHARP_.call(null,state);
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
var G__14191__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__14191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14192__i = 0, G__14192__a = new Array(arguments.length -  0);
while (G__14192__i < G__14192__a.length) {G__14192__a[G__14192__i] = arguments[G__14192__i + 0]; ++G__14192__i;}
  args = new cljs.core.IndexedSeq(G__14192__a,0,null);
} 
return G__14191__delegate.call(this,args);};
G__14191.cljs$lang$maxFixedArity = 0;
G__14191.cljs$lang$applyTo = (function (arglist__14193){
var args = cljs.core.seq(arglist__14193);
return G__14191__delegate(args);
});
G__14191.cljs$core$IFn$_invoke$arity$variadic = G__14191__delegate;
return G__14191;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14194__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__14194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14195__i = 0, G__14195__a = new Array(arguments.length -  0);
while (G__14195__i < G__14195__a.length) {G__14195__a[G__14195__i] = arguments[G__14195__i + 0]; ++G__14195__i;}
  args = new cljs.core.IndexedSeq(G__14195__a,0,null);
} 
return G__14194__delegate.call(this,args);};
G__14194.cljs$lang$maxFixedArity = 0;
G__14194.cljs$lang$applyTo = (function (arglist__14196){
var args = cljs.core.seq(arglist__14196);
return G__14194__delegate(args);
});
G__14194.cljs$core$IFn$_invoke$arity$variadic = G__14194__delegate;
return G__14194;
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
var G__14197__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__14197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14198__i = 0, G__14198__a = new Array(arguments.length -  0);
while (G__14198__i < G__14198__a.length) {G__14198__a[G__14198__i] = arguments[G__14198__i + 0]; ++G__14198__i;}
  args = new cljs.core.IndexedSeq(G__14198__a,0,null);
} 
return G__14197__delegate.call(this,args);};
G__14197.cljs$lang$maxFixedArity = 0;
G__14197.cljs$lang$applyTo = (function (arglist__14199){
var args = cljs.core.seq(arglist__14199);
return G__14197__delegate(args);
});
G__14197.cljs$core$IFn$_invoke$arity$variadic = G__14197__delegate;
return G__14197;
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
return (function (p1__14200_SHARP_){
return setTimeout(p1__14200_SHARP_,(16));
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
var seq__14201 = cljs.core.seq.call(null,queue);
var chunk__14203 = null;
var count__14204 = (0);
var i__14205 = (0);
while(true){
if((i__14205 < count__14204)){
var comp = cljs.core._nth.call(null,chunk__14203,i__14205);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__14207 = seq__14201;
var G__14208 = chunk__14203;
var G__14209 = count__14204;
var G__14210 = (i__14205 + (1));
seq__14201 = G__14207;
chunk__14203 = G__14208;
count__14204 = G__14209;
i__14205 = G__14210;
continue;
} else {
var G__14211 = seq__14201;
var G__14212 = chunk__14203;
var G__14213 = count__14204;
var G__14214 = (i__14205 + (1));
seq__14201 = G__14211;
chunk__14203 = G__14212;
count__14204 = G__14213;
i__14205 = G__14214;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14201);
if(temp__5457__auto__){
var seq__14201__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14201__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14201__$1);
var G__14215 = cljs.core.chunk_rest.call(null,seq__14201__$1);
var G__14216 = c__4319__auto__;
var G__14217 = cljs.core.count.call(null,c__4319__auto__);
var G__14218 = (0);
seq__14201 = G__14215;
chunk__14203 = G__14216;
count__14204 = G__14217;
i__14205 = G__14218;
continue;
} else {
var comp = cljs.core.first.call(null,seq__14201__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__14219 = cljs.core.next.call(null,seq__14201__$1);
var G__14220 = null;
var G__14221 = (0);
var G__14222 = (0);
seq__14201 = G__14219;
chunk__14203 = G__14220;
count__14204 = G__14221;
i__14205 = G__14222;
continue;
} else {
var G__14223 = cljs.core.next.call(null,seq__14201__$1);
var G__14224 = null;
var G__14225 = (0);
var G__14226 = (0);
seq__14201 = G__14223;
chunk__14203 = G__14224;
count__14204 = G__14225;
i__14205 = G__14226;
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
var G__14228 = arguments.length;
switch (G__14228) {
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
var _STAR_reactions_STAR_14230 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14231 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__14231,(0),null);
var next_state = cljs.core.nth.call(null,vec__14231,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__14234_14246 = cljs.core.seq.call(null,old_reactions);
var chunk__14235_14247 = null;
var count__14236_14248 = (0);
var i__14237_14249 = (0);
while(true){
if((i__14237_14249 < count__14236_14248)){
var ref_14250 = cljs.core._nth.call(null,chunk__14235_14247,i__14237_14249);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_14250)){
} else {
cljs.core.remove_watch.call(null,ref_14250,key);
}


var G__14251 = seq__14234_14246;
var G__14252 = chunk__14235_14247;
var G__14253 = count__14236_14248;
var G__14254 = (i__14237_14249 + (1));
seq__14234_14246 = G__14251;
chunk__14235_14247 = G__14252;
count__14236_14248 = G__14253;
i__14237_14249 = G__14254;
continue;
} else {
var temp__5457__auto___14255 = cljs.core.seq.call(null,seq__14234_14246);
if(temp__5457__auto___14255){
var seq__14234_14256__$1 = temp__5457__auto___14255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14234_14256__$1)){
var c__4319__auto___14257 = cljs.core.chunk_first.call(null,seq__14234_14256__$1);
var G__14258 = cljs.core.chunk_rest.call(null,seq__14234_14256__$1);
var G__14259 = c__4319__auto___14257;
var G__14260 = cljs.core.count.call(null,c__4319__auto___14257);
var G__14261 = (0);
seq__14234_14246 = G__14258;
chunk__14235_14247 = G__14259;
count__14236_14248 = G__14260;
i__14237_14249 = G__14261;
continue;
} else {
var ref_14262 = cljs.core.first.call(null,seq__14234_14256__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_14262)){
} else {
cljs.core.remove_watch.call(null,ref_14262,key);
}


var G__14263 = cljs.core.next.call(null,seq__14234_14256__$1);
var G__14264 = null;
var G__14265 = (0);
var G__14266 = (0);
seq__14234_14246 = G__14263;
chunk__14235_14247 = G__14264;
count__14236_14248 = G__14265;
i__14237_14249 = G__14266;
continue;
}
} else {
}
}
break;
}

var seq__14238_14267 = cljs.core.seq.call(null,new_reactions);
var chunk__14239_14268 = null;
var count__14240_14269 = (0);
var i__14241_14270 = (0);
while(true){
if((i__14241_14270 < count__14240_14269)){
var ref_14271 = cljs.core._nth.call(null,chunk__14239_14268,i__14241_14270);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_14271)){
} else {
cljs.core.add_watch.call(null,ref_14271,key,((function (seq__14238_14267,chunk__14239_14268,count__14240_14269,i__14241_14270,ref_14271,comp,old_reactions,vec__14231,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14230){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14238_14267,chunk__14239_14268,count__14240_14269,i__14241_14270,ref_14271,comp,old_reactions,vec__14231,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14230))
);
}


var G__14272 = seq__14238_14267;
var G__14273 = chunk__14239_14268;
var G__14274 = count__14240_14269;
var G__14275 = (i__14241_14270 + (1));
seq__14238_14267 = G__14272;
chunk__14239_14268 = G__14273;
count__14240_14269 = G__14274;
i__14241_14270 = G__14275;
continue;
} else {
var temp__5457__auto___14276 = cljs.core.seq.call(null,seq__14238_14267);
if(temp__5457__auto___14276){
var seq__14238_14277__$1 = temp__5457__auto___14276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14238_14277__$1)){
var c__4319__auto___14278 = cljs.core.chunk_first.call(null,seq__14238_14277__$1);
var G__14279 = cljs.core.chunk_rest.call(null,seq__14238_14277__$1);
var G__14280 = c__4319__auto___14278;
var G__14281 = cljs.core.count.call(null,c__4319__auto___14278);
var G__14282 = (0);
seq__14238_14267 = G__14279;
chunk__14239_14268 = G__14280;
count__14240_14269 = G__14281;
i__14241_14270 = G__14282;
continue;
} else {
var ref_14283 = cljs.core.first.call(null,seq__14238_14277__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_14283)){
} else {
cljs.core.add_watch.call(null,ref_14283,key,((function (seq__14238_14267,chunk__14239_14268,count__14240_14269,i__14241_14270,ref_14283,seq__14238_14277__$1,temp__5457__auto___14276,comp,old_reactions,vec__14231,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14230){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14238_14267,chunk__14239_14268,count__14240_14269,i__14241_14270,ref_14283,seq__14238_14277__$1,temp__5457__auto___14276,comp,old_reactions,vec__14231,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14230))
);
}


var G__14284 = cljs.core.next.call(null,seq__14238_14277__$1);
var G__14285 = null;
var G__14286 = (0);
var G__14287 = (0);
seq__14238_14267 = G__14284;
chunk__14239_14268 = G__14285;
count__14240_14269 = G__14286;
i__14241_14270 = G__14287;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14230;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_14288 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__14242_14289 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__14243_14290 = null;
var count__14244_14291 = (0);
var i__14245_14292 = (0);
while(true){
if((i__14245_14292 < count__14244_14291)){
var ref_14293 = cljs.core._nth.call(null,chunk__14243_14290,i__14245_14292);
cljs.core.remove_watch.call(null,ref_14293,key_14288);


var G__14294 = seq__14242_14289;
var G__14295 = chunk__14243_14290;
var G__14296 = count__14244_14291;
var G__14297 = (i__14245_14292 + (1));
seq__14242_14289 = G__14294;
chunk__14243_14290 = G__14295;
count__14244_14291 = G__14296;
i__14245_14292 = G__14297;
continue;
} else {
var temp__5457__auto___14298 = cljs.core.seq.call(null,seq__14242_14289);
if(temp__5457__auto___14298){
var seq__14242_14299__$1 = temp__5457__auto___14298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14242_14299__$1)){
var c__4319__auto___14300 = cljs.core.chunk_first.call(null,seq__14242_14299__$1);
var G__14301 = cljs.core.chunk_rest.call(null,seq__14242_14299__$1);
var G__14302 = c__4319__auto___14300;
var G__14303 = cljs.core.count.call(null,c__4319__auto___14300);
var G__14304 = (0);
seq__14242_14289 = G__14301;
chunk__14243_14290 = G__14302;
count__14244_14291 = G__14303;
i__14245_14292 = G__14304;
continue;
} else {
var ref_14305 = cljs.core.first.call(null,seq__14242_14299__$1);
cljs.core.remove_watch.call(null,ref_14305,key_14288);


var G__14306 = cljs.core.next.call(null,seq__14242_14299__$1);
var G__14307 = null;
var G__14308 = (0);
var G__14309 = (0);
seq__14242_14289 = G__14306;
chunk__14243_14290 = G__14307;
count__14244_14291 = G__14308;
i__14245_14292 = G__14309;
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
var len__4499__auto___14316 = arguments.length;
var i__4500__auto___14317 = (0);
while(true){
if((i__4500__auto___14317 < len__4499__auto___14316)){
args__4502__auto__.push((arguments[i__4500__auto___14317]));

var G__14318 = (i__4500__auto___14317 + (1));
i__4500__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14313){
var map__14314 = p__14313;
var map__14314__$1 = ((((!((map__14314 == null)))?(((((map__14314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14314):map__14314);
var options = map__14314__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq14310){
var G__14311 = cljs.core.first.call(null,seq14310);
var seq14310__$1 = cljs.core.next.call(null,seq14310);
var G__14312 = cljs.core.first.call(null,seq14310__$1);
var seq14310__$2 = cljs.core.next.call(null,seq14310__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14311,G__14312,seq14310__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14322 = arguments.length;
var i__4500__auto___14323 = (0);
while(true){
if((i__4500__auto___14323 < len__4499__auto___14322)){
args__4502__auto__.push((arguments[i__4500__auto___14323]));

var G__14324 = (i__4500__auto___14323 + (1));
i__4500__auto___14323 = G__14324;
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
rum.core.cursor.cljs$lang$applyTo = (function (seq14319){
var G__14320 = cljs.core.first.call(null,seq14319);
var seq14319__$1 = cljs.core.next.call(null,seq14319);
var G__14321 = cljs.core.first.call(null,seq14319__$1);
var seq14319__$2 = cljs.core.next.call(null,seq14319__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14320,G__14321,seq14319__$2);
});

