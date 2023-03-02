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

function validateEmail()
{
    var form = document.getElementById("form");
    var email= document.getElementById("email").value;
    var text= document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#006400";
    }
    else{
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#8b0000";
    }
    if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = " ";
        text.style.color = "#00ff00";
    }
  
    
}
