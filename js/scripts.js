
//front-end
$(document).ready(function() {
  $("#size").click(function() {
    event.preventDefault();
    var size = $("#pizza-size").val()

    $("#size-result").text(size)
  });
});
