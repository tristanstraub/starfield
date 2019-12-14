// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__12173 = arguments.length;
switch (G__12173) {
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
var map__12174 = opts;
var map__12174__$1 = ((((!((map__12174 == null)))?(((((map__12174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12174):map__12174);
var ref = cljs.core.get.call(null,map__12174__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__12174__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__12176 = cljs.core.count.call(null,refs);
switch (G__12176) {
case (1):
var vec__12177 = refs;
var a = cljs.core.nth.call(null,vec__12177,(0),null);
return ((function (vec__12177,a,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__12177,a,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12180 = refs;
var a = cljs.core.nth.call(null,vec__12180,(0),null);
var b = cljs.core.nth.call(null,vec__12180,(1),null);
return ((function (vec__12180,a,b,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__12180,a,b,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12183 = refs;
var a = cljs.core.nth.call(null,vec__12183,(0),null);
var b = cljs.core.nth.call(null,vec__12183,(1),null);
var c = cljs.core.nth.call(null,vec__12183,(2),null);
return ((function (vec__12183,a,b,c,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__12183,a,b,c,G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__12176,map__12174,map__12174__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12186 = ref;
cljs.core.reset_BANG_.call(null,G__12186,recalc.call(null));

return G__12186;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12174,map__12174__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__12174,map__12174__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12174,map__12174__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__12174,map__12174__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12187_12193 = cljs.core.seq.call(null,refs);
var chunk__12188_12194 = null;
var count__12189_12195 = (0);
var i__12190_12196 = (0);
while(true){
if((i__12190_12196 < count__12189_12195)){
var ref_12197__$1 = cljs.core._nth.call(null,chunk__12188_12194,i__12190_12196);
cljs.core.add_watch.call(null,ref_12197__$1,key,watch);


var G__12198 = seq__12187_12193;
var G__12199 = chunk__12188_12194;
var G__12200 = count__12189_12195;
var G__12201 = (i__12190_12196 + (1));
seq__12187_12193 = G__12198;
chunk__12188_12194 = G__12199;
count__12189_12195 = G__12200;
i__12190_12196 = G__12201;
continue;
} else {
var temp__5457__auto___12202 = cljs.core.seq.call(null,seq__12187_12193);
if(temp__5457__auto___12202){
var seq__12187_12203__$1 = temp__5457__auto___12202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12187_12203__$1)){
var c__4319__auto___12204 = cljs.core.chunk_first.call(null,seq__12187_12203__$1);
var G__12205 = cljs.core.chunk_rest.call(null,seq__12187_12203__$1);
var G__12206 = c__4319__auto___12204;
var G__12207 = cljs.core.count.call(null,c__4319__auto___12204);
var G__12208 = (0);
seq__12187_12193 = G__12205;
chunk__12188_12194 = G__12206;
count__12189_12195 = G__12207;
i__12190_12196 = G__12208;
continue;
} else {
var ref_12209__$1 = cljs.core.first.call(null,seq__12187_12203__$1);
cljs.core.add_watch.call(null,ref_12209__$1,key,watch);


var G__12210 = cljs.core.next.call(null,seq__12187_12203__$1);
var G__12211 = null;
var G__12212 = (0);
var G__12213 = (0);
seq__12187_12193 = G__12210;
chunk__12188_12194 = G__12211;
count__12189_12195 = G__12212;
i__12190_12196 = G__12213;
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

