// 1)

  function arrayCompare(arr, number) {
    let result = [];
    
    result = arr.filter(num => num > number )

    if (result.length > 1) {
      return result;
    } else {
      return ("Such values do not exist");
    }
  }
  console.log(arrayCompare([10, 25, 16, -5, 30, 15, 24], 16));

  //-----------------------------------------------------------------------------------------------//

  // 2)

  function evenNumDigArray(a, b) {
    let result = [];

    function digitEvenCheck(number) {
      let str = "" + number
      for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 !== 0) {
          return false;
        }
      }
      return true;
    }

    for (let i = a; i <= b; i++) {
      if (i % 2 === 0 && digitEvenCheck(i) === true) {
        result.push(i);
      }
    }

    if (result.length === 0) {
      return("Such numbers do not exist");
    }

    return result;
  }
  console.log(evenNumDigArray(19, 42));

  //-----------------------------------------------------------------------------------------------//

  // 3)

  function sortErrorIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return i + 1;
      }
    }
    return - 1;
  }
  console.log(sortErrorIndex([-9, -4, -4, -3, 12, 4, 5]));

  //-----------------------------------------------------------------------------------------------//

  // 4)

  function maxPairProd(arr) {
    let max = arr[0] * arr[1];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] * arr[i + 1] > max) {
        max = arr[i] * arr[i + 1];
      }
    }
    return max;
  }
  console.log(maxPairProd([2, 4, 5, 6, 1, 3, 3, 7]));

  //-----------------------------------------------------------------------------------------------//

  // 5)

  function misssingElementCount(arr) {
    let middle = arr.length - 2;
    let min = arr[0];
    let max = arr[0];
    let wholeArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }

    for (let i = min; i <= max; i++) {
      wholeArr.push(i);
    }
    let count = wholeArr.length - middle - 2;
    return count;
  }
  console.log(misssingElementCount([4, 1, 5, 10]));
  console.log(misssingElementCount([1, 4, 5, 10]));
  console.log(misssingElementCount([13, -3, 4, 15, 0]));

  //-----------------------------------------------------------------------------------------------//

  // 6)

  function arrElemSum(input) {
    let result = [];

    function arrSum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }

    for (let j = 0; j < input.length; j++) {
      let inputArr = input[j];
      let element = arrSum(inputArr);
      result.push(element); 
    }
    return result;
  }
  console.log(arrElemSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));

  //-----------------------------------------------------------------------------------------------//

  // 7)

  function arrElemMultiplier(arr) {
    let evenArr = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2) {
        evenArr.push(arr[i]);
      }
    }

    for (let j = 0; j < evenArr.length; j++) {
      result.push(evenArr[j] * evenArr.length) 
    }
    return result;
  }
  console.log(arrElemMultiplier([5, 4, 78, 0, -3, 7]));

  
