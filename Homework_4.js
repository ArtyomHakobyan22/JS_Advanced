// 1)

function arrCut(arr) {
    if (arr.length === 0 || arr.length === 1) {
      return [];
    } else {
      let result = arrCut(arr.splice(0, arr.length - 1));
      result.push(arr[0]);
      return result;
    }
  }
  console.log(arrCut([1, 2, 3, 4, 5]))

  //----------------------------------------------------------------------------------------------------------//

  // 2)

  let obj = {
    a: 1,
    b: 2,
    c: 2,
    d: 2,
    e: 3,
    f: 4,
    g: 2,
  }
  
  function objPairSwap(obj) {
    let newObj = {};
    let arr = [];

    for (let key in obj) {
      if (newObj.hasOwnProperty(obj[key]) === true) {
        arr.push(key);
        newObj[obj[key]].push(key);
        arr = [];
      } else {
        newObj[obj[key]] = [key];
      }
    }

    for (let key in newObj) {
      if (newObj[key].length === 1) {
        newObj[key] = key[0];
      }
    }
    return newObj;
  }
  console.log(objPairSwap(obj))

  //----------------------------------------------------------------------------------------------------------//

  // 3)

  let arr = [
    {
      book: 'Catcher in the Rye',
      readStatus: true,
      percent: 40,
    },
    {
      book: 'Animal Farm',
      readStatus: true,
      percent: 20,
    },
    {
      book: 'Solaris',
      readStatus: false,
      percent: 90,
    },
    {
      book: 'The Fall',
      readStatus: true,
      percent: 50,
    },
    {
      book: 'White Nights',
      readStatus: false,
      percent: 60,
    },
    {
      book: 'After Dark',
      readStatus: true,
      percent: 70,
    },
  ]
  
  function arrOfObjectsSort(input) {
    return input.filter((item) => item.readStatus === true).sort((a, b) => b.percent - a.percent);
  }
  console.log(arrOfObjectsSort(arr));

  //----------------------------------------------------------------------------------------------------------//

  // 4)

  function arrRotate(arr, number) {
    if (number === 1) {
      arr.push(arr.shift());
      return arr;
    } else if (number === -1) {
      arr.unshift(arr.pop());
      return arr;
    } else if (number > 1) {
      let result = arrRotate(arr, number - 1);
      result.push(arr.shift());
      return result;
    } else if (number < 1) {
      let result = arrRotate(arr, number + 1);
      result.unshift(arr.pop());
      return result;
    }
  }
  console.log(arrRotate([1, 2, 3, 4, 5], 3))

  //----------------------------------------------------------------------------------------------------------//

  // 5)

  let arr = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
  ];

  function createTree(arr, parent) {
    let result = {};

    let node = arr.filter((el) => el.parent == parent);
    if (node.length == 0) {
      return {};
    } else {
      for (let i of node) {
        result[i.id] = createTree(arr, i.id);
      }
    }
    return result;
  }
  console.log(createTree(arr));

  //----------------------------------------------------------------------------------------------------------//

  // 6)

  function subsets(arr, n) {
    let combs, head, tail;
    
    if (n > arr.length || n <= 0) {
      return [];
    } else if (n == arr.length) {
      return [arr];
    } else if (n == 1) {
      combs = [];
      
      for (i = 0; i < arr.length; i++) {
        combs.push([arr[i]]);
      }
      return combs;
    } else {
      combs = [];
      
      for (let i = 0; i < arr.length - n + 1; i++) {
        head = arr.slice(i, i + 1);
        tail = subsets(arr.slice(i + 1), n - 1);

        for (let j = 0; j < tail.length; j++) {
          combs.push(head.concat(tail[j]));
        }
      }
      return combs;
    }
  }
  console.log(subsets([1, 2, 3, 4, 5], 3))

  //----------------------------------------------------------------------------------------------------------//

  // 7)

  function MappableObject() {
    this.map = function map(func) {
                let newObj= {};
                for (let key in this) {
                  newObj[key] = func(this[key], key, this)
                  return newObj;
                }
              };
  }

  let rrr = new MappableObject();
  console.log(rrr instanceof MappableObject);

