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

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const newColor = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('q').style.color = newColor;
}

setInterval(changeColor, 50);