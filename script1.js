// -------------------------------
// a. File linking check
// -------------------------------
console.log("✅ JavaScript file linked successfully!");


// -------------------------------
// b. Select elements using selectors
// -------------------------------
const heading = document.getElementById("heading");
const paragraph = document.querySelector(".para");
const button = document.querySelector("button");

console.log("Heading Text:", heading.textContent);
console.log("Paragraph Text:", paragraph.textContent);
console.log("First Button Text:", button.textContent);


// -------------------------------
// c. Implement Event Listener
// -------------------------------
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  alert("✅ Button clicked using Event Listener!");
});


// -------------------------------
// d. Handle Click Events for multiple buttons
// -------------------------------
document.getElementById("btn1").addEventListener("click", () => {
  alert("Button 1 was clicked!");
});

document.getElementById("btn2").addEventListener("click", () => {
  alert("Button 2 was clicked!");
});


// -------------------------------
// e. Functions
// -------------------------------

// i. Function Declaration
function greet() {
  console.log("Hello from Function Declaration!");
}
greet();

// ii. Function Expression
const sayHi = function() {
  console.log("Hello from Function Expression!");
};
sayHi();

// iii. Arrow Function
const welcome = () => {
  console.log("Hello from Arrow Function!");
};
welcome();
