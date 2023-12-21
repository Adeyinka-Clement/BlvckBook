function toggleContent() {
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
  
    if (content1.style.display === "block" || content1.style.display === "") {
      content1.style.display = "none";
      content2.style.display = "block";
    } else {
      content1.style.display = "block";
      content2.style.display = "none";
    }
  }
function sendMessage(){
  if(message.value === ""){

  }
  else{

    var messageOut = message.value
    showA.innerHTML += `<div class="modal-body"><div class="message"><h6 class="h6">${message.value}</h6></div></div>`
    showA2.innerHTML += `<div class="modal-body"><div class="message2"><h6>${message.value}</h6></div></div>`

    message.value = ""
  }
}  
function sendMessage2(){
  if(message2.value === ""){

  }
  else{

    
    showA2.innerHTML += `<div class="modal-body"><div class="message"><h6 class="h6">${message2.value}</h6></div></div>`
    showA.innerHTML += `<div class="modal-body"><div class="message2"><h6 >${message2.value}</h6></div></div>`

    message2.value = ""
    
  }
} 
 // Extract the value from URL parameter
 const urlParams = new URLSearchParams(window.location.search);
 const value = urlParams.get('data');

 // Display the received value
 const displayValueElement = document.getElementById('chatUsername');
 displayValueElement.textContent = value;