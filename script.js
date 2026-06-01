function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }

      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
      }

      // Change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  
  // Check if user scrolled down more than 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});