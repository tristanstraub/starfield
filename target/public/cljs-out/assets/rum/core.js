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
var seq__14900 = cljs.core.seq.call(null,props);
var chunk__14902 = null;
var count__14903 = (0);
var i__14904 = (0);
while(true){
if((i__14904 < count__14903)){
var vec__14906 = cljs.core._nth.call(null,chunk__14902,i__14904);
var k = cljs.core.nth.call(null,vec__14906,(0),null);
var v = cljs.core.nth.call(null,vec__14906,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__14912 = seq__14900;
var G__14913 = chunk__14902;
var G__14914 = count__14903;
var G__14915 = (i__14904 + (1));
seq__14900 = G__14912;
chunk__14902 = G__14913;
count__14903 = G__14914;
i__14904 = G__14915;
continue;
} else {
var G__14916 = seq__14900;
var G__14917 = chunk__14902;
var G__14918 = count__14903;
var G__14919 = (i__14904 + (1));
seq__14900 = G__14916;
chunk__14902 = G__14917;
count__14903 = G__14918;
i__14904 = G__14919;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14900);
if(temp__5457__auto__){
var seq__14900__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14900__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14900__$1);
var G__14920 = cljs.core.chunk_rest.call(null,seq__14900__$1);
var G__14921 = c__4319__auto__;
var G__14922 = cljs.core.count.call(null,c__4319__auto__);
var G__14923 = (0);
seq__14900 = G__14920;
chunk__14902 = G__14921;
count__14903 = G__14922;
i__14904 = G__14923;
continue;
} else {
var vec__14909 = cljs.core.first.call(null,seq__14900__$1);
var k = cljs.core.nth.call(null,vec__14909,(0),null);
var v = cljs.core.nth.call(null,vec__14909,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__14924 = cljs.core.next.call(null,seq__14900__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14900 = G__14924;
chunk__14902 = G__14925;
count__14903 = G__14926;
i__14904 = G__14927;
continue;
} else {
var G__14928 = cljs.core.next.call(null,seq__14900__$1);
var G__14929 = null;
var G__14930 = (0);
var G__14931 = (0);
seq__14900 = G__14928;
chunk__14902 = G__14929;
count__14903 = G__14930;
i__14904 = G__14931;
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
return (function (p1__14933_SHARP_,p2__14932_SHARP_){
return p2__14932_SHARP_.call(null,p1__14933_SHARP_);
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
return (function (p1__14935_SHARP_,p2__14934_SHARP_){
return p2__14934_SHARP_.call(null,old_state,p1__14935_SHARP_);
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
return (function (p1__14936_SHARP_){
return p1__14936_SHARP_.call(null,old_state,new_state);
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
var vec__14938 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__14938,(0),null);
var next_state = cljs.core.nth.call(null,vec__14938,(1),null);
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
return (function (p1__14937_SHARP_){
return p1__14937_SHARP_.call(null,state);
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
var G__14941__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__14941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14942__i = 0, G__14942__a = new Array(arguments.length -  0);
while (G__14942__i < G__14942__a.length) {G__14942__a[G__14942__i] = arguments[G__14942__i + 0]; ++G__14942__i;}
  args = new cljs.core.IndexedSeq(G__14942__a,0,null);
} 
return G__14941__delegate.call(this,args);};
G__14941.cljs$lang$maxFixedArity = 0;
G__14941.cljs$lang$applyTo = (function (arglist__14943){
var args = cljs.core.seq(arglist__14943);
return G__14941__delegate(args);
});
G__14941.cljs$core$IFn$_invoke$arity$variadic = G__14941__delegate;
return G__14941;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14944__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__14944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14945__i = 0, G__14945__a = new Array(arguments.length -  0);
while (G__14945__i < G__14945__a.length) {G__14945__a[G__14945__i] = arguments[G__14945__i + 0]; ++G__14945__i;}
  args = new cljs.core.IndexedSeq(G__14945__a,0,null);
} 
return G__14944__delegate.call(this,args);};
G__14944.cljs$lang$maxFixedArity = 0;
G__14944.cljs$lang$applyTo = (function (arglist__14946){
var args = cljs.core.seq(arglist__14946);
return G__14944__delegate(args);
});
G__14944.cljs$core$IFn$_invoke$arity$variadic = G__14944__delegate;
return G__14944;
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
var G__14947__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__14947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14948__i = 0, G__14948__a = new Array(arguments.length -  0);
while (G__14948__i < G__14948__a.length) {G__14948__a[G__14948__i] = arguments[G__14948__i + 0]; ++G__14948__i;}
  args = new cljs.core.IndexedSeq(G__14948__a,0,null);
} 
return G__14947__delegate.call(this,args);};
G__14947.cljs$lang$maxFixedArity = 0;
G__14947.cljs$lang$applyTo = (function (arglist__14949){
var args = cljs.core.seq(arglist__14949);
return G__14947__delegate(args);
});
G__14947.cljs$core$IFn$_invoke$arity$variadic = G__14947__delegate;
return G__14947;
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
return (function (p1__14950_SHARP_){
return setTimeout(p1__14950_SHARP_,(16));
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
var seq__14951 = cljs.core.seq.call(null,queue);
var chunk__14953 = null;
var count__14954 = (0);
var i__14955 = (0);
while(true){
if((i__14955 < count__14954)){
var comp = cljs.core._nth.call(null,chunk__14953,i__14955);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__14957 = seq__14951;
var G__14958 = chunk__14953;
var G__14959 = count__14954;
var G__14960 = (i__14955 + (1));
seq__14951 = G__14957;
chunk__14953 = G__14958;
count__14954 = G__14959;
i__14955 = G__14960;
continue;
} else {
var G__14961 = seq__14951;
var G__14962 = chunk__14953;
var G__14963 = count__14954;
var G__14964 = (i__14955 + (1));
seq__14951 = G__14961;
chunk__14953 = G__14962;
count__14954 = G__14963;
i__14955 = G__14964;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14951);
if(temp__5457__auto__){
var seq__14951__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14951__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14951__$1);
var G__14965 = cljs.core.chunk_rest.call(null,seq__14951__$1);
var G__14966 = c__4319__auto__;
var G__14967 = cljs.core.count.call(null,c__4319__auto__);
var G__14968 = (0);
seq__14951 = G__14965;
chunk__14953 = G__14966;
count__14954 = G__14967;
i__14955 = G__14968;
continue;
} else {
var comp = cljs.core.first.call(null,seq__14951__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__14969 = cljs.core.next.call(null,seq__14951__$1);
var G__14970 = null;
var G__14971 = (0);
var G__14972 = (0);
seq__14951 = G__14969;
chunk__14953 = G__14970;
count__14954 = G__14971;
i__14955 = G__14972;
continue;
} else {
var G__14973 = cljs.core.next.call(null,seq__14951__$1);
var G__14974 = null;
var G__14975 = (0);
var G__14976 = (0);
seq__14951 = G__14973;
chunk__14953 = G__14974;
count__14954 = G__14975;
i__14955 = G__14976;
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
var G__14978 = arguments.length;
switch (G__14978) {
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
var _STAR_reactions_STAR_14980 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14981 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__14981,(0),null);
var next_state = cljs.core.nth.call(null,vec__14981,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__14984_14996 = cljs.core.seq.call(null,old_reactions);
var chunk__14985_14997 = null;
var count__14986_14998 = (0);
var i__14987_14999 = (0);
while(true){
if((i__14987_14999 < count__14986_14998)){
var ref_15000 = cljs.core._nth.call(null,chunk__14985_14997,i__14987_14999);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_15000)){
} else {
cljs.core.remove_watch.call(null,ref_15000,key);
}


var G__15001 = seq__14984_14996;
var G__15002 = chunk__14985_14997;
var G__15003 = count__14986_14998;
var G__15004 = (i__14987_14999 + (1));
seq__14984_14996 = G__15001;
chunk__14985_14997 = G__15002;
count__14986_14998 = G__15003;
i__14987_14999 = G__15004;
continue;
} else {
var temp__5457__auto___15005 = cljs.core.seq.call(null,seq__14984_14996);
if(temp__5457__auto___15005){
var seq__14984_15006__$1 = temp__5457__auto___15005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14984_15006__$1)){
var c__4319__auto___15007 = cljs.core.chunk_first.call(null,seq__14984_15006__$1);
var G__15008 = cljs.core.chunk_rest.call(null,seq__14984_15006__$1);
var G__15009 = c__4319__auto___15007;
var G__15010 = cljs.core.count.call(null,c__4319__auto___15007);
var G__15011 = (0);
seq__14984_14996 = G__15008;
chunk__14985_14997 = G__15009;
count__14986_14998 = G__15010;
i__14987_14999 = G__15011;
continue;
} else {
var ref_15012 = cljs.core.first.call(null,seq__14984_15006__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_15012)){
} else {
cljs.core.remove_watch.call(null,ref_15012,key);
}


var G__15013 = cljs.core.next.call(null,seq__14984_15006__$1);
var G__15014 = null;
var G__15015 = (0);
var G__15016 = (0);
seq__14984_14996 = G__15013;
chunk__14985_14997 = G__15014;
count__14986_14998 = G__15015;
i__14987_14999 = G__15016;
continue;
}
} else {
}
}
break;
}

var seq__14988_15017 = cljs.core.seq.call(null,new_reactions);
var chunk__14989_15018 = null;
var count__14990_15019 = (0);
var i__14991_15020 = (0);
while(true){
if((i__14991_15020 < count__14990_15019)){
var ref_15021 = cljs.core._nth.call(null,chunk__14989_15018,i__14991_15020);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_15021)){
} else {
cljs.core.add_watch.call(null,ref_15021,key,((function (seq__14988_15017,chunk__14989_15018,count__14990_15019,i__14991_15020,ref_15021,comp,old_reactions,vec__14981,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14980){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14988_15017,chunk__14989_15018,count__14990_15019,i__14991_15020,ref_15021,comp,old_reactions,vec__14981,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14980))
);
}


var G__15022 = seq__14988_15017;
var G__15023 = chunk__14989_15018;
var G__15024 = count__14990_15019;
var G__15025 = (i__14991_15020 + (1));
seq__14988_15017 = G__15022;
chunk__14989_15018 = G__15023;
count__14990_15019 = G__15024;
i__14991_15020 = G__15025;
continue;
} else {
var temp__5457__auto___15026 = cljs.core.seq.call(null,seq__14988_15017);
if(temp__5457__auto___15026){
var seq__14988_15027__$1 = temp__5457__auto___15026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14988_15027__$1)){
var c__4319__auto___15028 = cljs.core.chunk_first.call(null,seq__14988_15027__$1);
var G__15029 = cljs.core.chunk_rest.call(null,seq__14988_15027__$1);
var G__15030 = c__4319__auto___15028;
var G__15031 = cljs.core.count.call(null,c__4319__auto___15028);
var G__15032 = (0);
seq__14988_15017 = G__15029;
chunk__14989_15018 = G__15030;
count__14990_15019 = G__15031;
i__14991_15020 = G__15032;
continue;
} else {
var ref_15033 = cljs.core.first.call(null,seq__14988_15027__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_15033)){
} else {
cljs.core.add_watch.call(null,ref_15033,key,((function (seq__14988_15017,chunk__14989_15018,count__14990_15019,i__14991_15020,ref_15033,seq__14988_15027__$1,temp__5457__auto___15026,comp,old_reactions,vec__14981,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14980){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__14988_15017,chunk__14989_15018,count__14990_15019,i__14991_15020,ref_15033,seq__14988_15027__$1,temp__5457__auto___15026,comp,old_reactions,vec__14981,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14980))
);
}


var G__15034 = cljs.core.next.call(null,seq__14988_15027__$1);
var G__15035 = null;
var G__15036 = (0);
var G__15037 = (0);
seq__14988_15017 = G__15034;
chunk__14989_15018 = G__15035;
count__14990_15019 = G__15036;
i__14991_15020 = G__15037;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14980;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_15038 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__14992_15039 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__14993_15040 = null;
var count__14994_15041 = (0);
var i__14995_15042 = (0);
while(true){
if((i__14995_15042 < count__14994_15041)){
var ref_15043 = cljs.core._nth.call(null,chunk__14993_15040,i__14995_15042);
cljs.core.remove_watch.call(null,ref_15043,key_15038);


var G__15044 = seq__14992_15039;
var G__15045 = chunk__14993_15040;
var G__15046 = count__14994_15041;
var G__15047 = (i__14995_15042 + (1));
seq__14992_15039 = G__15044;
chunk__14993_15040 = G__15045;
count__14994_15041 = G__15046;
i__14995_15042 = G__15047;
continue;
} else {
var temp__5457__auto___15048 = cljs.core.seq.call(null,seq__14992_15039);
if(temp__5457__auto___15048){
var seq__14992_15049__$1 = temp__5457__auto___15048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14992_15049__$1)){
var c__4319__auto___15050 = cljs.core.chunk_first.call(null,seq__14992_15049__$1);
var G__15051 = cljs.core.chunk_rest.call(null,seq__14992_15049__$1);
var G__15052 = c__4319__auto___15050;
var G__15053 = cljs.core.count.call(null,c__4319__auto___15050);
var G__15054 = (0);
seq__14992_15039 = G__15051;
chunk__14993_15040 = G__15052;
count__14994_15041 = G__15053;
i__14995_15042 = G__15054;
continue;
} else {
var ref_15055 = cljs.core.first.call(null,seq__14992_15049__$1);
cljs.core.remove_watch.call(null,ref_15055,key_15038);


var G__15056 = cljs.core.next.call(null,seq__14992_15049__$1);
var G__15057 = null;
var G__15058 = (0);
var G__15059 = (0);
seq__14992_15039 = G__15056;
chunk__14993_15040 = G__15057;
count__14994_15041 = G__15058;
i__14995_15042 = G__15059;
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
var len__4499__auto___15066 = arguments.length;
var i__4500__auto___15067 = (0);
while(true){
if((i__4500__auto___15067 < len__4499__auto___15066)){
args__4502__auto__.push((arguments[i__4500__auto___15067]));

var G__15068 = (i__4500__auto___15067 + (1));
i__4500__auto___15067 = G__15068;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__15063){
var map__15064 = p__15063;
var map__15064__$1 = ((((!((map__15064 == null)))?(((((map__15064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064):map__15064);
var options = map__15064__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq15060){
var G__15061 = cljs.core.first.call(null,seq15060);
var seq15060__$1 = cljs.core.next.call(null,seq15060);
var G__15062 = cljs.core.first.call(null,seq15060__$1);
var seq15060__$2 = cljs.core.next.call(null,seq15060__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15061,G__15062,seq15060__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___15072 = arguments.length;
var i__4500__auto___15073 = (0);
while(true){
if((i__4500__auto___15073 < len__4499__auto___15072)){
args__4502__auto__.push((arguments[i__4500__auto___15073]));

var G__15074 = (i__4500__auto___15073 + (1));
i__4500__auto___15073 = G__15074;
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
rum.core.cursor.cljs$lang$applyTo = (function (seq15069){
var G__15070 = cljs.core.first.call(null,seq15069);
var seq15069__$1 = cljs.core.next.call(null,seq15069);
var G__15071 = cljs.core.first.call(null,seq15069__$1);
var seq15069__$2 = cljs.core.next.call(null,seq15069__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15070,G__15071,seq15069__$2);
});

