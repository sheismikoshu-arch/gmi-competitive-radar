/* GMI Cloud · Competitive Intel Radar — published dataset.
 * This file is the team-shared source of truth. Edit via admin.html, then
 * "导出 data.js" and replace this file on the server to publish.
 */
window.CI_SEED = {
  "version": 1,
  "updatedAt": "2026-10-30",
  "gmiProducts": [
    {
      "id": "gpu",
      "name": "GPU Cloud",
      "desc": "按需 / 预留 GPU 实例与裸金属（H100 / H200 / B200 / GB200 等）"
    },
    {
      "id": "cluster",
      "name": "Cluster Engine",
      "desc": "面向训练与大规模部署的集群编排与管理平台"
    },
    {
      "id": "inference",
      "name": "Inference Engine",
      "desc": "模型 API、专属推理端点与推理优化"
    },
    {
      "id": "multi",
      "name": "Multiple",
      "desc": "影响多条产品线或公司整体定位"
    }
  ],
  "categories": [
    "New Product",
    "Feature",
    "Pricing",
    "GPU/Hardware",
    "Infrastructure/Region",
    "Partnership",
    "Model Launch",
    "Funding/Financials"
  ],
  "competitors": [
    {
      "name": "Nebius",
      "segment": "GPU Neocloud",
      "overlap": [
        "gpu",
        "cluster",
        "inference"
      ],
      "site": "https://nebius.com/newsroom"
    },
    {
      "name": "CoreWeave",
      "segment": "GPU Neocloud",
      "overlap": [
        "gpu",
        "cluster"
      ],
      "site": "https://www.coreweave.com/newsroom"
    },
    {
      "name": "Lambda",
      "segment": "GPU Neocloud",
      "overlap": [
        "gpu",
        "cluster"
      ],
      "site": "https://lambda.ai/blog"
    },
    {
      "name": "Crusoe",
      "segment": "GPU Neocloud",
      "overlap": [
        "gpu",
        "cluster",
        "inference"
      ],
      "site": "https://www.crusoe.ai/resources/newsroom"
    },
    {
      "name": "Together AI",
      "segment": "Inference Platform",
      "overlap": [
        "inference",
        "gpu",
        "cluster"
      ],
      "site": "https://www.together.ai/blog"
    },
    {
      "name": "Fireworks AI",
      "segment": "Inference Platform",
      "overlap": [
        "inference"
      ],
      "site": "https://fireworks.ai/blog",
      "note": "11/3 将举办 Forge 主题发布会，预计有重要产品发布。"
    },
    {
      "name": "Baseten",
      "segment": "Inference Platform",
      "overlap": [
        "inference"
      ],
      "site": "https://www.baseten.co/blog/"
    },
    {
      "name": "Modal",
      "segment": "Serverless GPU",
      "overlap": [
        "inference",
        "gpu"
      ],
      "site": "https://modal.com/blog"
    },
    {
      "name": "Replicate",
      "segment": "Inference Platform",
      "overlap": [
        "inference"
      ],
      "site": "https://replicate.com/blog",
      "note": "2025-11 已宣布加入 Cloudflare；官方博客自 2026-04 起无更新，近 30 天无产品动态。",
      "note_en": "Joined Cloudflare (Nov 2025). Blog quiet since Apr 2026. No product moves in window."
    },
    {
      "name": "RunPod",
      "segment": "Serverless GPU",
      "overlap": [
        "gpu",
        "inference"
      ],
      "site": "https://www.runpod.io/blog"
    },
    {
      "name": "DeepInfra",
      "segment": "Inference Platform",
      "overlap": [
        "inference"
      ],
      "site": "https://deepinfra.com/blog",
      "note_en": "Low-price model API host. Wins on day-0 NVIDIA/open-model launches plus heavy SEO comparison content."
    },
    {
      "name": "Novita AI",
      "segment": "Inference Platform",
      "overlap": [
        "inference",
        "gpu"
      ],
      "site": "https://blogs.novita.ai/",
      "note": "定位“AI-Native Cloud”：模型 API + Agent Sandbox + GPU 实例 / 裸金属，产品结构与 GMI 最接近。"
    },
    {
      "name": "SiliconFlow",
      "segment": "Inference Platform",
      "overlap": [
        "inference"
      ],
      "site": "https://www.siliconflow.com/blog",
      "note_en": "Leans on Chinese open models (Tencent, DeepSeek, GLM) and tutorial content. No major launches this month."
    },
    {
      "name": "Groq",
      "segment": "Inference Silicon",
      "overlap": [
        "inference"
      ],
      "site": "https://groq.com/news",
      "note": "官网定位已改为“快速推理 Neocloud”；2026-08 成为 NVIDIA Cloud Partner，并提供 Vera Rubin NVL72 与 Groq 3 LPX。"
    },
    {
      "name": "Cerebras",
      "segment": "Inference Silicon",
      "overlap": [
        "inference"
      ],
      "site": "https://www.cerebras.ai/press-release",
      "note": "已上市（NASDAQ: CBRS），11/12 发布 Q3 财报。"
    },
    {
      "name": "fal.ai",
      "segment": "Generative Media",
      "overlap": [
        "inference"
      ],
      "site": "https://blog.fal.ai/",
      "note": "生成式媒体（图像 / 视频 / 3D）推理平台；日常模型上新主要发布在社交媒体和模型页，官方博客更新较少。"
    },
    {
      "name": "FriendliAI",
      "segment": "Inference Platform",
      "overlap": [
        "inference",
        "gpu"
      ],
      "site": "https://friendli.ai/blog",
      "note": "产品线：Model APIs、Dedicated Endpoints、BYOG（自带 GPU）；研发中心在首尔，深耕韩国企业市场。"
    },
    {
      "name": "Prime Intellect",
      "segment": "RL & Compute Platform",
      "overlap": [
        "inference",
        "cluster",
        "gpu"
      ],
      "site": "https://www.primeintellect.ai/blog",
      "note": "以开源 RL 训练（prime-rl）起家；10 月推出 Prime Inference 并收购 Moondream，正扩展到推理。"
    }
  ],
  "items": [
    {
      "id": "baseten-20261029",
      "competitor": "Baseten",
      "date": "2026-10-29",
      "category": "Partnership",
      "product": "inference",
      "impact": "Medium",
      "title": "Baseten and Postman: building reliable, cost-efficient agents for the enterprise",
      "title_zh": "Baseten 成为 Postman 企业级 Agent 的推荐推理伙伴",
      "summary_zh": "Postman 将 Baseten 作为企业 Agent 场景的推荐推理合作伙伴。",
      "takeaway_zh": "借助开发者工具平台获取企业推理流量是有效渠道。GMI 可梳理类似的 ISV / 开发者平台合作机会。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/baseten-postman-building-agents-for-enterprise/",
      "tags": [
        "企业",
        "Agent",
        "渠道"
      ],
      "verified": true,
      "themes": [
        "enterprise",
        "agents"
      ],
      "takeaway_en": "Dev-tool platforms are becoming the enterprise channel for inference. GMI should court ISVs the same way."
    },
    {
      "id": "baseten-20261029-2",
      "competitor": "Baseten",
      "date": "2026-10-29",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "Introducing joey-1, Baseten's fastest 2B decision model",
      "title_zh": "Baseten 发布 joey-1：最快、最便宜的 2B 决策模型",
      "summary_zh": "继上周发布 mammoth-1（27B）和 elephant-1（9B）之后，Baseten 又推出更小、更便宜的 2B 决策模型 joey-1。",
      "takeaway_zh": "Baseten 正密集推出自研模型系列，和 Fireworks Ember-1 一样，推理平台都在用自研模型做差异化。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/decisions-for-a-penny-introducing-joey-1/",
      "tags": [
        "自研模型",
        "小模型"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Third Base Labs model in a week. Baseten now sells models, not just hosting."
    },
    {
      "id": "friendliai-20261029",
      "competitor": "FriendliAI",
      "date": "2026-10-29",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "More throughput, faster generation: Friendli Inference vs. vLLM",
      "title_zh": "FriendliAI 发布 Friendli Inference 与 vLLM 的性能对比",
      "summary_zh": "FriendliAI 发布自研推理引擎与 vLLM 的对比，主张在相同 GPU 上获得更高吞吐和更快的生成速度。",
      "takeaway_zh": "自研推理引擎的性能对比是推理平台的常见营销素材。GMI 如有引擎优化成果，可以做同类公开基准。",
      "source": "FriendliAI Blog",
      "url": "https://friendli.ai/blog/more-tokens-same-gpus",
      "tags": [
        "推理引擎",
        "基准",
        "vLLM"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "Engine-vs-vLLM benchmarks are standard proof points. GMI needs a public throughput story."
    },
    {
      "id": "baseten-20261028",
      "competitor": "Baseten",
      "date": "2026-10-28",
      "category": "Pricing",
      "product": "inference",
      "impact": "Medium",
      "title": "The fastest, lowest-cost batch transcription with Qwen3-ASR",
      "title_zh": "Baseten 推出 Qwen3-ASR 批量转写：每小时音频约 0.1 美分",
      "summary_zh": "在 Baseten 上用 Qwen3-ASR 转写 1 小时音频只需约 1/10 美分，吞吐提升 7 倍、延迟降低 6.9 倍，质量基本不受影响。",
      "takeaway_zh": "语音 / 批处理推理的价格正在被大幅压低。GMI 如果有音频或批量推理产品，需要关注价格锚点。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/fastest-lowest-cost-qwen3-asr-batch-transcription/",
      "tags": [
        "ASR",
        "批量推理",
        "定价"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "ASR priced at ~$0.001/hour of audio resets price anchors for batch and audio inference."
    },
    {
      "id": "deepinfra-20261028",
      "competitor": "DeepInfra",
      "date": "2026-10-28",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "NVIDIA Nemotron 3.5 Transcribe live on DeepInfra from day zero",
      "title_zh": "NVIDIA Nemotron 3.5 Transcribe 首日上线 DeepInfra",
      "summary_zh": "支持多语言转写、词级时间戳，以及语音到英文的翻译，通过一个兼容 OpenAI 的 API 调用。",
      "takeaway_zh": "NVIDIA 新模型的 day-0 上架是推理平台展示与 NVIDIA 关系的方式。GMI 作为 NVIDIA 合作伙伴，应争取同步首发。",
      "source": "DeepInfra Blog",
      "url": "https://deepinfra.com/blog/nvidia-nemotron-3-5-transcribe-release",
      "tags": [
        "Day-0",
        "NVIDIA Nemotron",
        "语音"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "NVIDIA day-0 launches are a visible partner signal. GMI should be in the launch-partner list."
    },
    {
      "id": "runpod-20261028",
      "competitor": "RunPod",
      "date": "2026-10-28",
      "category": "Pricing",
      "product": "inference",
      "impact": "High",
      "title": "Batch Inference is generally available on Runpod Serverless",
      "title_zh": "RunPod Serverless 批量推理正式 GA，最高 7 折",
      "summary_zh": "批量推理直接在现有的队列型端点上运行，使用专属 worker，每天最多 300 万个请求；价格最高打 7 折，取消即停止计费。批量任务以更晚的启动时间换取更低成本，实时流量容量不受影响。",
      "takeaway_zh": "批量推理折扣正在成为推理平台的标准档位。GMI Inference Engine 需要评估是否提供批量 / 离线推理的价格档。",
      "source": "RunPod Blog",
      "url": "https://www.runpod.io/blog/batch-inference-is-now-generally-available-on-runpod",
      "tags": [
        "批量推理",
        "定价",
        "GA"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "Up to 30% off for batch makes a cheaper async tier table stakes for inference."
    },
    {
      "id": "cerebras-20261027",
      "competitor": "Cerebras",
      "date": "2026-10-27",
      "category": "Partnership",
      "product": "inference",
      "impact": "High",
      "title": "Cerebras and Oracle team up to bring Cerebras AI inference to Oracle Cloud Infrastructure",
      "title_zh": "Cerebras 与 Oracle 合作，在 OCI 上提供 Cerebras 高速推理",
      "summary_zh": "Cerebras 与 Oracle 宣布计划在 Oracle Cloud Infrastructure 上为 AI 实验室、企业和开发者提供 Cerebras 高速推理，用于对延迟敏感的多步 Agent 应用。",
      "takeaway_zh": "超大云正在引入专用推理芯片，“推理速度”的叙事被大厂渠道放大。GMI 需要准备 GPU 推理在延迟与成本上的对比口径。",
      "source": "Cerebras Newsroom",
      "url": "https://www.cerebras.ai/press-release/cerebras-and-oracle-team-up-to-bring-cerebras-ai-inference-to-oracle-cloud-inf-3389429",
      "tags": [
        "Oracle",
        "超大云渠道",
        "低延迟"
      ],
      "verified": true,
      "themes": [
        "silicon",
        "enterprise"
      ],
      "takeaway_en": "Hyperscalers now resell specialty inference chips. 'Speed' gets amplified through OCI's channel."
    },
    {
      "id": "coreweave-20261027",
      "competitor": "CoreWeave",
      "date": "2026-10-27",
      "category": "Infrastructure/Region",
      "product": "gpu",
      "impact": "Medium",
      "title": "CoreWeave expands with new capacity in Denmark and its first global AI network backbone",
      "title_zh": "CoreWeave 新增丹麦算力并上线首个全球 AI 网络骨干",
      "summary_zh": "CoreWeave 在欧洲（丹麦）新增 AI 算力，同时推出首个全球 AI 网络骨干，把高性能网络扩展到全球各区域。",
      "takeaway_zh": "跨区域网络骨干让多区域训练、推理部署更顺畅。GMI 的多区域叙事需要说清楚区域间网络能力。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-expands-global-ai-cloud-platform-with-new-capacity-in-denmark-and-first-ai-network-backbone",
      "tags": [
        "欧洲",
        "网络",
        "新区域"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "A private global backbone turns multi-region into a networking story, not just a capacity one."
    },
    {
      "id": "togetherai-20261027",
      "competitor": "Together AI",
      "date": "2026-10-27",
      "category": "Feature",
      "product": "cluster",
      "impact": "High",
      "title": "Auto repair for Together GPU Clusters: from GPU fault to healthy node",
      "title_zh": "Together GPU Clusters 上线自动修复：从 GPU 故障到节点恢复",
      "summary_zh": "Together GPU Clusters 的自动修复功能会检测 GPU、主机和网络 fabric 故障，自动选择影响最小的修复方式；用户可以按故障类型和 Xid 错误码，决定哪些修复自动执行。",
      "takeaway_zh": "集群可靠性与自愈能力是训练客户的核心痛点，这项功能直接对标 GMI Cluster Engine。建议产品团队确认我们的故障检测与自动修复能力，以及能否开放给客户按 Xid 自定义策略。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/auto-repair-for-together-gpu-clusters",
      "tags": [
        "集群可靠性",
        "自动修复",
        "Xid"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Self-healing clusters with per-Xid policies hit Cluster Engine's core reliability pitch head-on."
    },
    {
      "id": "baseten-20261026",
      "competitor": "Baseten",
      "date": "2026-10-26",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "BDN Sealed Volumes: publish once, mount anywhere",
      "title_zh": "Baseten 推出 BDN Sealed Volumes：模型数据一次发布、随处挂载",
      "summary_zh": "Sealed Volumes 像容器镜像管理代码一样管理模型数据：发布一次得到 digest，可以在任何地方挂载，挂载只需几秒。",
      "takeaway_zh": "模型冷启动和加载速度是推理平台的核心体验指标。GMI 应关注自身在模型分发与冷启动上的能力。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/bdn-sealed-volumes-publish-once-mount-anywhere/",
      "tags": [
        "冷启动",
        "模型分发"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "Seconds-to-mount model weights attacks cold start, a top inference UX metric."
    },
    {
      "id": "baseten-20261023",
      "competitor": "Baseten",
      "date": "2026-10-23",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Introducing the Baseten Environment Network for custom RL environments",
      "title_zh": "Baseten 推出 Environment Network：构建自定义 RL 环境的合作伙伴网络",
      "summary_zh": "提供经过严格筛选的合作伙伴网络，帮助客户构建自定义强化学习环境，加速后训练。",
      "takeaway_zh": "10 月内 Together、Crusoe、Baseten 都发布了 RL / 后训练相关产品，这是本月最明显的赛道趋势，建议列为 GMI 重点评估项。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/introducing-the-baseten-environment-network/",
      "tags": [
        "新产品线",
        "RL",
        "后训练"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "RL environments become a marketplace. Post-training is moving beyond compute."
    },
    {
      "id": "novitaai-20261023",
      "competitor": "Novita AI",
      "date": "2026-10-23",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "MiniMax M3.1 Flash on Novita AI",
      "title_zh": "MiniMax M3.1 Flash 上线 Novita AI",
      "summary_zh": "Novita 上线 MiniMax M3.1 Flash，主打更快、更便宜的 Agent 场景。",
      "takeaway_zh": "中国开源模型上架速度是 Novita 的强项，GMI 需关注同类模型的覆盖。",
      "source": "Novita AI Blog",
      "url": "https://blogs.novita.ai/minimax-m3-1-flash-on-novita-ai/",
      "tags": [
        "模型上架",
        "MiniMax"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Fast pickup of Chinese open models remains Novita's wedge."
    },
    {
      "id": "novitaai-20261023-2",
      "competitor": "Novita AI",
      "date": "2026-10-23",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Inworld TTS 2 and Bland BTTS voice APIs on Novita AI",
      "title_zh": "Inworld TTS 2 与 Bland BTTS 语音 API 上线 Novita",
      "summary_zh": "Novita 新增两款 TTS 语音模型 API，支持声音克隆、可控语音生成，并按字符计费。",
      "takeaway_zh": "Novita 正在扩大音频模型品类。",
      "source": "Novita AI Blog",
      "url": "https://blogs.novita.ai/inworld-tts-2-on-novita-ai/",
      "tags": [
        "TTS",
        "语音"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Novita broadens into voice: model APIs are going multimodal."
    },
    {
      "id": "nb-20261022-citi",
      "competitor": "Nebius",
      "date": "2026-10-22",
      "title": "Nebius secures $3.5 billion financing facility with Citi",
      "title_zh": "Nebius 与花旗达成 35 亿美元融资额度",
      "summary_zh": "Nebius 宣布获得花旗提供的 35 亿美元融资额度。继 8 月约 57.5 亿美元可转债之后，Nebius 持续为算力扩张储备资本。",
      "category": "Funding/Financials",
      "product": "gpu",
      "impact": "Medium",
      "takeaway_zh": "Nebius 资本弹药充足，预计会继续在大客户预留容量上以价格和交付周期施压；GMI 需强调交付速度、亚太布局与服务响应。",
      "source": "Nebius Newsroom",
      "url": "https://nebius.com/newsroom/nebius-secures-3-5-billion-financing-facility-with-citi",
      "tags": [
        "融资",
        "产能扩张"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Another $3.5B war chest. Expect aggressive reserved-capacity pricing."
    },
    {
      "id": "crusoe-20261022",
      "competitor": "Crusoe",
      "date": "2026-10-22",
      "category": "Infrastructure/Region",
      "product": "gpu",
      "impact": "Low",
      "title": "Crusoe partners with Araico to deploy AI cloud infrastructure in Paraguay",
      "title_zh": "Crusoe 与 Araico 合作在巴拉圭部署 AI 云基础设施",
      "summary_zh": "Crusoe 与 Araico 合作，在巴拉圭部署由水电供能的 AI 云基础设施。",
      "takeaway_zh": "Crusoe 继续以清洁能源选址扩张，对 GMI 的主要市场影响有限。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-araico-hydroelectric-ai-infrastructure-partnership",
      "tags": [
        "拉美",
        "新区域",
        "清洁能源"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Energy-first site selection continues. Low direct impact on GMI's markets."
    },
    {
      "id": "crusoe-20261022-2",
      "competitor": "Crusoe",
      "date": "2026-10-22",
      "category": "Funding/Financials",
      "product": "gpu",
      "impact": "Low",
      "title": "Neuberger and Crusoe announce $700M facility to finance power infrastructure",
      "title_zh": "Neuberger 与 Crusoe 宣布 7 亿美元电力基础设施融资额度",
      "summary_zh": "Neuberger Specialty Finance 为 Crusoe AI 工厂的电力基础设施提供 7 亿美元融资额度。",
      "takeaway_zh": "Crusoe 9 月刚完成 39 亿美元 F 轮融资，资金充足。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/neuberger-and-crusoe-announce-700-million-facility",
      "tags": [
        "融资",
        "电力"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Power financing is now its own capital line. Energy is the real bottleneck."
    },
    {
      "id": "deepinfra-20261022",
      "competitor": "DeepInfra",
      "date": "2026-10-22",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "Wan 3.0 video generation hosted on DeepInfra",
      "title_zh": "阿里 Wan 3.0 视频生成模型上线 DeepInfra",
      "summary_zh": "Wan 3.0 是一体化视频生成模型，可输入图片、视频、音频、文档和网页，生成最长 30 秒、带同步音频的 1080P 视频。DeepInfra 同时发布了集成文档、速度 / 成本基准和“最佳 API 提供商”对比文章。",
      "takeaway_zh": "DeepInfra 在用“最佳 API 提供商”这类 SEO 对比内容抢搜索流量。GMI 内容营销可以采用同样的打法。",
      "source": "DeepInfra Blog",
      "url": "https://deepinfra.com/blog/wan-3-0-model-documentation-integration-guide",
      "tags": [
        "视频生成",
        "Wan",
        "SEO 内容"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "DeepInfra pairs every launch with SEO 'best provider' content. A cheap, effective acquisition play."
    },
    {
      "id": "modal-20261022",
      "competitor": "Modal",
      "date": "2026-10-22",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Introducing Modal's Training API (Spindle, open source, Tinker-compatible)",
      "title_zh": "Modal 推出训练 API：开源的 Spindle，兼容 Tinker",
      "summary_zh": "Spindle 是开源的开放模型训练与微调 API，一条命令即可部署服务，并能运行任何兼容 Tinker 的训练代码。",
      "takeaway_zh": "兼容 Tinker 接口意味着客户可以在不同平台之间迁移训练代码。GMI 规划微调 / RL 产品时，应考虑兼容主流训练接口。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/introducing-training-api",
      "tags": [
        "新产品线",
        "训练 API",
        "Tinker",
        "开源"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "A Tinker-compatible training API makes RL code portable across clouds. Lock-in is shifting to the API layer."
    },
    {
      "id": "runpod-20261022",
      "competitor": "RunPod",
      "date": "2026-10-22",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "GLM-5.3 available on Runpod public endpoints",
      "title_zh": "GLM-5.3 上线 RunPod 公共端点",
      "summary_zh": "RunPod 在公共端点上线 GLM-5.3，并提供上手指南。",
      "takeaway_zh": "热门开源模型上架速度的跟踪项。",
      "source": "RunPod Blog",
      "url": "https://www.runpod.io/blog/getting-started-glm-5-3-runpod-public-endpoint",
      "tags": [
        "模型上架",
        "GLM"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Routine model pickup. Speed-to-host is now a baseline expectation."
    },
    {
      "id": "nb-20261021-pricing",
      "competitor": "Nebius",
      "date": "2026-10-21",
      "title": "Nebius brings compute pricing into the open as Europe's AI builders scale on its cloud",
      "title_zh": "Nebius 公开算力定价，服务欧洲 AI 开发者扩张",
      "summary_zh": "Nebius 发布新闻稿，主打算力价格公开透明，面向在其云上扩张的欧洲 AI 团队。",
      "category": "Pricing",
      "product": "gpu",
      "impact": "High",
      "takeaway_zh": "“透明定价”正成为 Neocloud 的营销主线。建议对照 GMI 官网定价页，评估同规格 GPU 的价格对比与公开程度，准备 battlecard 话术。",
      "source": "Nebius Newsroom",
      "url": "https://nebius.com/newsroom/nebius-brings-compute-pricing-into-the-open-as-europe-s-ai-builders-scale-on-its-cloud",
      "tags": [
        "定价",
        "欧洲"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "Public, transparent pricing is now a neocloud headline. GMI's pricing page is part of the pitch."
    },
    {
      "id": "nb-20261021-physical-ai",
      "competitor": "Nebius",
      "date": "2026-10-21",
      "title": "Nebius Physical AI Workbench brings agentic workflows to physical AI builders (with NVIDIA)",
      "title_zh": "Nebius 推出 Physical AI Workbench，与 NVIDIA 合作为物理 AI 开发者提供智能体工作流",
      "summary_zh": "Nebius 联合 NVIDIA 推出 Physical AI Workbench，面向机器人 / 物理 AI 开发者，提供智能体式工作流。",
      "category": "New Product",
      "product": "multi",
      "impact": "High",
      "takeaway_zh": "Neocloud 正从“卖 GPU”向“垂直场景工作台”延伸。Physical AI / 机器人是 NVIDIA 重点方向，GMI 可评估是否推出对应的解决方案页或模板。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/physical-ai-workbench",
      "tags": [
        "新产品线",
        "Physical AI",
        "NVIDIA"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Nebius and CoreWeave launched physical AI kits the same day. A clear NVIDIA-led wave."
    },
    {
      "id": "baseten-20261021",
      "competitor": "Baseten",
      "date": "2026-10-21",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "mammoth-1 and elephant-1: top-ranked decision models from Base Labs",
      "title_zh": "Baseten 发布 mammoth-1 与 elephant-1 决策模型",
      "summary_zh": "由 Baseten 内部研究团队 Base Labs 训练的决策模型，已开源，并提供一周免费试用。",
      "takeaway_zh": "Baseten 设立了自有研究团队（Base Labs），正从平台公司走向“平台 + 模型”。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/the-best-decision-models-in-the-world-mammoth-1-and-elephant-1/",
      "tags": [
        "自研模型",
        "开源"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Baseten's research arm ships its own open models, blurring host vs. model maker."
    },
    {
      "id": "coreweave-20261021",
      "competitor": "CoreWeave",
      "date": "2026-10-21",
      "category": "Feature",
      "product": "multi",
      "impact": "Medium",
      "title": "CoreWeave launches the Zero Trust AI Framework",
      "title_zh": "CoreWeave 推出 Zero Trust AI 安全框架",
      "summary_zh": "六层由客户掌控的安全能力（从加密密钥到运行时），目标是把 CoreWeave 自身移出客户的信任链，让客户掌控模型、数据和运行环境的访问权。",
      "takeaway_zh": "企业与受监管行业的采购越来越看安全与数据主权。GMI 应盘点自身的安全与合规能力，准备对标材料。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-launches-the-coreweave-zero-trust-ai-framework-keeping-customers-in-control-of-access-to-their-models-data-and-runtime-environments",
      "tags": [
        "安全",
        "零信任",
        "企业"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Six-layer zero trust targets regulated buyers. Security is becoming a feature list, not a checkbox."
    },
    {
      "id": "coreweave-20261021-2",
      "competitor": "CoreWeave",
      "date": "2026-10-21",
      "category": "New Product",
      "product": "multi",
      "impact": "High",
      "title": "CoreWeave unveils Physical AI Launchables for robotics and AV development",
      "title_zh": "CoreWeave 推出 Physical AI Launchables，简化机器人与自动驾驶开发环境搭建",
      "summary_zh": "为机器人与自动驾驶工程师提供预先测试好的软件配置，省去环境搭建工作。与 Nebius Physical AI Workbench 同日发布。",
      "takeaway_zh": "同一天两家头部 Neocloud 都发布了 Physical AI 产品，说明这已是明确的赛道趋势。建议 GMI 尽快评估 Physical AI 方案与模板。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-unveils-coreweave-physical-ai-launchables-taking-the-setup-work-out-of-robotics-and-av-development",
      "tags": [
        "新产品线",
        "Physical AI",
        "机器人"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Preconfigured robotics/AV stacks: neoclouds are packaging vertical solutions."
    },
    {
      "id": "crusoe-20261021",
      "competitor": "Crusoe",
      "date": "2026-10-21",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Crusoe opens private previews of Managed RL and Managed MLflow on Crusoe Cloud",
      "title_zh": "Crusoe 推出 Managed RL 与 Managed MLflow（私有预览）",
      "summary_zh": "在 GTC Berlin 上，Crusoe 宣布 Crusoe Cloud 覆盖开源模型全生命周期：新增 Managed RL（托管强化学习）和 Managed MLflow 两款产品，均为私有预览。两者建立在已 GA 的 Managed Inference 与 Serverless Fine-Tuning 之上，同时 Crusoe Cloud 新增 Physical AI 能力。",
      "takeaway_zh": "Neocloud 正从“裸金属 + 推理”上移到“微调 + RL + 实验管理”全链路。托管 RL 是后训练的热点需求，GMI 需评估在 Inference Engine 之上补齐微调与 RL 能力的路线图。",
      "source": "Crusoe Blog",
      "url": "https://www.crusoe.ai/resources/blog/crusoe-spark-liquid-managed-rl-mlflow",
      "tags": [
        "新产品线",
        "RL",
        "MLflow",
        "微调"
      ],
      "verified": true,
      "themes": [
        "posttrain",
        "stack"
      ],
      "takeaway_en": "Managed RL + MLflow on top of GA inference and fine-tuning: a full model-lifecycle cloud."
    },
    {
      "id": "crusoe-20261021-2",
      "competitor": "Crusoe",
      "date": "2026-10-21",
      "category": "GPU/Hardware",
      "product": "gpu",
      "impact": "Medium",
      "title": "Crusoe introduces Crusoe Spark Liquid, a liquid-cooled modular AI factory",
      "title_zh": "Crusoe 发布 Spark Liquid 液冷模块化 AI 工厂",
      "summary_zh": "Spark Liquid 是面向下一代 GPU 的液冷模块化数据中心，算力密度是风冷版 Spark 的 5 倍。Crusoe 还加入了 NVIDIA DSX POD 设计伙伴生态，并称其 Spark 模块中的 HGX B300 已获 NVIDIA 训练负载 Exemplar Cloud 认证。",
      "takeaway_zh": "模块化数据中心缩短了建设周期，“交付速度”将成为 Crusoe 的核心卖点。B300 Exemplar 认证方面，Nebius 和 Crusoe 都已拿到。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-introduces-crusoe-spark-liquid",
      "tags": [
        "液冷",
        "模块化数据中心",
        "B300"
      ],
      "verified": true,
      "themes": [
        "silicon",
        "capital"
      ],
      "takeaway_en": "5x density modular liquid cooling sells speed-to-capacity."
    },
    {
      "id": "crusoe-20261021-3",
      "competitor": "Crusoe",
      "date": "2026-10-21",
      "category": "Infrastructure/Region",
      "product": "gpu",
      "impact": "Low",
      "title": "Polar expands partnership with Crusoe in Norway with new 40MW development",
      "title_zh": "Polar 与 Crusoe 扩大挪威合作，新增 40MW AI 基础设施",
      "summary_zh": "Polar 与 Crusoe 在挪威扩展合作，新建 40MW AI 基础设施。",
      "takeaway_zh": "欧洲北欧产能持续增加，欧洲市场的竞争主要在 Nebius 和 Crusoe 之间。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/polar-crusoe-partnership-expansion",
      "tags": [
        "欧洲",
        "挪威"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "More Nordic capacity. Europe is a Nebius vs. Crusoe fight."
    },
    {
      "id": "deepinfra-20261021",
      "competitor": "DeepInfra",
      "date": "2026-10-21",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "NVIDIA Nemotron 3.5 Embed and Rerank on DeepInfra",
      "title_zh": "NVIDIA Nemotron 3.5 Embed 与 Rerank 上线 DeepInfra",
      "summary_zh": "DeepInfra 上线 NVIDIA Nemotron 3.5 的向量嵌入与重排序模型，面向检索 / RAG 场景。",
      "takeaway_zh": "RAG 配套模型的覆盖度可作为 GMI 模型库的对标项。",
      "source": "DeepInfra Blog",
      "url": "https://deepinfra.com/blog/nvidia-nemotron-3.5-embed-rerank-release",
      "tags": [
        "Embedding",
        "RAG",
        "NVIDIA"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "RAG building blocks (embed/rerank) round out the model catalog."
    },
    {
      "id": "deepinfra-20261021-2",
      "competitor": "DeepInfra",
      "date": "2026-10-21",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "IBM Granite 4.2 8B available on DeepInfra",
      "title_zh": "IBM Granite 4.2 8B 上线 DeepInfra",
      "summary_zh": "IBM 的 8B 推理模型 Granite 4.2，Apache 2.0 许可，支持 131K 上下文，面向企业与开发者场景。",
      "takeaway_zh": "企业向小模型的上架跟踪项。",
      "source": "DeepInfra Blog",
      "url": "https://deepinfra.com/blog/granite-4-2-8b-model-overview-integration-guide",
      "tags": [
        "模型上架",
        "IBM"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Enterprise-friendly small models keep catalogs broad."
    },
    {
      "id": "lambda-20261021",
      "competitor": "Lambda",
      "date": "2026-10-21",
      "category": "Partnership",
      "product": "multi",
      "impact": "Low",
      "title": "What Lambda is building with NVIDIA at GTC Berlin 2026",
      "title_zh": "Lambda 在 NVIDIA GTC Berlin 2026 的合作重点",
      "summary_zh": "Lambda 参加 NVIDIA GTC Berlin 2026，主题围绕让 AI 运行得更安全、更可靠、更高效。",
      "takeaway_zh": "GTC 系列活动是 Neocloud 集中发声的窗口。GMI 可提前规划同期的内容与活动。",
      "source": "Lambda Blog",
      "url": "https://lambda.ai/blog/lambda-with-nvidia-at-gtc-berlin-2026",
      "tags": [
        "NVIDIA",
        "活动",
        "欧洲"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "GTC events are where neoclouds concentrate announcements. Plan launches around them."
    },
    {
      "id": "modal-20261021",
      "competitor": "Modal",
      "date": "2026-10-21",
      "category": "New Product",
      "product": "inference",
      "impact": "Medium",
      "title": "Modal Dojo: building blocks for production-grade LLM RL training",
      "title_zh": "Modal 推出 Dojo：生产级 LLM 强化学习训练库",
      "summary_zh": "Modal Dojo 为 LLM 强化学习提供基础组件、调好的默认参数和可观测性，降低上手门槛。",
      "takeaway_zh": "RL 工具链在本月成为各家共同发力点（Together、Crusoe、Baseten、Modal）。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/get-started-with-llm-training-on-modal",
      "tags": [
        "RL",
        "训练"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "RL 'starter kits' lower the barrier: developer experience is the post-training moat."
    },
    {
      "id": "novitaai-20261021",
      "competitor": "Novita AI",
      "date": "2026-10-21",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Introducing Novi: run your coding-agent harness on Novita models",
      "title_zh": "Novita 推出 Novi：一条命令让编码 Agent 跑在 Novita 模型上",
      "summary_zh": "Novi 是免费 CLI，一条命令即可让 Claude Code、Codex、OpenCode、DeepSeek Harness、Kilo Code 等编码 Agent 改用 Novita 的模型。它自动完成 provider 配置、模型分级映射和请求适配，用户原有的扩展、MCP 和工作流不变。",
      "takeaway_zh": "继 Together Link、Fireworks FireRouter 之后，Novita 也推出了把编码 Agent 流量导向自家开源模型 API 的工具。这已是推理平台的共同打法，GMI Inference Engine 应尽快评估同类工具。",
      "source": "Novita AI Blog",
      "url": "https://blogs.novita.ai/introducing-novi/",
      "tags": [
        "新产品",
        "编码 Agent",
        "CLI"
      ],
      "verified": true,
      "themes": [
        "agents"
      ],
      "takeaway_en": "Novita is the 4th platform to ship a coding-agent bridge. This is now table stakes."
    },
    {
      "id": "runpod-20261021",
      "competitor": "RunPod",
      "date": "2026-10-21",
      "category": "Feature",
      "product": "gpu",
      "impact": "Low",
      "title": "Rebuilding Runpod's PyTorch templates (2.6 through 2.13)",
      "title_zh": "RunPod 重建 PyTorch 模板，覆盖 2.6 至 2.13",
      "summary_zh": "RunPod 的 PyTorch 模板现在覆盖 2.6 到 2.13 版本，并支持多种 CUDA 与 Ubuntu 版本组合。",
      "takeaway_zh": "开箱即用的镜像模板影响开发者体验，可与 GMI 的镜像库做对比。",
      "source": "RunPod Blog",
      "url": "https://www.runpod.io/blog/rebuilding-pytorch-templates",
      "tags": [
        "开发者体验",
        "镜像"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Curated framework images are a quiet but sticky DX advantage."
    },
    {
      "id": "friendliai-20261021",
      "competitor": "FriendliAI",
      "date": "2026-10-21",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "NVIDIA Nemotron Retriever on FriendliAI, available day-0",
      "title_zh": "NVIDIA Nemotron Retriever 首日上线 FriendliAI",
      "summary_zh": "FriendliAI 首日上线 NVIDIA Nemotron Retriever 检索模型；10/15 还上线了 Nemotron 3.5 Super VL 多模态模型。",
      "takeaway_zh": "FriendliAI 和 DeepInfra 都在抢 NVIDIA Nemotron 系列的 day-0 首发。",
      "source": "FriendliAI Blog",
      "url": "https://friendli.ai/blog/nvidia-nemotron-retriever",
      "tags": [
        "Day-0",
        "NVIDIA Nemotron"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Nemotron day-0 slots are contested by DeepInfra and FriendliAI."
    },
    {
      "id": "cerebras-20261020",
      "competitor": "Cerebras",
      "date": "2026-10-20",
      "category": "Funding/Financials",
      "product": "inference",
      "impact": "Low",
      "title": "Cerebras to report Q3 2026 results on November 12",
      "title_zh": "Cerebras 将于 11 月 12 日发布 2026 Q3 财报",
      "summary_zh": "Cerebras（NASDAQ: CBRS）将于 11 月 12 日美股收盘后发布第三季度财报并召开电话会议。",
      "takeaway_zh": "11/12 财报可以公开了解其推理云业务的规模与增长，建议届时补充收录。",
      "source": "Cerebras Newsroom",
      "url": "https://www.cerebras.ai/press-release/cerebras-systems-announces-date-of-third-quarter-2026-financial-results-3384934",
      "tags": [
        "财报",
        "上市公司"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Public earnings (Nov 12) will reveal real inference-cloud scale."
    },
    {
      "id": "fireworksai-20261020",
      "competitor": "Fireworks AI",
      "date": "2026-10-20",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "Muse Spark Open on Fireworks: Meta's open weights model, available on US serverless",
      "title_zh": "Meta Muse Spark Open 上线 Fireworks 美国区 serverless",
      "summary_zh": "Fireworks 在美国区 serverless 上线 Meta 开源权重模型 Muse Spark Open。Together AI 早 5 天（10/15）上线了同一模型。",
      "takeaway_zh": "同一热门模型，各推理平台上架时间相差不到一周。GMI 应把“热门开源模型 T+N 天上架”作为内部 KPI 持续跟踪。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/meta-muse-spark-open/",
      "tags": [
        "模型上架",
        "Meta"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Same model, 5 days after Together and Baseten. The day-0 gap is visible to buyers."
    },
    {
      "id": "fireworksai-20261020-2",
      "competitor": "Fireworks AI",
      "date": "2026-10-20",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "Train Muse Glimmer for free: Fireworks' training recipe",
      "title_zh": "Fireworks 开放免费训练 Muse Glimmer 的配方",
      "summary_zh": "Fireworks 公开了用其训练平台训练 Muse Glimmer 的方法，称在未见过的 Kalshi 预测话题上表现超过 Jev，并提供免费训练。",
      "takeaway_zh": "用“免费训练 + 公开配方”拉动训练平台使用，是推理平台向后训练延伸的营销手段。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/train-muse-glimmer-for-free/",
      "tags": [
        "训练平台",
        "免费额度"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "Free training credits plus an open recipe pull users into the training platform."
    },
    {
      "id": "modal-20261020",
      "competitor": "Modal",
      "date": "2026-10-20",
      "category": "Feature",
      "product": "inference",
      "impact": "Low",
      "title": "Serverless routing made sticky: Sticky Sessions on Modal Servers",
      "title_zh": "Modal 推出 Sticky Sessions：serverless 下的会话亲和路由",
      "summary_zh": "语音 Agent、多人游戏等负载现在可以使用 Sticky Sessions，在保留自动扩缩容的同时实现强会话亲和。",
      "takeaway_zh": "实时语音 Agent 场景的基础能力，可作为 GMI serverless 推理功能的对标项。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/serverless-routing-made-sticky",
      "tags": [
        "Serverless",
        "语音 Agent"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Session affinity for voice agents: serverless keeps absorbing stateful workloads."
    },
    {
      "id": "falai-20261020",
      "competitor": "fal.ai",
      "date": "2026-10-20",
      "category": "Feature",
      "product": "inference",
      "impact": "Low",
      "title": "EAGLE-4 technical deep dive (with Fireworks): speculative decoding for creative tasks",
      "title_zh": "fal 联合 Fireworks 发布 EAGLE-4 技术分析与投机解码基准数据集",
      "summary_zh": "fal 与 Fireworks 合作发布 EAGLE-4 的技术分析，并公开一个用于评测创意类任务投机解码效果的数据集。",
      "takeaway_zh": "fal 与 Fireworks 在推理加速上有技术合作。fal 的日常模型上新主要在社交媒体和模型页发布，官方博客更新较少。",
      "source": "fal Blog",
      "url": "https://blog.fal.ai/eagle-4-technical-deepdive/",
      "tags": [
        "投机解码",
        "推理优化"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "fal and Fireworks co-publish decoding research. Speed is a shared narrative."
    },
    {
      "id": "nb-20261019-eu-builders",
      "competitor": "Nebius",
      "date": "2026-10-19",
      "title": "Nebius backs Europe's AI builders with $10M in compute, capital, and community programs",
      "title_zh": "Nebius 投入 1000 万美元算力、资金与社区项目支持欧洲 AI 开发者",
      "summary_zh": "Nebius 在欧洲推出总额 1000 万美元的算力额度、资金与社区计划，是 9 月 AI Builder Program 的区域延伸。",
      "category": "Partnership",
      "product": "multi",
      "impact": "Medium",
      "takeaway_zh": "以算力额度换早期开发者心智的打法。GMI 的创业公司计划可对标其额度规模与权益设计。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/ai-builder-program-in-europe",
      "tags": [
        "开发者生态",
        "Startup 计划"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Compute credits as a land-grab for early-stage builders in Europe."
    },
    {
      "id": "modal-20261019",
      "competitor": "Modal",
      "date": "2026-10-19",
      "category": "GPU/Hardware",
      "product": "gpu",
      "impact": "Medium",
      "title": "NVIDIA Vera CPUs double throughput for Modal Sandboxes",
      "title_zh": "Modal 实测：NVIDIA Vera CPU 让 Sandbox 吞吐翻倍",
      "summary_zh": "Modal 在 Agent Sandbox 负载上测试了 NVIDIA 基于 Arm 的 Vera CPU：高负载下完成的任务数明显多于 x86 和 Graviton，且延迟不受影响。",
      "takeaway_zh": "Agent 的沙箱负载正在推高 CPU 算力需求（CoreWeave 也宣布提供 Vera）。GMI 可评估 Agent Sandbox 或 CPU 产品机会。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/nvidia-vera-sandboxes",
      "tags": [
        "Vera CPU",
        "Sandbox",
        "Agent"
      ],
      "verified": true,
      "themes": [
        "silicon",
        "agents"
      ],
      "takeaway_en": "Agent sandboxes drive CPU demand. Vera makes CPUs part of the AI-cloud pitch."
    },
    {
      "id": "novitaai-20261019",
      "competitor": "Novita AI",
      "date": "2026-10-19",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "DeepSeek V4.1 Flash 1017 on Novita AI at the same price",
      "title_zh": "DeepSeek V4.1 Flash 1017 上线 Novita，价格不变",
      "summary_zh": "Novita 上线 DeepSeek V4.1 Flash 1017 版本，Agent 编码得分更高，价格保持不变。",
      "takeaway_zh": "DeepSeek 新版本的上架速度跟踪项。",
      "source": "Novita AI Blog",
      "url": "https://blogs.novita.ai/deepseek-v4-1-flash-1017-on-novita-ai/",
      "tags": [
        "模型上架",
        "DeepSeek"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Same-price upgrades keep Novita's value story intact."
    },
    {
      "id": "togetherai-20261019",
      "competitor": "Together AI",
      "date": "2026-10-19",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Together Post-Training: frontier-grade model shaping with SFT or RL",
      "title_zh": "Together 推出 Post-Training：用 SFT / RL 对开源模型做后训练",
      "summary_zh": "支持对 Qwen、GLM、Kimi 等开源 LLM 做 SFT 或 RL 后训练，得到客户自有的定制模型。客户自己写训练循环，Together 负责底层基础设施。",
      "takeaway_zh": "与 Crusoe Managed RL 同期出现，“托管后训练 / RL”正成为推理平台的标配。GMI 需要明确自己在微调和 RL 上的产品路线与时间表。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/together-post-training",
      "tags": [
        "新产品线",
        "后训练",
        "RL",
        "微调"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "SFT/RL on open models you own. Post-training is Together's next growth line."
    },
    {
      "id": "primeintellect-20261019",
      "competitor": "Prime Intellect",
      "date": "2026-10-19",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "prime-rl 0.10.0: faster training, new RL loss IPO, unified eval stack",
      "title_zh": "prime-rl 0.10.0 发布：训练更快、新增 IPO 损失、统一评估栈",
      "summary_zh": "Prime Intellect 的开源 RL 框架 prime-rl 发布 0.10.0：训练提速，新增 IPO 强化学习损失，并统一了评估栈。",
      "takeaway_zh": "开源 RL 框架是其获取后训练客户的入口。GMI 可评估在集群上提供 prime-rl 等主流 RL 框架的一键环境。",
      "source": "Prime Intellect Blog",
      "url": "https://www.primeintellect.ai/blog/prime-rl-0-10-verifiers-0-4",
      "tags": [
        "RL",
        "开源框架"
      ],
      "verified": true,
      "themes": [
        "posttrain"
      ],
      "takeaway_en": "Open-source RL frameworks are the funnel into paid compute."
    },
    {
      "id": "nb-20261016-academy",
      "competitor": "Nebius",
      "date": "2026-10-16",
      "title": "Nebius Academy and NVIDIA expand hands-on AI training for developers",
      "title_zh": "Nebius Academy 与 NVIDIA 扩展面向开发者的 AI 实操培训",
      "summary_zh": "Nebius Academy 与 NVIDIA DLI 合作扩展动手实践类 AI 课程。",
      "category": "Partnership",
      "product": "multi",
      "impact": "Low",
      "takeaway_zh": "开发者教育内容是获客渠道之一，可作为 GMI 内容营销的参考。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/nebius-academy-nvidia-dli-hands-on-ai-courses",
      "tags": [
        "开发者教育",
        "NVIDIA"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Developer education as a pipeline channel."
    },
    {
      "id": "baseten-20261016",
      "competitor": "Baseten",
      "date": "2026-10-16",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Reflection's Beam is now available on Baseten",
      "title_zh": "Reflection 的 Beam 模型上线 Baseten",
      "summary_zh": "Reflection 的 501B 开源权重 MoE 模型 Beam 上线 Baseten，主打编码与 Agent 场景的高效推理，支持 100 万 token 上下文。",
      "takeaway_zh": "新开源模型上架速度的跟踪项。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/reflection-beam-launch/",
      "tags": [
        "模型上架",
        "Reflection"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Fast pickup of new open-weight MoE models."
    },
    {
      "id": "baseten-20261015",
      "competitor": "Baseten",
      "date": "2026-10-15",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Muse Spark Open now available on Baseten",
      "title_zh": "Meta Muse Spark Open 上线 Baseten",
      "summary_zh": "816B 开源权重全模态模型 Muse Spark Open 上线 Baseten，针对编码 Agent 优化，支持 100 万 token 上下文。与 Together 同日上线。",
      "takeaway_zh": "Together、Baseten 同日上线，Fireworks 晚 5 天。",
      "source": "Baseten Blog",
      "url": "https://www.baseten.co/blog/muse-spark-open-launch/",
      "tags": [
        "模型上架",
        "Meta"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Day-0 alongside Together and Modal."
    },
    {
      "id": "groq-20261015",
      "competitor": "Groq",
      "date": "2026-10-15",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Meta's Muse Spark Open now in limited preview on GroqCloud",
      "title_zh": "Meta Muse Spark Open 在 GroqCloud 开放有限预览",
      "summary_zh": "Groq 在 GroqCloud 上以有限预览形式提供 Meta 开源权重模型 Muse Spark Open，与其他推理平台同日跟进。",
      "takeaway_zh": "Groq 近期官网定位已改为“快速推理的 Neocloud”，正从芯片公司转型为推理云。",
      "source": "Groq Blog",
      "url": "https://groq.com/blog/meta-s-muse-spark-open-release-is-now-in-limited-preview-on-groqcloud",
      "tags": [
        "模型上架",
        "Meta"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Groq competes as an inference cloud, not just a chip."
    },
    {
      "id": "modal-20261015",
      "competitor": "Modal",
      "date": "2026-10-15",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Muse Spark Open is now available on Modal Auto Endpoints",
      "title_zh": "Meta Muse Spark Open 上线 Modal Auto Endpoints",
      "summary_zh": "Meta 面向编码优化的多模态模型 Muse Spark Open 上线 Modal Auto Endpoints。",
      "takeaway_zh": "Modal 也在 10/15 首日上架，与 Together、Baseten 同步。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/meta-muse-spark-open-now-available-on-modal",
      "tags": [
        "模型上架",
        "Meta"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Day-0 alongside Together and Baseten."
    },
    {
      "id": "runpod-20261015",
      "competitor": "RunPod",
      "date": "2026-10-15",
      "category": "Feature",
      "product": "multi",
      "impact": "Medium",
      "title": "What shipped on Runpod in Q3 2026",
      "title_zh": "RunPod 2026 Q3 产品更新汇总",
      "summary_zh": "Q3 发布包括：批量任务、Worker 亲和性、Global Volumes（基于对象存储的全局卷）、私有 ECR 支持、集群扩容（Cluster Expansion）、REST API v2，以及面向企业的 Organizations 功能。",
      "takeaway_zh": "RunPod 正从开发者 GPU 市场向企业（Organizations、集群扩容）延伸。建议产品团队按这份季度清单逐项对标。",
      "source": "RunPod Blog",
      "url": "https://www.runpod.io/blog/runpod-q3-2026-releases",
      "tags": [
        "季度更新",
        "企业",
        "集群"
      ],
      "verified": true,
      "themes": [
        "stack",
        "enterprise"
      ],
      "takeaway_en": "Organizations + cluster expansion: RunPod is moving upmarket."
    },
    {
      "id": "togetherai-20261015",
      "competitor": "Together AI",
      "date": "2026-10-15",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "Meta Muse Spark Open is live on Together AI",
      "title_zh": "Meta Muse Spark Open 上线 Together AI",
      "summary_zh": "Meta 面向 Agent 编码的开源权重模型 Muse Spark Open 已在 Together AI 上线，在 serverless 和专属部署上都支持 100 万 token 上下文。",
      "takeaway_zh": "热门开源模型首发上架的速度是推理平台的关键指标。需要确认 GMI Inference Engine 是否同步上架。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/meta-muse-spark-open",
      "tags": [
        "模型上架",
        "Meta",
        "编码 Agent"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Together sets the day-0 benchmark for major open models."
    },
    {
      "id": "friendliai-20261015",
      "competitor": "FriendliAI",
      "date": "2026-10-15",
      "category": "Partnership",
      "product": "inference",
      "impact": "Medium",
      "title": "FriendliAI and Ollama join forces to accelerate open model adoption among Korean enterprises",
      "title_zh": "FriendliAI 与 Ollama 合作，推动韩国企业采用开源模型",
      "summary_zh": "FriendliAI（总部旧金山，研发中心在首尔）与 Ollama 合作，面向韩国企业推广开源模型的落地。",
      "takeaway_zh": "FriendliAI 正深耕韩国企业市场，与 GMI 的亚太布局直接相关，值得销售团队关注。",
      "source": "FriendliAI Blog",
      "url": "https://friendli.ai/blog/friendliai-ollama-open-model-adoption-korea",
      "tags": [
        "亚太",
        "韩国",
        "企业"
      ],
      "verified": true,
      "themes": [
        "enterprise",
        "capital"
      ],
      "takeaway_en": "FriendliAI is building a Korea enterprise beachhead, directly in GMI's APAC lane."
    },
    {
      "id": "modal-20261014",
      "competitor": "Modal",
      "date": "2026-10-14",
      "category": "Funding/Financials",
      "product": "multi",
      "impact": "High",
      "title": "Modal crosses $1B annualized run rate and raises $750M Series D",
      "title_zh": "Modal 年化收入突破 10 亿美元，完成 7.5 亿美元 D 轮融资",
      "summary_zh": "Modal 宣布年化收入突破 10 亿美元，并完成由 Accel 领投的 7.5 亿美元 D 轮融资，用于建设面向 AI 应用的新基础设施。",
      "takeaway_zh": "开发者友好的 serverless GPU 赛道已跑出十亿美元级收入，验证了“体验优先”的路线。GMI 的开发者体验投入值得重新评估。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/1-billion-annualized-run-rate-series-d",
      "tags": [
        "融资",
        "收入里程碑"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "$1B ARR proves DX-first serverless GPU is a large, durable business."
    },
    {
      "id": "lambda-20261013",
      "competitor": "Lambda",
      "date": "2026-10-13",
      "category": "Feature",
      "product": "cluster",
      "impact": "High",
      "title": "Lambda to integrate open-source NVIDIA Run:ai with Lambda Kubernetes Service",
      "title_zh": "Lambda 将把开源的 NVIDIA Run:ai 集成到托管 Kubernetes 服务（LKS）",
      "summary_zh": "NVIDIA 宣布开源 Run:ai 后，Lambda 计划把它作为 Lambda Kubernetes Service 的一等选项提供，用于 GPU 调度与编排。",
      "takeaway_zh": "Run:ai 开源后，GPU 调度会成为各家 K8s 服务的标配能力，直接影响 GMI Cluster Engine 的差异化。建议产品团队评估集成 Run:ai，或明确自研调度的优势。",
      "source": "Lambda Blog",
      "url": "https://lambda.ai/blog/runai-on-lambda-kubernetes-service",
      "tags": [
        "Run:ai",
        "Kubernetes",
        "调度"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Open-source Run:ai makes GPU scheduling a commodity. Cluster Engine must differentiate above it."
    },
    {
      "id": "primeintellect-20261013",
      "competitor": "Prime Intellect",
      "date": "2026-10-13",
      "category": "Partnership",
      "product": "inference",
      "impact": "Medium",
      "title": "Moondream is joining Prime Intellect",
      "title_zh": "Prime Intellect 收购 Moondream",
      "summary_zh": "Prime Intellect 收购视觉模型公司 Moondream，两位创始人加入后负责推理业务的扩张，并加速多模态（视觉、computer use）模型工作。",
      "takeaway_zh": "通过并购补齐推理团队，说明 Prime Intellect 会持续加码推理业务（Nebius 收购 Inferize 也是同一思路）。",
      "source": "Prime Intellect Blog",
      "url": "https://www.primeintellect.ai/blog/moondream",
      "tags": [
        "并购",
        "多模态",
        "推理"
      ],
      "verified": true,
      "themes": [
        "models",
        "stack"
      ],
      "takeaway_en": "Acqui-hire to staff inference. RL-native players are moving into serving."
    },
    {
      "id": "nb-20261008-b300",
      "competitor": "Nebius",
      "date": "2026-10-08",
      "title": "Nebius achieves NVIDIA Exemplar Cloud on NVIDIA HGX B300 for training workloads",
      "title_zh": "Nebius 获得 NVIDIA HGX B300 训练负载 Exemplar Cloud 认证",
      "summary_zh": "Nebius 宣布其 HGX B300 平台在训练负载上获得 NVIDIA Exemplar Cloud 认证。",
      "category": "GPU/Hardware",
      "product": "cluster",
      "impact": "High",
      "takeaway_zh": "B300 训练性能背书会直接用于大客户 RFP。GMI 应确认自身 B300 / GB300 的认证与基准进展，并准备对等的性能证明材料。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/nebius-achieves-nvidia-exemplar-cloud-on-nvidia-hgx-b300-for-training",
      "tags": [
        "B300",
        "NVIDIA 认证",
        "训练"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "B300 training certification is RFP ammunition. GMI needs equivalent proof."
    },
    {
      "id": "crusoe-20261008",
      "competitor": "Crusoe",
      "date": "2026-10-08",
      "category": "Partnership",
      "product": "multi",
      "impact": "Low",
      "title": "Crusoe pledges $50 million in compute credits to White House AI science initiative",
      "title_zh": "Crusoe 向白宫 AI 科学计划承诺 5000 万美元算力额度",
      "summary_zh": "Crusoe 承诺为白宫 AI 科学计划提供 5000 万美元算力额度。",
      "takeaway_zh": "政府与科研合作是品牌背书渠道，可作为 GMI 公共部门策略的参考。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-pledges-50-million-in-compute-to-white-house",
      "tags": [
        "政府",
        "科研"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Public-sector credits buy brand and policy goodwill."
    },
    {
      "id": "coreweave-20261006",
      "competitor": "CoreWeave",
      "date": "2026-10-06",
      "category": "Infrastructure/Region",
      "product": "gpu",
      "impact": "High",
      "title": "CoreWeave enters India with AdaniConneX, planning 240 MW in Navi Mumbai",
      "title_zh": "CoreWeave 联合 AdaniConneX 进入印度，规划孟买 240 MW 部署",
      "summary_zh": "CoreWeave 与 AdaniConneX 合作进入印度，计划在新孟买部署 240 MW 算力。此前 8 月已进入印尼，这是其亚太扩张的第二站。",
      "takeaway_zh": "CoreWeave 正在快速进入亚太，与 GMI 的区域优势直接重叠。销售需要准备亚太客户的差异化话术，强调本地团队、交付速度与服务。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-enters-india-expanding-ai-cloud-platform-with-adaniconnex",
      "tags": [
        "亚太",
        "印度",
        "新区域"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "240 MW in India after Indonesia: CoreWeave is entering APAC at scale."
    },
    {
      "id": "togetherai-20261006",
      "competitor": "Together AI",
      "date": "2026-10-06",
      "category": "Partnership",
      "product": "inference",
      "impact": "High",
      "title": "Together AI expands enterprise inference capacity with IBM Cloud and NVIDIA",
      "title_zh": "Together AI 联合 IBM Cloud 与 NVIDIA 扩展企业推理产能",
      "summary_zh": "Together AI、IBM Cloud 与 NVIDIA 共建专属 B300 推理集群，企业客户可以在上面以生产规模运行开源模型。",
      "takeaway_zh": "借助大厂渠道进入企业市场是推理平台的新打法。GMI 可评估与区域云厂商或系统集成商的类似合作。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/expanding-our-enterprise-inference-capacity-with-ibm-cloud-and-nvidia",
      "tags": [
        "企业",
        "IBM",
        "B300",
        "推理"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Dedicated B300 inference via IBM Cloud: hyperscaler partners as enterprise distribution."
    },
    {
      "id": "togetherai-20261005",
      "competitor": "Together AI",
      "date": "2026-10-05",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Together Link: frontier-quality open models in the harness you already use",
      "title_zh": "Together Link：在现有编码 Agent 中直接使用开源前沿模型",
      "summary_zh": "Together Link 把 GLM 5.3、Kimi K3 等开源前沿模型接入团队已经在用的编码 Agent，号称可以把模型支出降低 50% 以上。",
      "takeaway_zh": "推理平台开始直接切入开发者工具场景（编码 Agent），用价格优势抢闭源模型的份额。GMI 可考虑做类似的兼容层和成本对比营销。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/together-link-frontier-quality-open-models-in-the-harness-you-already-use",
      "tags": [
        "新产品",
        "编码 Agent",
        "成本"
      ],
      "verified": true,
      "themes": [
        "agents"
      ],
      "takeaway_en": "Routing coding agents to open models at 50%+ lower spend makes cost a developer-tool story."
    },
    {
      "id": "primeintellect-20261002",
      "competitor": "Prime Intellect",
      "date": "2026-10-02",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Prime Inference: fast, reliable serving for frontier open models",
      "title_zh": "Prime Intellect 推出 Prime Inference：前沿开源模型的 serverless 与预留推理服务",
      "summary_zh": "Prime Inference 提供跨多个数据中心的 serverless 与预留两种推理服务，面向前沿开源模型。文章介绍了其在 GB200 NVL72 上部署 GLM-5.3 的架构：prefill / decode 分离、NVFP4 KV 压缩、NIXL 传输。",
      "takeaway_zh": "以 RL 训练起家的 Prime Intellect 正式进入推理市场，形成“训练 + RL + 推理”的全链路，直接对标 GMI Inference Engine。",
      "source": "Prime Intellect Blog",
      "url": "https://www.primeintellect.ai/blog/prime-inference",
      "tags": [
        "新产品线",
        "推理",
        "GB200"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "RL-native Prime Intellect now serves models on GB200. Training + inference in one place."
    },
    {
      "id": "nb-20261001-inferize",
      "competitor": "Nebius",
      "date": "2026-10-01",
      "title": "Nebius acquires Inferize to strengthen Nebius Token Factory's production inference stack",
      "title_zh": "Nebius 收购 Inferize，强化 Token Factory 生产级推理栈",
      "summary_zh": "Nebius 宣布收购 Inferize，用于增强其推理平台 Token Factory 的生产级推理能力。",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "takeaway_zh": "Nebius 正通过并购加速推理平台，直接对标 GMI Inference Engine。需跟踪 Token Factory 后续的功能与价格变化。",
      "source": "Nebius Newsroom",
      "url": "https://nebius.com/newsroom/nebius-acquires-inferize-to-strengthen-nebius-token-factorys-production-inference-stack",
      "tags": [
        "并购",
        "Token Factory",
        "推理"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Nebius buys inference tech to accelerate Token Factory against Inference Engine."
    },
    {
      "id": "nb-20261001-q3-platform",
      "competitor": "Nebius",
      "date": "2026-10-01",
      "title": "What we built this quarter: Nebius Cloud Platform (Q3 2026)",
      "title_zh": "Nebius 云平台 2026 Q3 产品更新汇总",
      "summary_zh": "Nebius 发布 Q3 季度云平台功能汇总博客。",
      "category": "Feature",
      "product": "cluster",
      "impact": "Medium",
      "takeaway_zh": "季度 changelog 是功能对标的最佳来源，建议产品团队逐条比对。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/compute-cloud-platform-q3-2026",
      "tags": [
        "季度更新",
        "Changelog"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Quarterly changelogs are the best feature-parity source. Review line by line."
    },
    {
      "id": "lambda-20261001",
      "competitor": "Lambda",
      "date": "2026-10-01",
      "category": "Funding/Financials",
      "product": "gpu",
      "impact": "Medium",
      "title": "Lambda closes $1 billion senior secured fixed rate financing",
      "title_zh": "Lambda 完成 10 亿美元优先担保固定利率融资",
      "summary_zh": "这是 Lambda 首笔面向保险公司和固收投资者的 10 亿美元以上机构债务融资，也是其第二笔机构信贷融资。",
      "takeaway_zh": "Neocloud 普遍转向债务融资扩张产能（Nebius、Lambda 同月）。预计 GPU 供给会增加，价格竞争可能加剧。",
      "source": "Lambda Blog",
      "url": "https://lambda.ai/blog/lambda-closes-1-billion-senior-secured-fixed-rate-financing",
      "tags": [
        "融资",
        "债务"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Neoclouds are shifting to large debt facilities. More supply, more price pressure."
    },
    {
      "id": "modal-20261001",
      "competitor": "Modal",
      "date": "2026-10-01",
      "category": "Feature",
      "product": "multi",
      "impact": "Medium",
      "title": "Runtime Roundup: VM Sandboxes, multi-node clusters, and more",
      "title_zh": "Modal Runtime 大会汇总：VM Sandbox、多节点集群等",
      "summary_zh": "Modal 首届 Runtime 大会发布了 VM Sandboxes、多节点集群等一系列新能力。",
      "takeaway_zh": "多节点集群意味着 Modal 正从推理向训练延伸，开始触及 GMI Cluster Engine 的领域。",
      "source": "Modal Blog",
      "url": "https://modal.com/blog/runtime-product-update-sandbox-endpoints",
      "tags": [
        "Sandbox",
        "多节点",
        "大会"
      ],
      "verified": true,
      "themes": [
        "stack",
        "agents"
      ],
      "takeaway_en": "VM sandboxes + multi-node clusters: Modal is moving from inference into training."
    },
    {
      "id": "coreweave-20260930",
      "competitor": "CoreWeave",
      "date": "2026-09-30",
      "category": "New Product",
      "product": "multi",
      "impact": "High",
      "title": "CoreWeave Forge launches: one environment for training, inference, evaluation and agents",
      "title_zh": "CoreWeave 发布 Forge：训练、推理、评估与 Agent 开发一体化环境",
      "summary_zh": "Forge 把训练、推理、评估与 Agent 开发连成一个环境，对模型、框架和其他云开放，目标是让每个模型版本更快上线、效果更好。",
      "takeaway_zh": "CoreWeave 正从 IaaS 向 AI 开发平台上移，同时覆盖 GMI Cluster Engine 和 Inference Engine 的价值主张。需要重点对标。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-forge-launches-turning-the-ai-loop-production-run-into-a-better-model-and-agent",
      "tags": [
        "新产品线",
        "平台化",
        "训练",
        "推理"
      ],
      "verified": true,
      "themes": [
        "stack",
        "posttrain"
      ],
      "takeaway_en": "One environment for train/infer/eval/agents. CoreWeave is becoming a platform company."
    },
    {
      "id": "coreweave-20260930-2",
      "competitor": "CoreWeave",
      "date": "2026-09-30",
      "category": "GPU/Hardware",
      "product": "cluster",
      "impact": "High",
      "title": "CoreWeave delivers NVIDIA Vera Rubin NVL72 at production scale, starting with Cognition",
      "title_zh": "CoreWeave 规模化交付 NVIDIA Vera Rubin NVL72，首个客户为 Cognition",
      "summary_zh": "CoreWeave 宣布 Vera Rubin NVL72 进入生产规模交付，首个客户是 Cognition。",
      "takeaway_zh": "Rubin 已进入竞品的生产交付阶段。GMI 需尽快明确 Rubin 上线时间与对外口径，以免在大客户 RFP 中落后。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition",
      "tags": [
        "Rubin",
        "NVL72",
        "训练"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Rubin is in production at a competitor. GMI's Rubin timeline is now a sales question."
    },
    {
      "id": "coreweave-20260930-3",
      "competitor": "CoreWeave",
      "date": "2026-09-30",
      "category": "GPU/Hardware",
      "product": "gpu",
      "impact": "Medium",
      "title": "CoreWeave to offer NVIDIA Vera, the first CPU built for AI agents",
      "title_zh": "CoreWeave 将提供 NVIDIA Vera CPU（面向 AI Agent）",
      "summary_zh": "CoreWeave 扩展算力组合，将提供 NVIDIA Vera CPU，面向 AI Agent 类负载。",
      "takeaway_zh": "Agent 负载带动 CPU 算力需求，可评估 GMI 是否需要提供 CPU 实例或 Agent 运行环境。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-to-offer-nvidia-vera-the-first-cpu-built-for-ai-agents",
      "tags": [
        "Vera CPU",
        "Agent"
      ],
      "verified": true,
      "themes": [
        "silicon",
        "agents"
      ],
      "takeaway_en": "CPUs for agents join the GPU catalog."
    },
    {
      "id": "coreweave-20260930-4",
      "competitor": "CoreWeave",
      "date": "2026-09-30",
      "category": "Partnership",
      "product": "multi",
      "impact": "Low",
      "title": "CoreWeave Partner Network brings validated integrations into one place",
      "title_zh": "CoreWeave 推出合作伙伴网络，集中提供经验证的集成",
      "summary_zh": "把经过验证的合作伙伴集成集中到一处，覆盖 AI 全流程，核心伙伴包括 Reflection、VAST Data、ClickHouse、CrowdStrike 等。",
      "takeaway_zh": "生态市场是平台化的一部分。GMI 可整理自己的合作伙伴集成并统一展示。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-partner-network-accelerates-the-path-to-ai-innovation",
      "tags": [
        "生态",
        "合作伙伴"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "A curated partner ecosystem is part of the platform play."
    },
    {
      "id": "coreweave-20260930-5",
      "competitor": "CoreWeave",
      "date": "2026-09-30",
      "category": "Partnership",
      "product": "inference",
      "impact": "Low",
      "title": "Ennoble Care selects CoreWeave for AI inference on RTX PRO 6000 via CKS",
      "title_zh": "Ennoble Care 选择 CoreWeave 运行推理（RTX PRO 6000 + CKS）",
      "summary_zh": "居家医疗机构 Ennoble Care 将通过 CoreWeave Kubernetes Service，在 NVIDIA RTX PRO 6000 GPU 上运行推理负载。",
      "takeaway_zh": "中端 GPU 加托管 K8s 的推理方案正在进入医疗等垂直行业，可作为 GMI 行业案例的参考。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/ennoble-care-selects-coreweave-to-power-ai-inference-across-its-home-based-care-network",
      "tags": [
        "客户案例",
        "医疗",
        "RTX PRO 6000"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Mid-range GPUs + managed K8s open vertical inference (healthcare)."
    },
    {
      "id": "cerebras-20260929",
      "competitor": "Cerebras",
      "date": "2026-09-29",
      "category": "Partnership",
      "product": "inference",
      "impact": "Medium",
      "title": "General Compute selects Cerebras to bring ultra-fast inference to agentic coding",
      "title_zh": "Neocloud General Compute 选择 Cerebras，为编码 Agent 提供高速推理",
      "summary_zh": "专门部署替代芯片的 Neocloud General Compute 与 Cerebras 签订多年协议，首个场景是 Agent 编码：编码 Agent 需要大量串行推理调用，速度优势会被放大。",
      "takeaway_zh": "Cerebras 正通过第三方 Neocloud 和超大云扩大分发，编码 Agent 是各家推理厂商的共同主战场。",
      "source": "Cerebras Newsroom",
      "url": "https://www.cerebras.ai/press-release/general-compute-selects-cerebras-to-bring-ultra-fast-inference-to-agentic-coding",
      "tags": [
        "编码 Agent",
        "渠道"
      ],
      "verified": true,
      "themes": [
        "agents",
        "silicon"
      ],
      "takeaway_en": "Coding agents' sequential calls make latency the selling point for specialty silicon."
    },
    {
      "id": "fireworksai-20260928",
      "competitor": "Fireworks AI",
      "date": "2026-09-28",
      "category": "New Product",
      "product": "inference",
      "impact": "High",
      "title": "Introducing FireRouter with Opus: cache-aware routing between open models and Claude Opus",
      "title_zh": "Fireworks 推出 FireRouter with Opus：在开源模型与 Claude Opus 之间做缓存感知路由",
      "summary_zh": "FireRouter 把常规对话轮次路由到开源模型，只在需要时调用 Claude Opus 5.5，号称每个会话成本降低 57%。它首次作为独立路由模型以 serverless 端点提供，属于 Fireworks Nexus 方案。",
      "takeaway_zh": "“开源 + 闭源混合路由”是推理平台的新竞争点（Together Link 也是同类思路）。GMI 可评估是否提供模型路由能力。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/introducing-firerouter-with-opus/",
      "tags": [
        "新产品",
        "模型路由",
        "成本"
      ],
      "verified": true,
      "themes": [
        "agents",
        "economics"
      ],
      "takeaway_en": "Cache-aware routing between open models and Opus: 57% lower cost per session."
    },
    {
      "id": "fireworksai-20260928-2",
      "competitor": "Fireworks AI",
      "date": "2026-09-28",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "Inside Fireworks multi-region deployments: one deployment, global scale",
      "title_zh": "Fireworks 多区域部署：一次部署，全球调度",
      "summary_zh": "Fireworks 介绍 GLOBAL 部署选项与多区域路由架构。它称自己在数十家云厂商的 30 多个区域运营，是业内最大的独立 GPU 机群之一。",
      "takeaway_zh": "Fireworks 本身就从多家云采购 GPU，这既是 GMI 的竞争对手，也是潜在的 GPU 客户。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/multi-region-deployment/",
      "tags": [
        "多区域",
        "可用性"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Fireworks runs 30+ regions across dozens of clouds. A competitor and a potential GPU buyer."
    },
    {
      "id": "siliconflow-20260928",
      "competitor": "SiliconFlow",
      "date": "2026-09-28",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Low",
      "title": "Tencent Hy4 Preview available on SiliconFlow (1M context)",
      "title_zh": "腾讯 Hy4 Preview 上线 SiliconFlow（100 万上下文）",
      "summary_zh": "SiliconFlow 上线腾讯 Hy4 Preview（MoE 架构，100 万上下文），并在官网横幅重点推广。近一个月其博客以模型接入教程和 SEO 内容为主，例如 10/29 的《Serverless 推理 vs 预留 GPU》，未见重大产品发布。",
      "takeaway_zh": "SiliconFlow 在海外主要靠中国模型首发和教程内容获客。GMI 可关注腾讯、DeepSeek、GLM 等新模型的上架时效。",
      "source": "SiliconFlow Blog",
      "url": "https://www.siliconflow.com/blog/tencent-hy4-preview-context-api-guide",
      "tags": [
        "模型上架",
        "腾讯 Hy4",
        "SEO 内容"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "SiliconFlow leans on Chinese-model availability plus tutorial SEO."
    },
    {
      "id": "lambda-20260927",
      "competitor": "Lambda",
      "date": "2026-09-27",
      "category": "Infrastructure/Region",
      "product": "gpu",
      "impact": "Medium",
      "title": "Lambda to build new data center in Mayes County, Oklahoma",
      "title_zh": "Lambda 将在俄克拉何马州 Mayes County 新建数据中心",
      "summary_zh": "新数据中心位于 MidAmerica Industrial Park，采用闭环冷却节约用水，Lambda 称未来十年将带来约 5 亿美元税收。",
      "takeaway_zh": "Lambda 持续在美国本土扩张自建数据中心，北美市场产能竞争加剧。",
      "source": "Lambda Blog",
      "url": "https://lambda.ai/blog/new-lambda-data-center-in-oklahoma",
      "tags": [
        "数据中心",
        "美国"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Lambda keeps building owned US data centers."
    },
    {
      "id": "nb-20260923-clustermax",
      "competitor": "Nebius",
      "date": "2026-09-23",
      "title": "Nebius rated Platinum in SemiAnalysis ClusterMAX 3.0",
      "title_zh": "Nebius 获评 SemiAnalysis ClusterMAX 3.0 白金级",
      "summary_zh": "Nebius 在 SemiAnalysis ClusterMAX 3.0 评级中获得 Platinum 等级。",
      "category": "GPU/Hardware",
      "product": "cluster",
      "impact": "High",
      "takeaway_zh": "ClusterMAX 评级已是买方常用参考。GMI 应关注自身评级并在销售材料中回应。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/nebius-platinum-clustermax-3-0",
      "tags": [
        "第三方评级",
        "ClusterMAX"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "ClusterMAX Platinum is a buyer shortcut. GMI needs a stated rating narrative."
    },
    {
      "id": "coreweave-20260923",
      "competitor": "CoreWeave",
      "date": "2026-09-23",
      "category": "GPU/Hardware",
      "product": "cluster",
      "impact": "Medium",
      "title": "CoreWeave earns SemiAnalysis Platinum ClusterMAX rating for the third consecutive time",
      "title_zh": "CoreWeave 连续第三次获评 SemiAnalysis ClusterMAX 白金级",
      "summary_zh": "CoreWeave 称自己是唯一在每次 ClusterMAX 评估中都获得 Platinum 的 AI 云。",
      "takeaway_zh": "ClusterMAX 3.0 中 CoreWeave 与 Nebius 都是白金级，GMI 需要明确自身评级的对外口径。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-becomes-the-only-provider-to-earn-semianalysis-platinum-clustermax-tm-rating-three-consecutive-times",
      "tags": [
        "ClusterMAX",
        "第三方评级"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Three-time Platinum: CoreWeave anchors its reliability claim on third-party ratings."
    },
    {
      "id": "crusoe-20260923",
      "competitor": "Crusoe",
      "date": "2026-09-23",
      "category": "Partnership",
      "product": "inference",
      "impact": "High",
      "title": "Crusoe and Thinking Machines Lab partner to power open-model inference at scale",
      "title_zh": "Crusoe 与 Thinking Machines Lab 合作，大规模支撑开源模型推理",
      "summary_zh": "Crusoe 与 Thinking Machines Lab 达成合作，为开源模型推理提供大规模算力。",
      "takeaway_zh": "头部 AI 实验室的推理合作是强背书。Crusoe 正把推理作为增长重点，与 GMI Inference Engine 正面竞争。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-thinking-machines-lab-inference-partnership",
      "tags": [
        "推理",
        "AI 实验室客户"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Frontier-lab inference deals are the strongest proof point in the market."
    },
    {
      "id": "fireworksai-20260923",
      "competitor": "Fireworks AI",
      "date": "2026-09-23",
      "category": "Model Launch",
      "product": "inference",
      "impact": "High",
      "title": "Introducing Ember-1: Kimi K3 quality with 40% fewer tokens",
      "title_zh": "Fireworks 发布自研专用模型 Ember-1：Kimi K3 同等质量，token 减少 40%",
      "summary_zh": "Ember-1 由 Fireworks Research 基于 Kimi K3 训练，学会去掉不必要的推理步骤，同等质量下 token 减少 40%。它是 Fireworks 一系列自研专用模型的第一个。",
      "takeaway_zh": "推理平台开始推出自有模型，形成差异化。GMI 需要思考仅做“模型托管”的定位是否足够。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/ember-1",
      "tags": [
        "自研模型",
        "Kimi K3",
        "效率"
      ],
      "verified": true,
      "themes": [
        "models",
        "economics"
      ],
      "takeaway_en": "Ember-1 matches Kimi K3 with 40% fewer tokens. Hosts now differentiate with their own models."
    },
    {
      "id": "primeintellect-20260923",
      "competitor": "Prime Intellect",
      "date": "2026-09-23",
      "category": "New Product",
      "product": "cluster",
      "impact": "Medium",
      "title": "Prime Sandboxes: MicroVMs for agentic RL training at scale",
      "title_zh": "Prime Sandboxes：面向大规模 Agent RL 训练的 MicroVM 沙箱",
      "summary_zh": "Prime Sandboxes 是完整的 Linux 虚拟机，专为 Agent 训练设计，定价按支持数千个并发实例来设计。",
      "takeaway_zh": "Agent RL 需要大量并发沙箱（Modal、Novita 也有 Sandbox 产品）。沙箱正成为 AI 云的新品类。",
      "source": "Prime Intellect Blog",
      "url": "https://www.primeintellect.ai/blog/sandboxes",
      "tags": [
        "Sandbox",
        "Agent RL",
        "新品类"
      ],
      "verified": true,
      "themes": [
        "agents",
        "posttrain"
      ],
      "takeaway_en": "MicroVM sandboxes for agentic RL: sandboxes become a new AI-cloud SKU."
    },
    {
      "id": "nb-20260922-spot",
      "competitor": "Nebius",
      "date": "2026-09-22",
      "title": "Introducing spot pricing for preemptible VMs",
      "title_zh": "Nebius 推出可抢占 VM 的 Spot 定价",
      "summary_zh": "Nebius 为可抢占虚拟机推出 Spot 计价模式。",
      "category": "Pricing",
      "product": "gpu",
      "impact": "Medium",
      "takeaway_zh": "Spot 实例降低了价格敏感型客户的入门门槛，GMI 可评估是否提供类似的低价可中断档位。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/introducing-spot-pricing-for-preemptible-vms",
      "tags": [
        "Spot",
        "定价"
      ],
      "verified": true,
      "themes": [
        "economics"
      ],
      "takeaway_en": "Spot tiers widen the price ladder for cost-sensitive users."
    },
    {
      "id": "fireworksai-20260922",
      "competitor": "Fireworks AI",
      "date": "2026-09-22",
      "category": "Feature",
      "product": "inference",
      "impact": "Low",
      "title": "Introducing the Specialized Intelligence Index",
      "title_zh": "Fireworks 发布 Specialized Intelligence Index 基准",
      "summary_zh": "Fireworks 推出评估专用模型能力的基准 Specialized Intelligence Index。",
      "takeaway_zh": "自建基准是在专用模型赛道争夺话语权的方式。另外，Fireworks 将于 11/3 举办 Forge 主题发布会，值得关注。",
      "source": "Fireworks Blog",
      "url": "https://fireworks.ai/blog/specialized-intelligence-index-ai-benchmarks/",
      "tags": [
        "基准",
        "专用模型"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Owning the benchmark helps own the 'specialized models' category."
    },
    {
      "id": "togetherai-20260922",
      "competitor": "Together AI",
      "date": "2026-09-22",
      "category": "Feature",
      "product": "inference",
      "impact": "Medium",
      "title": "Canary rollouts: upgrade models in production without downtime",
      "title_zh": "Together 专属推理支持金丝雀发布，零停机升级模型",
      "summary_zh": "在专属推理上提供分阶段流量切换、指标门控和自动回滚，8 月推出的生产环境 A/B 测试也属于这一系列。",
      "takeaway_zh": "推理平台的竞争正延伸到 MLOps 层面（A/B、灰度、回滚）。GMI 专属端点需评估是否提供同类能力。",
      "source": "Together AI Blog",
      "url": "https://www.together.ai/blog/canary-rollouts-upgrade-models-in-production-without-downtime",
      "tags": [
        "灰度发布",
        "专属推理",
        "MLOps"
      ],
      "verified": true,
      "themes": [
        "stack"
      ],
      "takeaway_en": "Canary rollouts and A/B: inference platforms are absorbing MLOps."
    },
    {
      "id": "friendliai-20260921",
      "competitor": "FriendliAI",
      "date": "2026-09-21",
      "category": "New Product",
      "product": "inference",
      "impact": "Medium",
      "title": "Meet FriendliLink: one command to connect open-weight models to your coding agents",
      "title_zh": "FriendliAI 推出 FriendliLink：一条命令把开源模型接入编码 Agent",
      "summary_zh": "FriendliLink 用一条命令把开源权重模型接入开发者已在使用的编码 Agent。",
      "takeaway_zh": "与 Together Link、Novita Novi、Fireworks FireRouter 同类，至少已有 4 家推理平台推出“编码 Agent 接入工具”。",
      "source": "FriendliAI Blog",
      "url": "https://friendli.ai/blog/friendlilink-announcement",
      "tags": [
        "编码 Agent",
        "CLI"
      ],
      "verified": true,
      "themes": [
        "agents"
      ],
      "takeaway_en": "Another coding-agent bridge. The pattern is now industry-wide."
    },
    {
      "id": "crusoe-20260917",
      "competitor": "Crusoe",
      "date": "2026-09-17",
      "category": "Funding/Financials",
      "product": "multi",
      "impact": "Medium",
      "title": "Crusoe raises $3.9 billion Series F",
      "title_zh": "Crusoe 完成 39 亿美元 F 轮融资",
      "summary_zh": "Crusoe 宣布完成 39 亿美元 F 轮融资，用于其垂直整合的 AI 基础设施平台。",
      "takeaway_zh": "资金充足的垂直整合玩家会在产能和价格上持续施压。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-announces-series-f-funding",
      "tags": [
        "融资"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "$3.9B Series F funds vertical integration from power to platform."
    },
    {
      "id": "falai-20260917",
      "competitor": "fal.ai",
      "date": "2026-09-17",
      "category": "Model Launch",
      "product": "inference",
      "impact": "Medium",
      "title": "H3 Max: built with fal Inference and Training",
      "title_zh": "fal 自研视频模型 H3 Max：5 秒视频 3 秒内生成",
      "summary_zh": "H3 Max 是 fal Research 基于 MiniMax H3 后训练、并由 fal 推理团队做速度优化的视频模型。5 秒视频不到 3 秒即可生成，在 fal 的人类偏好评测及 Artificial Analysis、Design Arena 等第三方榜单上排名第一。",
      "takeaway_zh": "fal 以“后训练 + 推理优化”打造自有爆款模型，在生成式媒体赛道建立了差异化。GMI 如果要做图像 / 视频推理，fal 是主要对手。",
      "source": "fal Blog",
      "url": "https://blog.fal.ai/h3-max-built-with-fal-inference-and-training/",
      "tags": [
        "视频生成",
        "自研模型",
        "生成式媒体"
      ],
      "verified": true,
      "themes": [
        "models"
      ],
      "takeaway_en": "Post-trained, speed-optimized video model ranks #1. fal wins media by owning the model."
    },
    {
      "id": "nb-20260916-mlperf",
      "competitor": "Nebius",
      "date": "2026-09-16",
      "title": "MLPerf Inference v6.1: previewing NVIDIA Vera Rubin NVL72 and GB300 NVL72 results",
      "title_zh": "MLPerf Inference v6.1：Nebius 预览 Vera Rubin NVL72 并发布 GB300 NVL72 成绩",
      "summary_zh": "Nebius 发布 MLPerf Inference v6.1 结果，包括 GB300 NVL72 整机柜成绩并预览 Vera Rubin NVL72。",
      "category": "GPU/Hardware",
      "product": "inference",
      "impact": "Medium",
      "takeaway_zh": "Rubin 代际已进入竞品叙事，GMI 需准备 Rubin 上线时间表的对外口径。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/mlperf-inference-v6-1-results",
      "tags": [
        "MLPerf",
        "GB300",
        "Rubin"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Rubin enters competitor narratives via MLPerf previews."
    },
    {
      "id": "coreweave-20260916",
      "competitor": "CoreWeave",
      "date": "2026-09-16",
      "category": "GPU/Hardware",
      "product": "cluster",
      "impact": "Medium",
      "title": "CoreWeave brings up multi-rack NVIDIA Vera Rubin NVL72 cluster",
      "title_zh": "CoreWeave 完成多机柜 Vera Rubin NVL72 集群上线",
      "summary_zh": "CoreWeave 上线多机柜 Vera Rubin NVL72 集群，同时在计算、存储、网络层面推出新能力。",
      "takeaway_zh": "与 9/30 的规模化交付一起，构成 CoreWeave 的 Rubin 先发叙事。",
      "source": "CoreWeave Newsroom",
      "url": "https://www.coreweave.com/news/coreweave-brings-up-multi-rack-nvidia-vera-rubin-nvl72-cluster",
      "tags": [
        "Rubin",
        "集群"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Multi-rack Rubin bring-up feeds CoreWeave's first-mover story."
    },
    {
      "id": "crusoe-20260915",
      "competitor": "Crusoe",
      "date": "2026-09-15",
      "category": "Partnership",
      "product": "multi",
      "impact": "Medium",
      "title": "Crusoe and Perplexity announce multi-year partnership across the full model lifecycle",
      "title_zh": "Crusoe 与 Perplexity 达成覆盖模型全生命周期的多年合作",
      "summary_zh": "Crusoe 与 Perplexity 宣布多年合作，覆盖模型的训练到推理全生命周期。",
      "takeaway_zh": "Perplexity 同时也是 CoreWeave 的推理客户，头部 AI 应用公司在采用多云策略。这对 GMI 是机会：可以作为第二、第三供应商切入。",
      "source": "Crusoe Newsroom",
      "url": "https://www.crusoe.ai/resources/newsroom/crusoe-perplexity-partnership",
      "tags": [
        "客户",
        "多云"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Perplexity also uses CoreWeave: AI-native buyers multi-source, so there's room for a 2nd/3rd vendor."
    },
    {
      "id": "nb-20260910-builder",
      "competitor": "Nebius",
      "date": "2026-09-10",
      "title": "Introducing the Nebius AI Builder Program",
      "title_zh": "Nebius 推出 AI Builder Program",
      "summary_zh": "Nebius 推出 AI Builder Program，主打在开放、独立技术栈上构建自有 AI 系统。",
      "category": "Partnership",
      "product": "multi",
      "impact": "Medium",
      "takeaway_zh": "“开放 / 独立栈”是其对抗超大云的定位话术，可在 GMI 定位中参考或差异化。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/introducing-the-nebius-ai-builder-program",
      "tags": [
        "开发者生态"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "'Open, independent stack' is Nebius' anti-hyperscaler positioning."
    },
    {
      "id": "nb-20260908-palantir",
      "competitor": "Nebius",
      "date": "2026-09-08",
      "title": "Palantir and Nebius partner to deliver a complete sovereign AI stack",
      "title_zh": "Palantir 与 Nebius 合作提供完整主权 AI 技术栈",
      "summary_zh": "Nebius 与 Palantir 合作，向 Palantir 客户提供完整的主权 AI 技术栈。",
      "category": "Partnership",
      "product": "multi",
      "impact": "High",
      "takeaway_zh": "主权 AI 是 Neocloud 进入政企市场的关键叙事，GMI 可评估在亚太主权 AI 场景的对应合作。",
      "source": "Nebius Newsroom",
      "url": "https://nebius.com/newsroom/palantir-and-nebius-partner-to-deliver-a-complete-sovereign-ai-stack-to-palantir-customers",
      "tags": [
        "主权 AI",
        "企业"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Sovereign AI via Palantir opens public-sector demand for neoclouds."
    },
    {
      "id": "nb-20260824-groq-lpx",
      "competitor": "Nebius",
      "date": "2026-08-24",
      "title": "Nebius Token Factory becomes first AI cloud to adopt NVIDIA Groq 3 LPX",
      "title_zh": "Nebius Token Factory 成为首家采用 NVIDIA Groq 3 LPX 的 AI 云",
      "summary_zh": "Nebius 宣布 Token Factory 率先采用 NVIDIA Groq 3 LPX 推理硬件。",
      "category": "GPU/Hardware",
      "product": "inference",
      "impact": "High",
      "takeaway_zh": "低延迟推理硬件将成为推理平台的差异化点，需跟踪 GMI Inference Engine 在硬件路线上的对应计划。",
      "source": "Nebius Blog",
      "url": "https://nebius.com/blog/posts/nvidia-groq-3-lpx-nebius-token-factory",
      "tags": [
        "推理硬件",
        "Token Factory"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Low-latency LPX hardware becomes an inference differentiator."
    },
    {
      "id": "groq-20260824",
      "competitor": "Groq",
      "date": "2026-08-24",
      "category": "GPU/Hardware",
      "product": "inference",
      "impact": "High",
      "title": "Groq among the first to bring NVIDIA Groq 3 LPX and Vera Rubin NVL72 to market",
      "title_zh": "Groq 率先推出 NVIDIA Groq 3 LPX 与 Vera Rubin NVL72",
      "summary_zh": "Groq 宣布成为首批提供 NVIDIA Groq 3 LPX 与 Vera Rubin NVL72 的云厂商之一。同日 Nebius Token Factory 也宣布采用 Groq 3 LPX。",
      "takeaway_zh": "NVIDIA 授权 Groq 技术后，LPX 低延迟推理硬件正成为推理云的新卖点。GMI 应明确是否引入 LPX。",
      "source": "Groq Blog",
      "url": "https://groq.com/blog/groq-among-the-first-to-bring-nvidia-groq-3-lpx-and-vera-rubin-nvl72-to-market",
      "tags": [
        "Groq 3 LPX",
        "Rubin",
        "推理硬件"
      ],
      "verified": true,
      "themes": [
        "silicon"
      ],
      "takeaway_en": "Groq offers LPX + Rubin: a former chip rival is now an NVIDIA-stack cloud."
    },
    {
      "id": "groq-20260817",
      "competitor": "Groq",
      "date": "2026-08-17",
      "category": "Funding/Financials",
      "product": "inference",
      "impact": "Medium",
      "title": "Groq closes $350 million Series A to build an AI inference cloud",
      "title_zh": "Groq 完成 3.5 亿美元 A 轮融资，打造 AI 推理云",
      "summary_zh": "Groq 宣布完成 3.5 亿美元 A 轮融资（6 月已融资 6.5 亿美元），用于建设 AI 推理云业务。",
      "takeaway_zh": "重组后的 Groq 以推理云为主业，资金充足，将成为 GMI Inference Engine 的直接竞争者。",
      "source": "Groq Newsroom",
      "url": "https://groq.com/newsroom/groq-closes-usd350-million-series-a-building-the-world-s-leading-ai-inference-cloud",
      "tags": [
        "融资",
        "推理云"
      ],
      "verified": true,
      "themes": [
        "capital"
      ],
      "takeaway_en": "Well-funded inference cloud. A direct Inference Engine competitor."
    },
    {
      "id": "groq-20260812",
      "competitor": "Groq",
      "date": "2026-08-12",
      "category": "Partnership",
      "product": "multi",
      "impact": "High",
      "title": "Groq becomes an NVIDIA Cloud Partner",
      "title_zh": "Groq 成为 NVIDIA 云合作伙伴（NCP）",
      "summary_zh": "Groq 宣布成为 NVIDIA Cloud Partner。",
      "takeaway_zh": "Groq 进入与 GMI 相同的 NVIDIA 云伙伴体系，竞争从“芯片路线之争”转为同一生态内的直接竞争。",
      "source": "Groq Newsroom",
      "url": "https://groq.com/newsroom/groq-becomes-an-nvidia-cloud-partner",
      "tags": [
        "NVIDIA NCP",
        "定位变化"
      ],
      "verified": true,
      "themes": [
        "enterprise"
      ],
      "takeaway_en": "Groq joins the NVIDIA Cloud Partner program, the same ecosystem as GMI."
    }
  ]
};
