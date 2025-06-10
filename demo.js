  // Slider functionality
        let slideIndex = 1;
        const slides = document.querySelectorAll('.slide');
        const Indicators = document.querySelectorAll('.slide-indicator');
        
        function showSlide(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            
            slides.forEach(slide => slide.classList.remove('active'));
            Indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[slideIndex - 1].classList.add('active');
            Indicators[slideIndex - 1].classList.add('active');
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

        // Add interactive effects to product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = '#8B4513';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = '#e5e7eb';
            });
        });

        // Add click handlers for CTA buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Add ripple effect
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.product-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
       