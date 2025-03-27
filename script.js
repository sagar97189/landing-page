document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu after clicking
        if (window.innerWidth < 768) {
            mobileMenu.style.transform = 'translateX(100%)';
        }
    });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
    mobileMenu.style.transform = mobileMenu.style.transform === 'translateX(0px)' ? 
        'translateX(100%)' : 'translateX(0px)';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Section Animations
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center+=100"
        },
        opacity: 0,
        y: 100,
        duration: 1
    });
});

// Skill Item Animations
gsap.utils.toArray(".skill-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top center+=100"
        },
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 0.8,
        delay: i * 0.2
    });
});

// Form Loading State
document.querySelector('form').addEventListener('submit', (e) => {
    const btn = e.target.querySelector('button');
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.style.transform = 'translateX(100%)';
    }
});
// Typewriter Effect
function rotateText() {
    const words = ["Web Developer", "Designer"];
    let index = 0;
    const element = document.getElementById("rotating-text");
    if (!element) return;
    
    function typeEffect() {
        let word = words[index];
        let i = 0;
        let interval = setInterval(() => {
            element.textContent = word.substring(0, i++);
            if (i > word.length) {
                clearInterval(interval);
                setTimeout(() => {
                    deleteEffect();
                }, 1000);
            }
        }, 100);
    }

    function deleteEffect() {
        let word = words[index];
        let i = word.length;
        let interval = setInterval(() => {
            element.textContent = word.substring(0, i--);
            if (i < 0) {
                clearInterval(interval);
                index = (index + 1) % words.length;
                setTimeout(() => {
                    typeEffect();
                }, 500);
            }
        }, 50);
    }
    typeEffect();
}
document.addEventListener("DOMContentLoaded", rotateText);