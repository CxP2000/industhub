# -*- coding: utf-8 -*-
"""Exact text-node translations, shared across all pages (batch: top-level pages).

Keys are stripped text nodes / attribute values from zh/*.html. Values are the
English copy. Model codes, pressures, dimensions, lead times and MOQ are kept
verbatim; nothing is invented.
"""

CORE = {
    # ---------------- index.html ----------------
    "IndustHub | 快速密封接头与气密性检漏仪":
        "IndustHub | Quick Seal Connectors & Differential Pressure Leak Detectors",
    "G80 手柄式快接 · 200 Bar": "G80 Lever-Type Quick Connector · 200 Bar",
    "一扣即密封，反复插拔不衰减": "One flip seals it, cycle after cycle",
    "手柄式快速密封连接器，适配高压气密检测与充注测试；标准件 7 天发货，2 件起订，支持小批量验证。":
        "Lever-type quick seal connectors for high-pressure leak testing and filling. Standard items ship in 7 days, MOQ 2 pcs, small trial orders welcome.",
    "TBTEK L530 · 直读压降": "TBTEK L530 · Direct Pressure Drop Readout",
    "PASS / FAIL 一目了然，产线即插即用": "PASS / FAIL at a glance, ready for the production line",
    "压降式气密性检漏仪，数字直读、判定直观；与 GripSeal 密封接头成套供应，接口与工装一次对齐。":
        "Pressure-decay leak tester with a direct digital readout and clear pass/fail judgement. Supplied together with GripSeal seal connectors so ports and fixtures are aligned in one step.",
    "CZ 系列 · 钢瓶充装快接": "CZ Series · Gas Cylinder Filling Quick Connectors",
    "一插即锁，充装省时省力": "Push to lock, faster and easier filling",
    "工业气体钢瓶充装用快速连接器，适配标准钢瓶阀口，与充装软管、减压阀配套使用；2 件起订，支持小批量验证。":
        "Quick connectors for industrial gas cylinder filling, fitting standard cylinder valve outlets and used with filling hoses and regulators. MOQ 2 pcs, small trial orders welcome.",
    "C 系列 · 公母成对快接": "C Series · Paired Male-Female Couplings",
    "自动对接与手动插拔，按回路成对选配": "Automatic docking or manual plug-in, paired to your circuit",
    "C 系列公母头按驱动方式分为自动对接与手动插拔，覆盖液冷、高压与高流量回路；通径 3–38 mm，平头无滴漏，标准件 7 天发货，2 件起订。":
        "C Series male-female couplings come in automatic-docking and manual plug-in versions for liquid cooling, high-pressure and high-flow circuits. Nominal bore 3–38 mm, flat-face non-spill. Standard items ship in 7 days, MOQ 2 pcs.",
    "UQD / UQDB · 液冷快换": "UQD / UQDB · Liquid Cooling Quick Couplings",
    "平头无滴漏，盲插与大流量都能对上": "Flat-face non-spill, blind-mate and high-flow options",
    "液冷快换接头涵盖 UQD、UQDB、BMQC、MQD 与 C783 / C78 大流量系列，适配机柜冷板、CDU 与产线 EOL 测试；不锈钢主体，EPDM 密封，支持定制尾端。":
        "Liquid cooling quick couplings covering UQD, UQDB, BMQC, MQD and the C783 / C78 high-flow series for rack cold plates, CDUs and end-of-line testing. Stainless steel bodies, EPDM seals, custom end connections available.",
    "四条产品线，按任务选择": "Four product lines, choose by task",
    "快速密封、气密检测、冷却回路维护与气瓶充装——每一类都能直接进入分类与型号详情。":
        "Quick sealing, leak testing, cooling loop maintenance and cylinder filling — each line leads straight to its categories and models.",
    "用于生产测试、流体充注、抽真空和重复连接工位的快速密封接头。":
        "Quick seal connectors for production testing, fluid filling, vacuum and repeated connection stations.",
    "差压式检漏仪，手动与电子调压两种型号，用于气密性检测、产线质检和工装集成。":
        "Differential pressure leak detectors in manual and electronic regulator versions for leak testing, in-line QC and fixture integration.",
    "UQD / UQDB / MQD 等液冷快换接头、C783 / C78 大流量系列，以及 G72R、G90 系列公母快速接头，覆盖冷却回路、盲插维护与成对快接。":
        "Liquid cooling quick couplings including UQD / UQDB / MQD, the C783 / C78 high-flow series, and G72R / G90 male-female quick connectors for cooling loops, blind-mate maintenance and paired connections.",
    "用于气瓶充装、加注与气密连接的高压快接接头，覆盖气瓶充装系列，面向气瓶制造与现场充装工位。":
        "High-pressure quick connectors for cylinder filling, charging and leak-tight connections, covering the gas cylinder filling series for cylinder manufacturers and filling stations.",
    "最新文章与案例": "Latest Articles & Cases",
    "来自新闻资讯、公司动态、应用案例与常见问答的最新内容，更多请到":
        "Latest content from news, company updates, case studies and FAQ. See more in the",
    "。": ".",
    "查看更多资讯 &rarr;": "More Resources &rarr;",
    "汽车软管测漏：低压软管怎么快速密封": "Leak Testing Automotive Hoses: Quick Sealing for Low-Pressure Hoses",
    "低压软管装夹时形变大会夹不住，内圈密封加限位套盒可解决；G25A 加硬质外壳做手动密封、G15 加外壳做气动自动化密封，压力 3 bar 以内适合绝大多数水路油路。":
        "Soft hoses deform under clamping and slip out; an inner seal plus a stop sleeve solves it. The G25A with a rigid housing is used for manual sealing, the G15 with a housing for pneumatic automation. Up to 3 bar suits most water and oil circuits.",
    "玻璃、PVC 与金属软管怎么做气密测试密封": "Leak-Test Sealing for Glass, PVC and Metal Hoses",
    "玻璃易碎、抗压性弱，玻璃与金属间的密封远比常规金属管口难；匹配密封与压密封两种机理，以及玻璃-金属密封连接器在防潮、真空与高压场景的优势。":
        "Glass is fragile and weak under pressure, so glass-to-metal joints are far harder to seal than standard metal ports. Covers matched sealing vs. compression sealing, and the advantages of glass-to-metal seal connectors in moisture, vacuum and high-pressure applications.",
    "气瓶充注快速接头的日常维护要点": "Routine Maintenance for Gas Cylinder Filling Connectors",
    "日检、周检与定期检查项目，主 O 形圈每 2000 次更换、每天目视检查密封圈、顶芯与安全提环检查，以及安全锁扣必须卸压后才能解锁的操作纪律。":
        "Daily, weekly and periodic checks: replace the main O-ring every 2,000 cycles, visually inspect seals daily, check the poppet and safety lift ring, and only release the safety latch after depressurising.",
    "气瓶充装连接器常见故障与排查": "Common Faults and Troubleshooting for Cylinder Filling Connectors",
    "从连接器与阀门连接处泄漏、充气初期泄漏、安全手柄松动、爪牙未膨胀到阀门螺纹损坏的逐项排查思路与处理建议。":
        "Step-by-step diagnosis and fixes for leaks at the connector/valve joint, leaks at the start of filling, a loose safety handle, jaws that fail to expand, and damaged valve threads.",
    "为什么要用快速密封接头": "Why Use Quick Seal Connectors",
    "拧螺纹、缠生料带，不该是产线的常态": "Threading and PTFE tape should not be the norm on a production line",
    "传统连接方式在量产工位上的三个代价——快换接头把它们逐一消掉。":
        "Three costs of traditional connections in volume production — quick connectors remove each one.",
    "代价 01": "Cost 01",
    "慢": "Slow",
    "手工拧紧和拆卸占用节拍。一个工位每天重复几十上百次，累积工时最容易被低估。":
        "Manual tightening and removal eat into cycle time. A single station repeats it dozens or hundreds of times a day, and the accumulated labour is easily underestimated.",
    "节拍损耗": "Cycle time lost",
    "重复作业": "Repetitive work",
    "代价 02": "Cost 02",
    "不稳": "Inconsistent",
    "生料带缠绕量和拧紧力矩因人而异，密封结果不可重复——今天和昨天不一样。":
        "Tape wraps and tightening torque vary by operator, so the seal is not repeatable — today differs from yesterday.",
    "不可重复": "Not repeatable",
    "依赖手法": "Operator dependent",
    "代价 03": "Cost 03",
    "误判": "False readings",
    "连接处微漏让检漏仪误报，掩盖零件真实的泄漏状态，返工和报废随之而来。":
        "A small leak at the connection triggers a false reject, masking the part's true leak condition and leading to rework and scrap.",
    "误报": "False rejects",
    "掩盖真实泄漏": "Masks real leaks",
    "为什么选 IndustHub": "Why IndustHub",
    "小批量能做，交期明确，接头检漏仪一起配":
        "Small orders welcome, clear lead times, connectors and leak testers from one source",
    "先用小批量验证方案，再扩大采购。选型、配套、调试找同一家。":
        "Validate with a small batch before scaling up. Selection, matching and commissioning from one supplier.",
    "14–21 天": "14–21 Days",
    "非标定制交付": "Custom build delivery",
    "支持小批量试单": "Trial orders supported",
    "更有效的询盘": "A more useful enquiry",
    "信息越清楚，首次推荐越准确": "The clearer the brief, the more accurate the first recommendation",
    "好的第一封询盘可以避免泛泛的目录回复：把工况说清楚，我们直接回复型号和价格。":
        "A good first enquiry avoids a generic catalog reply: tell us the working conditions and we reply with specific models and pricing.",
    "接口类型：螺纹、管口、冷却口、充注口或特殊结构。":
        "Port type: thread, tube end, cooling port, fill port or special geometry.",
    "压力、介质、温度、泄漏目标、流量要求或节拍。":
        "Pressure, media, temperature, leak target, flow requirement or cycle time.",
    "图纸、接口照片、工装布局或零件周边空间限制。":
        "Drawings, port photos, fixture layout or space constraints around the part.",
    "工位是手动、气动、自动化，还是处于早期验证阶段。":
        "Whether the station is manual, pneumatic, automated, or still at the validation stage.",
    "我们可以先帮你缩小范围": "We can narrow it down first",
    "快速密封连接器：螺纹、管口、充注与气瓶系列。":
        "Quick seal connectors: threaded, tube, filling and gas cylinder series.",
    "检漏仪：差压式，手动或电子调压。": "Leak detectors: differential pressure, manual or electronic regulator.",
    "液冷快换接头或常规接头。": "Liquid cooling quick couplings or standard connectors.",
    "非标定制与设备询盘。": "Custom designs and equipment enquiries.",
    "把接口类型、压力、介质或泄漏目标发给我们，我们回复具体型号和报价。":
        "Send us the port type, pressure, media or leak target and we will reply with specific models and pricing.",
    "面向生产现场的工业设备、连接系统与工艺支持方案。":
        "Industrial equipment, connection systems and process support for the production floor.",
    "IndustHub 提供快速密封连接器、气密性检漏仪、液冷和公母头、气瓶充装连接器：标准件 7 天发货，非标 14–21 天定制，2 件起订，密封接头与检漏仪成套供应。":
        "IndustHub supplies quick seal connectors, differential pressure leak detectors, liquid cooling couplings and gas cylinder filling connectors. Standard items ship in 7 days, custom builds in 14–21 days, MOQ 2 pcs, with connectors and leak testers available from one source.",
    "四条产品线：快速密封连接器、气密性检漏仪、液冷和公母头、气瓶充装连接器。标准件 7 天发货，非标 14–21 天定制，2 件起订。":
        "Four product lines: quick seal connectors, differential pressure leak detectors, liquid cooling couplings and gas cylinder filling connectors. Standard items ship in 7 days, custom builds in 14–21 days, MOQ 2 pcs.",

    # ---------------- about.html ----------------
    "关于我们 | IndustHub": "About Us | IndustHub",
    "关于 IndustHub": "About IndustHub",
    "Shenzhen TB-TEK Technologies Limited.（Turbotai）旗下的工业测试方案平台，专注快速连接技术、泄漏检测方案与工业测试设备，服务全球制造商。":
        "The industrial testing platform of Shenzhen TB-TEK Technologies Limited. (Turbotai), focused on quick connection technology, leak testing solutions and industrial test equipment for manufacturers worldwide.",
    "2006 年始于深圳，专注连接与测试": "Founded in Shenzhen in 2006, focused on connection and testing",
    "Shenzhen TB-TEK Technologies Limited.（Turbotai）": "Shenzhen TB-TEK Technologies Limited. (Turbotai)",
    "于": "in",
    "2006 年": "2006",
    "成立于中国深圳，长期为全球制造商提供可靠、高效的连接与测试方案，是专注于快速连接技术、泄漏检测方案与工业测试设备的全球化工业测试方案提供商。":
        "Founded in Shenzhen, China, and a long-standing provider of reliable, efficient connection and testing solutions for manufacturers worldwide, specialising in quick connection technology, leak testing solutions and industrial test equipment.",
    "通过": "Through",
    "IndustHub（www.industhub.com）": "IndustHub (www.industhub.com)",
    "，我们提供工业连接工具与测试方案，其中包括": ", we supply industrial connection tools and testing solutions, including",
    "GripSeal 快速密封连接器": "GripSeal quick seal connectors",
    "与": "and",
    "TBTEK 差压式气密性检漏仪": "TBTEK differential pressure leak detectors",
    "，帮助客户提升测试效率、可靠性与产线表现。":
        ", helping customers improve test efficiency, reliability and line performance.",
    "秉持「易夹持、可靠密封」的设计理念，GripSeal 连接器实现":
        'Built around "easy clamping, reliable sealing", GripSeal connectors deliver',
    "一秒连接、即时密封": "one-second connection and instant sealing",
    "，缩短连接时间并提高测试稳定性。": ", cutting connection time and improving test stability.",
    "面向各类测试工况的快速密封连接": "Quick sealing for a wide range of test conditions",
    "GripSeal 连接器为快速、可靠的密封连接而设计，覆盖以下典型测试应用。":
        "GripSeal connectors are designed for fast, reliable sealing across these typical test applications.",
    "压力测试": "Pressure testing",
    "零件与管路的耐压、加压测试连接。": "Connections for pressure and proof testing of parts and tubing.",
    "气动与液压功能测试": "Pneumatic and hydraulic functional testing",
    "气动、液压回路的快速功能验证。": "Fast functional checks on pneumatic and hydraulic circuits.",
    "真空测试": "Vacuum testing",
    "抽真空与真空密封工况的连接。": "Connections for evacuation and vacuum-tight conditions.",
    "氦检漏测试": "Helium leak testing",
    "氦质谱检漏等高灵敏度检测工位。": "High-sensitivity stations such as helium mass spectrometer leak detection.",
    "燃油管路测试": "Fuel line testing",
    "燃油管、油路接口的密封连接。": "Sealed connections for fuel lines and oil circuit ports.",
    "气瓶测试": "Gas cylinder testing",
    "气瓶阀口与充装接口的测试连接。": "Test connections for cylinder valve outlets and filling ports.",
    "制冷系统测试": "Refrigeration system testing",
    "制冷回路、换热器与系统检漏。": "Leak testing of refrigeration circuits, heat exchangers and systems.",
    "定制密封方案": "Custom sealing solutions",
    "按接口图纸评估非标密封结构。": "Non-standard seal designs assessed against your port drawings.",
    "连接需求覆盖": "Connection requirements covered",
    "从标准接口到非标定制": "From standard ports to custom designs",
    "我们的方案覆盖广泛的连接需求，可根据接口结构、介质、压力与节拍要求匹配合适的密封方式。":
        "Our solutions cover a wide range of connection needs, matching the right sealing method to port geometry, media, pressure and cycle time.",
    "螺纹连接": "Threaded connections",
    "管与软管连接": "Tube and hose connections",
    "阀门连接": "Valve connections",
    "异形管连接": "Irregular tube connections",
    "定制化密封方案": "Custom sealing solutions",
    "成套测试方案": "Complete test solutions",
    "从快速密封连接到精准检漏": "From quick sealing to precise leak detection",
    "结合 TBTEK 差压式检漏技术，我们为工业制造流程提供从快速密封连接、准确泄漏检测到稳定产线表现的完整方案。":
        "Combining TBTEK differential pressure leak detection, we provide complete solutions for industrial manufacturing — from quick sealing and accurate leak detection to stable line performance.",
    "快速密封连接": "Quick sealing connections",
    "GripSeal 连接器一秒夹持、即时密封，减少装夹时间。":
        "GripSeal connectors clamp in one second and seal instantly, cutting setup time.",
    "差压式检漏": "Differential pressure leak detection",
    "TBTEK 差压检漏仪提供稳定、可重复的泄漏判定。":
        "TBTEK differential pressure leak testers deliver stable, repeatable leak decisions.",
    "产线工装集成": "Production fixture integration",
    "连接接口与测试工装一次对齐，适配自动化节拍。":
        "Ports and test fixtures are aligned in one step to suit automated cycle times.",
    "一站式评估": "One-stop assessment",
    "按接口图纸、介质与泄漏目标统一评估连接与检测方案。":
        "Connection and detection solutions assessed together against port drawings, media and leak targets.",
    "服务行业": "Industries served",
    "广泛服务于全球制造业": "Serving manufacturers worldwide",
    "我们的连接与测试方案已应用于以下行业。":
        "Our connection and testing solutions are used in the following industries.",
    "新能源汽车": "New energy vehicles",
    "汽车制造": "Automotive manufacturing",
    "制冷": "Refrigeration",
    "家电": "Home appliances",
    "自动化": "Automation",
    "液压系统": "Hydraulic systems",
    "仪器仪表": "Instruments",
    "航空航天": "Aerospace",
    "医疗设备": "Medical devices",
    "凭借持续创新与以客户为中心的方案能力，Turbotai 帮助全球制造商连接更快、检测更智能、生产效率更高。":
        "Through continuous innovation and customer-focused solution design, Turbotai helps manufacturers worldwide connect faster, test smarter and produce more efficiently.",
    "需要连接或检漏方案建议？": "Need connection or leak testing advice?",
    "发送接口细节、介质、压力范围或泄漏率目标，我们会帮助你判断合适的产品方向。":
        "Send us port details, media, pressure range or leak rate targets and we will help identify the right product direction.",
    "面向严苛生产应用的工业设备、连接系统和测试方案。":
        "Industrial equipment, connection systems and test solutions for demanding production applications.",
    "关于 IndustHub：Shenzhen TB-TEK Technologies Limited.（Turbotai）2006 年成立于中国深圳，通过 IndustHub 提供 GripSeal 快速密封连接器与 TBTEK 差压式气密性检漏仪，服务全球制造商。":
        "About IndustHub: Shenzhen TB-TEK Technologies Limited. (Turbotai), founded in Shenzhen, China in 2006, supplies GripSeal quick seal connectors and TBTEK differential pressure leak detectors through IndustHub to manufacturers worldwide.",
    "关于 IndustHub | Shenzhen TB-TEK Technologies Limited.":
        "About IndustHub | Shenzhen TB-TEK Technologies Limited.",
    "2006 年始于深圳，专注快速连接技术、泄漏检测方案与工业测试设备，为全球制造商提供 GripSeal 连接器与 TBTEK 检漏仪成套方案。":
        "Founded in Shenzhen in 2006 and focused on quick connection technology, leak testing solutions and industrial test equipment, supplying GripSeal connectors and TBTEK leak testers as matched systems to manufacturers worldwide.",

    # ---------------- contact.html ----------------
    "联系我们 | IndustHub": "Contact Us | IndustHub",
    "请告诉我们你的接口、压力、介质、冷却回路或泄漏率目标，我们通常会在 24 小时内给出务实的下一步建议。":
        "Tell us about your port, pressure, media, cooling loop or leak rate target. We usually reply with practical next steps within 24 hours.",
    "联系信息": "Contact details",
    "我们支持需要为真实生产任务选择连接器方案、液冷接头或检漏方法的客户。":
        "We support customers selecting connector solutions, liquid cooling couplings or leak test methods for real production tasks.",
    "邮箱": "Email",
    "电话 / WhatsApp": "Phone / WhatsApp",
    "Blake：+86 13683969657": "Blake: +86 13683969657",
    "总部": "Headquarters",
    "中国深圳宝安": "Bao'an, Shenzhen, China",
    "工作时间": "Business hours",
    "周一至周五：8:30 - 17:30（中国时间）": "Monday – Friday: 8:30 – 17:30 (China time)",
    "建议先提供的信息": "Information worth sending first",
    "建议提供接口信息、冷却液或气体介质、压力范围、泄漏目标、图纸或零件照片。":
        "Include port details, coolant or gas media, pressure range, leak target, drawings or part photos.",
    "姓名 *": "Name *",
    "公司 *": "Company *",
    "邮箱地址 *": "Email address *",
    "国家 / 地区": "Country / Region",
    "感兴趣的产品 *": "Product of interest *",
    "请选择产品线": "Select a product line",
    "多个产品线": "Multiple product lines",
    "非标方案": "Custom solution",
    "其他询盘": "Other enquiry",
    "关键技术信息": "Key technical information",
    "请描述你的应用 *": "Describe your application *",
    "提交后，系统会把询盘内容整理成邮件，方便我们评估应用、产品方向和下一步技术沟通。":
        "On submission your enquiry is composed into an email so we can assess the application, product direction and next technical steps.",
    "提交询盘": "Send Enquiry",
    "我们可以协助的内容": "How we can help",
    "买家常见咨询原因": "Why buyers get in touch",
    "多数沟通会从下面这些工程问题开始，也能帮助客户确认是否找对供应商。":
        "Most conversations start with the engineering questions below, which also help you confirm we are the right supplier.",
    "连接器选型": "Connector selection",
    "根据螺纹、管径、密封面、介质和节拍要求选择快速密封连接器。":
        "Selecting quick seal connectors by thread, tube diameter, sealing face, media and cycle time.",
    "液冷回路连接": "Liquid cooling loop connections",
    "根据紧凑布置、维护空间和低溢漏需求匹配液冷接头。":
        "Matching liquid cooling couplings to tight layouts, maintenance space and low-spill requirements.",
    "检漏方法匹配": "Leak test method selection",
    "根据泄漏目标和节拍比较压降、差压、流量和氦检等方法。":
        "Comparing pressure decay, differential pressure, flow and helium methods against leak targets and cycle time.",
    "非标接口评估": "Non-standard port assessment",
    "当接口非标或重复密封困难时，可发送图纸或零件照片评估。":
        "Send drawings or part photos for assessment when ports are non-standard or repeated sealing is difficult.",
    "常见问题": "Frequently asked questions",
    "首次询盘建议提供什么？": "What should a first enquiry include?",
    "最快的方式是提供接口结构、螺纹或管径、压力或真空范围、介质、节拍要求和泄漏目标。图纸或零件照片会更有帮助。":
        "The fastest route is to provide port geometry, thread or tube diameter, pressure or vacuum range, media, cycle time and leak target. Drawings or part photos help even more.",
    "你们能协助液冷接头选型吗？": "Can you help select liquid cooling couplings?",
    "可以。我们可以根据冷却液介质、回路布局、维护频率、溢漏敏感度和安装空间来缩小合适的快接方案。":
        "Yes. We narrow down suitable quick couplings based on coolant media, loop layout, maintenance frequency, spill sensitivity and installation space.",
    "你们能做非标连接器吗？": "Can you build custom connectors?",
    "可以。当标准接头无法匹配零件结构或工艺要求时，我们可以基于图纸和工况评估非标密封头或连接方案。":
        "Yes. When standard connectors cannot match the part geometry or process requirements, we assess custom sealing heads or connection solutions against drawings and working conditions.",
    "也能协助选择检漏方法吗？": "Can you also help choose a leak test method?",
    "可以。提供测试压力、零件容积、允许泄漏率和节拍要求后，我们可以帮助比较压降、差压、流量或氦检等方法。":
        "Yes. With test pressure, part volume, allowable leak rate and cycle time, we can compare pressure decay, differential pressure, flow or helium methods.",
    "可以先要样品或选型建议吗？": "Can we start with samples or a selection recommendation?",
    "可以。很多项目会先从选型建议、图纸评估或样品验证开始，再进入批量采购。":
        "Yes. Many projects begin with a selection recommendation, drawing assessment or sample validation before moving to volume orders.",
    "联系 IndustHub，获取工业设备、连接系统与工艺支持方案的报价、技术支持或工程咨询。":
        "Contact IndustHub for quotations, technical support or engineering advice on industrial equipment, connection systems and process support.",
    "联系 IndustHub | 获取报价": "Contact IndustHub | Get a Quote",
    "你的姓名": "Your name",
    "公司名称": "Company name",
    "中国、美国、德国、墨西哥...": "China, USA, Germany, Mexico...",
    "例如：M14x1.5 接口，氮气，8 bar，15 秒节拍，1x10^-3 mbar·L/s":
        "e.g. M14x1.5 port, nitrogen, 8 bar, 15 s cycle, 1x10^-3 mbar·L/s",
    "请描述零件接口、介质、压力范围、节拍、冷却要求或泄漏目标。任何有助于判断产品方向的信息都可以填写。":
        "Describe the part port, media, pressure range, cycle time, cooling requirements or leak target. Any detail that helps identify the product direction is useful.",

    # ---------------- 404.html ----------------
    "404 - 页面未找到 | IndustHub": "404 - Page Not Found | IndustHub",
    "页面未找到": "Page not found",
    "你访问的页面不存在或已移动，可能已改名、删除，或网址输入有误。":
        "The page you requested does not exist or has moved. It may have been renamed, deleted, or the URL may be mistyped.",
    "浏览产品": "Browse Products",
}
