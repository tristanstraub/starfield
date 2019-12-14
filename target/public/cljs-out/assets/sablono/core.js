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
var G__14139__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14136 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__14137 = cljs.core.seq.call(null,vec__14136);
var first__14138 = cljs.core.first.call(null,seq__14137);
var seq__14137__$1 = cljs.core.next.call(null,seq__14137);
var tag = first__14138;
var body = seq__14137__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14140__i = 0, G__14140__a = new Array(arguments.length -  0);
while (G__14140__i < G__14140__a.length) {G__14140__a[G__14140__i] = arguments[G__14140__i + 0]; ++G__14140__i;}
  args = new cljs.core.IndexedSeq(G__14140__a,0,null);
} 
return G__14139__delegate.call(this,args);};
G__14139.cljs$lang$maxFixedArity = 0;
G__14139.cljs$lang$applyTo = (function (arglist__14141){
var args = cljs.core.seq(arglist__14141);
return G__14139__delegate(args);
});
G__14139.cljs$core$IFn$_invoke$arity$variadic = G__14139__delegate;
return G__14139;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__14142(s__14143){
return (new cljs.core.LazySeq(null,(function (){
var s__14143__$1 = s__14143;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14143__$1);
if(temp__5457__auto__){
var s__14143__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14143__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14143__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14145 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14144 = (0);
while(true){
if((i__14144 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__14144);
cljs.core.chunk_append.call(null,b__14145,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14146 = (i__14144 + (1));
i__14144 = G__14146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14145),sablono$core$update_arglists_$_iter__14142.call(null,cljs.core.chunk_rest.call(null,s__14143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14145),null);
}
} else {
var args = cljs.core.first.call(null,s__14143__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14142.call(null,cljs.core.rest.call(null,s__14143__$2)));
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
var len__4499__auto___14152 = arguments.length;
var i__4500__auto___14153 = (0);
while(true){
if((i__4500__auto___14153 < len__4499__auto___14152)){
args__4502__auto__.push((arguments[i__4500__auto___14153]));

var G__14154 = (i__4500__auto___14153 + (1));
i__4500__auto___14153 = G__14154;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__14148(s__14149){
return (new cljs.core.LazySeq(null,(function (){
var s__14149__$1 = s__14149;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14149__$1);
if(temp__5457__auto__){
var s__14149__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14149__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14149__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14151 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14150 = (0);
while(true){
if((i__14150 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__14150);
cljs.core.chunk_append.call(null,b__14151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14155 = (i__14150 + (1));
i__14150 = G__14155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14151),sablono$core$iter__14148.call(null,cljs.core.chunk_rest.call(null,s__14149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14151),null);
}
} else {
var style = cljs.core.first.call(null,s__14149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14148.call(null,cljs.core.rest.call(null,s__14149__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq14147){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14147));
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
sablono.core.link_to14156 = (function sablono$core$link_to14156(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14159 = arguments.length;
var i__4500__auto___14160 = (0);
while(true){
if((i__4500__auto___14160 < len__4499__auto___14159)){
args__4502__auto__.push((arguments[i__4500__auto___14160]));

var G__14161 = (i__4500__auto___14160 + (1));
i__4500__auto___14160 = G__14161;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14156.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to14156.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14156.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to14156.cljs$lang$applyTo = (function (seq14157){
var G__14158 = cljs.core.first.call(null,seq14157);
var seq14157__$1 = cljs.core.next.call(null,seq14157);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14158,seq14157__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14156);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14162 = (function sablono$core$mail_to14162(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14169 = arguments.length;
var i__4500__auto___14170 = (0);
while(true){
if((i__4500__auto___14170 < len__4499__auto___14169)){
args__4502__auto__.push((arguments[i__4500__auto___14170]));

var G__14171 = (i__4500__auto___14170 + (1));
i__4500__auto___14170 = G__14171;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14162.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to14162.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14165){
var vec__14166 = p__14165;
var content = cljs.core.nth.call(null,vec__14166,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14162.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to14162.cljs$lang$applyTo = (function (seq14163){
var G__14164 = cljs.core.first.call(null,seq14163);
var seq14163__$1 = cljs.core.next.call(null,seq14163);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14164,seq14163__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14162);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14172 = (function sablono$core$unordered_list14172(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list14172_$_iter__14173(s__14174){
return (new cljs.core.LazySeq(null,(function (){
var s__14174__$1 = s__14174;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14174__$1);
if(temp__5457__auto__){
var s__14174__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14174__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14174__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14176 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14175 = (0);
while(true){
if((i__14175 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__14175);
cljs.core.chunk_append.call(null,b__14176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14177 = (i__14175 + (1));
i__14175 = G__14177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14176),sablono$core$unordered_list14172_$_iter__14173.call(null,cljs.core.chunk_rest.call(null,s__14174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14176),null);
}
} else {
var x = cljs.core.first.call(null,s__14174__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14172_$_iter__14173.call(null,cljs.core.rest.call(null,s__14174__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14172);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14178 = (function sablono$core$ordered_list14178(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list14178_$_iter__14179(s__14180){
return (new cljs.core.LazySeq(null,(function (){
var s__14180__$1 = s__14180;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14180__$1);
if(temp__5457__auto__){
var s__14180__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14180__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14180__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14182 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14181 = (0);
while(true){
if((i__14181 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__14181);
cljs.core.chunk_append.call(null,b__14182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14183 = (i__14181 + (1));
i__14181 = G__14183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14182),sablono$core$ordered_list14178_$_iter__14179.call(null,cljs.core.chunk_rest.call(null,s__14180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14182),null);
}
} else {
var x = cljs.core.first.call(null,s__14180__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14178_$_iter__14179.call(null,cljs.core.rest.call(null,s__14180__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14178);
/**
 * Create an image element.
 */
sablono.core.image14184 = (function sablono$core$image14184(var_args){
var G__14186 = arguments.length;
switch (G__14186) {
case 1:
return sablono.core.image14184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image14184.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14184.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14184.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14184);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14188_SHARP_,p2__14189_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14188_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14189_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14190_SHARP_,p2__14191_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14190_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14191_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14193 = arguments.length;
switch (G__14193) {
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
sablono.core.color_field14195 = (function sablono$core$color_field14195(var_args){
var G__14197 = arguments.length;
switch (G__14197) {
case 1:
return sablono.core.color_field14195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field14195.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13956__auto__);
});

sablono.core.color_field14195.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.color_field14195.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14195);

/**
 * Creates a date input field.
 */
sablono.core.date_field14198 = (function sablono$core$date_field14198(var_args){
var G__14200 = arguments.length;
switch (G__14200) {
case 1:
return sablono.core.date_field14198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field14198.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13956__auto__);
});

sablono.core.date_field14198.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.date_field14198.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14198);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14201 = (function sablono$core$datetime_field14201(var_args){
var G__14203 = arguments.length;
switch (G__14203) {
case 1:
return sablono.core.datetime_field14201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field14201.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13956__auto__);
});

sablono.core.datetime_field14201.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.datetime_field14201.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14201);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14204 = (function sablono$core$datetime_local_field14204(var_args){
var G__14206 = arguments.length;
switch (G__14206) {
case 1:
return sablono.core.datetime_local_field14204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field14204.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13956__auto__);
});

sablono.core.datetime_local_field14204.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.datetime_local_field14204.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14204);

/**
 * Creates a email input field.
 */
sablono.core.email_field14207 = (function sablono$core$email_field14207(var_args){
var G__14209 = arguments.length;
switch (G__14209) {
case 1:
return sablono.core.email_field14207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field14207.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13956__auto__);
});

sablono.core.email_field14207.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.email_field14207.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14207);

/**
 * Creates a file input field.
 */
sablono.core.file_field14210 = (function sablono$core$file_field14210(var_args){
var G__14212 = arguments.length;
switch (G__14212) {
case 1:
return sablono.core.file_field14210.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field14210.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13956__auto__);
});

sablono.core.file_field14210.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.file_field14210.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14210);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14213 = (function sablono$core$hidden_field14213(var_args){
var G__14215 = arguments.length;
switch (G__14215) {
case 1:
return sablono.core.hidden_field14213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field14213.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13956__auto__);
});

sablono.core.hidden_field14213.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.hidden_field14213.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14213);

/**
 * Creates a month input field.
 */
sablono.core.month_field14216 = (function sablono$core$month_field14216(var_args){
var G__14218 = arguments.length;
switch (G__14218) {
case 1:
return sablono.core.month_field14216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field14216.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13956__auto__);
});

sablono.core.month_field14216.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.month_field14216.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14216);

/**
 * Creates a number input field.
 */
sablono.core.number_field14219 = (function sablono$core$number_field14219(var_args){
var G__14221 = arguments.length;
switch (G__14221) {
case 1:
return sablono.core.number_field14219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field14219.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13956__auto__);
});

sablono.core.number_field14219.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.number_field14219.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14219);

/**
 * Creates a password input field.
 */
sablono.core.password_field14222 = (function sablono$core$password_field14222(var_args){
var G__14224 = arguments.length;
switch (G__14224) {
case 1:
return sablono.core.password_field14222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field14222.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13956__auto__);
});

sablono.core.password_field14222.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.password_field14222.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14222);

/**
 * Creates a range input field.
 */
sablono.core.range_field14225 = (function sablono$core$range_field14225(var_args){
var G__14227 = arguments.length;
switch (G__14227) {
case 1:
return sablono.core.range_field14225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field14225.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13956__auto__);
});

sablono.core.range_field14225.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.range_field14225.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14225);

/**
 * Creates a search input field.
 */
sablono.core.search_field14228 = (function sablono$core$search_field14228(var_args){
var G__14230 = arguments.length;
switch (G__14230) {
case 1:
return sablono.core.search_field14228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field14228.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13956__auto__);
});

sablono.core.search_field14228.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.search_field14228.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14228);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14231 = (function sablono$core$tel_field14231(var_args){
var G__14233 = arguments.length;
switch (G__14233) {
case 1:
return sablono.core.tel_field14231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field14231.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13956__auto__);
});

sablono.core.tel_field14231.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.tel_field14231.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14231);

/**
 * Creates a text input field.
 */
sablono.core.text_field14234 = (function sablono$core$text_field14234(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
case 1:
return sablono.core.text_field14234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field14234.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13956__auto__);
});

sablono.core.text_field14234.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.text_field14234.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14234);

/**
 * Creates a time input field.
 */
sablono.core.time_field14237 = (function sablono$core$time_field14237(var_args){
var G__14239 = arguments.length;
switch (G__14239) {
case 1:
return sablono.core.time_field14237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field14237.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13956__auto__);
});

sablono.core.time_field14237.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.time_field14237.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14237);

/**
 * Creates a url input field.
 */
sablono.core.url_field14240 = (function sablono$core$url_field14240(var_args){
var G__14242 = arguments.length;
switch (G__14242) {
case 1:
return sablono.core.url_field14240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field14240.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13956__auto__);
});

sablono.core.url_field14240.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.url_field14240.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14240);

/**
 * Creates a week input field.
 */
sablono.core.week_field14243 = (function sablono$core$week_field14243(var_args){
var G__14245 = arguments.length;
switch (G__14245) {
case 1:
return sablono.core.week_field14243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field14243.cljs$core$IFn$_invoke$arity$1 = (function (name__13956__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13956__auto__);
});

sablono.core.week_field14243.cljs$core$IFn$_invoke$arity$2 = (function (name__13956__auto__,value__13957__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13956__auto__,value__13957__auto__);
});

sablono.core.week_field14243.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14243);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14263 = (function sablono$core$check_box14263(var_args){
var G__14265 = arguments.length;
switch (G__14265) {
case 1:
return sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14263.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14263.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14263);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14267 = (function sablono$core$radio_button14267(var_args){
var G__14269 = arguments.length;
switch (G__14269) {
case 1:
return sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14267.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14267.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14267);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14271 = (function sablono$core$select_options14271(coll){
var iter__4292__auto__ = (function sablono$core$select_options14271_$_iter__14272(s__14273){
return (new cljs.core.LazySeq(null,(function (){
var s__14273__$1 = s__14273;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14273__$1);
if(temp__5457__auto__){
var s__14273__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14273__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__14273__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__14275 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__14274 = (0);
while(true){
if((i__14274 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__14274);
cljs.core.chunk_append.call(null,b__14275,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14276 = x;
var text = cljs.core.nth.call(null,vec__14276,(0),null);
var val = cljs.core.nth.call(null,vec__14276,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14276,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14271.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14282 = (i__14274 + (1));
i__14274 = G__14282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14275),sablono$core$select_options14271_$_iter__14272.call(null,cljs.core.chunk_rest.call(null,s__14273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14275),null);
}
} else {
var x = cljs.core.first.call(null,s__14273__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14279 = x;
var text = cljs.core.nth.call(null,vec__14279,(0),null);
var val = cljs.core.nth.call(null,vec__14279,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14279,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14271.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14271_$_iter__14272.call(null,cljs.core.rest.call(null,s__14273__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14271);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14283 = (function sablono$core$drop_down14283(var_args){
var G__14285 = arguments.length;
switch (G__14285) {
case 2:
return sablono.core.drop_down14283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14283.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down14283.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14283.call(null,name,options,null);
});

sablono.core.drop_down14283.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14283.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14283);
/**
 * Creates a text area element.
 */
sablono.core.text_area14287 = (function sablono$core$text_area14287(var_args){
var G__14289 = arguments.length;
switch (G__14289) {
case 1:
return sablono.core.text_area14287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area14287.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area14287.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area14287.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14287);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14291 = (function sablono$core$label14291(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14291);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14292 = (function sablono$core$submit_button14292(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14292);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14293 = (function sablono$core$reset_button14293(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14293);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14294 = (function sablono$core$form_to14294(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14301 = arguments.length;
var i__4500__auto___14302 = (0);
while(true){
if((i__4500__auto___14302 < len__4499__auto___14301)){
args__4502__auto__.push((arguments[i__4500__auto___14302]));

var G__14303 = (i__4500__auto___14302 + (1));
i__4500__auto___14302 = G__14303;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14294.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to14294.cljs$core$IFn$_invoke$arity$variadic = (function (p__14297,body){
var vec__14298 = p__14297;
var method = cljs.core.nth.call(null,vec__14298,(0),null);
var action = cljs.core.nth.call(null,vec__14298,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to14294.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to14294.cljs$lang$applyTo = (function (seq14295){
var G__14296 = cljs.core.first.call(null,seq14295);
var seq14295__$1 = cljs.core.next.call(null,seq14295);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14296,seq14295__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14294);
