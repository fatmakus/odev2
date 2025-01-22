function calculate(operator) {
  
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    let result;

    switch (operator) {
      case '+':
        result = input1 + input2;
        break;
      case '-':
        result = input1 - input2;
        break;
      case '*':
        result = input1 * input2;
        break;
      case '/':
        result = input2 !== 0 ? input1 / input2 : 'Undefined';
        break;
    }

    document.getElementById('result').value = result;
  }