// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__2002 = arguments.length;
switch (G__2002) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__2003 = opts;
var map__2003__$1 = ((((!((map__2003 == null)))?(((((map__2003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2003):map__2003);
var ref = cljs.core.get.call(null,map__2003__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__2003__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__2005 = cljs.core.count.call(null,refs);
switch (G__2005) {
case (1):
var vec__2006 = refs;
var a = cljs.core.nth.call(null,vec__2006,(0),null);
return ((function (vec__2006,a,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__2006,a,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__2009 = refs;
var a = cljs.core.nth.call(null,vec__2009,(0),null);
var b = cljs.core.nth.call(null,vec__2009,(1),null);
return ((function (vec__2009,a,b,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__2009,a,b,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__2012 = refs;
var a = cljs.core.nth.call(null,vec__2012,(0),null);
var b = cljs.core.nth.call(null,vec__2012,(1),null);
var c = cljs.core.nth.call(null,vec__2012,(2),null);
return ((function (vec__2012,a,b,c,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__2012,a,b,c,G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__2005,map__2003,map__2003__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__2015 = ref;
cljs.core.reset_BANG_.call(null,G__2015,recalc.call(null));

return G__2015;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__2003,map__2003__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__2003,map__2003__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__2003,map__2003__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__2003,map__2003__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__2016_2022 = cljs.core.seq.call(null,refs);
var chunk__2017_2023 = null;
var count__2018_2024 = (0);
var i__2019_2025 = (0);
while(true){
if((i__2019_2025 < count__2018_2024)){
var ref_2026__$1 = cljs.core._nth.call(null,chunk__2017_2023,i__2019_2025);
cljs.core.add_watch.call(null,ref_2026__$1,key,watch);


var G__2027 = seq__2016_2022;
var G__2028 = chunk__2017_2023;
var G__2029 = count__2018_2024;
var G__2030 = (i__2019_2025 + (1));
seq__2016_2022 = G__2027;
chunk__2017_2023 = G__2028;
count__2018_2024 = G__2029;
i__2019_2025 = G__2030;
continue;
} else {
var temp__5457__auto___2031 = cljs.core.seq.call(null,seq__2016_2022);
if(temp__5457__auto___2031){
var seq__2016_2032__$1 = temp__5457__auto___2031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2016_2032__$1)){
var c__4319__auto___2033 = cljs.core.chunk_first.call(null,seq__2016_2032__$1);
var G__2034 = cljs.core.chunk_rest.call(null,seq__2016_2032__$1);
var G__2035 = c__4319__auto___2033;
var G__2036 = cljs.core.count.call(null,c__4319__auto___2033);
var G__2037 = (0);
seq__2016_2022 = G__2034;
chunk__2017_2023 = G__2035;
count__2018_2024 = G__2036;
i__2019_2025 = G__2037;
continue;
} else {
var ref_2038__$1 = cljs.core.first.call(null,seq__2016_2032__$1);
cljs.core.add_watch.call(null,ref_2038__$1,key,watch);


var G__2039 = cljs.core.next.call(null,seq__2016_2032__$1);
var G__2040 = null;
var G__2041 = (0);
var G__2042 = (0);
seq__2016_2022 = G__2039;
chunk__2017_2023 = G__2040;
count__2018_2024 = G__2041;
i__2019_2025 = G__2042;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
