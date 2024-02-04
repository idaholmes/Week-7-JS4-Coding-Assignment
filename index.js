const ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths = [];

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
const subtractFirstFromLast = (arr) => {
  // find first element in array
  const firstAge = arr[0];

  // find last element in array by subtracting 1 from the array length
  const lastAge = arr[arr.length - 1];

  // calculate difference
  return lastAge - firstAge;
};

console.log("subtractFirstFromLast: ", subtractFirstFromLast(ages));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use a loop to iterate through the array and calculate the average age.
const calculateAverageAge = (arr) => {
  // start total at 0
  let total = 0;

  // loop through age array
  for (let i = 0; i < arr.length; i++) {
    // add value of current index to the total
    total += arr[i];
  }

  // return total divided by the number of ages to give us average
  return total / arr.length;
};

console.log("calculateAverageAge: ", calculateAverageAge(ages));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const calculateAverageNameLength = (nameArray) => {
  // start total at 0
  let total = 0;

  // loop through array
  for (let i = 0; i < nameArray.length; i++) {
    // assign total const the length of each string in the array
    total += nameArray[i].length;
  }

  // return total / array length to find average
  return total / nameArray.length;
};

console.log("calculateAverageNameLength: ", calculateAverageNameLength(names));

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const concatenateNames = (arr) => {
  // start result at empty string
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    // add each name in array to result with empty space
    result += " " + arr[i];
  }
  // return new string
  return result;
};

console.log("concatenateNames: ", concatenateNames(names));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 3: How do you access the last element of any array?
// to access the last element of an array you can find the length of the array and subtract 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 4: How do you access the first element of any array?
// to access the first element of an array you would just access the array at the 0 index - arr[0]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const addLengthOfNameToArray = (arr) => {
  // loop over name array
  for (let i = 0; i < arr.length; i++) {
    // add length of each string in array to nameLength array
    nameLengths.push(arr[i].length);
  }
};

addLengthOfNameToArray(names);
console.log("New array: ", nameLengths);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
const concatenateWordNumberOfTimes = (word, n) => {
  // start result at empty string
  let result = "";
  for (let i = 0; i < n; i++) {
    // loop however many times n is worth
    // concatenate word each time
    result += word;
  }
  return result;
};

console.log(
  "concatenateWordNumberOfTimes: ",
  concatenateWordNumberOfTimes("Hello", 3)
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const firstNameAndLastName = (firstName, lastName) => {
  // return new string with firstName and lastName with empty string inbetween
  return firstName + " " + lastName;
};

console.log("firstNameAndLastName: ", firstNameAndLastName("Julia", "Holmes"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const calculateGreaterThanOneHundred = (arr) => {
  // start greaterThanOneHundred at false
  let greaterThanOneHundred = false;
  // start total at 0
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    // loop over array and increment total value each time
    total += arr[i];
  }

  // check if total is more than 100
  if (total > 100) {
    greaterThanOneHundred = true;
  }

  return greaterThanOneHundred;
};

console.log(
  "calculateGreaterThanOneHundred: ",
  calculateGreaterThanOneHundred(ages)
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
const calculateAverage = (arr) => {
  // used same code from calculating average age earlier

  // start total at 0
  let total = 0;

  // loop through age array
  for (let i = 0; i < arr.length; i++) {
    // add value of current index to the total
    total += arr[i];
  }

  // return total divided by the number of elements in array to give us average
  return total / arr.length;
};

console.log("calculateAverage: ", calculateAverage(ages));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const compareTwoArrays = (arr1, arr2) => {
  // start totals at 0
  let arr1total = 0;
  let arr2total = 0;

  // loop over first array and assign first total a value
  for (let i = 0; i < arr1.length; i++) {
    arr1total += arr1[i];
  }

  // loop over second array and assign second total a value
  for (let i = 0; i < arr2.length; i++) {
    arr2total += arr2[i];
  }

  // see what total is more
  return arr1total > arr2total;
};

const array1 = [5, 103, 49, 15];
const array2 = [27, 390, 1];

console.log("compareTwoArrays: ", compareTwoArrays(array1, array2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => {
  // check if both conditions are true so you can buy a drink
  return isHotOutside && moneyInPocket > 10.5;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// checks to see if someones age is old enough to watch an R rated movie.
const canWatchMovieRatedR = (age) => {
  // check if age is equal to or more than age
  return age >= 17;
};
