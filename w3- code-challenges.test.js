// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//------------------------------------ Assessment Start ------------------------------------

// jest test template:
// describe ("nameOfFunction", () => {
//     it("explains what it takes and return expectation in plain English as this is for the programmer", () => {
//         expect(nameOfFunction()).toEqual(expected return)
//     })
// })


// object template:
// const objectName = { key: value }

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "orderedFibs"
// it "takes a number > 2 and returns array of that length with the numbers of the fibonacci sequence as values"
// expect(orderedFibs(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
// expect(orderedFibs(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: orderedFibs is not defined

describe ("orderedFibs", () => {
  it("takes a number > 2 and returns array of that length with the numbers of the fibonacci sequence as values", () => {
    expect(orderedFibs(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(orderedFibs(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// output ReferenceError:  FAIL  ./w3- code-challenges.test.js
// orderedFibs is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function that takes a number > 2 parameter and returns an array with a length of the argument passed
// the fibonnaci sequence is a sequence whereby each new number is the sum of the previous two numbers 0, 1, 1, 2, 3, 5, 8...
// set up three variable to rotate and update the current fibonacci number
// input: number > 2
// output: array of length === input number
// expected result:  PASS
 
const orderedFibs = (fibArrLength) => {
  const fibArray = []
  let firstFib = 0
  let secondFib = 1
  let nextFib = 1

  if (fibArrLength > 2) {
    for (let i = 0; i < fibArrLength; i ++){
      fibArray[i] = nextFib
      nextFib = firstFib + secondFib
      firstFib = secondFib
      secondFib = nextFib 
    }
  }
  return fibArray
}

// output PASS  ./w3- code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values


// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "objectValuesSorted"
// it "takes an object and returns an array of all its values sorted in ascending order"
// expect(objectValuesSorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
// expect(objectValuesSorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: objectValuesSorted is not defined

describe ("objectValuesSorted", () => {
  it("takes an object and returns array of all its values sorted in ascending order", () => {
    expect(objectValuesSorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectValuesSorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })

// output:
// ReferenceError: objectValuesSorted is not defined  
// FAIL  ./w3- code-challenges.test.js


// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function (objectValuesSorted) that takes an object as an argument and returns an array of all its values sorted in ascending order
// use the Object.values(objectName) to create an array of the values and save it to a variable
// use .sort((a, b) => a - b) to sort the values in ascending order
// input: object of numerical values
// output: array of the object's values in ascending order
// expected result:  PASS

const objectValuesSorted = (object) => {
  let valuesArray = Object.values(object)
  valuesArray = valuesArray.sort((a, b) => a - b)
  return valuesArray
}

// output  
// PASS  ./w3- code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "accumulatedSumArray"
// it "takes an array of numbers and returns an array (same length) of the accumulating sum. Returns an empty array if given an empty array"
// expect(accumulatedSumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
// expect(accumulatedSumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
// expect(accumulatedSumArray(accountTransactions3)).toEqual([])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: reducedArray is not defined

describe ("accumulatedSumArray", () => {
  it("takes an array of numbers and returns an array (same length) of the accumulating sum. Returns an empty array if given an empty array", () => {
    expect(accumulatedSumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatedSumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatedSumArray(accountTransactions3)).toEqual([])
    })
  })

// output:
// ReferenceError: accumulatedSumArray is not defined
// FAIL  ./w3- code-challenges.test.js


// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function (accumulatedSumArray) that takes an array of numbers as an argument and returns an array (same length) of the accumulating sum. 
// Returns an empty array if given an empty array
// create variable let sum = 0; that is used to track the previous value in order to add it to the new value
// use .map(value => sum += value) to add the current value to sum and set it as the new mapped value at that index
// input: array of numerical values
// output: array of the same length with accumulated sum values
// expected result:  PASS

const accumulatedSumArray = (array) => {
  let sum = 0
  let accumulatedArray = array.map(value => sum += value)
  return accumulatedArray
}

// output  
// PASS  ./w3- code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
