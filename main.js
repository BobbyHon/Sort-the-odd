function sortArray(array) {
    let arrayEven = []
    let arrayEvenPos = []
    let arrayAnswer = []
    
    array.forEach(function(x, i){
      if (x % 2 == 0)
        {
          arrayEven.push(x)
          arrayEvenPos.push(i)
        }
      else{
        arrayAnswer.push(x)
      }
    })
    arrayAnswer = arrayAnswer.sort((a, b) => a - b)
    
    arrayEven.forEach(function(x, i){
      let start = arrayEvenPos[i]
      arrayAnswer.splice(start, 0, x)
    })
    return arrayAnswer
  }