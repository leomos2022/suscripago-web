const translations = {
    es: {
        'nav-benefits': 'Beneficios', 'nav-plans': 'Planes', 'nav-how': 'Cómo funciona', 'btn-download': 'Descargar',
        'hero-title-1': 'Todas tus suscripciones', 'hero-title-2': 'en <span class="text-yellow-400">un solo lugar</span>',
        'hero-description': 'Controla, organiza y ahorra inteligentemente.',
        'app-store': 'App Store', 'google-play': 'Google Play', 'free-note': '✨ Descarga gratuita',
        'benefits-title': '¿Por qué', 'benefits-title-end': '?',
        'benefit-1-title': 'Controla tus gastos', 'benefit-1-desc': 'Visualiza el total mensual.',
        'benefit-2-title': 'Recibe alertas', 'benefit-2-desc': 'Notificaciones antes del vencimiento.',
        'benefit-3-title': 'Asesor IA', 'benefit-3-desc': 'Consejos para ahorrar.',
        'plans-title': 'Planes para', 'plan-free': 'Gratis', 'currency': 'COP',
        'free-1': 'Hasta 10 suscripciones', 'popular': '🔥 MÁS POPULAR', 'plan-pro': 'Pro',
        'currency-month': 'COP/mes', 'pro-1': 'Suscripciones ilimitadas', 'pro-2': 'Exportar a Excel',
        'subscribe-btn': 'Suscribirme', 'how-title': '¿Cómo', 'how-title-end2': '?',
        'step-1': 'Descarga la app', 'step-2': 'Agrega suscripciones', 'step-3': 'Ahorra dinero',
        'footer': '© 2026 SuscriPago. Hecho con 💛 en Colombia'
    },
    en: {
        'nav-benefits': 'Benefits', 'nav-plans': 'Plans', 'nav-how': 'How it works', 'btn-download': 'Download',
        'hero-title-1': 'All your subscriptions', 'hero-title-2': 'in <span class="text-yellow-400">one place</span>',
        'hero-description': 'Control, organize and save intelligently.',
        'app-store': 'App Store', 'google-play': 'Google Play', 'free-note': '✨ Free download',
        'benefits-title': 'Why', 'benefits-title-end': '?',
        'benefit-1-title': 'Control spending', 'benefit-1-desc': 'View monthly total.',
        'benefit-2-title': 'Receive alerts', 'benefit-2-desc': 'Notifications before due date.',
        'benefit-3-title': 'AI Advisor', 'benefit-3-desc': 'Saving tips.',
        'plans-title': 'Plans for', 'plan-free': 'Free', 'currency': 'COP',
        'free-1': 'Up to 10 subscriptions', 'popular': '🔥 MOST POPULAR', 'plan-pro': 'Pro',
        'currency-month': 'COP/month', 'pro-1': 'Unlimited subscriptions', 'pro-2': 'Export to Excel',
        'subscribe-btn': 'Subscribe', 'how-title': 'How it', 'how-title-end2': '?',
        'step-1': 'Download app', 'step-2': 'Add subscriptions', 'step-3': 'Save money',
        'footer': '© 2026 SuscriPago. Made with 💛 in Colombia'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.lang-text').forEach(el => {
        const key = el.dataset.key;
        if (key && translations[lang][key]) {
            if (key === 'hero-title-2') el.innerHTML = translations[lang][key];
            else el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-link').forEach(el => {
        const key = el.dataset.key;
        if (key && translations[lang][key]) el.textContent = translations[lang][key];
    });
    localStorage.setItem('language', lang);
    document.getElementById('lang-es').style.opacity = lang === 'es' ? '1' : '0.5';
    document.getElementById('lang-en').style.opacity = lang === 'en' ? '1' : '0.5';
}

function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = newTheme === 'light' ? 'fas fa-sun text-gray-900' : 'fas fa-moon text-gray-900';
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    const savedLang = localStorage.getItem('language');
    setLanguage(savedLang === 'en' ? 'en' : 'es');
}

document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.onclick = () => mobileMenu.classList.toggle('hidden');
    }
});
