$(document).ready(function(){
//   retrieving the values from the form,
  $("#style_editor").submit(function(){
    event.preventDefault();
    var selector = $(this).find('input[name="selector"]').val();
    var property = $(this).find('input[name="property"]').val();
    var value = $(this).find('input[name="value"]').val();
  });
//    passing those values into the correct jQuery function for manipulating CSS, and
  $(selector)
//    binding the previous two parts to a particular event using an event handler.

});
