function convert(numberInput) {
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var output = "";

  if (numberInput >= 4000) {
    alert('Please enter a number below 4000');
  } else

  for (var i = 0; i < numbers.length; i++) {
    while (numberInput >= numbers[i]) {
      output = output + romanNumerals[i];
      numberInput = numberInput - numbers[i];
    }
  }
    return output;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var numberInput = $("#number").val();
      var output2 = convert(numberInput);


    event.preventDefault();
    $("h2").append(output2);
  });
});
