document.addEventListener('DOMContentLoaded', function() {
    // Determine if we're in a subdirectory
    const pathPrefix = window.location.pathname.includes('/services/') ? '../' : '';

    const headerHTML = `
    <header class="header">
        <div class="header-content">
            <!-- Social Icons Section (Left) -->
            <div class="social-icons-header" style="position: absolute; left: 8rem; top: 50%; transform: translateY(-50%); display: flex; gap: 1rem;">
                <a href="https://www.facebook.com/wilsonssolicitorsau" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" aria-label="Facebook" style="color: #1877F2;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/wilsonssolicitors/" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient-header)">
                        <defs>
                            <linearGradient id="instagram-gradient-header" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#f09433" />
                                <stop offset="25%" style="stop-color:#e6683c" />
                                <stop offset="50%" style="stop-color:#dc2743" />
                                <stop offset="75%" style="stop-color:#cc2366" />
                                <stop offset="100%" style="stop-color:#bc1888" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                </a>
                <a href="https://linkedin.com/company/wilsonssolicitors" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn" aria-label="LinkedIn" style="color: #0077B5;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
            </div>

            <!-- Logo Section -->
            <div class="logo-section">
                <div class="logo-image">
                    <img src="${pathPrefix}assets/images/logo.png" alt="Wilsons Solicitors Penrith Lawyers Logo" class="logo-img" loading="lazy">
                </div>
                <div class="logo-text">
                    <h1>Wilsons Solicitors Penrith</h1>
                    <div class="tagline">WILLS | ESTATES | PROPERTY</div>
                </div>
            </div>

            <!-- Navigation Section (Desktop) -->
            <nav class="nav-section">
                <ul class="nav-menu">
                    <li><a href="${pathPrefix}index.html">Home</a></li>
                    <!-- <li class="has-dropdown">
                        <a href="${pathPrefix}services.html">Services</a>
                        <ul class="dropdown-menu">
                            <li><a href="${pathPrefix}services/wills-estate-planning.html">Wills, Estate Planning & Business Succession</a></li>
                            <li><a href="${pathPrefix}services/probate-administration.html">Estate Administration & Probate</a></li>
                            <li><a href="${pathPrefix}services/conveyancing.html">Property & Conveyancing</a></li>
                            <li><a href="${pathPrefix}services/powers-attorney.html">Lifetime Planning - Power of Attorney & Enduring Guardianship</a></li>
                            <li><a href="${pathPrefix}services/wrongful-death.html">Wrongful Death Claim</a></li>
                            <li><a href="${pathPrefix}services/death-benefits.html">Superannuation Death Benefit Claims</a></li>
                            <li><a href="${pathPrefix}services/estate-disputes.html">Estate Disputes & Litigation</a></li>
                            <li><a href="${pathPrefix}services/elder-law.html">Elder Law</a></li>
                            <li><a href="${pathPrefix}services/financial-loss-recovery.html">Financial Loss Recovery</a></li>
                        </ul>
                    </li> -->
                    <li><a href="${pathPrefix}about.html">About</a></li>
                    <!-- <li><a href="${pathPrefix}our-story.html">Our Story</a></li> -->
                    <li><a href="${pathPrefix}contact.html">Contact</a></li>
                    <li><a href="${pathPrefix}faqs.html">FAQs</a></li>
                </ul>
            </nav>

            <!-- Phone Section -->
            <div class="phone-section" style="position: absolute; right: 8rem; top: 50%; transform: translateY(-50%);">
                <a href="tel:0247315311" style="font-size: 2rem; font-weight: 900; color: #1a365d; text-decoration: underline; white-space: nowrap;">(02) 4731 5311</a>
            </div>

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
                    <!-- <li><a href="${pathPrefix}services.html">Services</a></li> -->
                    <li><a href="${pathPrefix}about.html">About</a></li>
                    <!-- <li><a href="${pathPrefix}our-story.html">Our Story</a></li> -->
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