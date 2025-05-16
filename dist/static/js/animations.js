document.addEventListener('DOMContentLoaded', () => {
    let carSpeed = 10;
    const speedIncrement = 2;
    const minSpeed = 4;
    const resetAfterCycles = 3;
    let cycleCount = 0;

    // Animate hero section text
    gsap.from('#hero h2', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from('#hero p', { duration: 1, y: 50, opacity: 0, delay: 1 });

    // Animate the car with full transition
    function animateCar() {
        gsap.set('#car', { x: '100vw', opacity: 1 });
        gsap.to('#car', {
            x: '-120%',
            opacity: 1,
            duration: carSpeed,
            ease: 'power1.inOut',
            onComplete: () => {
                cycleCount++;
                if (cycleCount < resetAfterCycles) {
                    carSpeed = Math.max(minSpeed, carSpeed - speedIncrement);
                } else {
                    carSpeed = 10;
                    cycleCount = 0;
                }
                animateCar();
            }
        });
    }
    animateCar();

    // Animate the football in the nav
    gsap.set('#nav-football', { x: '-100%' });
    gsap.to('#nav-football', {
        x: '100vw',
        opacity: 1,
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        delay: 1,
        onStart: () => { gsap.set('#nav-football', { opacity: 1 }); }
    });

    // Scroll transition animations with repeat
    gsap.from('#about .about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none reverse' // Replay on re-entry
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
    gsap.from('#services .service-card', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    gsap.from('#portfolio .portfolio-item', {
        scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    gsap.from('#faq .faq-item', {
        scrollTrigger: {
            trigger: '#faq',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
    gsap.from('#contact', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});