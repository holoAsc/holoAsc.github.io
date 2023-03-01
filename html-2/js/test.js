let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// let myName = '徐程';
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });
let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}