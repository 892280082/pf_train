var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');
var Container = require('../functor/Container');
var IO = require('../functor/IO');
var Task = require('data.task');

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


var chain = _.curry(function(f,m){
	return m.map(f).join();
});

// 练习 1
// ==========
// 给定一个 user，使用 safeProp 和 map/join 或 chain 安全地获取 sreet 的 name

var safeProp = curry(function (x, o) { return Maybe.of(o[x]); });

var user = {
  id: 2,
  name: "albert",
  address: {
    street: {
      number: 22,
      name: 'Walnut St'
    }
  }
};

var res1 = compose(chain(safeProp('name')),chain(safeProp('street')),safeProp('address'));

console.log('res1:',res1(user));

// 练习 2
// ==========
// 使用 getFile 获取文件名并删除目录，所以返回值仅仅是文件，然后以纯的方式打印文件

var deleteFile = function(x){
	return Maybe.of(x);	
};

var getFile = function() {
  return new IO(function(){ return 'fileName'; });
};

var pureLog = function(x) {
  return new IO(function(){
    console.log(x);
    return 'logged ' + x;
  });
};

var res2 = compose(chain(pureLog),getFile);
console.log('res2:',res2().unsafePerformIO());


// 练习 3
// ==========
// 使用 getPost() 然后以 post 的 id 调用 getComments()
var getPost = function(i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res({ id: i, title: 'Love them tasks' });
    }, 300);
  });
};

var getComments = function(i) {
  return new Task(function (rej, res) {
    setTimeout(function () {
      res([
        {post_id: i, body: "This book should be illegal"},
        {post_id: i, body: "Monads are like smelly shallots"}
      ]);
    }, 300);
  });
};

//  getJSON :: String -> {} -> Task(Error, JSON)
var getJSON = curry(function(url, params) {
  return new Task(function(reject, result) {
  	setTimeout(()=>{
  		result({title:'hello'});	
  	},100);
  });
});

console.log(getJSON('/video', {id: 10}).map(_.prop('title')).fork(function(){
	
},function(result){
	console.log('result',result);
}));


