
let numbers = [10, 20, 30, 40, 50];


function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


let totalSum = calculateSum(numbers);
console.log("Total Sum: " + totalSum);


function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


let largestNumber = findLargest(numbers);
console.log("Largest Number: " + largestNumber);



let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};


function displayPersonDetails(person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Is Student: " + (person.isStudent ? "Yes" : "No"));
}

displayPersonDetails(person);


function isEven(num) {
    return num % 2 === 0;
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + " is " + (isEven(numbers[i]) ? "Even" : "Odd"));
}


let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


function displayFruits(fruitArr) {
    for (let i = 0; i < fruitArr.length; i++) {
        console.log(fruitArr[i]);
    }
}

displayFruits(fruits);


function countCharacters(str) {
    return str.length;
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + " has " + countCharacters(fruits[i]) + " characters");
}


let students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 92 },
    { name: "Mark", grade: 78 },
    { name: "Emma", grade: 89 }
];


function calculateAverageGrade(studentArr) {
    let totalGrade = 0;
    for (let i = 0; i < studentArr.length; i++) {
        totalGrade += studentArr[i].grade;
    }
    return totalGrade / studentArr.length;
}

let averageGrade = calculateAverageGrade(students);
console.log("Average Grade: " + averageGrade);


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


let boolArray = [true, false, true, true, false];


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


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function displayMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i].join(" "));
    }
}

displayMatrix(matrix);


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
