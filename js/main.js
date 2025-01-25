//Image Switcher
let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "img/bg.png") {
        myImage.setAttribute("src", "img/bg2.jpg");
      } else {
        myImage.setAttribute("src", "img/bg.png");
      }
}
//Welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myHeading.innerHTML = "Luke Kuhn";

function setUserName() {
    let myName = prompt("enter ur ID");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("ID", myName);
        myHeading.innerHTML = `welc0me, ${myName}`;
    }
}
    if (!localStorage.getItem("ID")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("ID");
        myHeading.innerHTML = `don't forget to tip, ${storedName}`;
    }

myButton.onclick = function() {
setUserName();
}