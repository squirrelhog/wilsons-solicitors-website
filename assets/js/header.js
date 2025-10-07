document.addEventListener('DOMContentLoaded', function() {
    // Determine if we're in a subdirectory
    const pathPrefix = window.location.pathname.includes('/services/') ? '../' : '';

    const headerHTML = `
    <header class="header">
        <div class="header-content">
            <!-- Logo Section -->
            <div class="logo-section">
                <div class="logo-image">
                    <img src="${pathPrefix}assets/images/logo.png" alt="Wilsons Solicitors Penrith Lawyers Logo" class="logo-img" loading="lazy">
                </div>
                <div class="logo-text">
                    <h1>Wilsons Solicitors Penrith</h1>
                    <div class="tagline">PENRITH LAWYERS | WILLS | ESTATES | PROPERTY</div>
                </div>
            </div>

            <!-- Navigation Section (Desktop) -->
            <nav class="nav-section">
                <ul class="nav-menu">
                    <li><a href="${pathPrefix}index.html">Home</a></li>
                    <li class="has-dropdown">
                        <a href="${pathPrefix}services.html">Services</a>
                        <ul class="dropdown-menu">
                            <li><a href="${pathPrefix}services/wills-estate-planning.html">Wills & Estate Planning</a></li>
                            <li><a href="${pathPrefix}services/probate-administration.html">Probate & Administration</a></li>
                            <li><a href="${pathPrefix}services/conveyancing.html">Property & Conveyancing</a></li>
                            <li><a href="${pathPrefix}services/powers-attorney.html">Powers of Attorney</a></li>
                            <li><a href="${pathPrefix}services/death-benefits.html">Death Benefits</a></li>
                            <li><a href="${pathPrefix}services/estate-disputes.html">Estate Disputes</a></li>
                        </ul>
                    </li>
                    <li><a href="${pathPrefix}about.html">About</a></li>
                    <li><a href="${pathPrefix}our-story.html">Our Story</a></li>
                    <li><a href="${pathPrefix}contact.html">Contact</a></li>
                    <li><a href="${pathPrefix}faqs.html">FAQs</a></li>
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
                    <li><a href="${pathPrefix}index.html">Home</a></li>
                    <li><a href="${pathPrefix}services.html">Services</a></li>
                    <li><a href="${pathPrefix}about.html">About</a></li>
                    <li><a href="${pathPrefix}our-story.html">Our Story</a></li>
                    <li><a href="${pathPrefix}contact.html">Contact</a></li>
                    <li><a href="${pathPrefix}faqs.html">FAQs</a></li>
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