// 1)

function starPattern(number) {
  let str = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (i === j || j == number - i - 1) {
        str += " * ";
      } else {
        str += "   ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
starPattern(5);

//------------------------------------------------------------------------------------------------------------------------//

// 2)

function printFrequncy(arr) {
  let arrUnique = [];
  let counter = [];
  let prev;

  for (let i = 0; i < arr.length; i++) {
    if (arrUnique.indexOf(arr[i]) === -1) {
      arrUnique.push(arr[i]);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== prev) {
      counter.push(1);
    } else {
      counter[counter.length - 1]++;
    }
    prev = arr[j];
  }

  for (let k = 0; k < arrUnique.length; k++) {
    console.log(`The frequency of ${arrUnique[k]} is ${counter[k] / arr.length}`);
  }
}
printFrequncy([1, 2, 2, 3, 3, 3, 4, 5, 7, 7]);

//------------------------------------------------------------------------------------------------------------------------//


// 3)

function typeCounter(arr) {
  let numbers = 0;
  let strings = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'number') {
      numbers += 1;
    } else if (typeof(arr[i]) === 'string') {
      strings += 1;
    }
  }

  console.log(`Numbers: ${numbers}, Strings: ${strings}`);
}
typeCounter([1, '10', 'hi', 2, 3, '1243', 22, 13]);

//------------------------------------------------------------------------------------------------------------------------//


// 4)

function longestWord(str) {
  let arr = str.split(" ");
  let longest = 0;
  let maxStr;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
      maxStr = arr[i];
    }
  }

  return(maxStr);
}
console.log(longestWord('A revolution without dancing is a revolution not worth having'));

//------------------------------------------------------------------------------------------------------------------------//


// 5)

function longestSubstring(input) {
  let str = "";
  let longestSubstr = "";
  let inputArr = input.split("");

  for (let j = 0; j < inputArr.length; j++) {
    for (let i = j; i < inputArr.length; i++) {
      if (str.includes(inputArr[i]) && inputArr[i] !== " ") {
        break;
      } else if (inputArr[i] === " "); {
        str += inputArr[i];
      }
    }
    if (longestSubstr.length < str.length) {
      longestSubstr = str;
    }
    str = "";
  }
  return longestSubstr;
}
console.log(longestSubstring('there are no two words in english language more harmful than "good job".'));

//------------------------------------------------------------------------------------------------------------------------//


// 6)

function chaos(str) {
  let arr = str.split("");
  let n = 3;
  let splittedArray = [];

  function arraySplit(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      let chunk = arr.slice(i, i + 3);
      splittedArray.push(chunk);
    }
    return splittedArray;
  }
  arraySplit(arr, n);

  for (let i = 0; i < splittedArray.length; i++) {
    let insideArr = splittedArray[i];
    if (insideArr.length === n) {
      insideArr.push(insideArr.shift());  
    }
  }
  let newstr = splittedArray.join();
  newstr = newstr.replace(/,/g, "");
  return(newstr);
}
console.log(chaos("aweyoolp"));

//------------------------------------------------------------------------------------------------------------------------//


// 7)

function maxNegProd(input) {
  let prod = 1;

  for (let i = 0; i < input.length; i++) {
    if (typeof (input[i]) !== 'object') {
      return ('Invalid Argument');
    }
  }

  function maxNegative(arr) {
    let arrNegatives = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arrNegatives.push(arr[i]);
      }
    }
    let max = arrNegatives[0];
    for (let j = 0; j < arrNegatives.length; j++) {
      if (arrNegatives[j] > max) {
        max = arrNegatives[j]
      }
    }
    return max;
  }
  
  for (let i = 0; i < input.length; i++) {
    let insideArr = input[i];
    let num = maxNegative(insideArr);
    if (typeof (num) === 'number') {
      prod *= num; 
    }
  }
  
  if (prod === 1) {
    return ('No Negatives'); 
  } else {
    return prod;
  }
}
console.log(maxNegProd([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]));

//------------------------------------------------------------------------------------------------------------------------//


// 8)

function subsets(arr){
	  let subsets = [];
    let x = 0;

  if (arr.length >= 3) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        subsets[x] = [];
        subsets[x].push(arr[i]);
        subsets[x].push(arr[j]);
        subsets[x].push(arr[k]);
        x++
      }
    }
  }
  return subsets;
  } else {
    return arr;
  }
}
console.log(subsets([5, 9, 23, 0, -2, 1]));