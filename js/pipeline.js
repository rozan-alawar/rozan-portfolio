/* ==========================================================================
   "HOW I BUILD" — FLUTTER DEVELOPER WORKFLOW & EXECUTION PIPELINE
   ========================================================================== */

const pipelineSteps = [
  {
    step: "01",
    name: "Clean Architecture & State Setup",
    tag: "Architecture & Foundation",
    description: "Structuring Clean Architecture layer boundaries (Data, Domain, Presentation) with feature-first modular packages, compile-safe Riverpod state management, and type-safe data modeling via dart_mappable.",
    artifacts: ["Layer Boundaries (Data/Domain/Presentation)", "Riverpod Provider Trees", "Type-Safe Models (dart_mappable)"]
  },
  {
    step: "02",
    name: "Responsive UI & Accessibility",
    tag: "User Experience",
    description: "Crafting pixel-perfect, responsive Flutter UI layouts across diverse screen sizes using flutter_screenutil, supporting light/dark themes, multi-language RTL support, custom font scaling, and screen-reader announcements.",
    artifacts: ["Screen-Adaptive Widgets (flutter_screenutil)", "Theme & Contrast Layers", "RTL Multi-Language Support"]
  },
  {
    step: "03",
    name: "APIs, Maps & Native Services Integration",
    tag: "Backend & Integrations",
    description: "Connecting Dio HTTP client with automated auth interceptors, Google Maps SDK, offline SQLite database caching, Firebase production suite (Auth, FCM, Remote Config), and speech/voice engines (speech_to_text, flutter_tts).",
    artifacts: ["Dio HTTP Interceptors & Auth Tokens", "Google Maps SDK & GIS Markers", "Speech & Audio TTS Engines"]
  },
  {
    step: "04",
    name: "Testing, CI/CD & Store Deployment",
    tag: "Quality & Delivery",
    description: "Writing unit tests for Riverpod providers, profiling 60 FPS frame rates, setting up GitHub Actions CI/CD automation, and delivering production releases directly to the iOS App Store and Google Play Store.",
    artifacts: ["Riverpod & Widget Test Suites", "GitHub Actions CI/CD Automation", "App Store & Play Store Production Builds"]
  }
];

function initPipeline() {
  const container = document.getElementById('pipeline-steps-container');
  const detailsCard = document.getElementById('pipeline-details-card');
  if (!container || !detailsCard) return;

  container.innerHTML = pipelineSteps.map((s, idx) => `
    <div class="pipeline-step-item ${idx === 0 ? 'active' : ''}" data-step-idx="${idx}">
      <span class="pipeline-num">${s.step}</span>
      <div class="pipeline-name">${s.name}</div>
    </div>
  `).join('');

  const items = container.querySelectorAll('.pipeline-step-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const idx = parseInt(item.getAttribute('data-step-idx'), 10);
      renderPipelineDetails(idx);
    });
  });

  renderPipelineDetails(0); // Initial default render: Architecture & State Setup
}

function renderPipelineDetails(idx) {
  const s = pipelineSteps[idx];
  const card = document.getElementById('pipeline-details-card');
  if (!s || !card) return;

  card.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
      <span class="section-tag">${s.tag}</span>
      <span style="font-family: var(--font-code); font-size: 0.9rem; color: var(--cyan-flutter); font-weight: 700;">STAGE ${s.step} OF 04</span>
    </div>
    <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 16px;">${s.name}</h3>
    <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">${s.description}</p>
    
    <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; font-weight: 700;">Key Deliverables & Artifacts</div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${s.artifacts.map(art => `
        <div style="display: flex; align-items: center; gap: 10px; background: rgba(2, 132, 199, 0.04); border: 1px solid rgba(2, 132, 199, 0.15); padding: 10px 14px; border-radius: var(--radius-sm);">
          <span style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">${art}</span>
        </div>
      `).join('')}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initPipeline);
