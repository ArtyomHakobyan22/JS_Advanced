// 1)

  function allOdd(number) {
    number += "";
    let result;

    if (number[0] % 2 === 0) {
      return false;
    } else {
      result = true;
    }

    if (number.length > 1) {
      number = number.slice(1)
      return allOdd(number)
    } else {
      return result;
    }
  }
  console.log(allOdd(5333179));

// 2)

  function smallestPositive(arr) {
    arr.sort((a, b) => a - b);

    if (arr.length === 1 && arr[0] < 0) {
      return -1;
    } else if (arr.length === 1) {
      return arr[0];
    } else if (arr[0] < 0) {
      arr.shift();
      return smallestPositive(arr);
    } else if (arr.length > 1) {
      arr.pop();
      return smallestPositive(arr);
    }
  }
  console.log(smallestPositive([56, -9, 87, -23, 0, -105, 55, 1]));

  // -------------------------------------Improved------------------------------------- //
  
  function smallestPositive(arr) {
    return arr.filter(e => e > 0).sort((a, b) => a - b)[0]
  }

  // 3)

  function fibonacci(number) {
    if (number === 0) {
      return [];
    } else if (number === 1) {
      return [1];
    } else if (number === 2) {
      return [1, 1];
    } else {
      let series = fibonacci(number - 1);
      series.push(series[series.length - 1] + series[series.length - 2]);
      return series;
    }
  }
  console.log(fibonacci(13));

  // 4)

  function arrayFlatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(arrayFlatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(arrayFlatten([1, [3, 4, [1, 2]], 10]));

  // 5)

  function digitSumUp(number) {
    let sum = 0;
    let numStr = number + "";
    let arr = numStr.split("");

    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }

    if (sum > 9) {
      return digitSumUp(sum);
    } else {
      return sum;
    }
  }
  console.log(digitSumUp(993));

  // --------------------------Improved-------------------------- //

  function digitSumUp(num) {
     let num1 = num.toString().split("").map(Number).reduce((t, e) => t +=e)
     return num1 > 9 ? digitSumUp(num1) : num1
  }
