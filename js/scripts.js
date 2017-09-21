function convert(numberInput) {
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var output = "";

  for (var i = 0; i < numbers.length; i++) {
    while (numberInput >= numbers[i]) {
      output = output + romanNumerals[i];
      numberInput = numberInput - numbers[i];
    }
  }
    alert(output);
  return output;

    alert("hello");
}
$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var numberInput = $("#number").val();
      convert(numberInput);
    event.preventDefault();
  });
});
