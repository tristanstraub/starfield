// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13574__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__13571 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__13572 = cljs.core.seq.call(null,vec__13571);
var first__13573 = cljs.core.first.call(null,seq__13572);
var seq__13572__$1 = cljs.core.next.call(null,seq__13572);
var tag = first__13573;
var body = seq__13572__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__13574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13575__i = 0, G__13575__a = new Array(arguments.length -  0);
while (G__13575__i < G__13575__a.length) {G__13575__a[G__13575__i] = arguments[G__13575__i + 0]; ++G__13575__i;}
  args = new cljs.core.IndexedSeq(G__13575__a,0,null);
} 
return G__13574__delegate.call(this,args);};
G__13574.cljs$lang$maxFixedArity = 0;
G__13574.cljs$lang$applyTo = (function (arglist__13576){
var args = cljs.core.seq(arglist__13576);
return G__13574__delegate(args);
});
G__13574.cljs$core$IFn$_invoke$arity$variadic = G__13574__delegate;
return G__13574;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__13577(s__13578){
return (new cljs.core.LazySeq(null,(function (){
var s__13578__$1 = s__13578;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13578__$1);
if(temp__5457__auto__){
var s__13578__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13578__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13578__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13580 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13579 = (0);
while(true){
if((i__13579 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__13579);
cljs.core.chunk_append.call(null,b__13580,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13581 = (i__13579 + (1));
i__13579 = G__13581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13580),sablono$core$update_arglists_$_iter__13577.call(null,cljs.core.chunk_rest.call(null,s__13578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13580),null);
}
} else {
var args = cljs.core.first.call(null,s__13578__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__13577.call(null,cljs.core.rest.call(null,s__13578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13587 = arguments.length;
var i__4500__auto___13588 = (0);
while(true){
if((i__4500__auto___13588 < len__4499__auto___13587)){
args__4502__auto__.push((arguments[i__4500__auto___13588]));

var G__13589 = (i__4500__auto___13588 + (1));
i__4500__auto___13588 = G__13589;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__13583(s__13584){
return (new cljs.core.LazySeq(null,(function (){
var s__13584__$1 = s__13584;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13584__$1);
if(temp__5457__auto__){
var s__13584__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13584__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13584__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13586 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13585 = (0);
while(true){
if((i__13585 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__13585);
cljs.core.chunk_append.call(null,b__13586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__13590 = (i__13585 + (1));
i__13585 = G__13590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13586),sablono$core$iter__13583.call(null,cljs.core.chunk_rest.call(null,s__13584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13586),null);
}
} else {
var style = cljs.core.first.call(null,s__13584__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__13583.call(null,cljs.core.rest.call(null,s__13584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq13582){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13582));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to13591 = (function sablono$core$link_to13591(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13594 = arguments.length;
var i__4500__auto___13595 = (0);
while(true){
if((i__4500__auto___13595 < len__4499__auto___13594)){
args__4502__auto__.push((arguments[i__4500__auto___13595]));

var G__13596 = (i__4500__auto___13595 + (1));
i__4500__auto___13595 = G__13596;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13591.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to13591.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to13591.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to13591.cljs$lang$applyTo = (function (seq13592){
var G__13593 = cljs.core.first.call(null,seq13592);
var seq13592__$1 = cljs.core.next.call(null,seq13592);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13593,seq13592__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13591);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13597 = (function sablono$core$mail_to13597(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13604 = arguments.length;
var i__4500__auto___13605 = (0);
while(true){
if((i__4500__auto___13605 < len__4499__auto___13604)){
args__4502__auto__.push((arguments[i__4500__auto___13605]));

var G__13606 = (i__4500__auto___13605 + (1));
i__4500__auto___13605 = G__13606;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13597.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to13597.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13600){
var vec__13601 = p__13600;
var content = cljs.core.nth.call(null,vec__13601,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13597.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to13597.cljs$lang$applyTo = (function (seq13598){
var G__13599 = cljs.core.first.call(null,seq13598);
var seq13598__$1 = cljs.core.next.call(null,seq13598);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13599,seq13598__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13597);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13607 = (function sablono$core$unordered_list13607(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list13607_$_iter__13608(s__13609){
return (new cljs.core.LazySeq(null,(function (){
var s__13609__$1 = s__13609;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13609__$1);
if(temp__5457__auto__){
var s__13609__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13609__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13609__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13611 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13610 = (0);
while(true){
if((i__13610 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13610);
cljs.core.chunk_append.call(null,b__13611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13612 = (i__13610 + (1));
i__13610 = G__13612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13611),sablono$core$unordered_list13607_$_iter__13608.call(null,cljs.core.chunk_rest.call(null,s__13609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13611),null);
}
} else {
var x = cljs.core.first.call(null,s__13609__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list13607_$_iter__13608.call(null,cljs.core.rest.call(null,s__13609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13607);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13613 = (function sablono$core$ordered_list13613(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list13613_$_iter__13614(s__13615){
return (new cljs.core.LazySeq(null,(function (){
var s__13615__$1 = s__13615;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13615__$1);
if(temp__5457__auto__){
var s__13615__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13615__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13615__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13617 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13616 = (0);
while(true){
if((i__13616 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13616);
cljs.core.chunk_append.call(null,b__13617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13618 = (i__13616 + (1));
i__13616 = G__13618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13617),sablono$core$ordered_list13613_$_iter__13614.call(null,cljs.core.chunk_rest.call(null,s__13615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13617),null);
}
} else {
var x = cljs.core.first.call(null,s__13615__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list13613_$_iter__13614.call(null,cljs.core.rest.call(null,s__13615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13613);
/**
 * Create an image element.
 */
sablono.core.image13619 = (function sablono$core$image13619(var_args){
var G__13621 = arguments.length;
switch (G__13621) {
case 1:
return sablono.core.image13619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image13619.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image13619.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image13619.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13619);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__13623_SHARP_,p2__13624_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13623_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__13624_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__13625_SHARP_,p2__13626_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13625_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__13626_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__13628 = arguments.length;
switch (G__13628) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field13630 = (function sablono$core$color_field13630(var_args){
var G__13632 = arguments.length;
switch (G__13632) {
case 1:
return sablono.core.color_field13630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field13630.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13561__auto__);
});

sablono.core.color_field13630.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.color_field13630.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13630);

/**
 * Creates a date input field.
 */
sablono.core.date_field13633 = (function sablono$core$date_field13633(var_args){
var G__13635 = arguments.length;
switch (G__13635) {
case 1:
return sablono.core.date_field13633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field13633.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13561__auto__);
});

sablono.core.date_field13633.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.date_field13633.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13633);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13636 = (function sablono$core$datetime_field13636(var_args){
var G__13638 = arguments.length;
switch (G__13638) {
case 1:
return sablono.core.datetime_field13636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field13636.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13561__auto__);
});

sablono.core.datetime_field13636.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.datetime_field13636.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13636);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13639 = (function sablono$core$datetime_local_field13639(var_args){
var G__13641 = arguments.length;
switch (G__13641) {
case 1:
return sablono.core.datetime_local_field13639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field13639.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13561__auto__);
});

sablono.core.datetime_local_field13639.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.datetime_local_field13639.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13639);

/**
 * Creates a email input field.
 */
sablono.core.email_field13642 = (function sablono$core$email_field13642(var_args){
var G__13644 = arguments.length;
switch (G__13644) {
case 1:
return sablono.core.email_field13642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field13642.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13561__auto__);
});

sablono.core.email_field13642.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.email_field13642.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13642);

/**
 * Creates a file input field.
 */
sablono.core.file_field13645 = (function sablono$core$file_field13645(var_args){
var G__13647 = arguments.length;
switch (G__13647) {
case 1:
return sablono.core.file_field13645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field13645.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13561__auto__);
});

sablono.core.file_field13645.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.file_field13645.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13645);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13648 = (function sablono$core$hidden_field13648(var_args){
var G__13650 = arguments.length;
switch (G__13650) {
case 1:
return sablono.core.hidden_field13648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field13648.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13561__auto__);
});

sablono.core.hidden_field13648.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.hidden_field13648.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13648);

/**
 * Creates a month input field.
 */
sablono.core.month_field13651 = (function sablono$core$month_field13651(var_args){
var G__13653 = arguments.length;
switch (G__13653) {
case 1:
return sablono.core.month_field13651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field13651.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13561__auto__);
});

sablono.core.month_field13651.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.month_field13651.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13651);

/**
 * Creates a number input field.
 */
sablono.core.number_field13654 = (function sablono$core$number_field13654(var_args){
var G__13656 = arguments.length;
switch (G__13656) {
case 1:
return sablono.core.number_field13654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field13654.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13561__auto__);
});

sablono.core.number_field13654.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.number_field13654.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13654);

/**
 * Creates a password input field.
 */
sablono.core.password_field13657 = (function sablono$core$password_field13657(var_args){
var G__13659 = arguments.length;
switch (G__13659) {
case 1:
return sablono.core.password_field13657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field13657.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13561__auto__);
});

sablono.core.password_field13657.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.password_field13657.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13657);

/**
 * Creates a range input field.
 */
sablono.core.range_field13660 = (function sablono$core$range_field13660(var_args){
var G__13662 = arguments.length;
switch (G__13662) {
case 1:
return sablono.core.range_field13660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field13660.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13561__auto__);
});

sablono.core.range_field13660.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.range_field13660.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13660);

/**
 * Creates a search input field.
 */
sablono.core.search_field13663 = (function sablono$core$search_field13663(var_args){
var G__13665 = arguments.length;
switch (G__13665) {
case 1:
return sablono.core.search_field13663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field13663.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13561__auto__);
});

sablono.core.search_field13663.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.search_field13663.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13663);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13666 = (function sablono$core$tel_field13666(var_args){
var G__13668 = arguments.length;
switch (G__13668) {
case 1:
return sablono.core.tel_field13666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field13666.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13561__auto__);
});

sablono.core.tel_field13666.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.tel_field13666.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13666);

/**
 * Creates a text input field.
 */
sablono.core.text_field13669 = (function sablono$core$text_field13669(var_args){
var G__13671 = arguments.length;
switch (G__13671) {
case 1:
return sablono.core.text_field13669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field13669.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13561__auto__);
});

sablono.core.text_field13669.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.text_field13669.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13669);

/**
 * Creates a time input field.
 */
sablono.core.time_field13672 = (function sablono$core$time_field13672(var_args){
var G__13674 = arguments.length;
switch (G__13674) {
case 1:
return sablono.core.time_field13672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field13672.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13561__auto__);
});

sablono.core.time_field13672.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.time_field13672.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13672);

/**
 * Creates a url input field.
 */
sablono.core.url_field13675 = (function sablono$core$url_field13675(var_args){
var G__13677 = arguments.length;
switch (G__13677) {
case 1:
return sablono.core.url_field13675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field13675.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13561__auto__);
});

sablono.core.url_field13675.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.url_field13675.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13675);

/**
 * Creates a week input field.
 */
sablono.core.week_field13678 = (function sablono$core$week_field13678(var_args){
var G__13680 = arguments.length;
switch (G__13680) {
case 1:
return sablono.core.week_field13678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field13678.cljs$core$IFn$_invoke$arity$1 = (function (name__13561__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13561__auto__);
});

sablono.core.week_field13678.cljs$core$IFn$_invoke$arity$2 = (function (name__13561__auto__,value__13562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13561__auto__,value__13562__auto__);
});

sablono.core.week_field13678.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13678);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13698 = (function sablono$core$check_box13698(var_args){
var G__13700 = arguments.length;
switch (G__13700) {
case 1:
return sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box13698.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box13698.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13698);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13702 = (function sablono$core$radio_button13702(var_args){
var G__13704 = arguments.length;
switch (G__13704) {
case 1:
return sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button13702.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button13702.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13702);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13706 = (function sablono$core$select_options13706(coll){
var iter__4292__auto__ = (function sablono$core$select_options13706_$_iter__13707(s__13708){
return (new cljs.core.LazySeq(null,(function (){
var s__13708__$1 = s__13708;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13708__$1);
if(temp__5457__auto__){
var s__13708__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13708__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__13708__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__13710 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__13709 = (0);
while(true){
if((i__13709 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__13709);
cljs.core.chunk_append.call(null,b__13710,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13711 = x;
var text = cljs.core.nth.call(null,vec__13711,(0),null);
var val = cljs.core.nth.call(null,vec__13711,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13711,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13706.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__13717 = (i__13709 + (1));
i__13709 = G__13717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13710),sablono$core$select_options13706_$_iter__13707.call(null,cljs.core.chunk_rest.call(null,s__13708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13710),null);
}
} else {
var x = cljs.core.first.call(null,s__13708__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13714 = x;
var text = cljs.core.nth.call(null,vec__13714,(0),null);
var val = cljs.core.nth.call(null,vec__13714,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13714,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13706.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options13706_$_iter__13707.call(null,cljs.core.rest.call(null,s__13708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13706);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13718 = (function sablono$core$drop_down13718(var_args){
var G__13720 = arguments.length;
switch (G__13720) {
case 2:
return sablono.core.drop_down13718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13718.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down13718.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13718.call(null,name,options,null);
});

sablono.core.drop_down13718.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down13718.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13718);
/**
 * Creates a text area element.
 */
sablono.core.text_area13722 = (function sablono$core$text_area13722(var_args){
var G__13724 = arguments.length;
switch (G__13724) {
case 1:
return sablono.core.text_area13722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area13722.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area13722.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area13722.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13722);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13726 = (function sablono$core$label13726(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13726);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13727 = (function sablono$core$submit_button13727(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13727);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13728 = (function sablono$core$reset_button13728(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13728);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13729 = (function sablono$core$form_to13729(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13736 = arguments.length;
var i__4500__auto___13737 = (0);
while(true){
if((i__4500__auto___13737 < len__4499__auto___13736)){
args__4502__auto__.push((arguments[i__4500__auto___13737]));

var G__13738 = (i__4500__auto___13737 + (1));
i__4500__auto___13737 = G__13738;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13729.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to13729.cljs$core$IFn$_invoke$arity$variadic = (function (p__13732,body){
var vec__13733 = p__13732;
var method = cljs.core.nth.call(null,vec__13733,(0),null);
var action = cljs.core.nth.call(null,vec__13733,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to13729.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to13729.cljs$lang$applyTo = (function (seq13730){
var G__13731 = cljs.core.first.call(null,seq13730);
var seq13730__$1 = cljs.core.next.call(null,seq13730);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13731,seq13730__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13729);
