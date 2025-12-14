// Плавная прокрутка к разделам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем мобильное меню после клика
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Мобильное меню
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Валидация формы
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    
    // Простая валидация email
    if (!email.includes('@')) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
    }
    
    // В реальном проекте здесь был бы AJAX-запрос к серверу
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    this.reset();
    
    return false;
});

// Установка текущего года в футере
document.getElementById('current-year').textContent = new Date().getFullYear();

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Добавление класса при скролле для фиксированного меню
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Анимация появления элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content, .gallery-item, .contact-section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Установка начальных стилей для анимации
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.about-content, .gallery-item, .contact-section');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Запуск анимации при загрузке
    setTimeout(animateOnScroll, 300);
    
    // Запуск анимации при скролле
    window.addEventListener('scroll', animateOnScroll);
});

// Подсветка активного пункта меню при скролле
function highlightMenuOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = '#' + section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSectionId) {
            link.classList.add('active');
        }
    });
}

// Добавление стиля для активного пункта меню
const style = document.createElement('style');
style.textContent = '.nav-menu a.active { color: #d4a762 !important; }';
document.head.appendChild(style);

// Запуск подсветки меню при скролле
window.addEventListener('scroll', highlightMenuOnScroll);
