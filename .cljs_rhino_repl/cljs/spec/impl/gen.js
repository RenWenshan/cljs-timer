// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__50795__auto__,writer__50796__auto__,opt__50797__auto__){
return cljs.core._write.call(null,writer__50796__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53493 = arguments.length;
var i__51298__auto___53494 = (0);
while(true){
if((i__51298__auto___53494 < len__51297__auto___53493)){
args__51304__auto__.push((arguments[i__51298__auto___53494]));

var G__53495 = (i__51298__auto___53494 + (1));
i__51298__auto___53494 = G__53495;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq53492){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53492));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53497 = arguments.length;
var i__51298__auto___53498 = (0);
while(true){
if((i__51298__auto___53498 < len__51297__auto___53497)){
args__51304__auto__.push((arguments[i__51298__auto___53498]));

var G__53499 = (i__51298__auto___53498 + (1));
i__51298__auto___53498 = G__53499;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq53496){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53496));
});

var g_QMARK__53500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_53501 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__53500){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__53500))
,null));
var mkg_53502 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__53500,g_53501){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__53500,g_53501))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__53500,g_53501,mkg_53502){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__53500).call(null,x);
});})(g_QMARK__53500,g_53501,mkg_53502))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__53500,g_53501,mkg_53502){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_53502).call(null,gfn);
});})(g_QMARK__53500,g_53501,mkg_53502))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__53500,g_53501,mkg_53502){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_53501).call(null,generator);
});})(g_QMARK__53500,g_53501,mkg_53502))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__51389__auto___53522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__51389__auto___53522){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53523 = arguments.length;
var i__51298__auto___53524 = (0);
while(true){
if((i__51298__auto___53524 < len__51297__auto___53523)){
args__51304__auto__.push((arguments[i__51298__auto___53524]));

var G__53525 = (i__51298__auto___53524 + (1));
i__51298__auto___53524 = G__53525;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53522))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53522),args);
});})(g__51389__auto___53522))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__51389__auto___53522){
return (function (seq53503){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53503));
});})(g__51389__auto___53522))
;


var g__51389__auto___53526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__51389__auto___53526){
return (function cljs$spec$impl$gen$list(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53527 = arguments.length;
var i__51298__auto___53528 = (0);
while(true){
if((i__51298__auto___53528 < len__51297__auto___53527)){
args__51304__auto__.push((arguments[i__51298__auto___53528]));

var G__53529 = (i__51298__auto___53528 + (1));
i__51298__auto___53528 = G__53529;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53526))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53526),args);
});})(g__51389__auto___53526))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__51389__auto___53526){
return (function (seq53504){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53504));
});})(g__51389__auto___53526))
;


var g__51389__auto___53530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__51389__auto___53530){
return (function cljs$spec$impl$gen$map(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53531 = arguments.length;
var i__51298__auto___53532 = (0);
while(true){
if((i__51298__auto___53532 < len__51297__auto___53531)){
args__51304__auto__.push((arguments[i__51298__auto___53532]));

var G__53533 = (i__51298__auto___53532 + (1));
i__51298__auto___53532 = G__53533;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53530))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53530),args);
});})(g__51389__auto___53530))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__51389__auto___53530){
return (function (seq53505){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53505));
});})(g__51389__auto___53530))
;


var g__51389__auto___53534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__51389__auto___53534){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53535 = arguments.length;
var i__51298__auto___53536 = (0);
while(true){
if((i__51298__auto___53536 < len__51297__auto___53535)){
args__51304__auto__.push((arguments[i__51298__auto___53536]));

var G__53537 = (i__51298__auto___53536 + (1));
i__51298__auto___53536 = G__53537;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53534))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53534),args);
});})(g__51389__auto___53534))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__51389__auto___53534){
return (function (seq53506){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53506));
});})(g__51389__auto___53534))
;


var g__51389__auto___53538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__51389__auto___53538){
return (function cljs$spec$impl$gen$set(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53539 = arguments.length;
var i__51298__auto___53540 = (0);
while(true){
if((i__51298__auto___53540 < len__51297__auto___53539)){
args__51304__auto__.push((arguments[i__51298__auto___53540]));

var G__53541 = (i__51298__auto___53540 + (1));
i__51298__auto___53540 = G__53541;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53538))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53538),args);
});})(g__51389__auto___53538))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__51389__auto___53538){
return (function (seq53507){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53507));
});})(g__51389__auto___53538))
;


var g__51389__auto___53542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__51389__auto___53542){
return (function cljs$spec$impl$gen$vector(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53543 = arguments.length;
var i__51298__auto___53544 = (0);
while(true){
if((i__51298__auto___53544 < len__51297__auto___53543)){
args__51304__auto__.push((arguments[i__51298__auto___53544]));

var G__53545 = (i__51298__auto___53544 + (1));
i__51298__auto___53544 = G__53545;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53542))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53542),args);
});})(g__51389__auto___53542))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__51389__auto___53542){
return (function (seq53508){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53508));
});})(g__51389__auto___53542))
;


var g__51389__auto___53546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__51389__auto___53546){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53547 = arguments.length;
var i__51298__auto___53548 = (0);
while(true){
if((i__51298__auto___53548 < len__51297__auto___53547)){
args__51304__auto__.push((arguments[i__51298__auto___53548]));

var G__53549 = (i__51298__auto___53548 + (1));
i__51298__auto___53548 = G__53549;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53546))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53546),args);
});})(g__51389__auto___53546))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__51389__auto___53546){
return (function (seq53509){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53509));
});})(g__51389__auto___53546))
;


var g__51389__auto___53550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__51389__auto___53550){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53551 = arguments.length;
var i__51298__auto___53552 = (0);
while(true){
if((i__51298__auto___53552 < len__51297__auto___53551)){
args__51304__auto__.push((arguments[i__51298__auto___53552]));

var G__53553 = (i__51298__auto___53552 + (1));
i__51298__auto___53552 = G__53553;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53550))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53550),args);
});})(g__51389__auto___53550))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__51389__auto___53550){
return (function (seq53510){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53510));
});})(g__51389__auto___53550))
;


var g__51389__auto___53554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__51389__auto___53554){
return (function cljs$spec$impl$gen$elements(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53555 = arguments.length;
var i__51298__auto___53556 = (0);
while(true){
if((i__51298__auto___53556 < len__51297__auto___53555)){
args__51304__auto__.push((arguments[i__51298__auto___53556]));

var G__53557 = (i__51298__auto___53556 + (1));
i__51298__auto___53556 = G__53557;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53554))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53554),args);
});})(g__51389__auto___53554))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__51389__auto___53554){
return (function (seq53511){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53511));
});})(g__51389__auto___53554))
;


var g__51389__auto___53558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__51389__auto___53558){
return (function cljs$spec$impl$gen$bind(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53559 = arguments.length;
var i__51298__auto___53560 = (0);
while(true){
if((i__51298__auto___53560 < len__51297__auto___53559)){
args__51304__auto__.push((arguments[i__51298__auto___53560]));

var G__53561 = (i__51298__auto___53560 + (1));
i__51298__auto___53560 = G__53561;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53558))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53558),args);
});})(g__51389__auto___53558))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__51389__auto___53558){
return (function (seq53512){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53512));
});})(g__51389__auto___53558))
;


var g__51389__auto___53562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__51389__auto___53562){
return (function cljs$spec$impl$gen$choose(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53563 = arguments.length;
var i__51298__auto___53564 = (0);
while(true){
if((i__51298__auto___53564 < len__51297__auto___53563)){
args__51304__auto__.push((arguments[i__51298__auto___53564]));

var G__53565 = (i__51298__auto___53564 + (1));
i__51298__auto___53564 = G__53565;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53562))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53562),args);
});})(g__51389__auto___53562))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__51389__auto___53562){
return (function (seq53513){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53513));
});})(g__51389__auto___53562))
;


var g__51389__auto___53566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__51389__auto___53566){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53567 = arguments.length;
var i__51298__auto___53568 = (0);
while(true){
if((i__51298__auto___53568 < len__51297__auto___53567)){
args__51304__auto__.push((arguments[i__51298__auto___53568]));

var G__53569 = (i__51298__auto___53568 + (1));
i__51298__auto___53568 = G__53569;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53566))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53566),args);
});})(g__51389__auto___53566))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__51389__auto___53566){
return (function (seq53514){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53514));
});})(g__51389__auto___53566))
;


var g__51389__auto___53570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__51389__auto___53570){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53571 = arguments.length;
var i__51298__auto___53572 = (0);
while(true){
if((i__51298__auto___53572 < len__51297__auto___53571)){
args__51304__auto__.push((arguments[i__51298__auto___53572]));

var G__53573 = (i__51298__auto___53572 + (1));
i__51298__auto___53572 = G__53573;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53570))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53570),args);
});})(g__51389__auto___53570))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__51389__auto___53570){
return (function (seq53515){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53515));
});})(g__51389__auto___53570))
;


var g__51389__auto___53574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__51389__auto___53574){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53575 = arguments.length;
var i__51298__auto___53576 = (0);
while(true){
if((i__51298__auto___53576 < len__51297__auto___53575)){
args__51304__auto__.push((arguments[i__51298__auto___53576]));

var G__53577 = (i__51298__auto___53576 + (1));
i__51298__auto___53576 = G__53577;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53574))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53574),args);
});})(g__51389__auto___53574))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__51389__auto___53574){
return (function (seq53516){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53516));
});})(g__51389__auto___53574))
;


var g__51389__auto___53578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__51389__auto___53578){
return (function cljs$spec$impl$gen$sample(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53579 = arguments.length;
var i__51298__auto___53580 = (0);
while(true){
if((i__51298__auto___53580 < len__51297__auto___53579)){
args__51304__auto__.push((arguments[i__51298__auto___53580]));

var G__53581 = (i__51298__auto___53580 + (1));
i__51298__auto___53580 = G__53581;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53578))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53578),args);
});})(g__51389__auto___53578))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__51389__auto___53578){
return (function (seq53517){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53517));
});})(g__51389__auto___53578))
;


var g__51389__auto___53582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__51389__auto___53582){
return (function cljs$spec$impl$gen$return(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53583 = arguments.length;
var i__51298__auto___53584 = (0);
while(true){
if((i__51298__auto___53584 < len__51297__auto___53583)){
args__51304__auto__.push((arguments[i__51298__auto___53584]));

var G__53585 = (i__51298__auto___53584 + (1));
i__51298__auto___53584 = G__53585;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53582))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53582),args);
});})(g__51389__auto___53582))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__51389__auto___53582){
return (function (seq53518){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53518));
});})(g__51389__auto___53582))
;


var g__51389__auto___53586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__51389__auto___53586){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53587 = arguments.length;
var i__51298__auto___53588 = (0);
while(true){
if((i__51298__auto___53588 < len__51297__auto___53587)){
args__51304__auto__.push((arguments[i__51298__auto___53588]));

var G__53589 = (i__51298__auto___53588 + (1));
i__51298__auto___53588 = G__53589;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53586))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53586),args);
});})(g__51389__auto___53586))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__51389__auto___53586){
return (function (seq53519){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53519));
});})(g__51389__auto___53586))
;


var g__51389__auto___53590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__51389__auto___53590){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53591 = arguments.length;
var i__51298__auto___53592 = (0);
while(true){
if((i__51298__auto___53592 < len__51297__auto___53591)){
args__51304__auto__.push((arguments[i__51298__auto___53592]));

var G__53593 = (i__51298__auto___53592 + (1));
i__51298__auto___53592 = G__53593;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53590))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53590),args);
});})(g__51389__auto___53590))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__51389__auto___53590){
return (function (seq53520){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53520));
});})(g__51389__auto___53590))
;


var g__51389__auto___53594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__51389__auto___53594){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53595 = arguments.length;
var i__51298__auto___53596 = (0);
while(true){
if((i__51298__auto___53596 < len__51297__auto___53595)){
args__51304__auto__.push((arguments[i__51298__auto___53596]));

var G__53597 = (i__51298__auto___53596 + (1));
i__51298__auto___53596 = G__53597;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51389__auto___53594))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51389__auto___53594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51389__auto___53594),args);
});})(g__51389__auto___53594))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__51389__auto___53594){
return (function (seq53521){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53521));
});})(g__51389__auto___53594))
;

var g__51402__auto___53619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__51402__auto___53619){
return (function cljs$spec$impl$gen$any(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53620 = arguments.length;
var i__51298__auto___53621 = (0);
while(true){
if((i__51298__auto___53621 < len__51297__auto___53620)){
args__51304__auto__.push((arguments[i__51298__auto___53621]));

var G__53622 = (i__51298__auto___53621 + (1));
i__51298__auto___53621 = G__53622;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53619))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53619){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53619);
});})(g__51402__auto___53619))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__51402__auto___53619){
return (function (seq53598){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53598));
});})(g__51402__auto___53619))
;


var g__51402__auto___53623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__51402__auto___53623){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53624 = arguments.length;
var i__51298__auto___53625 = (0);
while(true){
if((i__51298__auto___53625 < len__51297__auto___53624)){
args__51304__auto__.push((arguments[i__51298__auto___53625]));

var G__53626 = (i__51298__auto___53625 + (1));
i__51298__auto___53625 = G__53626;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53623))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53623){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53623);
});})(g__51402__auto___53623))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__51402__auto___53623){
return (function (seq53599){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53599));
});})(g__51402__auto___53623))
;


var g__51402__auto___53627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__51402__auto___53627){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53628 = arguments.length;
var i__51298__auto___53629 = (0);
while(true){
if((i__51298__auto___53629 < len__51297__auto___53628)){
args__51304__auto__.push((arguments[i__51298__auto___53629]));

var G__53630 = (i__51298__auto___53629 + (1));
i__51298__auto___53629 = G__53630;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53627))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53627){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53627);
});})(g__51402__auto___53627))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__51402__auto___53627){
return (function (seq53600){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53600));
});})(g__51402__auto___53627))
;


var g__51402__auto___53631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__51402__auto___53631){
return (function cljs$spec$impl$gen$char(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53632 = arguments.length;
var i__51298__auto___53633 = (0);
while(true){
if((i__51298__auto___53633 < len__51297__auto___53632)){
args__51304__auto__.push((arguments[i__51298__auto___53633]));

var G__53634 = (i__51298__auto___53633 + (1));
i__51298__auto___53633 = G__53634;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53631))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53631){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53631);
});})(g__51402__auto___53631))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__51402__auto___53631){
return (function (seq53601){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53601));
});})(g__51402__auto___53631))
;


var g__51402__auto___53635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__51402__auto___53635){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53636 = arguments.length;
var i__51298__auto___53637 = (0);
while(true){
if((i__51298__auto___53637 < len__51297__auto___53636)){
args__51304__auto__.push((arguments[i__51298__auto___53637]));

var G__53638 = (i__51298__auto___53637 + (1));
i__51298__auto___53637 = G__53638;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53635))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53635){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53635);
});})(g__51402__auto___53635))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__51402__auto___53635){
return (function (seq53602){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53602));
});})(g__51402__auto___53635))
;


var g__51402__auto___53639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__51402__auto___53639){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53640 = arguments.length;
var i__51298__auto___53641 = (0);
while(true){
if((i__51298__auto___53641 < len__51297__auto___53640)){
args__51304__auto__.push((arguments[i__51298__auto___53641]));

var G__53642 = (i__51298__auto___53641 + (1));
i__51298__auto___53641 = G__53642;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53639))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53639){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53639);
});})(g__51402__auto___53639))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__51402__auto___53639){
return (function (seq53603){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53603));
});})(g__51402__auto___53639))
;


var g__51402__auto___53643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__51402__auto___53643){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53644 = arguments.length;
var i__51298__auto___53645 = (0);
while(true){
if((i__51298__auto___53645 < len__51297__auto___53644)){
args__51304__auto__.push((arguments[i__51298__auto___53645]));

var G__53646 = (i__51298__auto___53645 + (1));
i__51298__auto___53645 = G__53646;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53643))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53643){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53643);
});})(g__51402__auto___53643))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__51402__auto___53643){
return (function (seq53604){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53604));
});})(g__51402__auto___53643))
;


var g__51402__auto___53647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__51402__auto___53647){
return (function cljs$spec$impl$gen$double(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53648 = arguments.length;
var i__51298__auto___53649 = (0);
while(true){
if((i__51298__auto___53649 < len__51297__auto___53648)){
args__51304__auto__.push((arguments[i__51298__auto___53649]));

var G__53650 = (i__51298__auto___53649 + (1));
i__51298__auto___53649 = G__53650;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53647))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53647){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53647);
});})(g__51402__auto___53647))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__51402__auto___53647){
return (function (seq53605){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53605));
});})(g__51402__auto___53647))
;


var g__51402__auto___53651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__51402__auto___53651){
return (function cljs$spec$impl$gen$int(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53652 = arguments.length;
var i__51298__auto___53653 = (0);
while(true){
if((i__51298__auto___53653 < len__51297__auto___53652)){
args__51304__auto__.push((arguments[i__51298__auto___53653]));

var G__53654 = (i__51298__auto___53653 + (1));
i__51298__auto___53653 = G__53654;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53651))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53651){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53651);
});})(g__51402__auto___53651))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__51402__auto___53651){
return (function (seq53606){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53606));
});})(g__51402__auto___53651))
;


var g__51402__auto___53655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__51402__auto___53655){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53656 = arguments.length;
var i__51298__auto___53657 = (0);
while(true){
if((i__51298__auto___53657 < len__51297__auto___53656)){
args__51304__auto__.push((arguments[i__51298__auto___53657]));

var G__53658 = (i__51298__auto___53657 + (1));
i__51298__auto___53657 = G__53658;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53655))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53655){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53655);
});})(g__51402__auto___53655))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__51402__auto___53655){
return (function (seq53607){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53607));
});})(g__51402__auto___53655))
;


var g__51402__auto___53659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__51402__auto___53659){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53660 = arguments.length;
var i__51298__auto___53661 = (0);
while(true){
if((i__51298__auto___53661 < len__51297__auto___53660)){
args__51304__auto__.push((arguments[i__51298__auto___53661]));

var G__53662 = (i__51298__auto___53661 + (1));
i__51298__auto___53661 = G__53662;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53659))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53659){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53659);
});})(g__51402__auto___53659))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__51402__auto___53659){
return (function (seq53608){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53608));
});})(g__51402__auto___53659))
;


var g__51402__auto___53663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__51402__auto___53663){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53664 = arguments.length;
var i__51298__auto___53665 = (0);
while(true){
if((i__51298__auto___53665 < len__51297__auto___53664)){
args__51304__auto__.push((arguments[i__51298__auto___53665]));

var G__53666 = (i__51298__auto___53665 + (1));
i__51298__auto___53665 = G__53666;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53663))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53663){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53663);
});})(g__51402__auto___53663))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__51402__auto___53663){
return (function (seq53609){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53609));
});})(g__51402__auto___53663))
;


var g__51402__auto___53667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__51402__auto___53667){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53668 = arguments.length;
var i__51298__auto___53669 = (0);
while(true){
if((i__51298__auto___53669 < len__51297__auto___53668)){
args__51304__auto__.push((arguments[i__51298__auto___53669]));

var G__53670 = (i__51298__auto___53669 + (1));
i__51298__auto___53669 = G__53670;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53667))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53667){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53667);
});})(g__51402__auto___53667))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__51402__auto___53667){
return (function (seq53610){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53610));
});})(g__51402__auto___53667))
;


var g__51402__auto___53671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__51402__auto___53671){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53672 = arguments.length;
var i__51298__auto___53673 = (0);
while(true){
if((i__51298__auto___53673 < len__51297__auto___53672)){
args__51304__auto__.push((arguments[i__51298__auto___53673]));

var G__53674 = (i__51298__auto___53673 + (1));
i__51298__auto___53673 = G__53674;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53671))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53671){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53671);
});})(g__51402__auto___53671))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__51402__auto___53671){
return (function (seq53611){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53611));
});})(g__51402__auto___53671))
;


var g__51402__auto___53675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__51402__auto___53675){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53676 = arguments.length;
var i__51298__auto___53677 = (0);
while(true){
if((i__51298__auto___53677 < len__51297__auto___53676)){
args__51304__auto__.push((arguments[i__51298__auto___53677]));

var G__53678 = (i__51298__auto___53677 + (1));
i__51298__auto___53677 = G__53678;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53675))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53675){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53675);
});})(g__51402__auto___53675))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__51402__auto___53675){
return (function (seq53612){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53612));
});})(g__51402__auto___53675))
;


var g__51402__auto___53679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__51402__auto___53679){
return (function cljs$spec$impl$gen$string(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53680 = arguments.length;
var i__51298__auto___53681 = (0);
while(true){
if((i__51298__auto___53681 < len__51297__auto___53680)){
args__51304__auto__.push((arguments[i__51298__auto___53681]));

var G__53682 = (i__51298__auto___53681 + (1));
i__51298__auto___53681 = G__53682;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53679))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53679){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53679);
});})(g__51402__auto___53679))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__51402__auto___53679){
return (function (seq53613){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53613));
});})(g__51402__auto___53679))
;


var g__51402__auto___53683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__51402__auto___53683){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53684 = arguments.length;
var i__51298__auto___53685 = (0);
while(true){
if((i__51298__auto___53685 < len__51297__auto___53684)){
args__51304__auto__.push((arguments[i__51298__auto___53685]));

var G__53686 = (i__51298__auto___53685 + (1));
i__51298__auto___53685 = G__53686;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53683))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53683){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53683);
});})(g__51402__auto___53683))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__51402__auto___53683){
return (function (seq53614){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53614));
});})(g__51402__auto___53683))
;


var g__51402__auto___53687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__51402__auto___53687){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53688 = arguments.length;
var i__51298__auto___53689 = (0);
while(true){
if((i__51298__auto___53689 < len__51297__auto___53688)){
args__51304__auto__.push((arguments[i__51298__auto___53689]));

var G__53690 = (i__51298__auto___53689 + (1));
i__51298__auto___53689 = G__53690;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53687))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53687){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53687);
});})(g__51402__auto___53687))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__51402__auto___53687){
return (function (seq53615){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53615));
});})(g__51402__auto___53687))
;


var g__51402__auto___53691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__51402__auto___53691){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53692 = arguments.length;
var i__51298__auto___53693 = (0);
while(true){
if((i__51298__auto___53693 < len__51297__auto___53692)){
args__51304__auto__.push((arguments[i__51298__auto___53693]));

var G__53694 = (i__51298__auto___53693 + (1));
i__51298__auto___53693 = G__53694;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53691))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53691){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53691);
});})(g__51402__auto___53691))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__51402__auto___53691){
return (function (seq53616){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53616));
});})(g__51402__auto___53691))
;


var g__51402__auto___53695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__51402__auto___53695){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53696 = arguments.length;
var i__51298__auto___53697 = (0);
while(true){
if((i__51298__auto___53697 < len__51297__auto___53696)){
args__51304__auto__.push((arguments[i__51298__auto___53697]));

var G__53698 = (i__51298__auto___53697 + (1));
i__51298__auto___53697 = G__53698;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53695))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53695){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53695);
});})(g__51402__auto___53695))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__51402__auto___53695){
return (function (seq53617){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53617));
});})(g__51402__auto___53695))
;


var g__51402__auto___53699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__51402__auto___53699){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53700 = arguments.length;
var i__51298__auto___53701 = (0);
while(true){
if((i__51298__auto___53701 < len__51297__auto___53700)){
args__51304__auto__.push((arguments[i__51298__auto___53701]));

var G__53702 = (i__51298__auto___53701 + (1));
i__51298__auto___53701 = G__53702;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});})(g__51402__auto___53699))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51402__auto___53699){
return (function (args){
return cljs.core.deref.call(null,g__51402__auto___53699);
});})(g__51402__auto___53699))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__51402__auto___53699){
return (function (seq53618){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53618));
});})(g__51402__auto___53699))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__51304__auto__ = [];
var len__51297__auto___53705 = arguments.length;
var i__51298__auto___53706 = (0);
while(true){
if((i__51298__auto___53706 < len__51297__auto___53705)){
args__51304__auto__.push((arguments[i__51298__auto___53706]));

var G__53707 = (i__51298__auto___53706 + (1));
i__51298__auto___53706 = G__53707;
continue;
} else {
}
break;
}

var argseq__51305__auto__ = ((((0) < args__51304__auto__.length))?(new cljs.core.IndexedSeq(args__51304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__51305__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__53703_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53703_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq53704){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53704));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__53708_SHARP_){
return (new Date(p1__53708_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map