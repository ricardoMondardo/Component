var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("c-slide-show__slide");

    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    } 
    
    showSlides(slideIndex);
    setTimeout(showSlidesAuto, 5000); //5s
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("c-slide-show__slide");
  var dots = document.getElementsByClassName("c-slide-show__dot");

  if (n > slides.length) {
      slideIndex = 1
  }    

  if (n < 1) {
      slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" c-slide-show__dot--active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " c-slide-show__dot--active";
  
}

showSlidesAuto();