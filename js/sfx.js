/* ==========================================================================
   PROGRAMMING & TECH-THEMED AUDIO ENGINE (Web Audio API)
   Authentic mechanical keyboard keypresses & synth compilation feedback
   ========================================================================== */

class DeveloperAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Mechanical Keyboard Switch Click Sound (Cherry MX Tactile Click)
  playKeypressClick() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    
    // Noise Burst (Plastic Switch Bottom-out)
    const bufferSize = this.audioCtx.sampleRate * 0.015; // 15ms
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.audioCtx.createBufferSource();
    whiteNoise.buffer = buffer;

    const noiseFilter = this.audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3200, now);
    noiseFilter.Q.setValueAtTime(3.0, now);

    const noiseGain = this.audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.08, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.audioCtx.destination);

    // Tonal Click (Switch Spring & Stem Contact)
    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);

    oscGain.gain.setValueAtTime(0.06, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    osc.connect(oscGain);
    oscGain.connect(this.audioCtx.destination);

    whiteNoise.start(now);
    osc.start(now);
    osc.stop(now + 0.02);
  }

  // Compiler Execution Chime (Synthesized Code Build Success Audio)
  playCompileSuccessChime() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio

    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.03, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.12);
    });
  }

  // Terminal Sweep Whoosh Sound (Opening Modals or Case Studies)
  playTerminalWhoosh() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

const sfx = new DeveloperAudioEngine();

document.addEventListener('DOMContentLoaded', () => {
  const muteBtn = document.getElementById('sfx-mute-btn');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const isMuted = sfx.toggleMute();
      muteBtn.textContent = isMuted ? 'Audio Off' : 'Audio On';
    });
  }

  // Attach mechanical keyboard click to interactive elements
  const keyElements = document.querySelectorAll('.nav-link, .tech-node-card, .sim-tab-btn, .pipeline-step-item, .tech-pill');
  keyElements.forEach(el => {
    el.addEventListener('mouseenter', () => sfx.playKeypressClick());
  });

  // Attach compilation chime to buttons and project CTAs
  const actionButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .project-cta');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => sfx.playCompileSuccessChime());
  });
});
