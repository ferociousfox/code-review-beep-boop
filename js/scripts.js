// //back end
var userString = function(userNumber){
  var userArray = [];
  for (var i = 0; i <= userNumber; i++) {
   userArray.push(i);
   if (i === 0){
     userArray[i] = " beep! "
   } else if (i === 1){
    userArray[i] = " boop! "
   } else if (i % 3 === 0){
    userArray[i] = " I'm sorry dave, I can't do that. "
  };




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
