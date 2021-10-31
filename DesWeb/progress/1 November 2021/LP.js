const menuToggle = document.querySelector('.tombol');
const showcase = document.querySelector('.jumbotron');
menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
})
