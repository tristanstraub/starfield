// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__11824 = arguments.length;
switch (G__11824) {
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
var map__11825 = opts;
var map__11825__$1 = ((((!((map__11825 == null)))?(((((map__11825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11825):map__11825);
var ref = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__11827 = cljs.core.count.call(null,refs);
switch (G__11827) {
case (1):
var vec__11828 = refs;
var a = cljs.core.nth.call(null,vec__11828,(0),null);
return ((function (vec__11828,a,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__11828,a,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__11831 = refs;
var a = cljs.core.nth.call(null,vec__11831,(0),null);
var b = cljs.core.nth.call(null,vec__11831,(1),null);
return ((function (vec__11831,a,b,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__11831,a,b,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__11834 = refs;
var a = cljs.core.nth.call(null,vec__11834,(0),null);
var b = cljs.core.nth.call(null,vec__11834,(1),null);
var c = cljs.core.nth.call(null,vec__11834,(2),null);
return ((function (vec__11834,a,b,c,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__11834,a,b,c,G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__11827,map__11825,map__11825__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__11837 = ref;
cljs.core.reset_BANG_.call(null,G__11837,recalc.call(null));

return G__11837;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__11825,map__11825__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__11825,map__11825__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__11825,map__11825__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__11825,map__11825__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__11838_11844 = cljs.core.seq.call(null,refs);
var chunk__11839_11845 = null;
var count__11840_11846 = (0);
var i__11841_11847 = (0);
while(true){
if((i__11841_11847 < count__11840_11846)){
var ref_11848__$1 = cljs.core._nth.call(null,chunk__11839_11845,i__11841_11847);
cljs.core.add_watch.call(null,ref_11848__$1,key,watch);


var G__11849 = seq__11838_11844;
var G__11850 = chunk__11839_11845;
var G__11851 = count__11840_11846;
var G__11852 = (i__11841_11847 + (1));
seq__11838_11844 = G__11849;
chunk__11839_11845 = G__11850;
count__11840_11846 = G__11851;
i__11841_11847 = G__11852;
continue;
} else {
var temp__5457__auto___11853 = cljs.core.seq.call(null,seq__11838_11844);
if(temp__5457__auto___11853){
var seq__11838_11854__$1 = temp__5457__auto___11853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11838_11854__$1)){
var c__4319__auto___11855 = cljs.core.chunk_first.call(null,seq__11838_11854__$1);
var G__11856 = cljs.core.chunk_rest.call(null,seq__11838_11854__$1);
var G__11857 = c__4319__auto___11855;
var G__11858 = cljs.core.count.call(null,c__4319__auto___11855);
var G__11859 = (0);
seq__11838_11844 = G__11856;
chunk__11839_11845 = G__11857;
count__11840_11846 = G__11858;
i__11841_11847 = G__11859;
continue;
} else {
var ref_11860__$1 = cljs.core.first.call(null,seq__11838_11854__$1);
cljs.core.add_watch.call(null,ref_11860__$1,key,watch);


var G__11861 = cljs.core.next.call(null,seq__11838_11854__$1);
var G__11862 = null;
var G__11863 = (0);
var G__11864 = (0);
seq__11838_11844 = G__11861;
chunk__11839_11845 = G__11862;
count__11840_11846 = G__11863;
i__11841_11847 = G__11864;
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

