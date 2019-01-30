// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3922 = arguments.length;
var i__4500__auto___3923 = (0);
while(true){
if((i__4500__auto___3923 < len__4499__auto___3922)){
args__4502__auto__.push((arguments[i__4500__auto___3923]));

var G__3924 = (i__4500__auto___3923 + (1));
i__4500__auto___3923 = G__3924;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq3919){
var G__3920 = cljs.core.first.call(null,seq3919);
var seq3919__$1 = cljs.core.next.call(null,seq3919);
var G__3921 = cljs.core.first.call(null,seq3919__$1);
var seq3919__$2 = cljs.core.next.call(null,seq3919__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3920,G__3921,seq3919__$2);
});


//# sourceMappingURL=util.js.map
