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
var G__3752__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__3749 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__3750 = cljs.core.seq.call(null,vec__3749);
var first__3751 = cljs.core.first.call(null,seq__3750);
var seq__3750__$1 = cljs.core.next.call(null,seq__3750);
var tag = first__3751;
var body = seq__3750__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__3752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3753__i = 0, G__3753__a = new Array(arguments.length -  0);
while (G__3753__i < G__3753__a.length) {G__3753__a[G__3753__i] = arguments[G__3753__i + 0]; ++G__3753__i;}
  args = new cljs.core.IndexedSeq(G__3753__a,0,null);
} 
return G__3752__delegate.call(this,args);};
G__3752.cljs$lang$maxFixedArity = 0;
G__3752.cljs$lang$applyTo = (function (arglist__3754){
var args = cljs.core.seq(arglist__3754);
return G__3752__delegate(args);
});
G__3752.cljs$core$IFn$_invoke$arity$variadic = G__3752__delegate;
return G__3752;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__3755(s__3756){
return (new cljs.core.LazySeq(null,(function (){
var s__3756__$1 = s__3756;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__3756__$1);
if(temp__5457__auto__){
var s__3756__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3756__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3756__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3758 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3757 = (0);
while(true){
if((i__3757 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__3757);
cljs.core.chunk_append.call(null,b__3758,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__3759 = (i__3757 + (1));
i__3757 = G__3759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3758),sablono$core$update_arglists_$_iter__3755.call(null,cljs.core.chunk_rest.call(null,s__3756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3758),null);
}
} else {
var args = cljs.core.first.call(null,s__3756__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__3755.call(null,cljs.core.rest.call(null,s__3756__$2)));
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
var len__4499__auto___3765 = arguments.length;
var i__4500__auto___3766 = (0);
while(true){
if((i__4500__auto___3766 < len__4499__auto___3765)){
args__4502__auto__.push((arguments[i__4500__auto___3766]));

var G__3767 = (i__4500__auto___3766 + (1));
i__4500__auto___3766 = G__3767;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__3761(s__3762){
return (new cljs.core.LazySeq(null,(function (){
var s__3762__$1 = s__3762;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__3762__$1);
if(temp__5457__auto__){
var s__3762__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3762__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3762__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3764 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3763 = (0);
while(true){
if((i__3763 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__3763);
cljs.core.chunk_append.call(null,b__3764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__3768 = (i__3763 + (1));
i__3763 = G__3768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3764),sablono$core$iter__3761.call(null,cljs.core.chunk_rest.call(null,s__3762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3764),null);
}
} else {
var style = cljs.core.first.call(null,s__3762__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__3761.call(null,cljs.core.rest.call(null,s__3762__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq3760){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3760));
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
sablono.core.link_to3769 = (function sablono$core$link_to3769(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3772 = arguments.length;
var i__4500__auto___3773 = (0);
while(true){
if((i__4500__auto___3773 < len__4499__auto___3772)){
args__4502__auto__.push((arguments[i__4500__auto___3773]));

var G__3774 = (i__4500__auto___3773 + (1));
i__4500__auto___3773 = G__3774;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to3769.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to3769.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to3769.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to3769.cljs$lang$applyTo = (function (seq3770){
var G__3771 = cljs.core.first.call(null,seq3770);
var seq3770__$1 = cljs.core.next.call(null,seq3770);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3771,seq3770__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to3769);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to3775 = (function sablono$core$mail_to3775(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3782 = arguments.length;
var i__4500__auto___3783 = (0);
while(true){
if((i__4500__auto___3783 < len__4499__auto___3782)){
args__4502__auto__.push((arguments[i__4500__auto___3783]));

var G__3784 = (i__4500__auto___3783 + (1));
i__4500__auto___3783 = G__3784;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to3775.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to3775.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__3778){
var vec__3779 = p__3778;
var content = cljs.core.nth.call(null,vec__3779,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to3775.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to3775.cljs$lang$applyTo = (function (seq3776){
var G__3777 = cljs.core.first.call(null,seq3776);
var seq3776__$1 = cljs.core.next.call(null,seq3776);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3777,seq3776__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to3775);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list3785 = (function sablono$core$unordered_list3785(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list3785_$_iter__3786(s__3787){
return (new cljs.core.LazySeq(null,(function (){
var s__3787__$1 = s__3787;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__3787__$1);
if(temp__5457__auto__){
var s__3787__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3787__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3787__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3789 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3788 = (0);
while(true){
if((i__3788 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__3788);
cljs.core.chunk_append.call(null,b__3789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__3790 = (i__3788 + (1));
i__3788 = G__3790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3789),sablono$core$unordered_list3785_$_iter__3786.call(null,cljs.core.chunk_rest.call(null,s__3787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3789),null);
}
} else {
var x = cljs.core.first.call(null,s__3787__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list3785_$_iter__3786.call(null,cljs.core.rest.call(null,s__3787__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list3785);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list3791 = (function sablono$core$ordered_list3791(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list3791_$_iter__3792(s__3793){
return (new cljs.core.LazySeq(null,(function (){
var s__3793__$1 = s__3793;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__3793__$1);
if(temp__5457__auto__){
var s__3793__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3793__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3793__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3795 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3794 = (0);
while(true){
if((i__3794 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__3794);
cljs.core.chunk_append.call(null,b__3795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__3796 = (i__3794 + (1));
i__3794 = G__3796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3795),sablono$core$ordered_list3791_$_iter__3792.call(null,cljs.core.chunk_rest.call(null,s__3793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3795),null);
}
} else {
var x = cljs.core.first.call(null,s__3793__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list3791_$_iter__3792.call(null,cljs.core.rest.call(null,s__3793__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list3791);
/**
 * Create an image element.
 */
sablono.core.image3797 = (function sablono$core$image3797(var_args){
var G__3799 = arguments.length;
switch (G__3799) {
case 1:
return sablono.core.image3797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image3797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image3797.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image3797.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image3797.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image3797);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__3801_SHARP_,p2__3802_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3801_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__3802_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__3803_SHARP_,p2__3804_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3803_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__3804_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__3806 = arguments.length;
switch (G__3806) {
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
sablono.core.color_field3808 = (function sablono$core$color_field3808(var_args){
var G__3810 = arguments.length;
switch (G__3810) {
case 1:
return sablono.core.color_field3808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field3808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field3808.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__3739__auto__);
});

sablono.core.color_field3808.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.color_field3808.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field3808);

/**
 * Creates a date input field.
 */
sablono.core.date_field3811 = (function sablono$core$date_field3811(var_args){
var G__3813 = arguments.length;
switch (G__3813) {
case 1:
return sablono.core.date_field3811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field3811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field3811.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__3739__auto__);
});

sablono.core.date_field3811.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.date_field3811.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field3811);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field3814 = (function sablono$core$datetime_field3814(var_args){
var G__3816 = arguments.length;
switch (G__3816) {
case 1:
return sablono.core.datetime_field3814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field3814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field3814.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__3739__auto__);
});

sablono.core.datetime_field3814.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.datetime_field3814.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field3814);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field3817 = (function sablono$core$datetime_local_field3817(var_args){
var G__3819 = arguments.length;
switch (G__3819) {
case 1:
return sablono.core.datetime_local_field3817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field3817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field3817.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__3739__auto__);
});

sablono.core.datetime_local_field3817.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.datetime_local_field3817.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field3817);

/**
 * Creates a email input field.
 */
sablono.core.email_field3820 = (function sablono$core$email_field3820(var_args){
var G__3822 = arguments.length;
switch (G__3822) {
case 1:
return sablono.core.email_field3820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field3820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field3820.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__3739__auto__);
});

sablono.core.email_field3820.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.email_field3820.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field3820);

/**
 * Creates a file input field.
 */
sablono.core.file_field3823 = (function sablono$core$file_field3823(var_args){
var G__3825 = arguments.length;
switch (G__3825) {
case 1:
return sablono.core.file_field3823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field3823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field3823.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__3739__auto__);
});

sablono.core.file_field3823.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.file_field3823.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field3823);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field3826 = (function sablono$core$hidden_field3826(var_args){
var G__3828 = arguments.length;
switch (G__3828) {
case 1:
return sablono.core.hidden_field3826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field3826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field3826.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__3739__auto__);
});

sablono.core.hidden_field3826.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.hidden_field3826.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field3826);

/**
 * Creates a month input field.
 */
sablono.core.month_field3829 = (function sablono$core$month_field3829(var_args){
var G__3831 = arguments.length;
switch (G__3831) {
case 1:
return sablono.core.month_field3829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field3829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field3829.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__3739__auto__);
});

sablono.core.month_field3829.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.month_field3829.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field3829);

/**
 * Creates a number input field.
 */
sablono.core.number_field3832 = (function sablono$core$number_field3832(var_args){
var G__3834 = arguments.length;
switch (G__3834) {
case 1:
return sablono.core.number_field3832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field3832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field3832.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__3739__auto__);
});

sablono.core.number_field3832.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.number_field3832.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field3832);

/**
 * Creates a password input field.
 */
sablono.core.password_field3835 = (function sablono$core$password_field3835(var_args){
var G__3837 = arguments.length;
switch (G__3837) {
case 1:
return sablono.core.password_field3835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field3835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field3835.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__3739__auto__);
});

sablono.core.password_field3835.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.password_field3835.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field3835);

/**
 * Creates a range input field.
 */
sablono.core.range_field3838 = (function sablono$core$range_field3838(var_args){
var G__3840 = arguments.length;
switch (G__3840) {
case 1:
return sablono.core.range_field3838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field3838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field3838.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__3739__auto__);
});

sablono.core.range_field3838.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.range_field3838.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field3838);

/**
 * Creates a search input field.
 */
sablono.core.search_field3841 = (function sablono$core$search_field3841(var_args){
var G__3843 = arguments.length;
switch (G__3843) {
case 1:
return sablono.core.search_field3841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field3841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field3841.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__3739__auto__);
});

sablono.core.search_field3841.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.search_field3841.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field3841);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field3844 = (function sablono$core$tel_field3844(var_args){
var G__3846 = arguments.length;
switch (G__3846) {
case 1:
return sablono.core.tel_field3844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field3844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field3844.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__3739__auto__);
});

sablono.core.tel_field3844.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.tel_field3844.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field3844);

/**
 * Creates a text input field.
 */
sablono.core.text_field3847 = (function sablono$core$text_field3847(var_args){
var G__3849 = arguments.length;
switch (G__3849) {
case 1:
return sablono.core.text_field3847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field3847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field3847.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__3739__auto__);
});

sablono.core.text_field3847.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.text_field3847.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field3847);

/**
 * Creates a time input field.
 */
sablono.core.time_field3850 = (function sablono$core$time_field3850(var_args){
var G__3852 = arguments.length;
switch (G__3852) {
case 1:
return sablono.core.time_field3850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field3850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field3850.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__3739__auto__);
});

sablono.core.time_field3850.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.time_field3850.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field3850);

/**
 * Creates a url input field.
 */
sablono.core.url_field3853 = (function sablono$core$url_field3853(var_args){
var G__3855 = arguments.length;
switch (G__3855) {
case 1:
return sablono.core.url_field3853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field3853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field3853.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__3739__auto__);
});

sablono.core.url_field3853.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.url_field3853.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field3853);

/**
 * Creates a week input field.
 */
sablono.core.week_field3856 = (function sablono$core$week_field3856(var_args){
var G__3858 = arguments.length;
switch (G__3858) {
case 1:
return sablono.core.week_field3856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field3856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field3856.cljs$core$IFn$_invoke$arity$1 = (function (name__3739__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__3739__auto__);
});

sablono.core.week_field3856.cljs$core$IFn$_invoke$arity$2 = (function (name__3739__auto__,value__3740__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__3739__auto__,value__3740__auto__);
});

sablono.core.week_field3856.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field3856);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box3876 = (function sablono$core$check_box3876(var_args){
var G__3878 = arguments.length;
switch (G__3878) {
case 1:
return sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box3876.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box3876.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box3876);
/**
 * Creates a radio button.
 */
sablono.core.radio_button3880 = (function sablono$core$radio_button3880(var_args){
var G__3882 = arguments.length;
switch (G__3882) {
case 1:
return sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button3880.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button3880.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button3880);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options3884 = (function sablono$core$select_options3884(coll){
var iter__4292__auto__ = (function sablono$core$select_options3884_$_iter__3885(s__3886){
return (new cljs.core.LazySeq(null,(function (){
var s__3886__$1 = s__3886;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__3886__$1);
if(temp__5457__auto__){
var s__3886__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3886__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__3886__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__3888 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__3887 = (0);
while(true){
if((i__3887 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__3887);
cljs.core.chunk_append.call(null,b__3888,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__3889 = x;
var text = cljs.core.nth.call(null,vec__3889,(0),null);
var val = cljs.core.nth.call(null,vec__3889,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__3889,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options3884.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__3895 = (i__3887 + (1));
i__3887 = G__3895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3888),sablono$core$select_options3884_$_iter__3885.call(null,cljs.core.chunk_rest.call(null,s__3886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3888),null);
}
} else {
var x = cljs.core.first.call(null,s__3886__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__3892 = x;
var text = cljs.core.nth.call(null,vec__3892,(0),null);
var val = cljs.core.nth.call(null,vec__3892,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__3892,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options3884.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options3884_$_iter__3885.call(null,cljs.core.rest.call(null,s__3886__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options3884);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down3896 = (function sablono$core$drop_down3896(var_args){
var G__3898 = arguments.length;
switch (G__3898) {
case 2:
return sablono.core.drop_down3896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down3896.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down3896.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down3896.call(null,name,options,null);
});

sablono.core.drop_down3896.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down3896.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down3896);
/**
 * Creates a text area element.
 */
sablono.core.text_area3900 = (function sablono$core$text_area3900(var_args){
var G__3902 = arguments.length;
switch (G__3902) {
case 1:
return sablono.core.text_area3900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area3900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area3900.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area3900.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area3900.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area3900);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label3904 = (function sablono$core$label3904(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label3904);
/**
 * Creates a submit button.
 */
sablono.core.submit_button3905 = (function sablono$core$submit_button3905(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button3905);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button3906 = (function sablono$core$reset_button3906(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button3906);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to3907 = (function sablono$core$form_to3907(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3914 = arguments.length;
var i__4500__auto___3915 = (0);
while(true){
if((i__4500__auto___3915 < len__4499__auto___3914)){
args__4502__auto__.push((arguments[i__4500__auto___3915]));

var G__3916 = (i__4500__auto___3915 + (1));
i__4500__auto___3915 = G__3916;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to3907.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to3907.cljs$core$IFn$_invoke$arity$variadic = (function (p__3910,body){
var vec__3911 = p__3910;
var method = cljs.core.nth.call(null,vec__3911,(0),null);
var action = cljs.core.nth.call(null,vec__3911,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to3907.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to3907.cljs$lang$applyTo = (function (seq3908){
var G__3909 = cljs.core.first.call(null,seq3908);
var seq3908__$1 = cljs.core.next.call(null,seq3908);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3909,seq3908__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to3907);

//# sourceMappingURL=core.js.map
