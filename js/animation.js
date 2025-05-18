document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
        if (window.scrollY > 20) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const slideUpElements = document.querySelectorAll(".slide-up");

    const handleScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        slideUpElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if (elementTop < triggerBottom && elementBottom > 0) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }

        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});
