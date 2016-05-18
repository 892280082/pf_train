var _ = require('ramda');

var IO = function(f){
	this.unsafePerformIO  = f;
};

IO.of = function(x){
	return new IO(function(){
		return x;
	});
};

IO.prototype.map = function(f){
	return new IO(_.compose(f,this.unsafePerformIO ));
};

IO.prototype.join = function(){
	return this.unsafePerformIO();
};

/**
 * Module exports.
 * @public
 */
module.exports = IO;