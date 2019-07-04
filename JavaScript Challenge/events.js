//GLOBAL VARIABLES
var changeColour = window.document.getElementById("big-box");
var changeText = document.getElementById("greeting");
var calculation = document.getElementById("calculation");

//BLUE BUTTON
function myFunction() {
    changeColour.style.backgroundColor = 'blue';
    changeText.innerHTML = "hi, my name is blue";
    var str = "blue";
    var sum = 0;
        for(var x = 0; x < str.length; x++) {
        sum += (str.charCodeAt(x));
}
document.getElementById("calculation").innerHTML = sum;
} 

//GREEN BUTTON
function turnGreen() {
    changeColour.style.backgroundColor = 'green';
    changeText.innerHTML = "hi, my name is green";
    var str1 = "green";
    var sum1 = 0;
        for(var x = 0; x < str1.length; x++) {
        sum1 += (str1.charCodeAt(x));
}
document.getElementById("calculation").innerHTML = sum1;
}

//RED BUTTON
function turnRed() {
    changeColour.style.backgroundColor = 'red';
    changeText.innerHTML = "hi, my name is red";
    var str2 = "red";
    var sum2 = 0;
        for(var x = 0; x < str2.length; x++) {
        sum2 += (str2.charCodeAt(x));
}
document.getElementById("calculation").innerHTML = sum2;
}