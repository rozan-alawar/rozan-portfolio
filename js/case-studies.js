/* ==========================================================================
   FEATURED PROJECT DETAILS — KEY PRODUCT FEATURES & CAPABILITIES
   ========================================================================== */

const caseStudiesData = [
  {
    id: "mushaf-qatar",
    title: "Mushaf Qatar",
    tagline: "Official Quran Mobile Platform for the Ministry of Endowments & Islamic Affairs (Qatar)",
    image: "assets/images/mushaf_qatar.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/mushaf-qatar-%D9%85%D8%B5%D8%AD%D9%81-%D9%82%D8%B7%D8%B1/id500544210",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.islamweb.ns.quran&hl=en",
    overview: "Mushaf Qatar is the official Quran application for the Ministry of Endowments and Islamic Affairs in Qatar (iOS & Android). Built entirely from scratch, the platform features the complete 604-page high-resolution official Quranic manuscript paired with recitations, memorization tracking, an AI Quranic assistant, and daily worship tools.",

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
    image: "assets/images/gaza_hope_main.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/amal-app-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%A3%D9%85%D9%84/id6748066867",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wac_gaza_hope.gbv&hl=en",
    overview: "Amal App is an innovative humanitarian mobile application designed to connect displaced individuals and visually impaired citizens with nearby support centers. The platform features a 100% eyes-free dual-language voice control engine covering all app features and screens.",

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
    image: "assets/images/hisn_almuslim.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/%D8%AD%D8%B5%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85-%D8%A3%D8%B0%D9%83%D8%A7%D8%B1%D9%8A/id6761679344",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wepioners.hisnalmuslim&hl=ar",
    overview: "Hisn Al-Muslim is a comprehensive Islamic mobile application designed to help users build and maintain consistent daily morning and evening Athkar habits with intuitive tracking and counter features.",

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
    image: "assets/images/alsahaba_radio.jpg",
    appStoreUrl: "https://apps.apple.com/tt/app/%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D8%A8%D8%A9/id1627046327",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sahaba.radio&hl=ar",
    overview: "Alsahaba Radio is a multi-platform Islamic audio application broadcasting Holy Quran recitations and Sunnah programs live from Gaza (FM 99.6), delivering a simple, stable audio experience across iOS and Android.",

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

  container.innerHTML = `
    <div class="cs-header" style="margin-bottom: 32px;">
      <span class="section-tag" style="margin-bottom: 8px;">Featured Mobile Platform</span>
      <h1 class="cs-title" style="font-size: 2.6rem; margin-bottom: 12px;">${project.title}</h1>
      <p class="cs-subtitle" style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 24px;">${project.tagline}</p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">${appStoreBtn}${playStoreBtn}</div>
    </div>

    <img src="${project.image}" alt="${project.title} App Mockup" class="cs-banner-img" style="border-radius: var(--radius-md); margin-bottom: 40px; box-shadow: 0 15px 35px rgba(15,23,42,0.08);" />

    <div style="margin-bottom: 48px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">
        Project Overview
      </h2>
      <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.7;">
        ${project.overview}
      </p>
    </div>

    <!-- KEY FEATURES SECTION -->
    <div style="margin-bottom: 32px;">
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 28px;">
        Key App Features
      </h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
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
