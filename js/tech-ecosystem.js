/* ==========================================================================
   INTERACTIVE TECH ECOSYSTEM GRAPH — EMOJI-FREE & CLEAN
   ========================================================================== */

const techEcosystemData = [
  {
    id: "flutter",
    name: "Flutter 3.24",
    category: "Core Engine",
    description: "Cross-platform UI rendering engine powered by Impeller GLSL fragment shaders.",
    connections: ["dart", "riverpod", "gorouter", "ai-apis"],
    icon: "FLT"
  },
  {
    id: "dart",
    name: "Dart 3.5",
    category: "Core Language",
    description: "Type-safe language featuring pattern matching, sealed classes, dynamic isolates, and C-FFI interop.",
    connections: ["flutter", "riverpod", "rest-apis"],
    icon: "DRT"
  },
  {
    id: "riverpod",
    name: "Riverpod 2.5",
    category: "State Management",
    description: "Compile-safe, reactive state management provider tree eliminating UI state lifecycle bugs.",
    connections: ["flutter", "firebase", "supabase"],
    icon: "RPD"
  },
  {
    id: "gorouter",
    name: "GoRouter",
    category: "Navigation",
    description: "Declarative URL-based routing engine supporting deep links, nested tabs, and guard redirects.",
    connections: ["flutter", "riverpod"],
    icon: "GTR"
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Backend",
    description: "Real-time Cloud Firestore, Auth, Push Notifications, Analytics, and Crashlytics integration.",
    connections: ["flutter", "supabase"],
    icon: "FBS"
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Relational DB",
    description: "PostgreSQL database with Row Level Security (RLS), real-time change streams, and edge functions.",
    connections: ["flutter", "rest-apis"],
    icon: "SUP"
  },
  {
    id: "ai-apis",
    name: "AI & LLM APIs",
    category: "Intelligence",
    description: "Gemini 1.5, OpenAI, and on-device TFLite models streaming structured outputs directly into Flutter models.",
    connections: ["flutter", "rest-apis", "node-js"],
    icon: "AI"
  },
  {
    id: "rest-apis",
    name: "REST / GraphQL",
    category: "Networking",
    description: "Dio HTTP client with automated interceptors, JWT refresh rotators, and OpenAPI code generators.",
    connections: ["flutter", "node-js"],
    icon: "NET"
  },
  {
    id: "node-js",
    name: "Node.js",
    category: "Server Runtime",
    description: "High-concurrency microservices, AI key proxying, and WebSocket event servers.",
    connections: ["mongodb", "ai-apis"],
    icon: "NODE"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Document Store",
    description: "Flexible document store for fast unstructured telemetry, user preferences, and audit logs.",
    connections: ["node-js"],
    icon: "MNG"
  },
  {
    id: "git",
    name: "Git & CI/CD",
    category: "DevOps",
    description: "Automated GitHub Actions workflows, Fastlane App Store deployments, and unit test pipelines.",
    connections: ["flutter", "node-js"],
    icon: "GIT"
  }
];

function initTechEcosystem() {
  const container = document.getElementById('tech-node-container');
  const detailsBox = document.getElementById('tech-details-box');
  if (!container || !detailsBox) return;

  container.innerHTML = techEcosystemData.map((tech, idx) => `
    <div class="tech-node-card ${idx === 0 ? 'active' : ''}" data-tech-id="${tech.id}">
      <span class="tech-node-icon" style="font-family: var(--font-code); font-size: 0.8rem; font-weight: 800; color: var(--cyan-flutter);">${tech.icon}</span>
      <div class="tech-node-name">${tech.name}</div>
      <div class="tech-node-category">${tech.category}</div>
    </div>
  `).join('');

  const nodes = container.querySelectorAll('.tech-node-card');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const techId = node.getAttribute('data-tech-id');
      renderTechDetails(techId);
    });
  });

  renderTechDetails('flutter');
}

function renderTechDetails(techId) {
  const tech = techEcosystemData.find(t => t.id === techId);
  const detailsBox = document.getElementById('tech-details-box');
  if (!tech || !detailsBox) return;

  const connectedTechNames = tech.connections
    .map(cId => techEcosystemData.find(t => t.id === cId)?.name)
    .filter(Boolean);

  detailsBox.innerHTML = `
    <div style="font-family: var(--font-code); font-size: 0.85rem; color: var(--cyan-flutter); margin-bottom: 8px;">SELECTED NODE</div>
    <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">${tech.name}</h3>
    <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6; margin-bottom: 24px;">${tech.description}</p>
    
    <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Direct Architectural Connections</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      ${connectedTechNames.map(name => `<span class="tech-pill" style="border-color: var(--cyan-flutter); color: var(--cyan-flutter);">${name}</span>`).join('')}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initTechEcosystem);
