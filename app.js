  // Slider functionality
        let slideIndex = 1;
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.slide-indicator');
        
        function showSlide(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[slideIndex - 1].classList.add('active');
            indicators[slideIndex - 1].classList.add('active');
        }
        
        function currentSlide(n) {
            slideIndex = n;
            showSlide(slideIndex);
        }
        
        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }
        
        function previousSlide() {
            slideIndex--;
            showSlide(slideIndex);
        }
        
        // Auto-advance slides
        setInterval(nextSlide, 5000);
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scroll for scroll indicator
        document.querySelector('.animate-bounce').addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
        
        // Add some interactive hover effects
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });
        });