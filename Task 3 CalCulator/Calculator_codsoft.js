function appendValue(value) {
    document.getElementById('result').value += value;
  }

  function calculate() {
    var expression = document.getElementById('result').value;
    var numbers = expression.split(/[-+*\/%]/);
    var operators = expression.replace(/[0-9.]/g, '').split('');
    var result = parseFloat(numbers[0]);
    for (var i = 0; i < operators.length; i++) {
      var number = parseFloat(numbers[i + 1]);
      var operator = operators[i];

      if (operator === '+') {
        result += number;
      } else if (operator === '-') {
        result -= number;
      } else if (operator === '*') {
        result *= number;
      } else if (operator === '/') {
        result /= number;
      }else if (operator === '%') {
        result %= number;
      }
    }
    // document.getElementById('result').value = result;
    document.getElementById("result").value = expression + " = " + result;

  }

  function clearResult() {
    document.getElementById('result').value = '';
  }