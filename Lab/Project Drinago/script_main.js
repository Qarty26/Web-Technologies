function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }

  function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("open");
  }

  var menu = document.getElementById("menu");
menu.addEventListener("click", function(event) {
  if (event.target == menu) {
    closeMenu();
  }
});