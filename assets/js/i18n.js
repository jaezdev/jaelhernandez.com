import en from '../i18n/en.json';
import es from '../i18n/es.json';

function loadTranslation(lang) {
  switch (lang) {
    case 'es':
      return es;
    case 'en':
      return en;
    default:
      return en;
  }
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.textContent = translations[key];
  });
}

function initI18n() {
  const browserLang = navigator.language.slice(0, 2); // 'en', 'es', etc.
  console.log(`Detected browser language: ${browserLang}`);
  const translations = loadTranslation(browserLang);
  applyTranslations(translations);
}

export default initI18n;
