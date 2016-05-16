/*!
 * 测试Maybe Container的使用
 * @auther yq
 * @Copyright(c) 2016 YeQin
 * @MIT Licensed
 * @重点！！
 * ------------------------------------------------
 *
 * 1._.map的实现。  如果第二个参数是对象，则默认视为Container对象。
 * 并调用该对象的map方法。
 * 
 * map = _.curry(function(f,pojo){
 * 	if(!Array.isArray(pojo)){
 * 		return pojo.map(f)
 * 	}
 * })
 * 
 * ------------------------------------------------
 */

var _ = require('ramda');
var Maybe = require('../functor/Maybe');

var safeHead = function(xs) {
  return Maybe.of(xs[0]);
};

var streeName = _.compose(_.map(_.prop('street')),safeHead,_.prop('addresses'));

var result = streeName({addresses:[{street: "Shady Ln.", number: 4201}]});

console.log('result',result);