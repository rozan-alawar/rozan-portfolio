/* ==========================================================================
   THEME & LANGUAGE PREFERENCES

   Applied to <html> as data-theme / lang / dir. The initial application also
   runs from an inline snippet in <head> so the page never paints in the wrong
   theme or direction before this file loads.
   ========================================================================== */

(function () {
  'use strict';

  const THEME_KEY = 'theme';
  const LANG_KEY = 'lang';

  /* --- storage helpers: never let a blocked localStorage break the page --- */
  function readStored(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeStored(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* Private mode or blocked cookies — preference just won't persist. */
    }
  }

  /* --------------------------------- theme -------------------------------- */

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme')
      || (systemPrefersDark() ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Keep the mobile browser chrome in step with the page.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#0284c7');

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      const label = btn.querySelector('[data-theme-label]');
      if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }

  function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    writeStored(THEME_KEY, next);
  }

  /* ------------------------------- language ------------------------------- */

  // Every translatable node carries data-en / data-ar. Missing translations
  // fall back to the existing text rather than blanking the element.
  function applyLanguage(lang) {
    const isArabic = lang === 'ar';
    const root = document.documentElement;

    root.setAttribute('lang', isArabic ? 'ar' : 'en');
    root.setAttribute('dir', isArabic ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-en]').forEach(el => {
      const text = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
      if (text === null) return;
      // innerHTML is required because several strings carry inline markup
      // (<br>, <strong>, <span class="gradient-text">). All values are authored
      // in this repository, never user input.
      el.innerHTML = text;
    });

    // Attributes that need translating too.
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      const v = isArabic ? el.getAttribute('data-ar-placeholder') : el.getAttribute('data-en-placeholder');
      if (v !== null) el.setAttribute('placeholder', v);
    });

    document.querySelectorAll('[data-en-aria-label]').forEach(el => {
      const v = isArabic ? el.getAttribute('data-ar-aria-label') : el.getAttribute('data-en-aria-label');
      if (v !== null) el.setAttribute('aria-label', v);
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      // The button shows the language it switches TO.
      btn.textContent = isArabic ? 'EN' : 'ع';
      btn.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التبديل إلى العربية');
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: isArabic ? 'ar' : 'en' } }));
  }

  function currentLang() {
    return document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
  }

  function toggleLanguage() {
    const next = currentLang() === 'ar' ? 'en' : 'ar';
    applyLanguage(next);
    writeStored(LANG_KEY, next);
  }

  /* --------------------------------- wiring -------------------------------- */

  function init() {
    // Storage is the source of truth, falling back to whatever the head
    // snippet resolved. Re-applying syncs toggle labels, placeholders and
    // translated strings with the attributes already on <html>.
    const storedTheme = readStored(THEME_KEY);
    applyTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : currentTheme());
    applyLanguage(readStored(LANG_KEY) === 'ar' ? 'ar' : 'en');

    document.querySelectorAll('[data-theme-toggle]').forEach(btn =>
      btn.addEventListener('click', toggleTheme));
    document.querySelectorAll('[data-lang-toggle]').forEach(btn =>
      btn.addEventListener('click', toggleLanguage));

    // Follow the OS only while the visitor has made no explicit choice.
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = e => {
        if (!readStored(THEME_KEY)) applyTheme(e.matches ? 'dark' : 'light');
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed so other modules (e.g. the case study renderer) can read state.
  window.sitePreferences = { currentTheme, currentLang, applyTheme, applyLanguage };
})();
