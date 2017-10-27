//back end


//front end
$(document).ready (function() {
  $('#input').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('#user-number').val());
    $(#output).text(userString(userNumber));
  });
});
