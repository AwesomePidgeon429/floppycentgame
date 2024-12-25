document.addEventListener("DOMContentLoaded", () => {
    // Scroll Section Navigation
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;

    const scrollToSection = (index) => {
        if (index < 0 || index >= sections.length) return;
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentIndex = index;
    };

    // Mouse Wheel Scroll
    let isScrolling = false;
    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            scrollToSection(currentIndex + 1);
        } else {
            scrollToSection(currentIndex - 1);
        }

        isScrolling = true;
        setTimeout(() => (isScrolling = false), 800);
    });

    // Swipe Support for Touch Devices
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener("touchstart", (event) => {
        touchStartY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", (event) => {
        touchEndY = event.changedTouches[0].clientY;

        if (touchStartY > touchEndY + 50) {
            scrollToSection(currentIndex + 1);
        } else if (touchStartY < touchEndY - 50) {
            scrollToSection(currentIndex - 1);
        }
    });

    // Keyboard Navigation
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            scrollToSection(currentIndex + 1);
        } else if (event.key === "ArrowUp") {
            scrollToSection(currentIndex - 1);
        }
    });

    // FAQ Toggle with Animation
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const isVisible = answer.style.maxHeight;

            // Reset all answers to closed
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.maxHeight = null;
                answer.classList.remove('open');
            });

            // If the answer is not visible, open it with animation
            if (!isVisible) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.add('open');
            } else {
                answer.style.maxHeight = null;
                answer.classList.remove('open');
            }
        });
    });
});
