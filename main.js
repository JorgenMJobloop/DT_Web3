const myText = document.getElementById("my-text");
const myButton = document.getElementById("my-btn1");
const newButton = document.getElementById("my-btn2");

// myNumber ligger i global-scope
let myNumber = 0;


// myNumber++ tilsvarer 0 + 1 + 1... osv.
myButton.addEventListener("click", () => {
    let counter = "Counter = " + myNumber++;
    console.log(counter);
    return myText.textContent = counter;
});

newButton.addEventListener("click", () => {
    console.log(myNumber);
    console.log(myText);
    myNumber = 0;
    counter = "Counter = " + 0;
    return myText.textContent = counter;
});

console.log(`${myNumber} DEBUG LINE: 14`);