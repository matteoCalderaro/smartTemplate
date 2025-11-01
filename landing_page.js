document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); // Reset scroll position on load/refresh

    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const videoContents = document.querySelectorAll('.video-content');

    if (tabButtons.length > 0 && videoContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                videoContents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                const targetId = button.dataset.target;
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        const anyActive = Array.from(tabButtons).some(btn => btn.classList.contains('active'));
        if (!anyActive) {
             tabButtons[0].classList.add('active');
             const firstTargetId = tabButtons[0].dataset.target;
             const firstTargetContent = document.getElementById(firstTargetId);
             if(firstTargetContent) {
                firstTargetContent.classList.add('active');
             }
        }
    }

    // Sticky hero fade-out logic
    const heroSection = document.querySelector('.hero-section');
    const heroSideImageLeft = document.querySelector('.hero-side-image-left');
    const heroSideImageRight = document.querySelector('.hero-side-image-right');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            const fadeSpeed = 1.5; // Adjust this value to change the fade speed
            let opacity = 1 - (scrollPosition / (heroHeight / fadeSpeed));

            if (opacity < 0) {
                opacity = 0;
            }
            if (opacity > 1) {
                opacity = 1;
            }

            heroSection.style.opacity = opacity;

            // Side images animation logic (move outwards)
            if (heroSideImageLeft && heroSideImageRight) {
                const maxMove = 300; // Max pixels to move outwards (increased for more pronounced movement)
                let moveAmount = Math.min(scrollPosition, heroHeight) / (heroHeight / maxMove);

                // Move outwards as content scrolls up
                heroSideImageLeft.style.transform = `translateX(${-moveAmount}px)`;
                heroSideImageRight.style.transform = `translateX(${moveAmount}px)`;
            }
        });
    }

    // Sticky navbar logic
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50; // Pixels scrolled before navbar changes

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
});