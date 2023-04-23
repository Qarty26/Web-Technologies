const photoContainers = document.querySelectorAll('.photo-container');
photoContainers.forEach((photoContainer) => {
  const textBox = photoContainer.querySelector('.text-box');

  photoContainer.addEventListener('click', () => {
    textBox.classList.toggle('show-text-box');
  });
});