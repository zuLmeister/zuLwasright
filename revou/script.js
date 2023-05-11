function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var subject = document.forms["contactForm"]["subject"].value;
  var emailRegex = /^\w+([\.-]?\w+)*@(gmail\.com|ymail\.com|rocketmail\.com|hotmail.com|icloud.com|mail.com|yandex.com)$/;
  
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email == "") {
    alert("Please enter your email");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address from gmail, ymail,rocketmail,hotmail,icloud and mail domains");
    return false;
  }
  if (subject == "Select Option") {
    alert("Please select an option");
    return false;
  }
  
  return true;
}


  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }
  