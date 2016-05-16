/*!
 * Container 容器
 * @auther yq
 * @Copyright(c) 2016 YeQin
 * @MIT Licensed
 * @API
 */


var Container = function(x) {
  this.__value = x;
};

Container.of = function(x) { return new Container(x); };

Container.prototype.map = function(f){
	return Container.of(f(this.__value));
};

/**
 * Module exports.
 * @public
 */
module.exports = Container;