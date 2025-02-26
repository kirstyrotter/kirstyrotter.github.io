/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/

const myImage = document.querySelector("img")

myImage.addEventListener("click",function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/profile-photo.jpg") {
        myImage.setAttribute   ("src", "images/Stormy.jpg");
    } else {
        myImage.setAttribute("src", "images/profile-photo.jpg");
    }
})
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContent = 'Welcome to my Webpage, ' + myName;
    }  
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Welcome to my Webpage, ' + storedName;
}

myButton.addEventListener("click", () => {
    setUserName();
});