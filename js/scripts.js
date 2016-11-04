// //back-end
var toppingE = ["Artichoke", "Feta" ]
var toppingC = ["Pineapple", "Olives"]
var pizzaSize = ["Small", "Medium", "Large", "XL"]

function Pizza(pizzaSize, topping) {
  this.pizzaSize = pizzaSize;
  this.topping = topping;
  this.price = 10;
}

  Pizza.prototype.pizzaPrice = function() {
    if(this.pizzaSize === "Small"){
      this.price +=1;
    }
    if(this.pizzaSize === "Medium"){
      this.price +=2;
    }
    if(this.pizzaSize === "Large"){
      this.price +=3;
    }
    if(this.pizzaSize === "XL"){
      this.price +=4;
    }
    if(toppingC.includes(this.topping) === true){
      this.price +=1;
    }
    if(toppingE.includes(this.topping) === true){
      this.price +=2;
    }

  }
//front-end
$(document).ready(function() {
 $("#pizza-builder").submit(function(event) {
   event.preventDefault();

    var inputSize = $("#pizza-size").val()
    var inputTopping = $("#topping";).val();

    var userPizza = new Pizza(inputSize, inputTopping);

    userPizza.pizzaPrice();

    //$(".results").show();
    $("#size-result").text(userPizza.pizzaSize);
    $("#topping-result").text(userPizza.topping);
    $("#pizza-price").text(userPizza.price);
      //console.log(userTicket);
      //console.log("After processing: $" + userTicket.price);

  });
});
