/* ==========================================================================
   CONVERSION-FOCUSED CONTACT & PROJECT INQUIRY ENGINE
   ========================================================================== */

/* Formspree endpoint — replace YOUR_FORM_ID with the id from your Formspree
   dashboard (formspree.io → New Form → copy the endpoint URL). */
const CONTACT_ENDPOINT = 'https://formspree.io/f/mrpgkgvn';

function initContactForm() {
  const form = document.getElementById('project-inquiry-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const projectType = document.getElementById('contact-type').value;
    const message = document.getElementById('contact-message').value.trim();
    const honeypot = document.getElementById('contact-website').value;

    if (!name || !email || !message) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }

    // Bots fill hidden fields; humans never see this one.
    if (honeypot) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        showFeedback(`Thank you, ${name}! Your project inquiry for "${projectType}" has been received. I will reply within 24 hours.`, 'success');
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const detail = data.errors ? data.errors.map(err => err.message).join(', ') : '';
        showFeedback(`Something went wrong${detail ? ': ' + detail : ''}. Please email me directly at rosanalawer2002@gmail.com.`, 'error');
      }
    } catch (err) {
      showFeedback('Network error — please check your connection or email me directly at rosanalawer2002@gmail.com.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Start a Conversation</span>`;
    }
  });
}

function showFeedback(text, type) {
  const box = document.getElementById('form-feedback-box');
  if (!box) return;

  box.style.display = 'block';
  box.style.background = type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
  box.style.border = type === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)';
  box.style.color = type === 'success' ? '#34d399' : '#f87171';
  box.style.padding = '14px 20px';
  box.style.borderRadius = '8px';
  box.style.marginBottom = '20px';
  box.textContent = text;
}

// Copy email to clipboard helper
function copyEmailToClipboard() {
  const email = "rosanalawer2002@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      const origText = copyBtn.textContent;
      copyBtn.textContent = "Copied to Clipboard! ✓";
      setTimeout(() => copyBtn.textContent = origText, 2000);
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
