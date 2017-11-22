// //back end
var userString = function(userNumber){
  var userArray = [];
  for (var i = 0; i <= userNumber; i++) {
   if (i === 0){
     userArray.push(" beep! ")
   } else if (i === 1){
    userArray.push(" boop! ")
   } else if (i % 3 === 0){
    userArray.push(" I'm sorry dave, I can't do that. ")
   } else {
    userArray.push(i);
  }
};
return userArray;
};






//front end
$(document).ready (function() {
  $('#hal9000').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    var userNumber = parseInt($('#user-number').val());
    $('#output').append(userString(userNumber));
  });
});
