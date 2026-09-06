/* ==========================================================================
   FEATURED PROJECT CASE STUDIES

   Each project is told as a story, not a feature receipt:
     context   — who the users are and what was at stake
     challenge — the hard problem this project actually posed
     decisions — the engineering calls made, and WHY (this is what clients buy)
     outcome   — what shipped and what changed
     metrics   — real, verifiable numbers only

   ---------------------------------------------------------------------------
   ⚠️  METRICS ARE PLACEHOLDERS — REPLACE BEFORE THIS GOES OUT

   Every `metrics` entry below is marked `pending: true` and is HIDDEN from the
   rendered page until you set `pending: false` and paste the real value.
   Nothing unverified is ever shown to a visitor.

   Where to get each number:
     • Downloads / installs → App Store Connect ▸ Analytics ▸ Total Downloads
                              Google Play Console ▸ Statistics ▸ Installs
     • Rating + review count → the public store listing (both platforms)
     • Crash-free rate       → Firebase Crashlytics ▸ dashboard (last 30 days)
     • Cold start / app size → Xcode Organizer, or Play Console ▸ App size

   Rule: if you cannot point at a screen that shows the number, delete the
   entry. One inflated figure costs more credibility than ten missing ones.
   ========================================================================== */

const caseStudiesData = [
  {
    id: "mushaf-qatar",
    title: "Mushaf Qatar",
    tagline: "Official Quran Mobile Platform for the Ministry of Endowments & Islamic Affairs (Qatar)",
    sectionTag: "Official Government Platform",
    image: "assets/images/mushaf_qatar.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/mushaf-qatar-%D9%85%D8%B5%D8%AD%D9%81-%D9%82%D8%B7%D8%B1/id500544210",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.islamweb.ns.quran&hl=en",

    role: "Flutter Developer",
    platforms: "iOS & Android",
    client: "Ministry of Endowments & Islamic Affairs, Qatar",

    metrics: [
      { value: "—", label: "Downloads", pending: true },
      { value: "—", label: "App Store rating", pending: true },
      { value: "—", label: "Crash-free sessions", pending: true }
    ],

    context: "A national ministry needed its official Quran app rebuilt from scratch for iOS and Android — a religious text where a single rendering error is not a bug report, it is a public correction. The audience spans four languages and every device tier in circulation.",

    challenge: "Ship the complete 604-page official manuscript at print fidelity, keep it readable offline on low-end hardware, and layer memorization, audio and AI guidance on top — all within scholarly boundaries strict enough to survive ministry review.",

    decisions: [
      {
        title: "Rendered the manuscript as images, not text",
        detail: "The official Mushaf has fixed page geometry that reflowable text cannot reproduce. Serving 604 high-resolution page images preserves exact letter placement and Tajweed coloring, with an offline cache layer so a page never fails to open on a weak connection."
      },
      {
        title: "Constrained the AI assistant to approved sources only",
        detail: "An open-ended model answering questions about scripture was not acceptable to the client. The assistant answers strictly from ministry-approved Tafseer books, so every explanation traces back to a source the ministry already endorses."
      },
      {
        title: "Built for four languages and instant RTL switching",
        detail: "Arabic, English, Urdu and Hindi share one layout system. Direction changes at runtime without a restart, which meant treating RTL as a first-class layout case from the first screen rather than retrofitting it."
      }
    ],

    outcome: "Live on both stores as the ministry's official Quran platform, serving readers across four languages with full offline reading, multi-reciter audio, memorization tracking and daily worship tools.",

    features: [
      {
        number: "01",
        name: "High-Resolution Quran Reading & Display",
        description: "Dual reading modes (Official Manuscript Page View & Scalable Verse Text View), Tajweed color coding, nocturnal page themes (Paper, White, Dark), and offline page caching ensuring immediate access."
      },
      {
        number: "02",
        name: "Multi-Reciter Audio Library & Offline Downloads",
        description: "Extensive verified audio reciter library with synchronized verse highlighting, background audio playback controls, A-B repeat ranges for memorization, and offline audio downloads."
      },
      {
        number: "03",
        name: "Memorization & Revision Dashboard",
        description: "Dedicated memorization testing interface, revision progress dashboard with milestone achievement badges, and session saving for structured memorization."
      },
      {
        number: "04",
        name: "Khatmah Goal Planner & Analytics",
        description: "Customizable daily reading goal planner with automatic page progress tracking, 7-day reading analytics charts, daily reminders, and automated log history."
      },
      {
        number: "05",
        name: "Comprehensive Search & Commentary Library",
        description: "Full-text Quranic and Tafseer search, downloadable ministry-approved Tafseer books for offline reading, direct verse commentary popups, and English translations."
      },
      {
        number: "06",
        name: "AI Quranic Assistant",
        description: "Intelligent assistant providing contextual explanations for verse meanings based exclusively on ministry-approved Tafseer books via voice or text input within strict scholarly boundaries."
      },
      {
        number: "07",
        name: "Daily Worship Tools & Live Qibla Compass",
        description: "Location-based prayer schedules, Qatari Athan notifications, real-time live direction Qibla compass, digital Tasbeeh counter, and customizable supplications."
      },
      {
        number: "08",
        name: "Four-Language Support & Encrypted Privacy",
        description: "Full multi-language support (Arabic, English, Urdu, Hindi) with instant RTL switching, encrypted data backup and restore, and privacy-first local storage."
      }
    ]
  },

  {
    id: "gaza-hope",
    title: "Amal App",
    tagline: "Accessible Humanitarian Mobile Platform for iOS & Android",
    sectionTag: "Humanitarian Accessibility Platform",
    image: "assets/images/gaza_hope_main.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/amal-app-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%A3%D9%85%D9%84/id6748066867",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wac_gaza_hope.gbv&hl=en",

    role: "Flutter Developer",
    platforms: "iOS & Android",
    client: "Humanitarian relief organization",

    metrics: [
      { value: "—", label: "Downloads", pending: true },
      { value: "—", label: "App Store rating", pending: true },
      { value: "—", label: "Crash-free sessions", pending: true }
    ],

    context: "Picture the actual user: someone displaced in Gaza, trying to find the nearest aid centre. They may be blind. The power may be out. The network may be barely there, and the phone in their hand is probably several years old. Standard humanitarian apps assume a user who can see the screen, tap accurately, and stay connected. None of those assumptions hold here.",

    challenge: "Make every single function of a humanitarian services app — finding a relief centre, submitting a support request, reporting a safety incident, signing in — reachable without ever looking at the screen, in both Arabic and English, on hardware and networks that cannot be relied on.",

    decisions: [
      {
        title: "Treated voice as the primary interface, not an accessibility add-on",
        detail: "Bolting a screen reader onto a visual app leaves gaps — the moment a flow depends on seeing where you are, an eyes-free user is stranded. Instead every screen was built to be driven by spoken commands from the start, so navigation, settings, authentication and form submission all have a voice path. No feature is reachable only by sight."
      },
      {
        title: "Made the voice engine bilingual at the command level",
        detail: "Users switch between Arabic and English mid-sentence. Rather than shipping two separate command sets behind a language toggle, the engine recognises commands in both languages so the user is never blocked by having the app in the 'wrong' mode during an emergency."
      },
      {
        title: "Guest mode and offline content, because sign-up is a barrier in a crisis",
        detail: "Requiring account creation before showing help is the wrong trade in an emergency. Guest access opens the map and services immediately, with SMS, Google and Apple sign-in available for users who want to track requests. The awareness library — survival guides, legal rights, psychological self-help — stays readable with no connection at all."
      },
      {
        title: "Four display themes as a functional requirement",
        detail: "Low vision is a spectrum, not a binary. High contrast, dark, soft blue and normal themes combine with independent font scaling and contrast controls, so users with partial sight can tune the display rather than being pushed to the screen reader as the only option."
      }
    ],

    outcome: "Shipped on both stores as a fully eyes-free humanitarian platform: displaced and visually impaired users can locate nearby relief centres, file and track support requests, report incidents, and read crisis guidance — entirely by voice, in Arabic or English.",

    features: [
      {
        number: "01",
        name: "Dual-Language Voice Control Engine",
        description: "Enables 100% eyes-free operation across the entire app using natural voice commands in both Arabic and English. Users can navigate screens, toggle settings, authenticate, and submit forms without needing to look at the display."
      },
      {
        number: "02",
        name: "Custom Accessibility Suite",
        description: "Features 4 tailored display themes (Normal, High Contrast, Dark Mode, Soft Blue) alongside independent font size scaling, contrast controls, and automatic text-to-speech screen reader announcements."
      },
      {
        number: "03",
        name: "Interactive Humanitarian Service Map",
        description: "Integrates interactive mapping with categorized service markers, text search, category filtering, current location tracking, and audio voice readouts of nearby relief centers."
      },
      {
        number: "04",
        name: "Support Requests & Incident Reporting",
        description: "Allows displaced users to quickly submit, track, and follow up on humanitarian support requests and safety incident reports with real-time status notifications."
      },
      {
        number: "05",
        name: "Awareness & Educational Library",
        description: "Provides access to an offline-accessible library containing crisis survival guides, legal protection rights information, and psychological self-help resources."
      },
      {
        number: "06",
        name: "Multi-Channel Authentication & Profile Management",
        description: "Supports flexible sign-in methods including SMS OTP, Google Sign-In, Apple Sign-In, and Guest Mode for instant access during emergencies."
      }
    ]
  },

  {
    id: "hisn-almuslim",
    title: "Hisn Al-Muslim",
    tagline: "Comprehensive Supplication & Daily Remembrance Mobile App",
    sectionTag: "Daily Habit Platform",
    image: "assets/images/hisn_almuslim.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/%D8%AD%D8%B5%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85-%D8%A3%D8%B0%D9%83%D8%A7%D8%B1%D9%8A/id6761679344",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wepioners.hisnalmuslim&hl=ar",

    role: "Flutter Developer",
    platforms: "iOS & Android",
    client: "WePioneers",

    metrics: [
      { value: "—", label: "Downloads", pending: true },
      { value: "—", label: "App Store rating", pending: true }
    ],

    context: "Supplication collections have existed in print for centuries and in dozens of apps. The gap is not content — it is consistency. People open these apps for three days and stop, because reading a list gives no sense of progress.",

    challenge: "Turn a reference text into something a person returns to twice a day, without gamifying worship into something that feels trivial.",

    decisions: [
      {
        title: "Built around habit streaks rather than content browsing",
        detail: "The home surface leads with today's progress and the weekly graph, not a table of contents. Users see whether they have completed morning and evening Athkar before they see the catalogue, which reframes the app from a book into a daily practice."
      },
      {
        title: "Counter with haptics so it works without looking",
        detail: "Counting supplications is done with the phone half-attended — walking, sitting after prayer. Tap haptics confirm each count physically, so the user does not need to watch the number to trust it."
      },
      {
        title: "Night reading treated as the default case, not a toggle",
        detail: "Evening Athkar are read in low light. The dark theme was tuned for that specific use rather than inverted from the light theme, keeping Arabic script legible at low brightness without glare."
      }
    ],

    outcome: "Live on iOS and Android, with authentic morning, evening and daily supplication collections wrapped in streak tracking, a haptic counter, and a night-first reading experience.",

    features: [
      {
        number: "01",
        name: "Authentic Morning & Evening Athkar",
        description: "Complete collections of morning, evening, and daily supplications sourced directly from authentic Quranic and Sunnah texts."
      },
      {
        number: "02",
        name: "Daily & Weekly Habit Tracking",
        description: "Interactive progress dashboard displaying daily completion streaks, weekly habit graphs, and commitment metrics to cultivate consistent daily remembrance."
      },
      {
        number: "03",
        name: "Smart Digital Counter Engine",
        description: "Automated per-supplication digital counter with tap haptics, goal targets, and progress reset functions."
      },
      {
        number: "04",
        name: "Eye-Friendly Dark Mode UI",
        description: "Thoughtfully crafted user interface featuring soothing visual themes and full night mode support for comfortable evening reading."
      }
    ]
  },

  {
    id: "alsahaba-radio",
    title: "Alsahaba Radio",
    tagline: "Live Islamic Audio Broadcasting Platform (FM 99.6 Gaza)",
    sectionTag: "Live Audio Streaming Platform",
    image: "assets/images/alsahaba_radio.jpg",
    appStoreUrl: "https://apps.apple.com/tt/app/%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D8%A8%D8%A9/id1627046327",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sahaba.radio&hl=ar",

    role: "Flutter Developer",
    platforms: "iOS & Android",
    client: "Alsahaba Radio, Gaza",

    metrics: [
      { value: "—", label: "Downloads", pending: true },
      { value: "—", label: "App Store rating", pending: true }
    ],

    context: "A Gaza radio station broadcasting on FM 99.6 needed to reach listeners beyond its transmitter range — including a diaspora audience and locals whose reception is unreliable. The listening pattern is long and passive: hours in the background, often overnight.",

    challenge: "Keep a single live stream playing reliably for hours on unstable connectivity, without the app being killed in the background or draining the battery on older phones.",

    decisions: [
      {
        title: "Native background audio services on both platforms",
        detail: "Long-form listening dies if playback stops when the screen locks. Wiring into each platform's native background audio service — rather than relying on the Flutter layer staying alive — keeps the stream running through screen lock, app switching and lengthy sessions."
      },
      {
        title: "Kept the interface deliberately minimal",
        detail: "One stream, one job. The player was kept to play, pause, volume and source switching rather than padded with features, because the fastest path from opening the app to hearing audio is the entire product."
      },
      {
        title: "Sleep timer, because most listening happens at night",
        detail: "The dominant use case is falling asleep to recitation. A configurable timer stops playback on its own, so the stream is not running unattended until morning."
      }
    ],

    outcome: "Live on iOS and Android, carrying the station's FM 99.6 broadcast to listeners outside its transmitter range with uninterrupted background playback.",

    features: [
      {
        number: "01",
        name: "Live 24/7 Audio Streaming",
        description: "High-stability live audio stream broadcasting Alsahaba Radio FM 99.6 directly from Gaza with low latency."
      },
      {
        number: "02",
        name: "Seamless Playback Controls",
        description: "Dedicated media player interface allowing effortless play, pause, volume adjustment, and quick audio source switching."
      },
      {
        number: "03",
        name: "Automated Sleep Timer",
        description: "Built-in configurable sleep timer automatically turning off audio playback after a user-selected duration."
      },
      {
        number: "04",
        name: "Cross-Platform Audio Engine",
        description: "Native background audio service integration ensuring uninterrupted continuous listening on iOS and Android."
      }
    ]
  }
];

// Modal Controller Functions
function openCaseStudy(projectId) {
  const project = caseStudiesData.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('case-study-modal');
  const container = document.getElementById('modal-content-container');

  const appStoreBtn = project.appStoreUrl ? `
    <a href="${project.appStoreUrl}" target="_blank" rel="noopener" class="store-badge-btn">
      <svg class="store-badge-icon" viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-92.1-61.7-92.1zM286.7 93c28.2-34.7 24.8-76 23.4-89-25 1.5-57 17.4-73.4 36.4-17.2 19.8-25.2 52.4-22.3 84.7 28.5 2.3 57.3-15.1 72.3-32.1z"/>
      </svg>
      <div class="store-badge-text">
        <span class="store-badge-label">Download on the</span>
        <span class="store-badge-name">App Store</span>
      </div>
    </a>
  ` : '';

  const playStoreBtn = project.playStoreUrl ? `
    <a href="${project.playStoreUrl}" target="_blank" rel="noopener" class="store-badge-btn">
      <svg class="store-badge-icon" viewBox="0 0 512 512">
        <path fill="#410599" d="M325.8 256L68.7 413.2c-5.8 3.4-12.7 1.4-16.1-4.4-1.2-2.1-1.9-4.5-1.9-7V110.2c0-6.8 5.5-12.3 12.3-12.3 2.5 0 4.9.7 7 1.9L325.8 256z"/>
        <path fill="#00C1FF" d="M68.7 97.9l224.2 135.2L105.7 39.3C87.6 22 58.7 34.8 58.7 59.8v37.9c0 2.5.7 4.9 1.9 7l8.1-6.8z"/>
        <path fill="#00E676" d="M367.6 230.7l-41.8 25.3-32.9-32.9 32.9-32.9 41.8 25.3c10.8 6.5 10.8 28.7 0 35.2z"/>
        <path fill="#FFD600" d="M292.9 223.1L68.7 414.1c-2.1 1.2-4.5 1.9-7 1.9-25 0-37.8-28.9-20.5-47l187.2-193.8 64.5 47.9z"/>
        <path fill="#FF3D00" d="M325.8 256L68.7 97.9c-2.1-1.2-4.5-1.9-7-1.9C36.7 96 23.9 124.9 41.2 143l187.2 193.8L325.8 256z"/>
      </svg>
      <div class="store-badge-text">
        <span class="store-badge-label">GET IT ON</span>
        <span class="store-badge-name">Google Play</span>
      </div>
    </a>
  ` : '';

  // Only metrics with a confirmed real value are shown. Anything still marked
  // `pending` stays out of the DOM entirely — an unverified number on a
  // portfolio is worse than no number.
  const liveMetrics = (project.metrics || []).filter(m => !m.pending);
  const metricsBlock = liveMetrics.length ? `
    <div class="cs-metrics">
      ${liveMetrics.map(m => `
        <div class="cs-metric">
          <div class="cs-metric-value">${m.value}</div>
          <div class="cs-metric-label">${m.label}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const factRow = (label, value) => value ? `
    <div class="cs-fact">
      <span class="cs-fact-label">${label}</span>
      <span class="cs-fact-value">${value}</span>
    </div>
  ` : '';

  const decisionsBlock = (project.decisions || []).length ? `
    <div style="margin-bottom: 48px;">
      <h2 class="cs-section-heading">Engineering Decisions</h2>
      <p class="cs-section-intro">The calls that shaped the build, and the reasoning behind them.</p>
      <div class="cs-decisions">
        ${project.decisions.map((d, i) => `
          <div class="cs-decision">
            <div class="cs-decision-index">${String(i + 1).padStart(2, '0')}</div>
            <div>
              <h3 class="cs-decision-title">${d.title}</h3>
              <p class="cs-decision-detail">${d.detail}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  container.innerHTML = `
    <div class="cs-header" style="margin-bottom: 32px;">
      <span class="section-tag" style="margin-bottom: 8px;">${project.sectionTag || 'Featured Mobile Platform'}</span>
      <h1 class="cs-title" style="font-size: 2.6rem; margin-bottom: 12px;">${project.title}</h1>
      <p class="cs-subtitle" style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 24px;">${project.tagline}</p>

      <div class="cs-facts">
        ${factRow('My role', project.role)}
        ${factRow('Platforms', project.platforms)}
        ${factRow('Client', project.client)}
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">${appStoreBtn}${playStoreBtn}</div>
    </div>

    <img src="${project.image}" alt="${project.title} App Mockup" class="cs-banner-img" style="border-radius: var(--radius-md); margin-bottom: 40px; box-shadow: 0 15px 35px rgba(15,23,42,0.08);" />

    ${metricsBlock}

    <div style="margin-bottom: 48px;">
      <h2 class="cs-section-heading">The Problem</h2>
      <p class="cs-body-text">${project.context}</p>
      <p class="cs-body-text cs-challenge">${project.challenge}</p>
    </div>

    ${decisionsBlock}

    <div style="margin-bottom: 48px;">
      <h2 class="cs-section-heading">Outcome</h2>
      <p class="cs-body-text">${project.outcome}</p>
    </div>

    <!-- KEY FEATURES SECTION -->
    <div style="margin-bottom: 32px;">
      <h2 class="cs-section-heading">What Shipped</h2>

      <div class="cs-features-grid">
        ${project.features.map(f => `
          <div class="glass-card" style="padding: 24px; border: 1px solid rgba(2, 132, 199, 0.15); border-radius: var(--radius-md);">
            <div style="font-family: var(--font-code); font-size: 0.85rem; font-weight: 700; color: var(--cyan-flutter); margin-bottom: 8px;">${f.number}</div>
            <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">${f.name}</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${f.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Remember where focus came from so we can restore it on close.
  lastFocusedBeforeModal = document.activeElement;
  const closeBtn = backdrop.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

let lastFocusedBeforeModal = null;

function closeCaseStudy() {
  const backdrop = document.getElementById('case-study-modal');
  if (!backdrop.classList.contains('active')) return;

  backdrop.classList.remove('active');
  document.body.style.overflow = '';

  if (lastFocusedBeforeModal) {
    lastFocusedBeforeModal.focus();
    lastFocusedBeforeModal = null;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const backdrop = document.getElementById('case-study-modal');
  if (backdrop && backdrop.classList.contains('active')) closeCaseStudy();
});

// Clicking the backdrop (but not the drawer) dismisses the modal.
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('case-study-modal');
  if (!backdrop) return;
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeCaseStudy();
  });
});
