document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            //targetSection.scrollIntoView({ behavior: 'smooth' });
            const navbarHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight; // Mendapatkan posisi konten terhadap body
            window.scrollTo({
                //top: targetPosition - 420, // Menggeser sedikit ke atas untuk memastikan konten berada di bagian atas layar
                top: targetPosition - 20,
                behavior: 'smooth'
            });
        });
    });
});
