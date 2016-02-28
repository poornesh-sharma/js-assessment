exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
	  if(num%3===0 && num%5===0){
		  return 'fizzbuzz';
	  } else if(num%3 === 0) {
		  return 'fizz';
	  } else if(num%5 === 0) {
		  return 'buzz';
	  } else {
		  if(num) {
			if(isNaN(num)) {
				return false;
			} else {
				return num;				
			}
		  } else {
			  return false;
		  }
	  }
  }
};
