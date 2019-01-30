// Compiled by ClojureScript 1.10.238 {}
goog.provide('impi.core');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
impi.core.update_count = (function impi$core$update_count(child,f){
return child.impiCount = f.call(null,child.impiCount);
});
impi.core.replace_child = (function impi$core$replace_child(container,child,i){
var old_child = (container.children[i]);
if((child === old_child)){
return null;
} else {
(container.children[i] = child);

impi.core.update_count.call(null,old_child,cljs.core.fnil.call(null,cljs.core.dec,(1)));

impi.core.update_count.call(null,child,cljs.core.fnil.call(null,cljs.core.inc,(0)));

return old_child;
}
});
impi.core.append_child = (function impi$core$append_child(container,child){
container.children.push(child);

return impi.core.update_count.call(null,child,cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
impi.core.overwrite_children = (function impi$core$overwrite_children(container,children){
var length = container.children.length;
var i = (0);
var children__$1 = children;
var replaced = cljs.core.List.EMPTY;
while(true){
if(cljs.core.seq.call(null,children__$1)){
var child = cljs.core.first.call(null,children__$1);
if((i < length)){
var temp__5455__auto__ = impi.core.replace_child.call(null,container,child,i);
if(cljs.core.truth_(temp__5455__auto__)){
var old_child = temp__5455__auto__;
var G__22896 = (i + (1));
var G__22897 = cljs.core.rest.call(null,children__$1);
var G__22898 = cljs.core.cons.call(null,old_child,replaced);
i = G__22896;
children__$1 = G__22897;
replaced = G__22898;
continue;
} else {
var G__22899 = (i + (1));
var G__22900 = cljs.core.rest.call(null,children__$1);
var G__22901 = replaced;
i = G__22899;
children__$1 = G__22900;
replaced = G__22901;
continue;
}
} else {
impi.core.append_child.call(null,container,child);

var G__22902 = (i + (1));
var G__22903 = cljs.core.rest.call(null,children__$1);
var G__22904 = replaced;
i = G__22902;
children__$1 = G__22903;
replaced = G__22904;
continue;
}
} else {
return replaced;
}
break;
}
});
impi.core.trim_children = (function impi$core$trim_children(container,index){
var children = container.children;
if((index < children.length)){
var removed = children.slice(index);
children.splice(index);

return removed;
} else {
return null;
}
});
impi.core.set_parent = (function impi$core$set_parent(child,parent){
child.parent = parent;

return delete child["impiCount"];
});
impi.core.clear_parent = (function impi$core$clear_parent(child){
if((child.impiCount === (0))){
return impi.core.set_parent.call(null,child,null);
} else {
return null;
}
});
impi.core.replace_children = (function impi$core$replace_children(container,children){
var length = container.children.length;
var replaced = impi.core.overwrite_children.call(null,container,children);
var removed = impi.core.trim_children.call(null,container,cljs.core.count.call(null,children));
var changed_QMARK_ = ((cljs.core.seq.call(null,replaced)) || (cljs.core.not_EQ_.call(null,length,container.children.length)));
if(changed_QMARK_){
cljs.core.run_BANG_.call(null,impi.core.clear_parent,replaced);

cljs.core.run_BANG_.call(null,impi.core.clear_parent,removed);

return cljs.core.run_BANG_.call(null,((function (length,replaced,removed,changed_QMARK_){
return (function (p1__22905_SHARP_){
return impi.core.set_parent.call(null,p1__22905_SHARP_,container);
});})(length,replaced,removed,changed_QMARK_))
,container.children);
} else {
return null;
}
});
impi.core.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.replace_listener = (function impi$core$replace_listener(object,event,index,p__22907){
var vec__22908 = p__22907;
var seq__22909 = cljs.core.seq.call(null,vec__22908);
var first__22910 = cljs.core.first.call(null,seq__22909);
var seq__22909__$1 = cljs.core.next.call(null,seq__22909);
var key = first__22910;
var args = seq__22909__$1;
var listener = cljs.core.deref.call(null,impi.core.listeners).call(null,cljs.core.first.call(null,index)).call(null,key);
var G__22911 = object;
G__22911.removeAllListeners(event);

G__22911.on(event,((function (G__22911,listener,vec__22908,seq__22909,first__22910,seq__22909__$1,key,args){
return (function (p1__22906_SHARP_){
return cljs.core.apply.call(null,listener,p1__22906_SHARP_,args);
});})(G__22911,listener,vec__22908,seq__22909,first__22910,seq__22909__$1,key,args))
);

return G__22911;
});
impi.core.rectangle = (function impi$core$rectangle(p__22912){
var vec__22913 = p__22912;
var x = cljs.core.nth.call(null,vec__22913,(0),null);
var y = cljs.core.nth.call(null,vec__22913,(1),null);
var w = cljs.core.nth.call(null,vec__22913,(2),null);
var h = cljs.core.nth.call(null,vec__22913,(3),null);
return (new PIXI.Rectangle(x,y,w,h));
});
impi.core.image = (function impi$core$image(src){
var image = (new Image());
image.src = src;

return image;
});
impi.core.scale_modes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("pixi.texture.scale-mode","linear","pixi.texture.scale-mode/linear",-939970850),PIXI.SCALE_MODES.LINEAR,new cljs.core.Keyword("pixi.texture.scale-mode","nearest","pixi.texture.scale-mode/nearest",-1037981403),PIXI.SCALE_MODES.NEAREST], null);
impi.core.blend_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("pixi.object.blend-mode","normal","pixi.object.blend-mode/normal",1997923348),PIXI.BLEND_MODES.NORMAL,new cljs.core.Keyword("pixi.object.blend-mode","add","pixi.object.blend-mode/add",-408955723),PIXI.BLEND_MODES.ADD,new cljs.core.Keyword("pixi.object.blend-mode","multiply","pixi.object.blend-mode/multiply",1683173166),PIXI.BLEND_MODES.MULTIPLY,new cljs.core.Keyword("pixi.object.blend-mode","screen","pixi.object.blend-mode/screen",540967930),PIXI.BLEND_MODES.SCREEN], null);
impi.core.text_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("pixi.text.style","drop-shadow","pixi.text.style/drop-shadow",1307064448),new cljs.core.Keyword("pixi.text.style","drop-shadow-color","pixi.text.style/drop-shadow-color",-2051711584),new cljs.core.Keyword("pixi.text.style","miter-limit","pixi.text.style/miter-limit",-681315801),new cljs.core.Keyword("pixi.text.style","padding","pixi.text.style/padding",-1955752535),new cljs.core.Keyword("pixi.text.style","font-family","pixi.text.style/font-family",-205532086),new cljs.core.Keyword("pixi.text.style","line-height","pixi.text.style/line-height",704157964),new cljs.core.Keyword("pixi.text.style","font-style","pixi.text.style/font-style",-2023010932),new cljs.core.Keyword("pixi.text.style","letter-spacing","pixi.text.style/letter-spacing",-185948595),new cljs.core.Keyword("pixi.text.style","drop-shadow-blur","pixi.text.style/drop-shadow-blur",-1245832049),new cljs.core.Keyword("pixi.text.style","drop-shadow-distance","pixi.text.style/drop-shadow-distance",-249045872),new cljs.core.Keyword("pixi.text.style","line-join","pixi.text.style/line-join",-1670809456),new cljs.core.Keyword("pixi.text.style","font-variant","pixi.text.style/font-variant",1630508659),new cljs.core.Keyword("pixi.text.style","font-weight","pixi.text.style/font-weight",-1833336141),new cljs.core.Keyword("pixi.text.style","break-words","pixi.text.style/break-words",170721171),new cljs.core.Keyword("pixi.text.style","word-wrap-width","pixi.text.style/word-wrap-width",-1265598509),new cljs.core.Keyword("pixi.text.style","align","pixi.text.style/align",1566366454),new cljs.core.Keyword("pixi.text.style","stroke","pixi.text.style/stroke",1078687287),new cljs.core.Keyword("pixi.text.style","stroke-thickness","pixi.text.style/stroke-thickness",-517501383),new cljs.core.Keyword("pixi.text.style","font-size","pixi.text.style/font-size",660722554),new cljs.core.Keyword("pixi.text.style","drop-shadow-angle","pixi.text.style/drop-shadow-angle",-129673187),new cljs.core.Keyword("pixi.text.style","fill","pixi.text.style/fill",1328412765),new cljs.core.Keyword("pixi.text.style","word-wrap","pixi.text.style/word-wrap",1951683390)],["dropShadow","dropShadowSolor","miterLimit","padding","fontFamily","lineHeight","fontStyle","letterSpacing","dropShadowBlur","dropShadowDistance","lineJoin","fontVariant","fontWeight","breakWords","wordWrapWidth","align","stroke","strokeThickness","fontSize","dropShadowAngle","fill","wordWrap"]);
impi.core.base_texture_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.pending_base_textures = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
impi.core.base_texture_key = (function impi$core$base_texture_key(texture){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844).cljs$core$IFn$_invoke$arity$1(texture),new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture)], null);
});
impi.core.create_base_texture = (function impi$core$create_base_texture(texture){
var source = impi.core.image.call(null,new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844).cljs$core$IFn$_invoke$arity$1(texture));
var mode = impi.core.scale_modes.call(null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture));
return (new PIXI.BaseTexture(source,mode));
});
impi.core.get_base_texture = (function impi$core$get_base_texture(texture){
var key = impi.core.base_texture_key.call(null,texture);
var or__3922__auto__ = cljs.core.deref.call(null,impi.core.base_texture_cache).call(null,key);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var object = impi.core.create_base_texture.call(null,texture);
cljs.core.swap_BANG_.call(null,impi.core.base_texture_cache,cljs.core.assoc,key,object);

cljs.core.swap_BANG_.call(null,impi.core.pending_base_textures,cljs.core.conj,object);

object.on("loaded",((function (object,or__3922__auto__,key){
return (function (){
return cljs.core.swap_BANG_.call(null,impi.core.pending_base_textures,cljs.core.disj,object);
});})(object,or__3922__auto__,key))
);

return object;
}
});
impi.core.on_loaded_textures = (function impi$core$on_loaded_textures(f){
var seq__22916 = cljs.core.seq.call(null,cljs.core.deref.call(null,impi.core.pending_base_textures));
var chunk__22917 = null;
var count__22918 = (0);
var i__22919 = (0);
while(true){
if((i__22919 < count__22918)){
var texture = cljs.core._nth.call(null,chunk__22917,i__22919);
texture.on("loaded",f);


var G__22920 = seq__22916;
var G__22921 = chunk__22917;
var G__22922 = count__22918;
var G__22923 = (i__22919 + (1));
seq__22916 = G__22920;
chunk__22917 = G__22921;
count__22918 = G__22922;
i__22919 = G__22923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22916);
if(temp__5457__auto__){
var seq__22916__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22916__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22916__$1);
var G__22924 = cljs.core.chunk_rest.call(null,seq__22916__$1);
var G__22925 = c__4319__auto__;
var G__22926 = cljs.core.count.call(null,c__4319__auto__);
var G__22927 = (0);
seq__22916 = G__22924;
chunk__22917 = G__22925;
count__22918 = G__22926;
i__22919 = G__22927;
continue;
} else {
var texture = cljs.core.first.call(null,seq__22916__$1);
texture.on("loaded",f);


var G__22928 = cljs.core.next.call(null,seq__22916__$1);
var G__22929 = null;
var G__22930 = (0);
var G__22931 = (0);
seq__22916 = G__22928;
chunk__22917 = G__22929;
count__22918 = G__22930;
i__22919 = G__22931;
continue;
}
} else {
return null;
}
}
break;
}
});
impi.core.texture_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.create_texture = (function impi$core$create_texture(texture){
return (new PIXI.Texture(impi.core.get_base_texture.call(null,texture),(function (){var G__22932 = texture;
var G__22932__$1 = (((G__22932 == null))?null:new cljs.core.Keyword("pixi.texture","frame","pixi.texture/frame",1646977387).cljs$core$IFn$_invoke$arity$1(G__22932));
if((G__22932__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__22932__$1);
}
})(),(function (){var G__22933 = texture;
var G__22933__$1 = (((G__22933 == null))?null:new cljs.core.Keyword("pixi.texture","crop","pixi.texture/crop",660030578).cljs$core$IFn$_invoke$arity$1(G__22933));
if((G__22933__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__22933__$1);
}
})(),(function (){var G__22934 = texture;
var G__22934__$1 = (((G__22934 == null))?null:new cljs.core.Keyword("pixi.texture","trim","pixi.texture/trim",902761456).cljs$core$IFn$_invoke$arity$1(G__22934));
if((G__22934__$1 == null)){
return null;
} else {
return impi.core.rectangle.call(null,G__22934__$1);
}
})(),(function (){var G__22935 = texture;
if((G__22935 == null)){
return null;
} else {
return new cljs.core.Keyword("pixi.texture","rotate?","pixi.texture/rotate?",2011178137).cljs$core$IFn$_invoke$arity$1(G__22935);
}
})()));
});
impi.core.get_texture = (function impi$core$get_texture(texture){
var or__3922__auto__ = cljs.core.deref.call(null,impi.core.texture_cache).call(null,texture);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var object = impi.core.create_texture.call(null,texture);
cljs.core.swap_BANG_.call(null,impi.core.texture_cache,cljs.core.assoc,texture,object);

return object;
}
});
impi.core.create_render_texture = (function impi$core$create_render_texture(texture){
var mode = impi.core.scale_modes.call(null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257).cljs$core$IFn$_invoke$arity$1(texture));
var vec__22936 = new cljs.core.Keyword("pixi.render-texture","size","pixi.render-texture/size",-777721481).cljs$core$IFn$_invoke$arity$1(texture);
var w = cljs.core.nth.call(null,vec__22936,(0),null);
var h = cljs.core.nth.call(null,vec__22936,(1),null);
return PIXI.RenderTexture.create(w,h,mode);
});
if(typeof impi.core.draw_shape_BANG_ !== 'undefined'){
} else {
impi.core.draw_shape_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","draw-shape!"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (_,v){
return v.call(null,new cljs.core.Keyword("pixi.shape","type","pixi.shape/type",-155162647));
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","circle","pixi.shape.type/circle",-1624509899),(function (graphics,p__22939){
var map__22940 = p__22939;
var map__22940__$1 = ((((!((map__22940 == null)))?(((((map__22940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22940):map__22940);
var vec__22941 = cljs.core.get.call(null,map__22940__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__22941,(0),null);
var y = cljs.core.nth.call(null,vec__22941,(1),null);
var radius = cljs.core.get.call(null,map__22940__$1,new cljs.core.Keyword("pixi.circle","radius","pixi.circle/radius",-563740334));
return graphics.drawCircle(x,y,radius);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","ellipse","pixi.shape.type/ellipse",-1908895205),(function (graphics,p__22945){
var map__22946 = p__22945;
var map__22946__$1 = ((((!((map__22946 == null)))?(((((map__22946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var vec__22947 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__22947,(0),null);
var y = cljs.core.nth.call(null,vec__22947,(1),null);
var vec__22950 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword("pixi.ellipse","radius","pixi.ellipse/radius",-2026890932));
var x_radius = cljs.core.nth.call(null,vec__22950,(0),null);
var y_radius = cljs.core.nth.call(null,vec__22950,(1),null);
return graphics.drawEllipse(x,y,x_radius,y_radius);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","polygon","pixi.shape.type/polygon",1528891042),(function (graphics,p__22954){
var map__22955 = p__22954;
var map__22955__$1 = ((((!((map__22955 == null)))?(((((map__22955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22955):map__22955);
var path = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword("pixi.polygon","path","pixi.polygon/path",-1711305646));
return graphics.drawPolygon(cljs.core.clj__GT_js.call(null,path));
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","rectangle","pixi.shape.type/rectangle",-96727735),(function (graphics,p__22957){
var map__22958 = p__22957;
var map__22958__$1 = ((((!((map__22958 == null)))?(((((map__22958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22958):map__22958);
var vec__22959 = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__22959,(0),null);
var y = cljs.core.nth.call(null,vec__22959,(1),null);
var vec__22962 = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110));
var width = cljs.core.nth.call(null,vec__22962,(0),null);
var height = cljs.core.nth.call(null,vec__22962,(1),null);
return graphics.drawRect(x,y,width,height);
}));
cljs.core._add_method.call(null,impi.core.draw_shape_BANG_,new cljs.core.Keyword("pixi.shape.type","rounded-rectangle","pixi.shape.type/rounded-rectangle",-933045378),(function (graphics,p__22966){
var map__22967 = p__22966;
var map__22967__$1 = ((((!((map__22967 == null)))?(((((map__22967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22967):map__22967);
var vec__22968 = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword("pixi.shape","position","pixi.shape/position",340382603));
var x = cljs.core.nth.call(null,vec__22968,(0),null);
var y = cljs.core.nth.call(null,vec__22968,(1),null);
var vec__22971 = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword("pixi.shape","size","pixi.shape/size",-1211121110));
var width = cljs.core.nth.call(null,vec__22971,(0),null);
var height = cljs.core.nth.call(null,vec__22971,(1),null);
var radius = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword("pixi.rounded-rectangle","radius","pixi.rounded-rectangle/radius",-194400743));
return graphics.drawRoundedRect(x,y,width,height,radius);
}));
impi.core.create_filter = (function impi$core$create_filter(filter){
return (new PIXI.Filter(new cljs.core.Keyword("pixi.filter","vertex","pixi.filter/vertex",-199560341).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword("pixi.filter","fragment","pixi.filter/fragment",1783370436).cljs$core$IFn$_invoke$arity$1(filter),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword("pixi.filter","uniforms","pixi.filter/uniforms",-2008300453).cljs$core$IFn$_invoke$arity$1(filter))));
});
impi.core.render_texture_QMARK_ = (function impi$core$render_texture_QMARK_(texture){
return cljs.core.contains_QMARK_.call(null,texture,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101));
});
impi.core.create_frame_array = (function impi$core$create_frame_array(frames){
return cljs.core.reduce.call(null,(function (arr,p__22975){
var map__22976 = p__22975;
var map__22976__$1 = ((((!((map__22976 == null)))?(((((map__22976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22976):map__22976);
var duration = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword("pixi.frame","duration","pixi.frame/duration",1788037809));
var texture = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword("pixi.frame","texture","pixi.frame/texture",-1751078616));
if(cljs.core.not.call(null,impi.core.render_texture_QMARK_.call(null,texture))){
} else {
throw (new Error(["Assert failed: ","Movie clip frame cannot be a render texture","\n","(not (render-texture? texture))"].join('')));
}

arr.push(({"time": duration, "texture": impi.core.get_texture.call(null,texture)}));

return arr;
}),[],frames);
});
impi.core.render_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.cache_index = (function impi$core$cache_index(index,attr,p__22978){
var map__22979 = p__22978;
var map__22979__$1 = ((((!((map__22979 == null)))?(((((map__22979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);
var key = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword("impi","key","impi/key",-1519343542));
var G__22981 = cljs.core.conj.call(null,index,attr);
if(cljs.core.truth_(key)){
return cljs.core.conj.call(null,G__22981,key);
} else {
return G__22981;
}
});
impi.core.cache_render_texture_BANG_ = (function impi$core$cache_render_texture_BANG_(index,texture,source){
return cljs.core.swap_BANG_.call(null,impi.core.render_cache,cljs.core.update,cljs.core.first.call(null,index),cljs.core.assoc,index,(function (p1__22982_SHARP_){
return p1__22982_SHARP_.render(source,texture);
}));
});
impi.core.uncache_render_texture_BANG_ = (function impi$core$uncache_render_texture_BANG_(index){
return cljs.core.swap_BANG_.call(null,impi.core.render_cache,cljs.core.update,cljs.core.first.call(null,index),cljs.core.dissoc,index);
});
if(typeof impi.core.create_object !== 'undefined'){
} else {
impi.core.create_object = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","create-object"),new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","sprite","pixi.object.type/sprite",-1129625685),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Sprite())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","movie-clip","pixi.object.type/movie-clip",-588592288),(function (p__22983){
var map__22984 = p__22983;
var map__22984__$1 = ((((!((map__22984 == null)))?(((((map__22984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22984):map__22984);
var frames = cljs.core.get.call(null,map__22984__$1,new cljs.core.Keyword("pixi.movie-clip","frames","pixi.movie-clip/frames",532671290));
var paused_QMARK_ = cljs.core.get.call(null,map__22984__$1,new cljs.core.Keyword("pixi.movie-clip","paused?","pixi.movie-clip/paused?",24083434));
var movie_clip = (new PIXI.extras.MovieClip(impi.core.create_frame_array.call(null,frames)));
if(cljs.core.truth_(paused_QMARK_)){
} else {
movie_clip.play();
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),movie_clip], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","container","pixi.object.type/container",-361427118),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Container())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","graphics","pixi.object.type/graphics",1364862706),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Graphics())], null);
}));
cljs.core._add_method.call(null,impi.core.create_object,new cljs.core.Keyword("pixi.object.type","text","pixi.object.type/text",1143165852),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.Text())], null);
}));
if(typeof impi.core.create !== 'undefined'){
} else {
impi.core.create = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","create"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (attr,value){
return attr;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),(function (_,p__22986){
var map__22987 = p__22986;
var map__22987__$1 = ((((!((map__22987 == null)))?(((((map__22987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22987):map__22987);
var options = map__22987__$1;
var vec__22988 = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864));
var w = cljs.core.nth.call(null,vec__22988,(0),null);
var h = cljs.core.nth.call(null,vec__22988,(1),null);
var transparent_QMARK_ = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.select_keys.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981)], null)),new cljs.core.Keyword(null,"obj","obj",981763962),PIXI.autoDetectRenderer(w,h,({"transparent": transparent_QMARK_, "antialias": true}))], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101),(function (_,value){
return impi.core.create_object.call(null,value);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),(function (_,value){
if(cljs.core.truth_(impi.core.render_texture_QMARK_.call(null,value))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.dissoc.call(null,value,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101)),new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.create_render_texture.call(null,value)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.get_texture.call(null,value)], null);
}
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.graphics","shapes","pixi.graphics/shapes",1500084814),(function (graphics,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),({})], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.text","style","pixi.text/style",-549147823),(function (_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"obj","obj",981763962),(new PIXI.TextStyle())], null);
}));
cljs.core._add_method.call(null,impi.core.create,new cljs.core.Keyword("pixi.object","filters","pixi.object/filters",1813869052),(function (_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),value,new cljs.core.Keyword(null,"obj","obj",981763962),impi.core.create_filter.call(null,value)], null);
}));
if(typeof impi.core.update_prop_BANG_ !== 'undefined'){
} else {
impi.core.update_prop_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"impi.core","update-prop!"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (object,index,attr,value){
return attr;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (object,_,___$1,___$2){
return null;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","alpha","pixi.object/alpha",1747179990),(function (object,_,___$1,alpha){
return object.alpha = (function (){var or__3922__auto__ = alpha;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return 1.0;
}
})();
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","blend-mode","pixi.object/blend-mode",1996241029),(function (object,_,___$1,mode){
return object.blendMode = impi.core.blend_modes.call(null,mode,PIXI.BLEND_MODES.NORMAL);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","position","pixi.object/position",-1038936271),(function (object,_,___$1,p__22992){
var vec__22993 = p__22992;
var x = cljs.core.nth.call(null,vec__22993,(0),null);
var y = cljs.core.nth.call(null,vec__22993,(1),null);
object.position.x = x;

return object.position.y = y;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","rotation","pixi.object/rotation",-1091789503),(function (object,_,___$1,angle){
return object.rotation = angle;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","scale","pixi.object/scale",-1402499546),(function (object,_,___$1,p__22996){
var vec__22997 = p__22996;
var x = cljs.core.nth.call(null,vec__22997,(0),null);
var y = cljs.core.nth.call(null,vec__22997,(1),null);
object.scale.x = (function (){var or__3922__auto__ = x;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();

return object.scale.y = (function (){var or__3922__auto__ = y;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","filters","pixi.object/filters",1813869052),(function (object,index,attr,filters){
return object.filters = cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__23000_SHARP_){
return impi.core.build_BANG_.call(null,index,attr,p1__23000_SHARP_);
}),filters));
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","interactive?","pixi.object/interactive?",1542753173),(function (object,_,___$1,interactive_QMARK_){
return object.interactive = interactive_QMARK_;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","hit-area","pixi.object/hit-area",-346754035),(function (object,_,___$1,rect){
if(!((rect == null))){
return object.hitArea = impi.core.rectangle.call(null,rect);
} else {
return delete object["hitArea"];
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.object","contains-point","pixi.object/contains-point",-366359970),(function (object,_,___$1,pred){
if(!((pred == null))){
return object.containsPoint = pred;
} else {
return delete object["containsPoint"];
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","click","pixi.event/click",1508844075),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"click",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-down","pixi.event/mouse-down",-1340188331),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mousedown",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-up","pixi.event/mouse-up",-986797859),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseup",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-over","pixi.event/mouse-over",584256675),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseover",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.event","mouse-out","pixi.event/mouse-out",1492290614),(function (object,index,_,listener){
return impi.core.replace_listener.call(null,object,"mouseout",index,listener);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.container","children","pixi.container/children",1768703103),(function (container,index,attr,children){
return impi.core.replace_children.call(null,container,cljs.core.map.call(null,(function (p1__23001_SHARP_){
return impi.core.build_BANG_.call(null,index,attr,p1__23001_SHARP_);
}),((cljs.core.map_QMARK_.call(null,children))?cljs.core.vals.call(null,children):children)));
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.graphics","shapes","pixi.graphics/shapes",1500084814),(function (graphics_obj,_,___$1,shapes){
graphics_obj.clear();

var seq__23002 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,shapes))?cljs.core.vals.call(null,shapes):shapes));
var chunk__23003 = null;
var count__23004 = (0);
var i__23005 = (0);
while(true){
if((i__23005 < count__23004)){
var map__23006 = cljs.core._nth.call(null,chunk__23003,i__23005);
var map__23006__$1 = ((((!((map__23006 == null)))?(((((map__23006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23006):map__23006);
var shape = map__23006__$1;
var fill = cljs.core.get.call(null,map__23006__$1,new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056));
var line = cljs.core.get.call(null,map__23006__$1,new cljs.core.Keyword("pixi.shape","line","pixi.shape/line",-1822767054));
graphics_obj.lineStyle((function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.line","width","pixi.line/width",-436402173).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword("pixi.line","color","pixi.line/color",833385309).cljs$core$IFn$_invoke$arity$1(line),(function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.line","alpha","pixi.line/alpha",-1396691617).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());

if(cljs.core.truth_(fill)){
graphics_obj.beginFill(new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232).cljs$core$IFn$_invoke$arity$1(fill),(function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());
} else {
}

impi.core.draw_shape_BANG_.call(null,graphics_obj,shape);

if(cljs.core.truth_(fill)){
graphics_obj.endFill();
} else {
}


var G__23010 = seq__23002;
var G__23011 = chunk__23003;
var G__23012 = count__23004;
var G__23013 = (i__23005 + (1));
seq__23002 = G__23010;
chunk__23003 = G__23011;
count__23004 = G__23012;
i__23005 = G__23013;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23002);
if(temp__5457__auto__){
var seq__23002__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23002__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23002__$1);
var G__23014 = cljs.core.chunk_rest.call(null,seq__23002__$1);
var G__23015 = c__4319__auto__;
var G__23016 = cljs.core.count.call(null,c__4319__auto__);
var G__23017 = (0);
seq__23002 = G__23014;
chunk__23003 = G__23015;
count__23004 = G__23016;
i__23005 = G__23017;
continue;
} else {
var map__23008 = cljs.core.first.call(null,seq__23002__$1);
var map__23008__$1 = ((((!((map__23008 == null)))?(((((map__23008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23008):map__23008);
var shape = map__23008__$1;
var fill = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword("pixi.shape","fill","pixi.shape/fill",-849672056));
var line = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword("pixi.shape","line","pixi.shape/line",-1822767054));
graphics_obj.lineStyle((function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.line","width","pixi.line/width",-436402173).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword("pixi.line","color","pixi.line/color",833385309).cljs$core$IFn$_invoke$arity$1(line),(function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.line","alpha","pixi.line/alpha",-1396691617).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());

if(cljs.core.truth_(fill)){
graphics_obj.beginFill(new cljs.core.Keyword("pixi.fill","color","pixi.fill/color",826357232).cljs$core$IFn$_invoke$arity$1(fill),(function (){var or__3922__auto__ = new cljs.core.Keyword("pixi.fill","alpha","pixi.fill/alpha",-1396216046).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());
} else {
}

impi.core.draw_shape_BANG_.call(null,graphics_obj,shape);

if(cljs.core.truth_(fill)){
graphics_obj.endFill();
} else {
}


var G__23018 = cljs.core.next.call(null,seq__23002__$1);
var G__23019 = null;
var G__23020 = (0);
var G__23021 = (0);
seq__23002 = G__23018;
chunk__23003 = G__23019;
count__23004 = G__23020;
i__23005 = G__23021;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text","text","pixi.text/text",1789201424),(function (object,_,___$1,text){
return object.text = text;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text","style","pixi.text/style",-549147823),(function (object,index,attr,text_style){
return object.style = impi.core.build_BANG_.call(null,index,attr,text_style);
}));
var seq__23022_23026 = cljs.core.seq.call(null,cljs.core.keys.call(null,impi.core.text_properties));
var chunk__23023_23027 = null;
var count__23024_23028 = (0);
var i__23025_23029 = (0);
while(true){
if((i__23025_23029 < count__23024_23028)){
var attr_23030 = cljs.core._nth.call(null,chunk__23023_23027,i__23025_23029);
cljs.core.derive.call(null,attr_23030,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924));


var G__23031 = seq__23022_23026;
var G__23032 = chunk__23023_23027;
var G__23033 = count__23024_23028;
var G__23034 = (i__23025_23029 + (1));
seq__23022_23026 = G__23031;
chunk__23023_23027 = G__23032;
count__23024_23028 = G__23033;
i__23025_23029 = G__23034;
continue;
} else {
var temp__5457__auto___23035 = cljs.core.seq.call(null,seq__23022_23026);
if(temp__5457__auto___23035){
var seq__23022_23036__$1 = temp__5457__auto___23035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23022_23036__$1)){
var c__4319__auto___23037 = cljs.core.chunk_first.call(null,seq__23022_23036__$1);
var G__23038 = cljs.core.chunk_rest.call(null,seq__23022_23036__$1);
var G__23039 = c__4319__auto___23037;
var G__23040 = cljs.core.count.call(null,c__4319__auto___23037);
var G__23041 = (0);
seq__23022_23026 = G__23038;
chunk__23023_23027 = G__23039;
count__23024_23028 = G__23040;
i__23025_23029 = G__23041;
continue;
} else {
var attr_23042 = cljs.core.first.call(null,seq__23022_23036__$1);
cljs.core.derive.call(null,attr_23042,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924));


var G__23043 = cljs.core.next.call(null,seq__23022_23036__$1);
var G__23044 = null;
var G__23045 = (0);
var G__23046 = (0);
seq__23022_23026 = G__23043;
chunk__23023_23027 = G__23044;
count__23024_23028 = G__23045;
i__23025_23029 = G__23046;
continue;
}
} else {
}
}
break;
}
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.text.style","property","pixi.text.style/property",-681950924),(function (object,_,attr,value){
return (object[impi.core.text_properties.call(null,attr)] = value);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.sprite","anchor","pixi.sprite/anchor",-1761208072),(function (sprite,_,___$1,p__23047){
var vec__23048 = p__23047;
var x = cljs.core.nth.call(null,vec__23048,(0),null);
var y = cljs.core.nth.call(null,vec__23048,(1),null);
sprite.anchor.x = x;

return sprite.anchor.y = y;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.sprite","texture","pixi.sprite/texture",712501192),(function (sprite,index,attr,texture){
return sprite.texture = impi.core.build_BANG_.call(null,index,attr,texture);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","paused?","pixi.movie-clip/paused?",24083434),(function (movie_clip,_,___$1,paused_QMARK_){
movie_clip.impiPaused = paused_QMARK_;

if(cljs.core.truth_((function (){var and__3911__auto__ = paused_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return movie_clip.playing;
} else {
return and__3911__auto__;
}
})())){
return movie_clip.stop();
} else {
if(((cljs.core.not.call(null,paused_QMARK_)) && (cljs.core.not.call(null,movie_clip.playing)))){
return movie_clip.play();
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","loop?","pixi.movie-clip/loop?",1054216795),(function (movie_clip,_,___$1,loop_QMARK_){
movie_clip.loop = loop_QMARK_;

if(cljs.core.truth_((function (){var and__3911__auto__ = loop_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,movie_clip.playing)) && (cljs.core.not.call(null,movie_clip.impiPaused)));
} else {
return and__3911__auto__;
}
})())){
return movie_clip.play();
} else {
return null;
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.movie-clip","animation-speed","pixi.movie-clip/animation-speed",-702199245),(function (movie_clip,_,___$1,speed){
return movie_clip.animationSpeed = speed;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.render-texture","source","pixi.render-texture/source",1442476101),(function (texture,index,attr,source){
var index__$1 = impi.core.cache_index.call(null,index,attr,source);
if(!((source == null))){
return impi.core.cache_render_texture_BANG_.call(null,index__$1,texture,impi.core.build_BANG_.call(null,index__$1,attr,source));
} else {
return impi.core.uncache_render_texture_BANG_.call(null,index__$1);
}
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.render-texture","size","pixi.render-texture/size",-777721481),(function (texture,_,___$1,p__23051){
var vec__23052 = p__23051;
var w = cljs.core.nth.call(null,vec__23052,(0),null);
var h = cljs.core.nth.call(null,vec__23052,(1),null);
return texture.resize(w,h,true);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.renderer","size","pixi.renderer/size",1546467864),(function (renderer,_,___$1,p__23055){
var vec__23056 = p__23055;
var w = cljs.core.nth.call(null,vec__23056,(0),null);
var h = cljs.core.nth.call(null,vec__23056,(1),null);
return renderer.resize(w,h);
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.renderer","background-color","pixi.renderer/background-color",581973363),(function (renderer,_,___$1,color){
return renderer.backgroundColor = color;
}));
cljs.core._add_method.call(null,impi.core.update_prop_BANG_,new cljs.core.Keyword("pixi.filter","padding","pixi.filter/padding",1105772529),(function (filter,_,___$1,padding){
return filter.padding = padding;
}));
impi.core.run_kv_BANG_ = (function impi$core$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (_,k,v){
proc.call(null,k,v);

return null;
}),null,m);

return null;
});
impi.core.update_changed_prop_BANG_ = (function impi$core$update_changed_prop_BANG_(object,index,old_value,k,v){
if(cljs.core._EQ_.call(null,v,old_value.call(null,k))){
return null;
} else {
return impi.core.update_prop_BANG_.call(null,object,index,k,v);
}
});
impi.core.update_removed_prop_BANG_ = (function impi$core$update_removed_prop_BANG_(object,index,new_value,k){
if(cljs.core.contains_QMARK_.call(null,new_value,k)){
return null;
} else {
return impi.core.update_prop_BANG_.call(null,object,index,k,null);
}
});
impi.core.update_BANG_ = (function impi$core$update_BANG_(p__23059,index,attr,new_value){
var map__23060 = p__23059;
var map__23060__$1 = ((((!((map__23060 == null)))?(((((map__23060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060):map__23060);
var object = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var old_value = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"val","val",128701612));
impi.core.run_kv_BANG_.call(null,((function (map__23060,map__23060__$1,object,old_value){
return (function (k,v){
return impi.core.update_changed_prop_BANG_.call(null,object,index,old_value,k,v);
});})(map__23060,map__23060__$1,object,old_value))
,new_value);

impi.core.run_kv_BANG_.call(null,((function (map__23060,map__23060__$1,object,old_value){
return (function (k,_){
return impi.core.update_removed_prop_BANG_.call(null,object,index,new_value,k);
});})(map__23060,map__23060__$1,object,old_value))
,old_value);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new_value,new cljs.core.Keyword(null,"obj","obj",981763962),object], null);
});
impi.core.recreate_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword("pixi.texture","rotate","pixi.texture/rotate",-516802910),null,new cljs.core.Keyword("pixi.filter","fragment","pixi.filter/fragment",1783370436),null,new cljs.core.Keyword("pixi.texture","frame","pixi.texture/frame",1646977387),null,new cljs.core.Keyword("pixi.filter","vertex","pixi.filter/vertex",-199560341),null,new cljs.core.Keyword("pixi.object","type","pixi.object/type",-1946542961),null,new cljs.core.Keyword("pixi.texture","trim","pixi.texture/trim",902761456),null,new cljs.core.Keyword("pixi.texture","crop","pixi.texture/crop",660030578),null,new cljs.core.Keyword("pixi.renderer","transparent?","pixi.renderer/transparent?",-1434511981),null,new cljs.core.Keyword("pixi.movie-clip","frames","pixi.movie-clip/frames",532671290),null,new cljs.core.Keyword("pixi.filter","uniforms","pixi.filter/uniforms",-2008300453),null,new cljs.core.Keyword("pixi.texture","source","pixi.texture/source",-567615844),null,new cljs.core.Keyword("pixi.texture","scale-mode","pixi.texture/scale-mode",-749808257),null], null), null);
impi.core.should_recreate_QMARK_ = (function impi$core$should_recreate_QMARK_(old_value,new_value){
return cljs.core.not_EQ_.call(null,cljs.core.select_keys.call(null,old_value,impi.core.recreate_keys),cljs.core.select_keys.call(null,new_value,impi.core.recreate_keys));
});
impi.core.build_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
impi.core.build_BANG_ = (function impi$core$build_BANG_(index,attr,value){
var index__$1 = impi.core.cache_index.call(null,index,attr,value);
var cache_BANG_ = ((function (index__$1){
return (function (p1__23062_SHARP_){
return cljs.core.swap_BANG_.call(null,impi.core.build_cache,cljs.core.assoc,index__$1,p1__23062_SHARP_);
});})(index__$1))
;
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1((function (){var temp__5455__auto__ = cljs.core.deref.call(null,impi.core.build_cache).call(null,index__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
var cached_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cached);
if(cljs.core._EQ_.call(null,value,cached_val)){
return cached;
} else {
var G__23063 = impi.core.update_BANG_.call(null,(cljs.core.truth_(impi.core.should_recreate_QMARK_.call(null,cached_val,value))?impi.core.create.call(null,attr,value):cached),index__$1,attr,value);
cache_BANG_.call(null,G__23063);

return G__23063;
}
} else {
var G__23064 = impi.core.update_BANG_.call(null,impi.core.create.call(null,attr,value),index__$1,attr,value);
cache_BANG_.call(null,G__23064);

return G__23064;
}
})());
});
impi.core.renderer_mounted_QMARK_ = (function impi$core$renderer_mounted_QMARK_(renderer,element){
return (element === renderer.view.parentNode);
});
impi.core.mount_view = (function impi$core$mount_view(renderer,element){
if(cljs.core.truth_(impi.core.renderer_mounted_QMARK_.call(null,renderer,element))){
return null;
} else {
element.innerHTML = "";

return element.appendChild(renderer.view);
}
});
impi.core.build_listeners_BANG_ = (function impi$core$build_listeners_BANG_(key,scene){
return cljs.core.swap_BANG_.call(null,impi.core.listeners,cljs.core.assoc,key,new cljs.core.Keyword("pixi","listeners","pixi/listeners",397329163).cljs$core$IFn$_invoke$arity$2(scene,cljs.core.PersistentArrayMap.EMPTY));
});
impi.core.build_renderer_BANG_ = (function impi$core$build_renderer_BANG_(key,scene){
var temp__5457__auto__ = new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return impi.core.build_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533),renderer);
} else {
return null;
}
});
impi.core.build_stage_BANG_ = (function impi$core$build_stage_BANG_(renderer,key,scene){
var temp__5457__auto__ = new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(temp__5457__auto__)){
var stage = temp__5457__auto__;
return impi.core.build_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),new cljs.core.Keyword("pixi","stage","pixi/stage",1842792606),stage);
} else {
return null;
}
});
impi.core.render_view = (function impi$core$render_view(key,renderer,stage){
var render = (function impi$core$render_view_$_render(){
var seq__23069_23073 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,impi.core.render_cache).call(null,key)));
var chunk__23070_23074 = null;
var count__23071_23075 = (0);
var i__23072_23076 = (0);
while(true){
if((i__23072_23076 < count__23071_23075)){
var f_23077 = cljs.core._nth.call(null,chunk__23070_23074,i__23072_23076);
f_23077.call(null,renderer);


var G__23078 = seq__23069_23073;
var G__23079 = chunk__23070_23074;
var G__23080 = count__23071_23075;
var G__23081 = (i__23072_23076 + (1));
seq__23069_23073 = G__23078;
chunk__23070_23074 = G__23079;
count__23071_23075 = G__23080;
i__23072_23076 = G__23081;
continue;
} else {
var temp__5457__auto___23082 = cljs.core.seq.call(null,seq__23069_23073);
if(temp__5457__auto___23082){
var seq__23069_23083__$1 = temp__5457__auto___23082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23069_23083__$1)){
var c__4319__auto___23084 = cljs.core.chunk_first.call(null,seq__23069_23083__$1);
var G__23085 = cljs.core.chunk_rest.call(null,seq__23069_23083__$1);
var G__23086 = c__4319__auto___23084;
var G__23087 = cljs.core.count.call(null,c__4319__auto___23084);
var G__23088 = (0);
seq__23069_23073 = G__23085;
chunk__23070_23074 = G__23086;
count__23071_23075 = G__23087;
i__23072_23076 = G__23088;
continue;
} else {
var f_23089 = cljs.core.first.call(null,seq__23069_23083__$1);
f_23089.call(null,renderer);


var G__23090 = cljs.core.next.call(null,seq__23069_23083__$1);
var G__23091 = null;
var G__23092 = (0);
var G__23093 = (0);
seq__23069_23073 = G__23090;
chunk__23070_23074 = G__23091;
count__23071_23075 = G__23092;
i__23072_23076 = G__23093;
continue;
}
} else {
}
}
break;
}

return renderer.render(stage);
});
render.call(null);

return impi.core.on_loaded_textures.call(null,(function (){
return requestAnimationFrame(render);
}));
});
impi.core.mount = (function impi$core$mount(key,scene,element){
impi.core.build_listeners_BANG_.call(null,key,scene);

var temp__5457__auto__ = impi.core.build_renderer_BANG_.call(null,key,scene);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
impi.core.mount_view.call(null,renderer,element);

var temp__5457__auto____$1 = impi.core.build_stage_BANG_.call(null,renderer,key,scene);
if(cljs.core.truth_(temp__5457__auto____$1)){
var stage = temp__5457__auto____$1;
return impi.core.render_view.call(null,key,renderer,stage);
} else {
return null;
}
} else {
return null;
}
});
impi.core.unmount = (function impi$core$unmount(key){
var temp__5457__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,impi.core.build_cache).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("pixi","renderer","pixi/renderer",333464533)], null)));
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var view = renderer.view;
var temp__5457__auto____$1 = view.parentNode;
if(cljs.core.truth_(temp__5457__auto____$1)){
var parent = temp__5457__auto____$1;
return parent.removeChild(view);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
