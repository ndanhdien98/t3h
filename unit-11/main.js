// Exercise 1
function makeLoopArray1(duplicate, number) {
  const LoopArray = []
  for (let i = 0; i < number; i++) {
      LoopArray[i] = duplicate
  }
  console.log(LoopArray)
}

function makeLoopArray2(duplicate, number) {
  const LoopArray = []
  for (let i = 0; i < number; i++) {
      LoopArray.push(duplicate)
  }
  console.log(LoopArray)
}

// Exercise 2
function reverseArray(array) {
  const arrayReversed = []
  for (let i = 0; i < array.length; i++) {
    arrayReversed.unshift(array[i])
  }
  console.log(arrayReversed)
}

// Exercise 3
function deleteFalseEle(array) {
  const trueArray = array.filter(Boolean)
  console.log(trueArray)
}

// Exercise 4 (not done)
const makeObjectWithArray = data => {
  const object = {}
  data.forEach(element => {
    object[element[0]] = element[1]
  })
  console.log(object)
}

// Exercise 5
const sortArray = arr => {
  const sortedArr = arr.sort()
  return sortedArr
}

// Exercise 6
const checkObject = data => {
  if (typeof(data) === 'object' && !Array.isArray(data)) {
    return true
  } else {
    return false
  }
}

// Exercise 7


// Exercise 8
const deleteEle = arr => {
  if (arr.length < 5) {
    console.log('The length of array must bigger than or equal to 5')
  } else {
    arr.splice(2,2)
    console.log(arr)
  }
}

// Exercise 9
