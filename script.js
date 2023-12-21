
function signUp (){
    if(firstName.value === "" || lastName.value === "" || password1.value === "" || password2.value === ""){
        correct1.innerHTML = `<h6>input your username</h6>`
    }
    else if(password1.value !==  password2.value ){
        correct.innerHTML = `<h6>input a correct password</h6>`
        
    }
    
    else{
        staticBackdrop.style.display = "none"
        whole.style.display = "none"
        nav.style.display = "block"
        document.getElementById("username").innerHTML = (firstName.value)
        body.style = " background-color: white"
        const value = document.getElementById('firstName').value+"_"+document.getElementById('lastName').value;
        window.location.href = `chat.html?data=${value}`;
        
        }

        
    }
   

  
function login(){
    var password = (password1.value === password2.value )
        console.log(password)
        if (password = true ){
        console.log("password is true")}
        else {
            console.log("Condition is false");
    }
}