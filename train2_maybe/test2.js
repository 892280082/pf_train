var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');

console.log(Right.of("rain").map(function(str){ return "b"+str; }));

console.log(Left.of(null).map(function(str){ return "b"+str; }));