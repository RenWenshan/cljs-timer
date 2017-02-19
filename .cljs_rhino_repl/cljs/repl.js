// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52437){
var map__52462 = p__52437;
var map__52462__$1 = ((((!((map__52462 == null)))?((((map__52462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52462):map__52462);
var m = map__52462__$1;
var n = cljs.core.get.call(null,map__52462__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52464_52486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52465_52487 = null;
var count__52466_52488 = (0);
var i__52467_52489 = (0);
while(true){
if((i__52467_52489 < count__52466_52488)){
var f_52490 = cljs.core._nth.call(null,chunk__52465_52487,i__52467_52489);
cljs.core.println.call(null,"  ",f_52490);

var G__52491 = seq__52464_52486;
var G__52492 = chunk__52465_52487;
var G__52493 = count__52466_52488;
var G__52494 = (i__52467_52489 + (1));
seq__52464_52486 = G__52491;
chunk__52465_52487 = G__52492;
count__52466_52488 = G__52493;
i__52467_52489 = G__52494;
continue;
} else {
var temp__4657__auto___52495 = cljs.core.seq.call(null,seq__52464_52486);
if(temp__4657__auto___52495){
var seq__52464_52496__$1 = temp__4657__auto___52495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52464_52496__$1)){
var c__51003__auto___52497 = cljs.core.chunk_first.call(null,seq__52464_52496__$1);
var G__52498 = cljs.core.chunk_rest.call(null,seq__52464_52496__$1);
var G__52499 = c__51003__auto___52497;
var G__52500 = cljs.core.count.call(null,c__51003__auto___52497);
var G__52501 = (0);
seq__52464_52486 = G__52498;
chunk__52465_52487 = G__52499;
count__52466_52488 = G__52500;
i__52467_52489 = G__52501;
continue;
} else {
var f_52502 = cljs.core.first.call(null,seq__52464_52496__$1);
cljs.core.println.call(null,"  ",f_52502);

var G__52503 = cljs.core.next.call(null,seq__52464_52496__$1);
var G__52504 = null;
var G__52505 = (0);
var G__52506 = (0);
seq__52464_52486 = G__52503;
chunk__52465_52487 = G__52504;
count__52466_52488 = G__52505;
i__52467_52489 = G__52506;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52507 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__50184__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__50184__auto__)){
return or__50184__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52507);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52507)))?cljs.core.second.call(null,arglists_52507):arglists_52507));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52468_52508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52469_52509 = null;
var count__52470_52510 = (0);
var i__52471_52511 = (0);
while(true){
if((i__52471_52511 < count__52470_52510)){
var vec__52472_52512 = cljs.core._nth.call(null,chunk__52469_52509,i__52471_52511);
var name_52513 = cljs.core.nth.call(null,vec__52472_52512,(0),null);
var map__52475_52514 = cljs.core.nth.call(null,vec__52472_52512,(1),null);
var map__52475_52515__$1 = ((((!((map__52475_52514 == null)))?((((map__52475_52514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52475_52514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52475_52514):map__52475_52514);
var doc_52516 = cljs.core.get.call(null,map__52475_52515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52517 = cljs.core.get.call(null,map__52475_52515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52513);

cljs.core.println.call(null," ",arglists_52517);

if(cljs.core.truth_(doc_52516)){
cljs.core.println.call(null," ",doc_52516);
} else {
}

var G__52518 = seq__52468_52508;
var G__52519 = chunk__52469_52509;
var G__52520 = count__52470_52510;
var G__52521 = (i__52471_52511 + (1));
seq__52468_52508 = G__52518;
chunk__52469_52509 = G__52519;
count__52470_52510 = G__52520;
i__52471_52511 = G__52521;
continue;
} else {
var temp__4657__auto___52522 = cljs.core.seq.call(null,seq__52468_52508);
if(temp__4657__auto___52522){
var seq__52468_52523__$1 = temp__4657__auto___52522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52468_52523__$1)){
var c__51003__auto___52524 = cljs.core.chunk_first.call(null,seq__52468_52523__$1);
var G__52525 = cljs.core.chunk_rest.call(null,seq__52468_52523__$1);
var G__52526 = c__51003__auto___52524;
var G__52527 = cljs.core.count.call(null,c__51003__auto___52524);
var G__52528 = (0);
seq__52468_52508 = G__52525;
chunk__52469_52509 = G__52526;
count__52470_52510 = G__52527;
i__52471_52511 = G__52528;
continue;
} else {
var vec__52477_52529 = cljs.core.first.call(null,seq__52468_52523__$1);
var name_52530 = cljs.core.nth.call(null,vec__52477_52529,(0),null);
var map__52480_52531 = cljs.core.nth.call(null,vec__52477_52529,(1),null);
var map__52480_52532__$1 = ((((!((map__52480_52531 == null)))?((((map__52480_52531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52480_52531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52480_52531):map__52480_52531);
var doc_52533 = cljs.core.get.call(null,map__52480_52532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52534 = cljs.core.get.call(null,map__52480_52532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52530);

cljs.core.println.call(null," ",arglists_52534);

if(cljs.core.truth_(doc_52533)){
cljs.core.println.call(null," ",doc_52533);
} else {
}

var G__52535 = cljs.core.next.call(null,seq__52468_52523__$1);
var G__52536 = null;
var G__52537 = (0);
var G__52538 = (0);
seq__52468_52508 = G__52535;
chunk__52469_52509 = G__52536;
count__52470_52510 = G__52537;
i__52471_52511 = G__52538;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__52482 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52483 = null;
var count__52484 = (0);
var i__52485 = (0);
while(true){
if((i__52485 < count__52484)){
var role = cljs.core._nth.call(null,chunk__52483,i__52485);
var temp__4657__auto___52539__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52539__$1)){
var spec_52540 = temp__4657__auto___52539__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_52540));
} else {
}

var G__52541 = seq__52482;
var G__52542 = chunk__52483;
var G__52543 = count__52484;
var G__52544 = (i__52485 + (1));
seq__52482 = G__52541;
chunk__52483 = G__52542;
count__52484 = G__52543;
i__52485 = G__52544;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__52482);
if(temp__4657__auto____$1){
var seq__52482__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52482__$1)){
var c__51003__auto__ = cljs.core.chunk_first.call(null,seq__52482__$1);
var G__52545 = cljs.core.chunk_rest.call(null,seq__52482__$1);
var G__52546 = c__51003__auto__;
var G__52547 = cljs.core.count.call(null,c__51003__auto__);
var G__52548 = (0);
seq__52482 = G__52545;
chunk__52483 = G__52546;
count__52484 = G__52547;
i__52485 = G__52548;
continue;
} else {
var role = cljs.core.first.call(null,seq__52482__$1);
var temp__4657__auto___52549__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52549__$2)){
var spec_52550 = temp__4657__auto___52549__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_52550));
} else {
}

var G__52551 = cljs.core.next.call(null,seq__52482__$1);
var G__52552 = null;
var G__52553 = (0);
var G__52554 = (0);
seq__52482 = G__52551;
chunk__52483 = G__52552;
count__52484 = G__52553;
i__52485 = G__52554;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map