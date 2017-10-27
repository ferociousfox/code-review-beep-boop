// //back end
var userString = function(number){
  for (var i = 0; i < number; i++)
  var index = result.indexOf(i);
  result.push(i);
};


//front end
$(document).ready (function() {
  $('#input').submit(function(event){
    event.preventDefault();
    $('#output').empty();
    var userNumber = parseInt($('#user-number').val());
    var output = countUp(userNumber);

    output.forEach(function(_numberList){
      $('#output').append('<li>' + _numberList + '</li>')
    });
  });
});
