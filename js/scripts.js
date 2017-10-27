// //back end
var userString = function(userNumber){
  var userArray = [];
  alert('1')
  for (var i = 0; i <= userNumber; i++) {
    userArray.push(i);
    console.log(userArray)
  };
  return userArray;
};





//front end
$(document).ready (function() {
  $('#hal9000').submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($('#user-number').val());
    console.log(userNumber)
    $('#output').text(userString(userNumber));
  });
});
