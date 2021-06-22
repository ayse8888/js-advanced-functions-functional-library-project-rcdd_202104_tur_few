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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
