const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, param) {
      if(arr.length) arr.forEach(item => param(item))
      else {
        const values = Object.values(arr)
        values.forEach(item => param(item))
      }
      return arr
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
