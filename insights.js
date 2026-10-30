/* GMI Cloud · Competitive Intel Radar — analyst layer.
 * Hand-written synthesis on top of data.js. Refresh monthly (or when a trend shifts).
 * Evidence items reference data.js item ids, so every claim links to its source.
 */
window.CI_INSIGHTS = {
  period: "Sep 15 – Oct 29, 2026",
  updated: "2026-10-30",

  headline: "AI clouds are moving up the stack: from renting GPUs to owning the model lifecycle.",
  subhead: "Compute is commoditizing. The fight has shifted to post-training, agent workloads and price-per-token, and capital is pouring in to fund it.",

  /* Hero stats: each one is an insight, not an activity count */
  stats: [
    { value: "6", label: "players launched post-training / RL products in 5 weeks", trend: "posttrain" },
    { value: "4", label: "inference platforms shipped coding-agent bridges", trend: "agents" },
    { value: "$9.9B", label: "new capital raised or financed by 4 neoclouds since Sep 15", trend: "capital" },
    { value: "≤5 days", label: "spread between first and last major host on a day-0 model launch", trend: "models" }
  ],

  /* Categorical order = validated palette order (dataviz reference palette, dark steps) */
  trends: [
    { id: "posttrain", short: "Post-training", name: "Post-training goes managed", color: "#3987e5", icon: "◎", momentum: 5,
      oneLiner: "SFT, RL and eval are becoming a hosted product layer on top of inference.",
      evidence: ["togetherai-20261019", "crusoe-20261021", "baseten-20261023", "modal-20261022", "primeintellect-20261019", "fireworksai-20261020-2"],
      pmm: "Own the 'from model to your model' story before it becomes a checkbox.",
      product: "Prioritize managed fine-tuning + RL on Inference Engine. Tinker-compatible APIs keep switching costs low." },
    { id: "agents", short: "Coding agents", name: "Coding agents drive demand", color: "#d95926", icon: "⌘", momentum: 5,
      oneLiner: "Every inference host now routes coding-agent traffic to open models at 50%+ lower spend.",
      evidence: ["togetherai-20261005", "fireworksai-20260928", "novitaai-20261021", "friendliai-20260921", "cerebras-20260929"],
      pmm: "Lead with cost per agent session, not cost per GPU-hour.",
      product: "Ship a one-command bridge (Claude Code / Codex / OpenCode) to GMI model APIs. Now table stakes." },
    { id: "stack", short: "Up the stack", name: "Neoclouds climb the stack", color: "#199e70", icon: "▲", momentum: 4,
      oneLiner: "GPU clouds are packaging platforms, vertical kits (physical AI) and acquisitions.",
      evidence: ["coreweave-20260930", "nb-20261001-inferize", "nb-20261021-physical-ai", "coreweave-20261021-2", "togetherai-20261027", "lambda-20261013"],
      pmm: "Raw-capacity messaging loses. Sell outcomes per workload (train, serve, agent).",
      product: "Cluster Engine must win above open-source Run:ai: self-healing, Xid policies, observability." },
    { id: "silicon", short: "Next-gen silicon", name: "Next-gen silicon race", color: "#c98500", icon: "◆", momentum: 4,
      oneLiner: "Rubin NVL72 is in production, B300 certifications are landing, and LPX/wafer-scale chips sell latency.",
      evidence: ["coreweave-20260930-2", "nb-20261008-b300", "groq-20260824", "cerebras-20261027", "coreweave-20260930-3"],
      pmm: "Publish a Rubin / B300 availability timeline. Silence reads as 'behind'.",
      product: "Secure third-party proof (ClusterMAX, Exemplar, MLPerf) for the next RFP cycle." },
    { id: "economics", short: "Price war", name: "Price-per-token war", color: "#d55181", icon: "$", momentum: 4,
      oneLiner: "Batch tiers, spot, transparent pricing and token-efficient models all push unit cost down.",
      evidence: ["runpod-20261028", "nb-20261021-pricing", "nb-20260922-spot", "fireworksai-20260923", "baseten-20261028"],
      pmm: "Make pricing a marketing asset: public, comparable, with a cost calculator.",
      product: "Add a discounted async/batch tier and a spot ladder for price-sensitive workloads." },
    { id: "models", short: "Own models", name: "Hosts become model makers", color: "#008300", icon: "✦", momentum: 3,
      oneLiner: "Fireworks, Baseten and fal ship their own models, while day-0 hosting is now a race measured in days.",
      evidence: ["fireworksai-20260923", "baseten-20261021", "falai-20260917", "togetherai-20261015", "fireworksai-20261020"],
      pmm: "Track and advertise day-0 availability. Buyers notice who is late.",
      product: "Set an internal SLA for top open-model launches (target day 0–1)." },
    { id: "enterprise", short: "Enterprise", name: "Enterprise via channels", color: "#9085e9", icon: "⬡", momentum: 3,
      oneLiner: "Hyperscalers, ISVs and sovereign partners are the new route to enterprise inference.",
      evidence: ["togetherai-20261006", "cerebras-20261027", "baseten-20261029", "nb-20260908-palantir", "coreweave-20261021"],
      pmm: "Build a partner-led enterprise motion: regional clouds, SIs, dev-tool ISVs.",
      product: "Close security gaps vs. CoreWeave Zero Trust (BYOK, tenant isolation, audit)." },
    { id: "capital", short: "Capital & geo", name: "Capital & geography land-grab", color: "#e66767", icon: "◉", momentum: 3,
      oneLiner: "Debt-funded capacity is flooding in, and competitors are entering APAC.",
      evidence: ["nb-20261022-citi", "crusoe-20260917", "modal-20261014", "coreweave-20261006", "friendliai-20261015"],
      pmm: "Defend APAC with local proof: customers, latency, support hours.",
      product: "Expect GPU-hour price pressure in 2027. Shift mix toward managed services margin." }
  ],

  /* Positioning map (analyst view). x: 0 raw infrastructure → 100 platform & models.
   * y: 0 training-centric → 100 inference-centric. to = where recent moves point. */
  map: [
    { name: "CoreWeave", seg: "neo", x: 28, y: 35, to: [50, 45] },
    { name: "Nebius", seg: "neo", x: 38, y: 48, to: [52, 60] },
    { name: "Lambda", seg: "neo", x: 18, y: 28, to: [26, 32] },
    { name: "Crusoe", seg: "neo", x: 22, y: 42, to: [46, 52] },
    { name: "Together AI", seg: "inf", x: 62, y: 66, to: [70, 52] },
    { name: "Fireworks AI", seg: "inf", x: 76, y: 84, to: [86, 68] },
    { name: "Baseten", seg: "inf", x: 70, y: 86, to: [84, 70] },
    { name: "Modal", seg: "inf", x: 52, y: 74, to: [58, 54] },
    { name: "RunPod", seg: "inf", x: 26, y: 62, to: [32, 62] },
    { name: "Novita AI", seg: "inf", x: 50, y: 82, to: [60, 84] },
    { name: "Groq", seg: "chip", x: 42, y: 92, to: [48, 90] },
    { name: "Cerebras", seg: "chip", x: 34, y: 90, to: [42, 90] },
    { name: "fal.ai", seg: "inf", x: 84, y: 90, to: [90, 82] },
    { name: "Prime Intellect", seg: "rl", x: 58, y: 14, to: [62, 42] },
    { name: "GMI Cloud", seg: "gmi", x: 36, y: 56, to: null }
  ],

  /* Where each player is heading. tagline = current homepage / site title messaging. */
  players: [
    { name: "CoreWeave", tagline: "The Essential Cloud for AI", bet: "Platform (Forge), physical AI, Rubin first", from: "GPU capacity", to: "AI lifecycle platform", threat: { gpu: 3, cluster: 3, inference: 2 },
      read: "Uses third-party ratings plus 'first Rubin' as its reliability brand. Now entering APAC (India)." },
    { name: "Nebius", tagline: "The ultimate cloud for AI explorers", bet: "Token Factory inference, transparent pricing, sovereign AI", from: "European neocloud", to: "Full-stack AI cloud", threat: { gpu: 3, cluster: 3, inference: 3 },
      read: "Most complete overlap with GMI. Competes on price transparency and an 'open, independent stack'." },
    { name: "Together AI", tagline: "The AI Native Cloud", bet: "Post-training, coding agents, cluster reliability", from: "Open-model API", to: "Model-shaping platform", threat: { gpu: 1, cluster: 3, inference: 3 },
      read: "Fastest day-0 host and the heaviest content engine. Traffic +27% MoM in Sep (Similarweb)." },
    { name: "Fireworks AI", tagline: "Fastest Inference for Generative AI", bet: "Own specialized models, routing, training", from: "Fast inference", to: "Specialized-model company", threat: { gpu: 0, cluster: 0, inference: 3 },
      read: "Differentiates with its own models (Ember-1) and routing. Forge keynote Nov 3." },
    { name: "Baseten", tagline: "Inference Platform: Deploy AI models in production", bet: "Base Labs models, RL environments, enterprise ISVs", from: "Model deployment", to: "Models + inference + RL", threat: { gpu: 0, cluster: 0, inference: 3 },
      read: "Highest launch cadence this month. Enterprise via ISV partners (Postman)." },
    { name: "Modal", tagline: "High-performance AI infrastructure", bet: "Training API, RL, agent sandboxes", from: "Serverless inference", to: "Serverless train + infer", threat: { gpu: 1, cluster: 1, inference: 2 },
      read: "$1B ARR validates DX-first. Sandboxes for agents are its new wedge." },
    { name: "Crusoe", tagline: "The AI factory company", bet: "Vertical integration, managed RL, modular DCs", from: "Energy-first DCs", to: "Lifecycle cloud", threat: { gpu: 2, cluster: 2, inference: 2 },
      read: "'One SLA from data center to cloud' is a strong enterprise message." },
    { name: "Lambda", tagline: "The Superintelligence Cloud", bet: "Owned US DCs, managed K8s + Run:ai", from: "Developer GPUs", to: "Large-scale training cloud", threat: { gpu: 3, cluster: 2, inference: 0 },
      read: "Ambitious brand. Product moves are infrastructure-heavy, light on inference." },
    { name: "Novita AI", tagline: "AI & Agent Cloud for Developers", bet: "Agent sandbox, coding-agent CLI, Chinese models", from: "Model API", to: "Agent cloud", threat: { gpu: 2, cluster: 0, inference: 3 },
      read: "Closest product shape to GMI (APIs + sandbox + GPUs). Wins on breadth of Chinese models." },
    { name: "Groq", tagline: "The premier neocloud for fast inference", bet: "LPX + Rubin, NVIDIA Cloud Partner", from: "Chip vendor", to: "Inference neocloud", threat: { gpu: 1, cluster: 0, inference: 3 },
      read: "Repositioned into GMI's category and ecosystem (NCP)." },
    { name: "Cerebras", tagline: "The world's fastest AI infrastructure", bet: "Hyperscaler resale (OCI), coding agents", from: "Wafer-scale chips", to: "Speed-as-a-service", threat: { gpu: 0, cluster: 0, inference: 2 },
      read: "Wins latency-bound agent workloads through partners rather than direct sales." },
    { name: "Prime Intellect", tagline: "Commoditizing Compute & Intelligence", bet: "Open RL stack, sandboxes, new inference service", from: "RL training", to: "Train + serve", threat: { gpu: 1, cluster: 2, inference: 2 },
      read: "Open-source RL is its funnel. Moondream acqui-hire to scale inference." },
    { name: "fal.ai", tagline: "Generative AI APIs for image, 3D and video", bet: "Own media models, speed", from: "Media API", to: "Media model maker", threat: { gpu: 0, cluster: 0, inference: 2 },
      read: "Owns generative media. Announces mostly via social, not its blog." },
    { name: "FriendliAI", tagline: "The Generative AI Infrastructure Company", bet: "Engine performance, Korea enterprise", from: "Inference engine", to: "APAC enterprise inference", threat: { gpu: 1, cluster: 0, inference: 2 },
      read: "Direct APAC overlap (Korea). Positions on engine efficiency vs. vLLM." }
  ],

  /* Messaging read across all competitors */
  messaging: [
    { claim: "“Cloud for AI”", who: ["CoreWeave", "Together AI", "RunPod", "Nebius", "Novita AI"], note: "Crowded and generic. No longer differentiating." },
    { claim: "“Fastest”", who: ["Fireworks AI", "Groq", "Cerebras"], note: "Speed is owned by specialty silicon and Fireworks." },
    { claim: "“Agents”", who: ["Novita AI", "Modal", "Prime Intellect"], note: "Emerging claim. Still up for grabs." },
    { claim: "“Superintelligence / Essential”", who: ["Lambda", "CoreWeave"], note: "Scale-and-ambition brands aimed at frontier labs." }
  ],

  gmi: {
    pmm: [
      "Reposition from GPU capacity to the full model lifecycle: train → post-train → serve.",
      "Claim an open lane: “the agent-ready cloud for APAC builders”. Nobody owns APAC + agents.",
      "Turn pricing into a weapon: public price page, per-session agent cost calculator, batch tier.",
      "Publish proof: day-0 model launches, Rubin/B300 timeline, third-party ratings."
    ],
    product: [
      "Managed fine-tuning + RL (Tinker-compatible) on Inference Engine. Most urgent gap.",
      "Coding-agent bridge CLI + model router to GMI APIs.",
      "Cluster Engine: self-healing nodes, Xid policies, Run:ai compatibility.",
      "Agent sandboxes (CPU / Vera) as a new SKU."
    ]
  },

  dayZero: {
    model: "Meta Muse Spark Open",
    hosts: [
      { name: "Together AI", date: "2026-10-15", id: "togetherai-20261015" },
      { name: "Baseten", date: "2026-10-15", id: "baseten-20261015" },
      { name: "Modal", date: "2026-10-15", id: "modal-20261015" },
      { name: "Groq", date: "2026-10-15", id: "groq-20261015", note: "limited preview" },
      { name: "Fireworks AI", date: "2026-10-20", id: "fireworksai-20261020" }
    ]
  },

  watch: [
    { date: "2026-11-03", what: "Fireworks Forge keynote", why: "Likely training / specialized-model launches" },
    { date: "2026-11-12", what: "Cerebras Q3 earnings", why: "First public read on inference-cloud scale" },
    { date: "Ongoing", what: "Rubin NVL72 availability", why: "CoreWeave in production. Watch Nebius, Lambda, Crusoe" },
    { date: "Ongoing", what: "APAC entries", why: "CoreWeave (India, Indonesia), FriendliAI (Korea)" }
  ],

  /* Similarweb public estimates; fill the rest from a team Similarweb / Semrush account via admin. */
  traffic: [
    { name: "Together AI", domain: "together.ai", month: "Sep 2026", visits: "998K", mom: "+27%", topCountry: "US 39%" }
  ],

  /* ================= PRODUCT LENS =================
   * Capabilities shipped or announced by competitors (Aug–Oct 2026). Each "who" entry links to a data.js item id.
   * Status is derived from adoption: 4+ = table stakes, 2–3 = emerging, 1 = differentiator. */
  capabilities: [
    { line: "gpu", name: "Next-gen GPUs live (Rubin / B300)", who: [["CoreWeave", "coreweave-20260930-2"], ["Nebius", "nb-20261008-b300"], ["Crusoe", "crusoe-20261021-2"], ["Groq", "groq-20260824"]] },
    { line: "gpu", name: "Spot / batch discount tiers", who: [["Nebius", "nb-20260922-spot"], ["RunPod", "runpod-20261028"], ["Baseten", "baseten-20261028"]] },
    { line: "gpu", name: "Transparent public pricing", who: [["Nebius", "nb-20261021-pricing"]] },
    { line: "gpu", name: "Agent CPUs & sandboxes", who: [["CoreWeave", "coreweave-20260930-3"], ["Modal", "modal-20261019"], ["Prime Intellect", "primeintellect-20260923"]] },
    { line: "gpu", name: "New capacity regions", who: [["CoreWeave", "coreweave-20261006"], ["Crusoe", "crusoe-20261021-3"], ["Lambda", "lambda-20260927"]] },
    { line: "cluster", name: "Self-healing clusters (auto-repair)", who: [["Together AI", "togetherai-20261027"]] },
    { line: "cluster", name: "Managed K8s / multi-node orchestration", who: [["Lambda", "lambda-20261013"], ["RunPod", "runpod-20261015"], ["Modal", "modal-20261001"]] },
    { line: "cluster", name: "Zero-trust & sovereign security", who: [["CoreWeave", "coreweave-20261021"], ["Nebius", "nb-20260908-palantir"]] },
    { line: "cluster", name: "End-to-end platform (train → eval → serve)", who: [["CoreWeave", "coreweave-20260930"], ["Crusoe", "crusoe-20261021"]] },
    { line: "inference", name: "Managed post-training / RL", who: [["Together AI", "togetherai-20261019"], ["Crusoe", "crusoe-20261021"], ["Baseten", "baseten-20261023"], ["Modal", "modal-20261022"], ["Fireworks AI", "fireworksai-20261020-2"], ["Prime Intellect", "primeintellect-20261019"]] },
    { line: "inference", name: "Day-0 open-model hosting", who: [["Together AI", "togetherai-20261015"], ["Baseten", "baseten-20261015"], ["Modal", "modal-20261015"], ["Groq", "groq-20261015"], ["Fireworks AI", "fireworksai-20261020"], ["DeepInfra", "deepinfra-20261028"], ["FriendliAI", "friendliai-20261021"]] },
    { line: "inference", name: "Coding-agent bridge / model router", who: [["Together AI", "togetherai-20261005"], ["Fireworks AI", "fireworksai-20260928"], ["Novita AI", "novitaai-20261021"], ["FriendliAI", "friendliai-20260921"]] },
    { line: "inference", name: "Own / specialized models", who: [["Fireworks AI", "fireworksai-20260923"], ["Baseten", "baseten-20261021"], ["fal.ai", "falai-20260917"]] },
    { line: "inference", name: "Low-latency silicon (LPX / wafer-scale)", who: [["Nebius", "nb-20260824-groq-lpx"], ["Groq", "groq-20260824"], ["Cerebras", "cerebras-20261027"]] },
    { line: "inference", name: "Global multi-region serving", who: [["Fireworks AI", "fireworksai-20260928-2"], ["CoreWeave", "coreweave-20261027"]] },
    { line: "inference", name: "Production rollouts (canary / A-B)", who: [["Together AI", "togetherai-20260922"]] },
    { line: "inference", name: "Fast cold start / model distribution", who: [["Baseten", "baseten-20261026"]] },
    { line: "multi", name: "Physical AI kits", who: [["Nebius", "nb-20261021-physical-ai"], ["CoreWeave", "coreweave-20261021-2"], ["Crusoe", "crusoe-20261021"]] }
  ],

  productTakeaways: [
    "Managed post-training and day-0 hosting are now table stakes. Not having them is a disqualifier, not a gap.",
    "Coding-agent bridges went from 0 to 4 in a month. Expect this to be table stakes by Q1.",
    "Cluster reliability is still a differentiator: only Together shipped self-healing. GMI can lead here."
  ],

  /* ================= MARKETING LENS ================= */
  tactics: [
    { id: "event", name: "Event-anchored launches", icon: "◷", who: [["Nebius", "nb-20261021-physical-ai"], ["CoreWeave", "coreweave-20261021-2"], ["Crusoe", "crusoe-20261021"], ["Lambda", "lambda-20261021"], ["Modal", "modal-20261001"]] },
    { id: "validation", name: "Third-party validation", icon: "✓", who: [["Nebius", "nb-20260923-clustermax"], ["CoreWeave", "coreweave-20260923"], ["Crusoe", "crusoe-20261021-2"], ["fal.ai", "falai-20260917"]] },
    { id: "benchmark", name: "Benchmark-led content", icon: "▤", who: [["FriendliAI", "friendliai-20261029"], ["Fireworks AI", "fireworksai-20260922"], ["Baseten", "baseten-20261028"], ["Modal", "modal-20261019"], ["Together AI", { url: "https://www.together.ai/blog/glm-5-3-vs-claude-fable-5-on-deepswe-cost-coding-and-routing", title: "GLM-5.3 vs. Claude Fable 5 on DeepSWE: cost, coding and routing" }]] },
    { id: "customer", name: "Customer & logo stories", icon: "★", who: [["CoreWeave", "coreweave-20260930-2"], ["Crusoe", "crusoe-20260923"], ["Baseten", "baseten-20261029"], ["Modal", { url: "https://modal.com/blog/sakana-case-study", title: "Launching a trillion-parameter model at Sakana AI (Oct 23)" }]] },
    { id: "channel", name: "Channel & partner PR", icon: "⇄", who: [["Together AI", "togetherai-20261006"], ["Cerebras", "cerebras-20261027"], ["Nebius", "nb-20260908-palantir"], ["FriendliAI", "friendliai-20261015"], ["Baseten", "baseten-20261029"]] },
    { id: "credits", name: "Credits & builder programs", icon: "◇", who: [["Nebius", "nb-20261019-eu-builders"], ["Crusoe", "crusoe-20261008"], ["Fireworks AI", "fireworksai-20261020-2"], ["Baseten", "baseten-20261021"]] },
    { id: "price", name: "Price-led messaging", icon: "$", who: [["Nebius", "nb-20261021-pricing"], ["RunPod", "runpod-20261028"], ["Together AI", "togetherai-20261005"], ["Fireworks AI", "fireworksai-20260928"], ["Novita AI", "novitaai-20261019"], ["Baseten", "baseten-20261028"]] },
    { id: "seo", name: "SEO & comparison content", icon: "⌕", who: [["DeepInfra", "deepinfra-20261022"], ["SiliconFlow", "siliconflow-20260928"], ["Novita AI", { url: "https://blogs.novita.ai/kimi-k3-vs-kimi-k2-5-api-pricing/", title: "Kimi K3 vs Kimi K2.5: pricing, performance and API changes" }], ["Together AI", { url: "https://www.together.ai/blog/glm-5-3-vs-claude-fable-5-on-deepswe-cost-coding-and-routing", title: "DeepSWE model comparison series" }]] },
    { id: "funding", name: "Funding & scale PR", icon: "▲", who: [["Nebius", "nb-20261022-citi"], ["Lambda", "lambda-20261001"], ["Crusoe", "crusoe-20260917"], ["Modal", "modal-20261014"], ["Groq", "groq-20260817"]] },
    { id: "day0", name: "Day-0 launch posts", icon: "⚡", who: [["Together AI", "togetherai-20261015"], ["Baseten", "baseten-20261015"], ["Modal", "modal-20261015"], ["DeepInfra", "deepinfra-20261028"], ["FriendliAI", "friendliai-20261021"], ["Novita AI", "novitaai-20261023"]] }
  ],

  /* The story each competitor is telling this quarter */
  stories: {
    "CoreWeave": "First on Rubin, Platinum-rated, now a full AI platform.",
    "Nebius": "Open, transparent and sovereign: the independent full-stack alternative.",
    "Together AI": "The open-model cloud: cheaper agents and models you own.",
    "Fireworks AI": "Specialized intelligence: smarter models and routing beat raw speed.",
    "Baseten": "Production inference, plus our own research models.",
    "Modal": "Developer-first at $1B scale: serverless for train, serve and agents.",
    "Crusoe": "Vertically integrated AI factory: one SLA from power to platform.",
    "Lambda": "The Superintelligence Cloud: scale and owned capacity.",
    "Novita AI": "The agent cloud for developers, first with every Chinese model.",
    "Groq": "Fast-inference neocloud, now inside the NVIDIA ecosystem.",
    "Cerebras": "Speed for agents, sold through hyperscalers.",
    "Prime Intellect": "Open superintelligence stack: RL research turned product.",
    "fal.ai": "The generative media platform, with the #1 video model of its own.",
    "FriendliAI": "More tokens from the same GPUs, with a beachhead in Korea.",
    "DeepInfra": "Cheapest day-0 model access, won through search.",
    "RunPod": "Affordable cloud for builders, now enterprise-ready.",
    "SiliconFlow": "Chinese open models plus tutorials for global developers.",
    "Replicate": "Quiet since joining Cloudflare."
  },

  /* Marketing moments on a shared timeline */
  moments: [
    { date: "2026-09-23", lvl: 2, label: "ClusterMAX 3.0", who: "Nebius, CoreWeave", note: "Both claim Platinum" },
    { date: "2026-09-30", lvl: -1, label: "CoreWeave launch day", who: "CoreWeave", note: "5 launches in one day" },
    { date: "2026-10-01", lvl: 1, label: "Modal Runtime", who: "Modal", note: "Own conference" },
    { date: "2026-10-14", lvl: -1, label: "Modal hits $1B ARR", who: "Modal", note: "Series D + ARR milestone" },
    { date: "2026-10-15", lvl: 2, label: "Muse Spark day-0", who: "Together, Baseten, Modal, Groq", note: "4 hosts, same day" },
    { date: "2026-10-21", lvl: -2, label: "GTC Berlin", who: "Nebius, CoreWeave, Crusoe, Lambda", note: "4 neoclouds, same day" },
    { date: "2026-11-03", lvl: 1, label: "Fireworks Forge", who: "Fireworks AI", note: "Upcoming keynote" },
    { date: "2026-11-12", lvl: -1, label: "Cerebras earnings", who: "Cerebras", note: "Upcoming" }
  ],

  marketingTakeaways: [
    { k: "Borrow", t: "Anchor launches to NVIDIA moments. 4 neoclouds shipped on GTC Berlin day; GMI should be in that news cycle." },
    { k: "Borrow", t: "Lead with third-party badges. ClusterMAX, Exemplar and MLPerf headline rivals' reliability claims." },
    { k: "Borrow", t: "Publish cost-per-task benchmarks (DeepSWE-style). Price comparisons now drive developer content." },
    { k: "Counter", t: "Rivals win enterprise through channels (IBM, Oracle, Palantir, Postman). Answer with APAC partner PR." },
    { k: "Own", t: "“Agents” and “APAC” are unclaimed lanes. Nobody combines them in their homepage story." }
  ]
};
