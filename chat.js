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
  