/* ==========================================================================
   FLUTTER × AI STREAMING INTERACTIVE DEMO
   Simulates live token streaming into a type-safe Flutter UI widget
   ========================================================================== */

const aiDemoPresets = {
  structuredOutput: {
    title: "Type-Safe Structured Output Parser",
    prompt: "Analyze user biometric ECG stream and output JSON diagnosis",
    streamTokens: [
      '{', '\n  "diagnosis": "Normal Sinus Rhythm",',
      '\n  "confidence": 0.984,',
      '\n  "latency_ms": 118,',
      '\n  "recommendation": "Maintain standard hydration and daily routine."',
      '\n}'
    ],
    flutterCode: `// Type-Safe Gemini Response Model in Flutter
@freezed
class HealthAnalysis with _$HealthAnalysis {
  factory HealthAnalysis({
    required String diagnosis,
    required double confidence,
    required int latencyMs,
    required String recommendation,
  }) = _HealthAnalysis;

  factory HealthAnalysis.fromJson(Map<String, dynamic> json) => 
      _$HealthAnalysisFromJson(json);
}`
  },

  errorHandling: {
    title: "Resilient Rate-Limit & Fallback Engine",
    prompt: "Simulate API 429 quota limit and trigger exponential backoff retry",
    streamTokens: [
      '[SYS] API 429 Quota Exceeded\n',
      '[RETRY] Applying Exponential Backoff (Attempt 1/3 in 500ms)...\n',
      '[FAILOVER] Switching to On-Device TFLite Quantized Fallback Model...\n',
      '[SUCCESS] Local Inference Completed in 45ms (Offline Ready)'
    ],
    flutterCode: `// Resilient AI Client with Circuit Breaker & Local Fallback
Future<String> queryResilientAi(String prompt) async {
  try {
    return await cloudAiClient.generate(prompt);
  } on RateLimitException catch (_) {
    return await localTfliteEngine.infer(prompt);
  }
}`
  }
};

let currentAiTokenIndex = 0;
let isAiStreaming = false;

function triggerAiStreamDemo(presetKey) {
  if (isAiStreaming) return;
  const preset = aiDemoPresets[presetKey] || aiDemoPresets.structuredOutput;
  
  const tokenDisplay = document.getElementById('ai-stream-output');
  const codeDisplay = document.getElementById('ai-flutter-code');
  const latencyBadge = document.getElementById('ai-latency-badge');
  if (!tokenDisplay || !codeDisplay) return;

  isAiStreaming = true;
  tokenDisplay.textContent = "";
  codeDisplay.textContent = preset.flutterCode;
  if (latencyBadge) latencyBadge.textContent = "Streaming tokens...";

  currentAiTokenIndex = 0;

  const interval = setInterval(() => {
    if (currentAiTokenIndex < preset.streamTokens.length) {
      tokenDisplay.textContent += preset.streamTokens[currentAiTokenIndex];
      currentAiTokenIndex++;
    } else {
      clearInterval(interval);
      isAiStreaming = false;
      if (latencyBadge) latencyBadge.textContent = "Stream Complete • 118ms Latency";
    }
  }, 180);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn-ai-demo-1');
  const btn2 = document.getElementById('btn-ai-demo-2');

  if (btn1) btn1.addEventListener('click', () => triggerAiStreamDemo('structuredOutput'));
  if (btn2) btn2.addEventListener('click', () => triggerAiStreamDemo('errorHandling'));

  // Trigger initial stream automatically
  setTimeout(() => triggerAiStreamDemo('structuredOutput'), 1000);
});
