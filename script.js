// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle fade-in for sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(12px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});
