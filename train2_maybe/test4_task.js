var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');
var Container = require('../functor/Container');

var map = _.map;

var trace =  function(value){
	console.log('trace:',value);
	return value;
};

var res = _.compose(map(trace));

console.log('result:',res(Maybe.of(1)));