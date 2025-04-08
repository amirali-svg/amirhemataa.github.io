       // اسکرول نرم
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // انیمیشن هنگام اسکرول
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        el.style.transition = '1s all';
        observer.observe(el);
    });