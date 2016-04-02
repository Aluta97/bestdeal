var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50"

//use split method to make my string an Array

var newAvos = avos.split(",");


var avocados = [];

newAvos.forEach(function(avos) {
  //remove the the "R and for" and push them in the new aaray
  avocados.push(avos.split(" for R"));
});
// console.log(avocados);



var pArray = [];
//Find the price of the Avo in Each deal and push them in the array;
avocados.forEach(function(avos) {

  var price = avos[1]; //price is index 1 of avos
  var Quantity = avos[0];

  var pricePerAvo = price / Quantity;

  pArray.push(pricePerAvo.toFixed(2));

});
console.log(pArray, "pricePerAvo")
  //finding the cheapest and the expensive deal:
var min = Math.max.apply(null, pArray);
var max = Math.min.apply(null, pArray);

console.log(min, "cheapest deal");
console.log(max, "expensive deal")

//finding the avarage :
var total = 0;
//ACCess all the numbers in your array:
for (var i = 0; i < pArray.length; i++) {
  total += Number(pArray[i]); //converting my aaray of string to a number
};
var average = total / pArray.length;
console.log(average.toFixed(2), "average price");
