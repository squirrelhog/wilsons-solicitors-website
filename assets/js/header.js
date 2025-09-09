document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
    <header class="header">
        <div class="header-content">
            <!-- Logo Section -->
            <div class="logo-section">
                <div class="logo-image">
                    <img src="assets/images/logo.png" alt="Wilsons Solicitors Penrith Lawyers Logo" class="logo-img" loading="lazy">
                </div>
                <div class="logo-text">
                    <h1>Wilsons Solicitors Penrith</h1>
                    <div class="tagline">PENRITH LAWYERS | WILLS | ESTATES | PROPERTY</div>
                </div>
            </div>

            <!-- Navigation Section (Desktop) -->
            <nav class="nav-section">
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="our-story.html">Our Story</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faqs.html">FAQs</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                </ul>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Mobile Navigation -->
            <div class="mobile-menu" id="mobileMenu">
                <ul class="mobile-nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="our-story.html">Our Story</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faqs.html">FAQs</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </header>`;
    
    // Find the header placeholder and replace it
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
        
        // Initialize mobile menu functionality after header is inserted
        initializeMobileMenu();
    }
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu && toggle) {
        mobileMenu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

function initializeMobileMenu() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenu && toggle && !toggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (mobileMenu && toggle) {
                mobileMenu.classList.remove('active');
                toggle.classList.remove('active');
            }
        }
    });
}