  // Iterative

  function binarySearchIterative(arr, element) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let result = arr[mid];

      if (result === element) {
        return (`Index: ${mid}`);
      } else if (result > element) {
        end = mid - 1;
      } else if (result < element) {
        start = mid + 1
      }
    }
    return ('No such element in the array');
  }

  console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8], 4));
  console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8], 8));
  console.log(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8], 9));

  //---------------------------------------------------------------------------------------------------------------------------------------------------//

  // Recursive

  function binarySearchRecursive(arr1, start1, end1, element1) {
    let mid1 = Math.floor((start1 + end1) / 2);
    
    if (start1 > end1) {
      return ('No such element in the array');
    }

    if (arr1[mid1] === element1) {
      return (`Index: ${mid1}`);
    } else {
      return element1 > arr1[mid1] ? binarySearchRecursive(arr1, mid1 + 1, end1, element1) : binarySearchRecursive(arr1, start1, mid1 -1, element1)
    }
  }

  console.log(binarySearchRecursive([10, 11, 12, 13, 14, 15 , 16, 17], 0, [10, 11, 12, 13, 14, 15 , 16, 17].length - 1, 13));
  console.log(binarySearchRecursive([10, 11, 12, 13, 14, 15 , 16, 17], 0, [10, 11, 12, 13, 14, 15 , 16, 17].length - 1, 17));
  console.log(binarySearchRecursive([10, 11, 12, 13, 14, 15 , 16, 17], 0, [10, 11, 12, 13, 14, 15 , 16, 17].length - 1, 18));