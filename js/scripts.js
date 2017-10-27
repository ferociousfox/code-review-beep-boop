// //back end
var userString = function(userNumber){
  var result = [];
  console.log(result)
  for (var i = 0; i <= userNumber; i++) {
    var index = result.indexOf(i);
    result.push(i);
  };
alert("1");
};




//front end
$(document).ready (function() {
  $('#hal9000').submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($('#user-number').val());
    console.log(userNumber)
    var output = userString(userNumber);
    $('#output').text(result);
  });
});
