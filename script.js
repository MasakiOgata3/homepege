// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Formspree AJAX submission
const contactForm = document.querySelector('.contact-form form');
const submitButton = contactForm.querySelector('button[type="submit"]');
const originalButtonText = submitButton.textContent;

// モーダル要素
const modal = document.getElementById('confirmModal');
const modalClose = modal.querySelector('.modal-close');
const confirmCancel = document.getElementById('confirmCancel');
const confirmSubmit = document.getElementById('confirmSubmit');

// フォームデータを保存する変数
let pendingFormData = null;

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // バリデーションチェック
    const company = this.querySelector('input[name="company"]').value.trim();
    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const phone = this.querySelector('input[name="phone"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();
    
    // 必須項目のチェック
    const errors = [];
    if (!company) errors.push('会社名');
    if (!name) errors.push('お名前');
    if (!email) errors.push('メールアドレス');
    if (!phone) errors.push('電話番号');
    if (!message) errors.push('お問い合わせ内容');
    
    if (errors.length > 0) {
        alert(`以下の必須項目を入力してください：\n・${errors.join('\n・')}`);
        return;
    }
    
    // モーダルに内容を表示
    document.getElementById('confirmCompany').textContent = company;
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmEmail').textContent = email;
    document.getElementById('confirmPhone').textContent = phone;
    document.getElementById('confirmMessage').textContent = message;
    
    // フォームデータを保存
    pendingFormData = new FormData(this);
    
    // モーダルを表示
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
});

// モーダルの確認ボタンクリック時
confirmSubmit.addEventListener('click', async function() {
    // モーダルを閉じる
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: pendingFormData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success message
            alert('お問い合わせありがとうございます。\n3営業日以内にご連絡いたします。');
            contactForm.reset();
        } else {
            // Error message
            alert('送信に失敗しました。\nお手数ですが、もう一度お試しください。');
        }
    } catch (error) {
        // Network error
        alert('ネットワークエラーが発生しました。\nお手数ですが、もう一度お試しください。');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        pendingFormData = null;
    }
});

// モーダルの閉じるボタン
modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    pendingFormData = null;
});

// キャンセルボタン
confirmCancel.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    pendingFormData = null;
});

// モーダル外クリックで閉じる
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        pendingFormData = null;
    }
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .ai-feature, .pricing-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hamburger animation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// CSS for hamburger animation (add to existing styles)
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .nav-menu a.active {
        color: #666;
    }
    
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);