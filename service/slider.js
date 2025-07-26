
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/img3.jpg'
  ];

  let index = 0;
  const slider = document.getElementById('img1');

  setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  }, 5000);
});
