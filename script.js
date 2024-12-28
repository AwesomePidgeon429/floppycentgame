// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Infinite Scroll Effect (Mock Data for Now)
let isFetching = false;
const contentContainer = document.querySelector('main');

const fetchMoreContent = () => {
    if (isFetching) return;
    isFetching = true;

    // Simulate fetching new content
    setTimeout(() => {
        const newSection = document.createElement('section');
        newSection.classList.add('extra-content');
        newSection.innerHTML = `
            <h2>Bonus Content</h2>
            <p>Explore even more about FloppyCent. Stay tuned for additional updates and secrets about the game!</p>
            <div class="mock-content">
                <div class="feature">
                    <h3>Exclusive Insights</h3>
                    <p>Learn about the challenges faced by the team during development.</p>
                </div>
                <div class="feature">
                    <h3>Hidden Levels</h3>
                    <p>Discover secrets hidden within FloppyCent.</p>
                </div>
                <div class="feature">
                    <h3>Community Highlights</h3>
                    <p>Showcasing fan art, mods, and player creativity.</p>
                </div>
            </div>
        `;
        contentContainer.appendChild(newSection);
        isFetching = false;
    }, 2000);
};

// Scroll Event Listener
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchMoreContent();
    }
});

// Parallax Effect for Hero Section
const heroVideo = document.querySelector('#hero-video');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroVideo.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// FAQ Accordion Effect
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const sibling = item.nextElementSibling;
        sibling.style.display = sibling.style.display === 'block' ? 'none' : 'block';
    });
});
