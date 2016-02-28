exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	  return arr.indexOf(item);
  },

  sum : function(arr) {
	return arr.reduce(function(a, b) {
		return a + b;
	});
  },

  remove : function(arr, item) {
	  arr= arr.filter(function(num) { return num !== item;});
	  return arr;
  },

  removeWithoutCopy : function(arr, item) {
	  arr= arr.filter(function(num) { return num !== item;});
	  return arr;
  },

  append : function(arr, item) {
	  arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
	  arr.pop();
	  return arr;
  },

  prepend : function(arr, item) {
	  arr.unshift(item);
	  return arr;
  },

  curtail : function(arr) {
	  arr.shift();
	  return arr;
  },

  concat : function(arr1, arr2) {
	  return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
	  arr.splice(index, 0, item);
	  return arr;
  },

  count : function(arr, item) {
	  arr = arr.filter(function(num) { return num === item;});
	  return arr.length;
  },

  duplicates : function(arr) {
	  return _.uniq(arr);
  },

  square : function(arr) {
	  var squares = arr.map(function(num) {
		  return num*num;
	  });
	  return squares;
  },

  findAllOccurrences : function(arr, target) {
	  var indicies = [];
	  arr.map(function(char1, index, arr) {
		  if(char1 === target) {
			indicies.push(index);
		  }
	  });
	  return indicies;
  }
};
