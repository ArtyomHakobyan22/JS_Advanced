// 1)

function uniqueCheck(arr) {
    return new Set(arr).size === arr.length;
  }
  console.log(uniqueCheck([1, 2, 3, 4, 5, 76, 5674]));

//---------------------------------------------------------------------------------------------------------------------------//

// 2)

function evenQuadraticSum(arr) {
    return arr.filter(i => i % 2 === 0).map((el) => el *= el).reduce((total, el) => total += el);
  }
  console.log(evenQuadraticSum([1, 2, 3, 4, 5, 6, 7, 8]));

//---------------------------------------------------------------------------------------------------------------------------//

// 3)

function checkPalindrome(str) {
    let arr = str.split("");
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[arr.length - i - 1]) {
        return false;
      }
    }
    return true
  }
  console.log(checkPalindrome("racecar"));

//---------------------------------------------------------------------------------------------------------------------------//

// 4)

function correctOption(str, arr) {
    let str1 = str.split('').sort().join('');
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i].split('').sort().join('');
      arr1.push(element)
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === str1) {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
  console.log(correctOption('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));