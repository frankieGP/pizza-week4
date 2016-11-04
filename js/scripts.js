//back-end
var toppingE = ["Artichoke", "Feta" ]
var toppingC = ["Pineapple", "Olives"]
var pizzaSize = ["Small", "Medium", "Large", "XL"]
function Pizza(pizzaSize, topping) {
  this.pizzaSize = pizzaSize;
  this.topping = topping;
  this.price = 10;
}

  Pizza.prototype.pizzaPrice = function() {
    if(toppingE.includes(this.topping) === true){
      this.price +=2;
    }
    if(toppingC.includes(this.topping) === true){
      this.price +=1;
    }
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
  }
//front-end
$(document).ready(function() {
 //$("#size").submit(function(event) {
   event.preventDefault();
   var size = $("#pizza-size").val()

    $("#topping").submit(function(event) {


    var topping = $("input:radio[name=topping]:checked").val();
alert(topping);
    $("#size-result").text(size);
    $("#topping-result").text(topping);

  });
});
