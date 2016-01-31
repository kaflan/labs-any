function rpn(arr) {
    var resultStack = [];
    for (var i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number'){
        resultStack.push(arr[i]);
      } else {
        var a = resultStack.pop(); // 1
        var b = resultStack.pop(); // 2
        switch (arr[i]) {
          case '+':
            resultStack.push(a + b);
            break;
          case '-':
            resultStack.push(a - b);
            break;
          case '*':
            resultStack.push(a * b);
            break;
          case '/':
            resultStack.push(a / b);
            break;
          default:
             return false;
        }
      }
    }
    if(resultStack.length > 1){
      return false;
    } else {
      return resultStack.pop();
    }
  }


  // console.log(rpn([1, 2, '+'])); // 3
  console.log(rpn([1, 2, '+', 5, '*'])); // 15
  console.log(rpn([1, 2, '+', 5])); // false
  // console.log(rpn([1, 2, '+', '*'])); // false
  console.log(rpn([1, 2, 3, '*', '+'])); // 7
