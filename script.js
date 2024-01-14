document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Disable right-click menu
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey) {
      e.preventDefault(); // Disable Ctrl key
    }
  });

function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}