var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');

var trace = function(state){
	console.log('tace:',state);
	return state;
};

_.map = _.curry(function(f,ftor){
	return ftor.map(f);
});

var safeProp = _.curry(function(x, obj) {
  return new Maybe(obj[x]);
});

var safeHead = safeProp(0);

var firstAddressStreet = _.compose(
  _.map(_.map(safeProp('street'))), _.map(safeHead), safeProp('addresses')
);

var res = firstAddressStreet(
  {addresses: [{street: {name: 'Mulburry', number: 8402}, postcode: "WC2N" }]}
);

console.log('result',res);