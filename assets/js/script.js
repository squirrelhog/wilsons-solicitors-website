document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ functionality
function showFAQ(category) {
    // Hide all FAQ contents
    const contents = document.querySelectorAll('.faq-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.faq-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected content and activate tab
    const selectedContent = document.getElementById(category + '-faq');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Activate the clicked tab
    const activeTab = document.querySelector(`[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Close any open FAQ answers
    const answers = document.querySelectorAll('.faq-answer');
    answers.forEach(answer => answer.classList.remove('open'));
}

function toggleFAQ(question) {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    
    // Close all other answers in the current section
    const currentSection = question.closest('.faq-content');
    if (currentSection) {
        const allAnswers = currentSection.querySelectorAll('.faq-answer');
        allAnswers.forEach(ans => ans.classList.remove('open'));
    }
    
    // Toggle current answer
    if (!isOpen) {
        answer.classList.add('open');
    }
}

// Mobile menu toggle (when you add mobile menu)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ functionality
    initializeFAQ();
});

// Initialize FAQ event listeners
function initializeFAQ() {
    // Add event listeners for FAQ tabs
    const faqTabs = document.querySelectorAll('.faq-tab');
    faqTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                showFAQ(category);
            }
        });
    });
    
    // Add event listeners for FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
}