const imagens = document.querySelectorAll('.fotos img');
imagens.forEach(img => {
  img.addEventListener('click', () => {
    img.style.border = '3px solid #222';
  });
});

window.addEventListener('load',() => {
  alert("Bem-vindo!");
});