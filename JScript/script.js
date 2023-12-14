function sendMail(){
    var username=document.getElementById("name").value;
    var useremail=document.getElementById("email").value;
    var userphonenumber=document.getElementById("phonenumber").value;
    if (username==""){
        alert("Your email is compulsry");
    }
    else if(useremail==""){
        alert("Your email is compulsory");
    
    }
    else if (userphonenumber==""){
        alert("Your phonenumber is needed");
    }
    else {
        alert("Hello" + username + ", email has been sent to " + useremail);
    }
    
}
