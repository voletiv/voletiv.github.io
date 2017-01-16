//http://stackoverflow.com/questions/11873570/angularjs-for-loop-with-numbers-ranges
var myApp = angular.module('myApp', []);
myApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});
