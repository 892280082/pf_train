var IO = require('../functor/IO');
var _ = require('ramda');

var map = _.map;
var compose = _.compose;
var curry = _.curry;

var join = function(mma){ return mma.join(); }

var log = function(x) {
  return new IO(function() { console.log(x); return x; });
}

//  setStyle :: Selector -> CSSProps -> IO DOM
var setStyle = curry(function(sel, props) {
  return new IO(function() { return jQuery(sel).css(props); });
});

//  getItem :: String -> IO String
var getItem = function(key) {
  return new IO(function() { return localStorage.getItem(key); });
};

//  applyPreferences :: String -> IO DOM
var applyPreferences = compose(
  join, map(setStyle('#main')), join, map(log), map(JSON.parse), getItem
);


applyPreferences('preferences').unsafePerformIO();