const _ = require('lodash');

const numbers = [33, 14, 15, 16, 22, 27];

_.each(numbers, function(number, i){
 console.log(number);
});