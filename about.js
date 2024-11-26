document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const aboutText = document.querySelector(".about-text");
  
    function checkAboutVisibility() {
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (aboutPosition < windowHeight * 0.75) { // Adjust the threshold as needed
        aboutText.classList.add("visible");
      } else {
        aboutText.classList.remove("visible"); // Reset animation when scrolling out of the section
      }
    }
  
    document.addEventListener("scroll", function() {
      checkAboutVisibility(); // Check visibility on scroll
    });
  
    // Check visibility initially
    checkAboutVisibility();
  });
  