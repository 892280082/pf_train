var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');
var Container = require('../functor/Container');

var map = _.map;
var compose = _.compose;
var curry = _.curry;

var join = function(functor){
	return functor.join();
};

var trace =  function(value){
	console.log('trace:',value);
	return value;
};


var safeProp = curry(function(x,obj){
	return new Maybe.of(obj[x]);
});

var safeHead = safeProp(0);

var firstAddressStreet = compose(map(map(safeProp('street'))),map(safeHead),safeProp('addresses'));





var rest = firstAddressStreet(
  {addresses: [{street: {name: 'Mulburry', number: 8402}, postcode: "WC2N" }]}
);

console.log('rest:',map(map(map(trace)))(rest));

