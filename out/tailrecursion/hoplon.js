// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12811_SHARP_){
return (p1__12811_SHARP_ instanceof Node);
}):(function (p1__12812_SHARP_){
try{return p1__12812_SHARP_.nodeType;
}catch (e12813){if((e12813 instanceof Error)){
var _ = e12813;
return null;
} else {
throw e12813;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12814_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__12814_SHARP_);
}catch (e12815){if((e12815 instanceof Error)){
var _ = e12815;
return null;
} else {
throw e12815;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12816_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__12816_SHARP_);
}catch (e12817){if((e12817 instanceof Error)){
var _ = e12817;
return null;
} else {
throw e12817;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__12818_SHARP_){
if(cljs.core.truth_((function (){var and__3752__auto__ = console;
if(cljs.core.truth_(and__3752__auto__)){
return console.log;
} else {
return and__3752__auto__;
}
})())){
return console.log(p1__12818_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){
return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e12820){if((e12820 instanceof Error)){
var _ = e12820;
return not_found;
} else {
throw e12820;

}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){
return timeout.call(null,f,(0));
});
var timeout__2 = (function (f,t){
return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){
return cljs.core.mapcat.call(null,(function (p1__12821_SHARP_){
if(cljs.core.truth_((function (){var or__3764__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__12821_SHARP_);
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__12821_SHARP_);
}
})())){
return unsplice.call(null,p1__12821_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12821_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__12824){
var vec__12826 = p__12824;
var head = cljs.core.nth.call(null,vec__12826,(0),null);
var tail = cljs.core.nthnext.call(null,vec__12826,(1));
var args = vec__12826;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__12826,head,tail,args){
return (function (p1__12822_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__12822_SHARP_)));
});})(kw1_QMARK_,vec__12826,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__12826,head,tail,args){
return (function (p1__12823_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__12823_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__12826,head,tail,args))
;
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__12828_SHARP_,p2__12827_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__12827_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__12827_SHARP_),((!(cljs.core._EQ_.call(null,p1__12828_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__12829_SHARP_,p2__12830_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__12829_SHARP_,/ /)),clojure.string.split.call(null,p2__12830_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__12853_12871 = cljs.core.seq.call(null,attr);
var chunk__12854_12872 = null;
var count__12855_12873 = (0);
var i__12856_12874 = (0);
while(true){
if((i__12856_12874 < count__12855_12873)){
var vec__12857_12875 = cljs.core._nth.call(null,chunk__12854_12872,i__12856_12874);
var k_12876 = cljs.core.nth.call(null,vec__12857_12875,(0),null);
var v_12877 = cljs.core.nth.call(null,vec__12857_12875,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12877))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12876),v_12877);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12877)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12876),v_12877);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12876),v_12877);

}
}

var G__12878 = seq__12853_12871;
var G__12879 = chunk__12854_12872;
var G__12880 = count__12855_12873;
var G__12881 = (i__12856_12874 + (1));
seq__12853_12871 = G__12878;
chunk__12854_12872 = G__12879;
count__12855_12873 = G__12880;
i__12856_12874 = G__12881;
continue;
} else {
var temp__4126__auto___12882 = cljs.core.seq.call(null,seq__12853_12871);
if(temp__4126__auto___12882){
var seq__12853_12883__$1 = temp__4126__auto___12882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12853_12883__$1)){
var c__4551__auto___12884 = cljs.core.chunk_first.call(null,seq__12853_12883__$1);
var G__12885 = cljs.core.chunk_rest.call(null,seq__12853_12883__$1);
var G__12886 = c__4551__auto___12884;
var G__12887 = cljs.core.count.call(null,c__4551__auto___12884);
var G__12888 = (0);
seq__12853_12871 = G__12885;
chunk__12854_12872 = G__12886;
count__12855_12873 = G__12887;
i__12856_12874 = G__12888;
continue;
} else {
var vec__12858_12889 = cljs.core.first.call(null,seq__12853_12883__$1);
var k_12890 = cljs.core.nth.call(null,vec__12858_12889,(0),null);
var v_12891 = cljs.core.nth.call(null,vec__12858_12889,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_12891))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_12890),v_12891);
} else {
if(cljs.core.fn_QMARK_.call(null,v_12891)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_12890),v_12891);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_12890),v_12891);

}
}

var G__12892 = cljs.core.next.call(null,seq__12853_12883__$1);
var G__12893 = null;
var G__12894 = (0);
var G__12895 = (0);
seq__12853_12871 = G__12892;
chunk__12854_12872 = G__12893;
count__12855_12873 = G__12894;
i__12856_12874 = G__12895;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12859 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__12860 = null;
var count__12861 = (0);
var i__12862 = (0);
while(true){
if((i__12862 < count__12861)){
var vec__12863 = cljs.core._nth.call(null,chunk__12860,i__12862);
var k = cljs.core.nth.call(null,vec__12863,(0),null);
var v = cljs.core.nth.call(null,vec__12863,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12859,chunk__12860,count__12861,i__12862,vec__12863,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12832_SHARP_,p2__12833_SHARP_,p3__12834_SHARP_,p4__12831_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12831_SHARP_);
});})(seq__12859,chunk__12860,count__12861,i__12862,vec__12863,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12896 = seq__12859;
var G__12897 = chunk__12860;
var G__12898 = count__12861;
var G__12899 = (i__12862 + (1));
seq__12859 = G__12896;
chunk__12860 = G__12897;
count__12861 = G__12898;
i__12862 = G__12899;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12859);
if(temp__4126__auto__){
var seq__12859__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12859__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12859__$1);
var G__12900 = cljs.core.chunk_rest.call(null,seq__12859__$1);
var G__12901 = c__4551__auto__;
var G__12902 = cljs.core.count.call(null,c__4551__auto__);
var G__12903 = (0);
seq__12859 = G__12900;
chunk__12860 = G__12901;
count__12861 = G__12902;
i__12862 = G__12903;
continue;
} else {
var vec__12864 = cljs.core.first.call(null,seq__12859__$1);
var k = cljs.core.nth.call(null,vec__12864,(0),null);
var v = cljs.core.nth.call(null,vec__12864,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__12859,chunk__12860,count__12861,i__12862,vec__12864,k,v,seq__12859__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__12832_SHARP_,p2__12833_SHARP_,p3__12834_SHARP_,p4__12831_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__12831_SHARP_);
});})(seq__12859,chunk__12860,count__12861,i__12862,vec__12864,k,v,seq__12859__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__12904 = cljs.core.next.call(null,seq__12859__$1);
var G__12905 = null;
var G__12906 = (0);
var G__12907 = (0);
seq__12859 = G__12904;
chunk__12860 = G__12905;
count__12861 = G__12906;
i__12862 = G__12907;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__12865 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__12866 = null;
var count__12867 = (0);
var i__12868 = (0);
while(true){
if((i__12868 < count__12867)){
var vec__12869 = cljs.core._nth.call(null,chunk__12866,i__12868);
var k = cljs.core.nth.call(null,vec__12869,(0),null);
var v = cljs.core.nth.call(null,vec__12869,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12908 = seq__12865;
var G__12909 = chunk__12866;
var G__12910 = count__12867;
var G__12911 = (i__12868 + (1));
seq__12865 = G__12908;
chunk__12866 = G__12909;
count__12867 = G__12910;
i__12868 = G__12911;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12865);
if(temp__4126__auto__){
var seq__12865__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12865__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12865__$1);
var G__12912 = cljs.core.chunk_rest.call(null,seq__12865__$1);
var G__12913 = c__4551__auto__;
var G__12914 = cljs.core.count.call(null,c__4551__auto__);
var G__12915 = (0);
seq__12865 = G__12912;
chunk__12866 = G__12913;
count__12867 = G__12914;
i__12868 = G__12915;
continue;
} else {
var vec__12870 = cljs.core.first.call(null,seq__12865__$1);
var k = cljs.core.nth.call(null,vec__12870,(0),null);
var v = cljs.core.nth.call(null,vec__12870,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__12916 = cljs.core.next.call(null,seq__12865__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12865 = G__12916;
chunk__12866 = G__12917;
count__12867 = G__12918;
i__12868 = G__12919;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12920_SHARP_,p2__12921_SHARP_){
return p1__12920_SHARP_.appendChild(p2__12921_SHARP_);
}):(function (p1__12922_SHARP_,p2__12923_SHARP_){
try{return p1__12922_SHARP_.appendChild(p2__12923_SHARP_);
}catch (e12924){if((e12924 instanceof Error)){
var _ = e12924;
return null;
} else {
throw e12924;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__12930){
var vec__12936 = p__12930;
var child_cell = cljs.core.nth.call(null,vec__12936,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12936,(1));
var kids = vec__12936;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__12936,child_cell,_,kids){
return (function (p1__12926_SHARP_,p2__12927_SHARP_,p3__12928_SHARP_,p4__12925_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__12925_SHARP_);
});})(vec__12936,child_cell,_,kids))
);
} else {
var node_12941 = ((function (vec__12936,child_cell,_,kids){
return (function (p1__12929_SHARP_){
if(typeof p1__12929_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__12929_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__12929_SHARP_))){
return p1__12929_SHARP_;
} else {
return null;
}
}
});})(vec__12936,child_cell,_,kids))
;
var seq__12937_12942 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_12941,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__12938_12943 = null;
var count__12939_12944 = (0);
var i__12940_12945 = (0);
while(true){
if((i__12940_12945 < count__12939_12944)){
var x_12946 = cljs.core._nth.call(null,chunk__12938_12943,i__12940_12945);
tailrecursion.hoplon.append_child.call(null,this$,x_12946);

var G__12947 = seq__12937_12942;
var G__12948 = chunk__12938_12943;
var G__12949 = count__12939_12944;
var G__12950 = (i__12940_12945 + (1));
seq__12937_12942 = G__12947;
chunk__12938_12943 = G__12948;
count__12939_12944 = G__12949;
i__12940_12945 = G__12950;
continue;
} else {
var temp__4126__auto___12951 = cljs.core.seq.call(null,seq__12937_12942);
if(temp__4126__auto___12951){
var seq__12937_12952__$1 = temp__4126__auto___12951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12937_12952__$1)){
var c__4551__auto___12953 = cljs.core.chunk_first.call(null,seq__12937_12952__$1);
var G__12954 = cljs.core.chunk_rest.call(null,seq__12937_12952__$1);
var G__12955 = c__4551__auto___12953;
var G__12956 = cljs.core.count.call(null,c__4551__auto___12953);
var G__12957 = (0);
seq__12937_12942 = G__12954;
chunk__12938_12943 = G__12955;
count__12939_12944 = G__12956;
i__12940_12945 = G__12957;
continue;
} else {
var x_12958 = cljs.core.first.call(null,seq__12937_12952__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_12958);

var G__12959 = cljs.core.next.call(null,seq__12937_12952__$1);
var G__12960 = null;
var G__12961 = (0);
var G__12962 = (0);
seq__12937_12942 = G__12959;
chunk__12938_12943 = G__12960;
count__12939_12944 = G__12961;
i__12940_12945 = G__12962;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__12970__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12964 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12964,(0),null);
var kids = cljs.core.nth.call(null,vec__12964,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12965 = this$;
G__12965.hoplonIFn(attr,kids);

return G__12965;
} else {
var G__12966 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12966,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12966,kids);

return G__12966;
}
};
var G__12970 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12971__i = 0, G__12971__a = new Array(arguments.length -  1);
while (G__12971__i < G__12971__a.length) {G__12971__a[G__12971__i] = arguments[G__12971__i + 1]; ++G__12971__i;}
  args = new cljs.core.IndexedSeq(G__12971__a,0);
} 
return G__12970__delegate.call(this,self__,args);};
G__12970.cljs$lang$maxFixedArity = 1;
G__12970.cljs$lang$applyTo = (function (arglist__12972){
var self__ = cljs.core.first(arglist__12972);
var args = cljs.core.rest(arglist__12972);
return G__12970__delegate(self__,args);
});
G__12970.cljs$core$IFn$_invoke$arity$variadic = G__12970__delegate;
return G__12970;
})()
;

Element.prototype.apply = (function (self__,args12963){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12963)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12973__delegate = function (args){
var this$ = this;
var vec__12967 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12967,(0),null);
var kids = cljs.core.nth.call(null,vec__12967,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12968 = this$;
G__12968.hoplonIFn(attr,kids);

return G__12968;
} else {
var G__12969 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12969,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12969,kids);

return G__12969;
}
};
var G__12973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12974__i = 0, G__12974__a = new Array(arguments.length -  0);
while (G__12974__i < G__12974__a.length) {G__12974__a[G__12974__i] = arguments[G__12974__i + 0]; ++G__12974__i;}
  args = new cljs.core.IndexedSeq(G__12974__a,0);
} 
return G__12973__delegate.call(this,args);};
G__12973.cljs$lang$maxFixedArity = 0;
G__12973.cljs$lang$applyTo = (function (arglist__12975){
var args = cljs.core.seq(arglist__12975);
return G__12973__delegate(args);
});
G__12973.cljs$core$IFn$_invoke$arity$variadic = G__12973__delegate;
return G__12973;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){
return (function() { 
var G__12986__delegate = function (args){
var vec__12981 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12981,(0),null);
var kids = cljs.core.nth.call(null,vec__12981,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__12982 = cljs.core.seq.call(null,kids);
var chunk__12983 = null;
var count__12984 = (0);
var i__12985 = (0);
while(true){
if((i__12985 < count__12984)){
var k = cljs.core._nth.call(null,chunk__12983,i__12985);
elem.appendChild(k);

var G__12987 = seq__12982;
var G__12988 = chunk__12983;
var G__12989 = count__12984;
var G__12990 = (i__12985 + (1));
seq__12982 = G__12987;
chunk__12983 = G__12988;
count__12984 = G__12989;
i__12985 = G__12990;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12982);
if(temp__4126__auto__){
var seq__12982__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12982__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12982__$1);
var G__12991 = cljs.core.chunk_rest.call(null,seq__12982__$1);
var G__12992 = c__4551__auto__;
var G__12993 = cljs.core.count.call(null,c__4551__auto__);
var G__12994 = (0);
seq__12982 = G__12991;
chunk__12983 = G__12992;
count__12984 = G__12993;
i__12985 = G__12994;
continue;
} else {
var k = cljs.core.first.call(null,seq__12982__$1);
elem.appendChild(k);

var G__12995 = cljs.core.next.call(null,seq__12982__$1);
var G__12996 = null;
var G__12997 = (0);
var G__12998 = (0);
seq__12982 = G__12995;
chunk__12983 = G__12996;
count__12984 = G__12997;
i__12985 = G__12998;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12999__i = 0, G__12999__a = new Array(arguments.length -  0);
while (G__12999__i < G__12999__a.length) {G__12999__a[G__12999__i] = arguments[G__12999__i + 0]; ++G__12999__i;}
  args = new cljs.core.IndexedSeq(G__12999__a,0);
} 
return G__12986__delegate.call(this,args);};
G__12986.cljs$lang$maxFixedArity = 0;
G__12986.cljs$lang$applyTo = (function (arglist__13000){
var args = cljs.core.seq(arglist__13000);
return G__12986__delegate(args);
});
G__12986.cljs$core$IFn$_invoke$arity$variadic = G__12986__delegate;
return G__12986;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){
return (function() { 
var G__13001__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__13001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13002__i = 0, G__13002__a = new Array(arguments.length -  0);
while (G__13002__i < G__13002__a.length) {G__13002__a[G__13002__i] = arguments[G__13002__i + 0]; ++G__13002__i;}
  args = new cljs.core.IndexedSeq(G__13002__a,0);
} 
return G__13001__delegate.call(this,args);};
G__13001.cljs$lang$maxFixedArity = 0;
G__13001.cljs$lang$applyTo = (function (arglist__13003){
var args = cljs.core.seq(arglist__13003);
return G__13001__delegate(args);
});
G__13001.cljs$core$IFn$_invoke$arity$variadic = G__13001__delegate;
return G__13001;
})()
;
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.html = (function() { 
var html__delegate = function (args){
var vec__13005 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__13005,(0),null);
var _ = cljs.core.nth.call(null,vec__13005,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
};
var html = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13006__i = 0, G__13006__a = new Array(arguments.length -  0);
while (G__13006__i < G__13006__a.length) {G__13006__a[G__13006__i] = arguments[G__13006__i + 0]; ++G__13006__i;}
  args = new cljs.core.IndexedSeq(G__13006__a,0);
} 
return html__delegate.call(this,args);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__13007){
var args = cljs.core.seq(arglist__13007);
return html__delegate(args);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__13008_SHARP_){
return document.createTextNode(p1__13008_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__13009_SHARP_){
return document.createComment(p1__13009_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__13010_SHARP_){
var e = jQuery(p1__13010_SHARP_.target);
if(cljs.core.truth_((function (){var or__3764__auto__ = e.attr("action");
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__13010_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){
return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",305978217));
});
tailrecursion.hoplon.rel = (function rel(other,event){
var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());
var ox = os.call(null,"left");
var oy = os.call(null,"top");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",-1757859776),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));

return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){
return e.val();
});
var text_val_BANG___2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){
return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__4661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4665__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,key,val){
return key;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__13011__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__13011 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__13012__i = 0, G__13012__a = new Array(arguments.length -  2);
while (G__13012__i < G__13012__a.length) {G__13012__a[G__13012__i] = arguments[G__13012__i + 2]; ++G__13012__i;}
  args = new cljs.core.IndexedSeq(G__13012__a,0);
} 
return G__13011__delegate.call(this,elem,_,args);};
G__13011.cljs$lang$maxFixedArity = 2;
G__13011.cljs$lang$applyTo = (function (arglist__13013){
var elem = cljs.core.first(arglist__13013);
arglist__13013 = cljs.core.next(arglist__13013);
var _ = cljs.core.first(arglist__13013);
var args = cljs.core.rest(arglist__13013);
return G__13011__delegate(elem,_,args);
});
G__13011.cljs$core$IFn$_invoke$arity$variadic = G__13011__delegate;
return G__13011;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13014 = cljs.core.seq.call(null,kvs);
var chunk__13015 = null;
var count__13016 = (0);
var i__13017 = (0);
while(true){
if((i__13017 < count__13016)){
var vec__13018 = cljs.core._nth.call(null,chunk__13015,i__13017);
var k = cljs.core.nth.call(null,vec__13018,(0),null);
var v = cljs.core.nth.call(null,vec__13018,(1),null);
var k_13020__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_13020__$1);
} else {
e.attr(k_13020__$1,((cljs.core._EQ_.call(null,true,v))?k_13020__$1:v));
}

var G__13021 = seq__13014;
var G__13022 = chunk__13015;
var G__13023 = count__13016;
var G__13024 = (i__13017 + (1));
seq__13014 = G__13021;
chunk__13015 = G__13022;
count__13016 = G__13023;
i__13017 = G__13024;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13014);
if(temp__4126__auto__){
var seq__13014__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13014__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__13014__$1);
var G__13025 = cljs.core.chunk_rest.call(null,seq__13014__$1);
var G__13026 = c__4551__auto__;
var G__13027 = cljs.core.count.call(null,c__4551__auto__);
var G__13028 = (0);
seq__13014 = G__13025;
chunk__13015 = G__13026;
count__13016 = G__13027;
i__13017 = G__13028;
continue;
} else {
var vec__13019 = cljs.core.first.call(null,seq__13014__$1);
var k = cljs.core.nth.call(null,vec__13019,(0),null);
var v = cljs.core.nth.call(null,vec__13019,(1),null);
var k_13029__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_13029__$1);
} else {
e.attr(k_13029__$1,((cljs.core._EQ_.call(null,true,v))?k_13029__$1:v));
}

var G__13030 = cljs.core.next.call(null,seq__13014__$1);
var G__13031 = null;
var G__13032 = (0);
var G__13033 = (0);
seq__13014 = G__13030;
chunk__13015 = G__13031;
count__13016 = G__13032;
i__13017 = G__13033;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__13034_SHARP_){
return cljs.core.zipmap.call(null,p1__13034_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__13035 = cljs.core.seq.call(null,clmap);
var chunk__13036 = null;
var count__13037 = (0);
var i__13038 = (0);
while(true){
if((i__13038 < count__13037)){
var vec__13039 = cljs.core._nth.call(null,chunk__13036,i__13038);
var c = cljs.core.nth.call(null,vec__13039,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__13039,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__13041 = seq__13035;
var G__13042 = chunk__13036;
var G__13043 = count__13037;
var G__13044 = (i__13038 + (1));
seq__13035 = G__13041;
chunk__13036 = G__13042;
count__13037 = G__13043;
i__13038 = G__13044;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13035);
if(temp__4126__auto__){
var seq__13035__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13035__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__13035__$1);
var G__13045 = cljs.core.chunk_rest.call(null,seq__13035__$1);
var G__13046 = c__4551__auto__;
var G__13047 = cljs.core.count.call(null,c__4551__auto__);
var G__13048 = (0);
seq__13035 = G__13045;
chunk__13036 = G__13046;
count__13037 = G__13047;
i__13038 = G__13048;
continue;
} else {
var vec__13040 = cljs.core.first.call(null,seq__13035__$1);
var c = cljs.core.nth.call(null,vec__13040,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__13040,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__13049 = cljs.core.next.call(null,seq__13035__$1);
var G__13050 = null;
var G__13051 = (0);
var G__13052 = (0);
seq__13035 = G__13049;
chunk__13036 = G__13050;
count__13037 = G__13051;
i__13038 = G__13052;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__13053 = cljs.core.seq.call(null,kvs);
var chunk__13054 = null;
var count__13055 = (0);
var i__13056 = (0);
while(true){
if((i__13056 < count__13055)){
var vec__13057 = cljs.core._nth.call(null,chunk__13054,i__13056);
var k = cljs.core.nth.call(null,vec__13057,(0),null);
var v = cljs.core.nth.call(null,vec__13057,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__13059 = seq__13053;
var G__13060 = chunk__13054;
var G__13061 = count__13055;
var G__13062 = (i__13056 + (1));
seq__13053 = G__13059;
chunk__13054 = G__13060;
count__13055 = G__13061;
i__13056 = G__13062;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13053);
if(temp__4126__auto__){
var seq__13053__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13053__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__13053__$1);
var G__13063 = cljs.core.chunk_rest.call(null,seq__13053__$1);
var G__13064 = c__4551__auto__;
var G__13065 = cljs.core.count.call(null,c__4551__auto__);
var G__13066 = (0);
seq__13053 = G__13063;
chunk__13054 = G__13064;
count__13055 = G__13065;
i__13056 = G__13066;
continue;
} else {
var vec__13058 = cljs.core.first.call(null,seq__13053__$1);
var k = cljs.core.nth.call(null,vec__13058,(0),null);
var v = cljs.core.nth.call(null,vec__13058,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__13067 = cljs.core.next.call(null,seq__13053__$1);
var G__13068 = null;
var G__13069 = (0);
var G__13070 = (0);
seq__13053 = G__13067;
chunk__13054 = G__13068;
count__13055 = G__13069;
i__13056 = G__13070;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__4661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4665__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__,hierarchy__4665__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__4665__auto__,method_table__4661__auto__,prefer_table__4662__auto__,method_cache__4663__auto__,cached_hierarchy__4664__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__13096,G__13097){
return G__13096.call(null,G__13097);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__13099,G__13098){
return G__13098.call(null,G__13099);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__13071_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__13100,G__13101){
return (G__13100 < G__13101);
});})(pool_size,items_seq,cur_count))
).call(null,p1__13071_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__13072_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__13103,G__13104,G__13102){
return G__13102.call(null,G__13103,G__13104);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__13072_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__13118,G__13116,G__13111,G__13109,G__13110,G__13115,G__13117,G__13112,G__13114,G__13113){
if(cljs.core.truth_((G__13109 < G__13110))){
var seq__13105_13119 = cljs.core.seq.call(null,G__13111.call(null,G__13109,G__13110));
var chunk__13106_13120 = null;
var count__13107_13121 = (0);
var i__13108_13122 = (0);
while(true){
if(cljs.core.truth_((i__13108_13122 < count__13107_13121))){
var i_13123 = cljs.core._nth.call(null,chunk__13106_13120,i__13108_13122);
var e_13124 = G__13112.call(null,G__13113.call(null,i_13123)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__13114.call(null,i_13123));
if(cljs.core.not.call(null,G__13115)){
G__13116.appendChild(e_13124);
} else {
G__13116.insertBefore(e_13124,G__13116.firstChild);
}

var G__13125 = seq__13105_13119;
var G__13126 = chunk__13106_13120;
var G__13127 = count__13107_13121;
var G__13128 = (i__13108_13122 + (1));
seq__13105_13119 = G__13125;
chunk__13106_13120 = G__13126;
count__13107_13121 = G__13127;
i__13108_13122 = G__13128;
continue;
} else {
var temp__4126__auto___13129 = cljs.core.seq.call(null,seq__13105_13119);
if(temp__4126__auto___13129){
var seq__13105_13130__$1 = temp__4126__auto___13129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13105_13130__$1)){
var c__4551__auto___13131 = cljs.core.chunk_first.call(null,seq__13105_13130__$1);
var G__13132 = cljs.core.chunk_rest.call(null,seq__13105_13130__$1);
var G__13133 = c__4551__auto___13131;
var G__13134 = cljs.core.count.call(null,c__4551__auto___13131);
var G__13135 = (0);
seq__13105_13119 = G__13132;
chunk__13106_13120 = G__13133;
count__13107_13121 = G__13134;
i__13108_13122 = G__13135;
continue;
} else {
var i_13136 = cljs.core.first.call(null,seq__13105_13130__$1);
var e_13137 = G__13112.call(null,G__13113.call(null,i_13136)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__13114.call(null,i_13136));
if(cljs.core.not.call(null,G__13115)){
G__13116.appendChild(e_13137);
} else {
G__13116.insertBefore(e_13137,G__13116.firstChild);
}

var G__13138 = cljs.core.next.call(null,seq__13105_13130__$1);
var G__13139 = null;
var G__13140 = (0);
var G__13141 = (0);
seq__13105_13119 = G__13138;
chunk__13106_13120 = G__13139;
count__13107_13121 = G__13140;
i__13108_13122 = G__13141;
continue;
}
} else {
}
}
break;
}

return G__13117.call(null,G__13118,G__13110);
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){
var r = (function (){var ret__5482__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);
setInterval(((function (ret__5482__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,ret__5482__auto__,window.location.hash);
});})(ret__5482__auto__))
,(100));

return tailrecursion.javelin.formula.call(null,((function (ret__5482__auto__){
return (function (G__13151){
return G__13151;
});})(ret__5482__auto__))
).call(null,ret__5482__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__13153,G__13152){
if(cljs.core.truth_(G__13152.call(null,"",G__13153))){
return G__13153;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl))){
var setter__5483__auto__ = setter_or_dfl;
var callback__5484__auto__ = (function (){var or__3764__auto__ = null;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5483__auto__,callback__5484__auto__){
return (function (G__13154,G__13155){
return G__13154.location.hash = G__13155;
});})(setter__5483__auto__,callback__5484__auto__))
).call(null,window,setter__5483__auto__);

setInterval(((function (setter__5483__auto__,callback__5484__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5483__auto__),window.location.hash)){
callback__5484__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5483__auto__);
} else {
return null;
}
});})(setter__5483__auto__,callback__5484__auto__))
,(100));

return setter__5483__auto__;
} else {
var r = route_cell.call(null);
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__13156,G__13157){
var or__3764__auto__ = G__13156;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return G__13157;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){
var setter__5483__auto__ = setter;
var callback__5484__auto__ = (function (){var or__3764__auto__ = callback;
if(cljs.core.truth_(or__3764__auto__)){
return or__3764__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5483__auto__,callback__5484__auto__){
return (function (G__13158,G__13159){
return G__13158.location.hash = G__13159;
});})(setter__5483__auto__,callback__5484__auto__))
).call(null,window,setter__5483__auto__);

setInterval(((function (setter__5483__auto__,callback__5484__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5483__auto__),window.location.hash)){
callback__5484__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5483__auto__);
} else {
return null;
}
});})(setter__5483__auto__,callback__5484__auto__))
,(100));

return setter__5483__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
