// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Make a loop that prints the numbers from 10 to 20.

for (let i = 10; i <= 20; i++) {
    console.log(i);
}

// 3. Make a loop that prints the numbers from -10 to 10.

for (let i = -10; i <= 10; i++) {
    console.log(i);
}

// 4. Make a loop that prints the numbers from 10 to -10.

for (let i = 10; i >= -10; i--) {
    console.log(i);
}

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

for (let i = 0, str = "Hello"; i < str.length; i++) {
    console.log(str[i]);
}

// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const toolBox = ["HTML", "CSS", "SASS", "Bootstrap", "JS"];

for (let i = 0; i < toolBox.length; i++) {
    console.log(toolBox[i]);
}

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const toolBoxPlus = ["HTML", "CSS", "SASS", "Bootstrap", "JS", 'REACT'];

for (let i = 0; i < toolBoxPlus.length; i++) {
    if (!(i % 2 === 0)) {
        console.log(toolBoxPlus[i]);
    } else {
        continue;
    }
}

// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

for (let i = 2; i < toolBoxPlus.length; i += 3) {
    console.log(toolBoxPlus[i]);
}

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < arrayOfTen.length; i += 3) {
    console.log(arrayOfTen[i]);
}

// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const sevenObjArray = [
    { counter: "count 1" },
    { counter: "count 2" },
    { counter: "count 3" },
    { counter: "count 4" },
    { counter: "count 5" },
    { counter: "count 6" },
    { counter: "count 7" },
];

for (let i = 0; i < sevenObjArray.length; i++) {
    const counterValue = sevenObjArray[i].counter;
    console.log(counterValue);
}

// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

let randWholeNum = Math.floor(Math.random() * 101);
for (let i = 0; i < 100; i++) {
  if (randWholeNum === i) {
    break;
  } 
    console.log(i);
}
