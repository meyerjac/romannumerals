var getRomanNumerals = function(numberinput){
  var realNumber = parseInt(numberinput);
  var ones = 0;
  var tens = 0;
  var hunds = 0;
  var thous = 0;

  if (realNumber>=1000 && realNumber<4000){
  thous = numberinput[0]+"0"+"0"+"0";
  hunds = numberinput[1]+"0"+"0";
  tens = numberinput[2]+"0";
  ones = numberinput[3];
}
  else if (realNumber>=100 && realNumber<1000){
  hunds = numberinput[0]+"0"+"0";
  tens = numberinput[1]+"0";
  ones = numberinput[2];
}
else if (realNumber>=10 && realNumber<100){
  tens = numberinput[0]+"0";
  ones = numberinput[1];
}
else if(realNumber<10 && realNumber>0){
    ones = numberinput[0];
  }
  else {
    return "Bad Input";
  }
  var output = getRomanThous(thous) + getRomanHunds(hunds) + getRomanTens(tens) + getRomanOnes(ones)
  return output;
}
var getRomanThous = function(numberinput){
  var realNumber = parseInt(numberinput);
  if (realNumber === 9000){
    return "YY";
  }
  if (realNumber < 10000){
    var romanArray=[];
    if (realNumber===1000){
      return "M";
    }
    for (var i=realNumber; i>0; i= i-1000){
      romanArray.push("M");
    }
    if (romanArray.length >= 5){
      for (i=0; i<5; i++){
        romanArray.pop();
      }
        romanArray.push("Y")
        romanArray = romanArray.reverse()
    }
    return romanArray.join("");
}
  return "Please enter valid input"
}

var getRomanHunds = function(numberinput){
  var realNumber = parseInt(numberinput);
  if (realNumber === 900){
    return "CM";
  }
  if (realNumber < 1000){
    var romanArray=[];
    if (realNumber===100){
      return "C";
    }
    for (var i=realNumber; i>0; i= i-100){
      romanArray.push("C");
    }
    if (romanArray.length >= 5){
      for (i=0; i<5; i++){
        romanArray.pop();
      }
        romanArray.push("D")
        romanArray = romanArray.reverse()
    }
    return romanArray.join("");
}
  return "Please enter valid input"
}


var getRomanTens = function(numberinput){
  var realNumber = parseInt(numberinput);
  if (realNumber === 90){
    return "XC";
  }
  if (realNumber < 100){
    var romanArray=[];
    if (realNumber===10){
      return "X";
    }
    for (var i=realNumber; i>0; i= i-10){
      romanArray.push("X");
    }
    if (romanArray.length >= 5){
      console.log("Loop starts")
      for (i=0; i<5; i++){
        romanArray.pop();
      }
        romanArray.push("L")
        romanArray = romanArray.reverse()
    }
    return romanArray.join("");
}
  return "Please enter valid input"
}

var getRomanOnes = function(numberinput){
  var realNumber = parseInt(numberinput);
  if (realNumber === 9){
    return "IX";
  }
  if (numberinput<10){
    var romanArray=[];
    for (i=realNumber; i>0; i--){
      romanArray.push("I");
    }
    if (romanArray.length >= 5){
      for (i=0; i<5; i++){
        romanArray.pop();
      }
        romanArray.push("V")
        romanArray = romanArray.reverse()

    }
    return romanArray.join("");
}
  return "Please enter valid input"
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("#input").val();
    console.log(getRomanNumerals(inputNumber));
  });
});
