var parseNumeral = function(inputNumber) {
  var numeralArray=["1","5","10","50","100","500","1000"];
  var romNumeralArray=["I","V","X","L","C","D","M"];
  console.log(inputNumber)
  for (i=0; i<numeralArray.length; i++){
    if (inputNumber === numeralArray[i]) {
      return romNumeralArray[i];
    };
  };
  return "please enter a better number";

};






$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("#input").val();
    console.log(parseNumeral(inputNumber));
  });
});
