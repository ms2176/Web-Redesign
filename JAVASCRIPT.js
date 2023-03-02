function typeWriter() {
    var output = document.getElementById("typewriter");
    output.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
      setTimeout(typeWriter, 100); 
    }
  }
  
  window.onload = function() {
    typeWriter();
      };



let signupButton =  document.getElementById("signupButton");
let signinButton =  document.getElementById("signinButton");
let nameField =  document.getElementById("nameField");
let titlesignup =  document.getElementById("titlesignup");

signinButton.onclick = function(){
    nameField.style.maxHeight = "0";
    titlesignup.innerHTML = "Sign In";
    signupButton.classList.add("disable");
    signinButton.classList.remove("disable");

}
signupButton.onclick = function(){
    nameField.style.maxHeight = "60px";
    titlesignup.innerHTML = "Sign Up";
    signupButton.classList.remove("disable");
    signinButton.classList.add("disable");

}