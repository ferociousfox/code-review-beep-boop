// //back end
var userString = function(userNumber){
  var userArray = [];
  for (var i = 0; i <= userNumber; i++) {
   userArray.push(i);
   if(i % 3 === 0){
     userArray[i] = "I'm sorry Dave, I cannot do that"
   };
  };
  return userArray;
};





//front end
$(document).ready (function() {
  $('#hal9000').submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($('#user-number').val());
    $('#output').text(userString(userNumber));
  });
});
