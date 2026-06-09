/* ==========================================================================
   RV NSA Lawyer - Client-side Interactivity (JavaScript)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileToggleIcon = mobileToggle.querySelector('i');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle Icon between Hamburger and Close X
        if (navMenu.classList.contains('active')) {
            mobileToggleIcon.classList.remove('fa-bars');
            mobileToggleIcon.classList.add('fa-xmark');
        } else {
            mobileToggleIcon.classList.remove('fa-xmark');
            mobileToggleIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggleIcon.classList.remove('fa-xmark');
            mobileToggleIcon.classList.add('fa-bars');
        });
    });


    // 2. Sticky Navbar and Active Link Highlight on Scroll
    const navbar = document.querySelector('.navbar-container');
    const sections = document.querySelectorAll('section, footer');
    const menuLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Scroll effect on Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset for navbar height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });


    // 3. FAQ Accordion Toggle Behavior
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-panel').style.maxHeight = null;
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    // 4. Language Switcher Trigger
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            
            // Remove active class from all buttons
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Toggle body class
            if (selectedLang === 'th') {
                document.body.classList.remove('lang-en-active');
                document.body.classList.add('lang-th-active');
            } else {
                document.body.classList.remove('lang-th-active');
                document.body.classList.add('lang-en-active');
            }
        });
    });
});
