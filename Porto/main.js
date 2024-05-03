document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.querySelector(".leftBtn");
    const rightBtn = document.querySelector(".rightBtn");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    function showSlide(i) {
      if (i < 0) {
        i = totalItems - 1;
      } else if (i >= totalItems) {
        i = 0;
      }
  
      carouselContainer.style.transform = `translateX(-${i * 100}%)`;
      currentIndex = i;
    }
  
    leftBtn.addEventListener("click", function() {
      showSlide(currentIndex - 1);
    });
  
    rightBtn.addEventListener("click", function() {
      showSlide(currentIndex + 1);
    });
  });
  