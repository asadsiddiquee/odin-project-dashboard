let dash = document.querySelector('.dashboard');

let ham = document.querySelector('.ham');

ham.addEventListener('click', () => {
  dash.classList.toggle('dash');
});

if (ham.style.display !== 'none') {
  dash.addEventListener('click', () => {
    dash.classList.toggle('dash');
  });
}
