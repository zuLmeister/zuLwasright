 const menuToggle = document.querySelector('.tombol');
      const jumbotron = document.querySelector('.jumbotron');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.tombol('active');
        jumbotron.classList.tombol('active');
      })