const myText = document.getElementById("my-text");
const myButton = document.getElementById("my-btn1");
const newButton = document.getElementById("my-btn2");
const userText = document.getElementById("users");

const myObject = {
    "Username": ["Per", "Ole", "Kari"]
}

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

console.log(myObject);
for (let i = 0; i < myObject.Username.length; i++) {
    console.log(myObject, i);
}
userText.textContent = `${myObject.Username.reverse()} is logged in!`;

// vi kan bruke async funksjoner til å kalle til en API for å hente data.
async function getData() {
    const response = await fetch("src/mockData.json");
    const data = await response.json();
    console.log(data);
    myText.textContent = JSON.stringify(data);
}

getData();

console.log(`${myNumber} DEBUG LINE: 14`);