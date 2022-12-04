// Code your solution here


function findMatching (arr, name){
    return arr.filter(function(nam){
        if (name.toLowerCase() === nam.toLowerCase()){
          return name
        }
    })
}

// function fuzzyMatch(arr, letter) {
//     return arr.filter(function(lets) {
//       if (letter.toLowerCase() === lets[0].toLowerCase()) {
//         return lets
//       }
//     })
//   }

function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }

  function matchName(arr, nam) {
    return arr.filter(function(na) {
      if (na.name === nam) {
        return nam
      }
    })
  }