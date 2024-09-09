/**
 * @type {number[]}
 */
let numbers = [10, 20, 30, 40, 50];

/**
 * Calculates the sum of numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * @type {number}
 */
let totalSum = calculateSum(numbers);
console.log("Total Sum: " + totalSum);

/**
 * Finds the largest number in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

/**
 * @type {number}
 */
let largestNumber = findLargest(numbers);
console.log("Largest Number: " + largestNumber);

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {boolean} isStudent
 */

/**
 * @type {Person}
 */
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

/**
 * Displays person details.
 * @param {Person} person
 */
function displayPersonDetails(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Is Student: " + (person.isStudent ? "Yes" : "No"));
}

displayPersonDetails(person);

/**
 * Checks if a number is even.
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + " is " + (isEven(numbers[i]) ? "Even" : "Odd"));
}

/**
 * @type {string[]}
 */
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

/**
 * Displays all fruits.
 * @param {string[]} fruitArr
 */
function displayFruits(fruitArr) {
    for (let i = 0; i < fruitArr.length; i++) {
        console.log(fruitArr[i]);
    }
}

displayFruits(fruits);

/**
 * Counts characters in a string.
 * @param {string} str
 * @returns {number}
 */
function countCharacters(str) {
    return str.length;
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + " has " + countCharacters(fruits[i]) + " characters");
}

/**
 * @typedef {Object} Student
 * @property {string} name
 * @property {number} grade
 */

/**
 * @type {Student[]}
 */
let students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 92 },
    { name: "Mark", grade: 78 },
    { name: "Emma", grade: 89 }
];

/**
 * Calculates the average grade.
 * @param {Student[]} studentArr
 * @returns {number}
 */
function calculateAverageGrade(studentArr) {
    let totalGrade = 0;
    for (let i = 0; i < studentArr.length; i++) {
        totalGrade += studentArr[i].grade;
    }
    return totalGrade / studentArr.length;
}

let averageGrade = calculateAverageGrade(students);
console.log("Average Grade: " + averageGrade);

/**
 * Finds the top student.
 * @param {Student[]} studentArr
 * @returns {Student}
 */
function findTopStudent(studentArr) {
    let topStudent = studentArr[0];
    for (let i = 1; i < studentArr.length; i++) {
        if (studentArr[i].grade > topStudent.grade) {
            topStudent = studentArr[i];
        }
    }
    return topStudent;
}

let topStudent = findTopStudent(students);
console.log("Top Student: " + topStudent.name + " with grade " + topStudent.grade);

/**
 * @type {boolean[]}
 */
let boolArray = [true, false, true, true, false];

/**
 * Counts true values in the array.
 * @param {boolean[]} boolArr
 * @returns {number}
 */
function countTrueValues(boolArr) {
    let count = 0;
    for (let i = 0; i < boolArr.length; i++) {
        if (boolArr[i] === true) {
            count++;
        }
    }
    return count;
}

let trueCount = countTrueValues(boolArray);
console.log("Number of true values: " + trueCount);

/**
 * @type {number[][]}
 */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/**
 * Displays matrix.
 * @param {number[][]} mat
 */
function displayMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i].join(" "));
    }
}

displayMatrix(matrix);

/**
 * Transposes the matrix.
 * @param {number[][]} mat
 * @returns {number[][]}
 */
function transposeMatrix(mat) {
    let transposed = [];
    for (let i = 0; i < mat[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < mat.length; j++) {
            transposed[i][j] = mat[j][i];
        }
    }
    return transposed;
}

let transposedMatrix = transposeMatrix(matrix);
console.log("Transposed Matrix:");
displayMatrix(transposedMatrix);
