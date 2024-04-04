//Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
});
//Slider
let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

//FavSlider

const slides = document.querySelectorAll(".slide")
var counter = 0;

//console.log(slides)
/*slides.forEach(
 (slide, index) => {
  slide.style.left = `${index * 100}%`
  }
)

const GoPrev = () => {
  counter--
  slideImage()
}


const GoNext = () => {
  counter++
  slideImage()
}

const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
}*/


