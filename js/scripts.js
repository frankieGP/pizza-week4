
//front-end
$(document).ready(function() {
  var pizza =
 $("#size").submit(function(event) {
    $("#topping").submit(function(event) {

    event.preventDefault();
    var size = $("#pizza-size").val()
    var topping = $("input:radio[name=topping]:checked").val();

    $("#size-result").text(size);
    $("#topping-result").text(topping);


  });
});
