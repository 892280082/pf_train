/*!
 * 一个函数式的 flickr,通过flick的API查询展示图片
 * @auther yq
 * @Copyright(c) 2016 YeQin
 * @MIT Licensed
 */

_ =R;
/**
 * Module dependencies.
 * @global
 * @jQuery - > $
 * @Ramda - > _
 */

var Impure = {
  getJSON: _.curry(function(callback, url) {
    $.getJSON(url, callback);
  }),

  setHtml: _.curry(function(sel, html) {
    $(sel).html(html);
  })
};

var url = function (term) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
};

var img = function (url) {
  return $('<img />', { src: url });
};


var srcs = _.compose(_.prop('m'),_.prop('media'));

var renderImg = _.compose(Impure.setHtml('body'),_.map(img),_.map(srcs),_.prop('items'));

var app = _.compose(Impure.getJSON(renderImg),url);

app('cat');


//等式推倒后的代码仅一行
//_.compose(Impure.getJSON(_.compose(Impure.setHtml('body'),_.map(_.compose(img,_.compose(_.prop('m'),_.prop('media')))),_.prop('items'))),url)('cat');