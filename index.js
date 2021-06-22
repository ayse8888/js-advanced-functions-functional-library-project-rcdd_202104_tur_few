const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, param) {
      // if there is a length, it is an array. objects do not have a length.
      if(arr.length) arr.forEach(item => param(item))
      else {
        const values = Object.values(arr)
        values.forEach(item => param(item))
      }
      return arr
    },

    map: function(arr, param) {
      let newArr = []
      if(arr.length) newArr = arr.map(item => param(item))
      else {
        newArr = Object.values(arr).map(item => param(item))
      }
      return newArr
    },

    reduce: function(arr, param, acc) {
      let newArr = []
      if(acc) newArr = arr.reduce(param, acc);
      else newArr = arr.reduce(param);
      return newArr;
    },
    
    find:  function(arr, param) {
      return arr.find(param);
    },
    
    filter: function(arr, param) {
      return arr.filter(param);
    },
    
    size: function(arr) {
      if (arr.length) return arr.length;
      else return Object.keys(arr).length;
    },
    
    first: function(arr, num) {
      if (!num) return arr[0];
      let firstArr = [];
      for(let i = 0; i < num; i++) firstArr.push(arr[i]);
      return firstArr;
    },
    
    last: function(arr, num) {
      if (!num) return arr[arr.length - 1];
      let lastArr = [];
      for(let i = 1; i <= num; i++) lastArr.unshift(arr[arr.length - i]);
      return lastArr;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
