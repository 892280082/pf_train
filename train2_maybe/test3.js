var _ = require('ramda');
var Maybe = require('../functor/Maybe');
var Left = require('../functor/Left');
var Right = require('../functor/Right');
var Container = require('../functor/Container');

// 练习 1
// ==========
// 使用 _.add(x,y) 和 _.map(f,x) 创建一个能让 functor 里的值增加的函数
 var res1 = _.compose(_.map(_.add(1)));
 console.log(res1(Container.of(1)));


//练习 2
// ==========
// 使用 _.head 获取列表的第一个元素
 var res2 = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']).map(_.head);
 console.log('res2',res2);

// 练习 3
// ==========
// 使用 safeProp 和 _.head 找到 user 的名字的首字母
var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

var user = { id: 2, name: "Albert" };

var trace = function(value){
	console.log("trace:",value);
	return value;
};

var strToArray = function(str){
	console.log('str',str);
	return str.split('');
};


var res3 = _.compose(_.map(_.head),_.map(strToArray),safeProp('name'))(user);
 console.log('res3',res3);