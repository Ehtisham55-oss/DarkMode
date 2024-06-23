var isDarkModeOn = false;
var a = document.getElementById("heading1")
var b = document.getElementsByClassName("btn2")
var username = prompt("whats your name")
heading1.innerHTML = "WELCOME " + username;
function darkmode() {
    if (isDarkModeOn == true){
        document.body.style.background = "#ffffff";
        a.style.color = "#000000"
        b[0].innerHTML = "DARKMODE"
        b[0].style.color = "#ffffff"
        b[0].style.background = "#000000"
        isDarkModeOn = false;
      }
    else{
        document.body.style.background = "#000000";
        a.style.color = "#ffffff"
        b[0].innerHTML = "LIGHTMODE"
        b[0].style.color = "#000000"
        b[0].style.background = "#ffffff"
        isDarkModeOn = true;
      }
}





