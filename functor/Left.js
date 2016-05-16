/*!
 * Container left
 * @auther yq
 * @Copyright(c) 2016 YeQin
 * @MIT Licensed
 */

var Left = function(x){
	this.__value = x;
};

Left.of = function(x){
	return new Left(x);
};

Left.prototype.map = function(f){
	return this;
};

module.exports = Left;