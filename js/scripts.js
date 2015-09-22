var pizza = function(topping, size, quantity) {

    // var topping = 1.5;
    // var size = 3.5;
    // var quantity = parseInt(document.getElementById('getQuantity'),value, 10);
    // var quantity = 3;

    var total = (topping + size) * quantity;
    return total;
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    var t = parseInt($("input#t").val());
    var s = parseInt($("input#s").val());
    var q = parseInt($("input#q").val());
    var total = (t + s) * q;

    $(".numeric").text(numeric);
    if (!result) {
      $(".not").text("not");
    }

    $("#result"),show();
    event.preventDefault();
  });
  return total;
});
