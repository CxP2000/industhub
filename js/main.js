// IndustHub - Main JS
document.addEventListener('DOMContentLoaded', function() {
  const languageSwitcherLabelFix = document.getElementById('language-switcher');
  if (languageSwitcherLabelFix) {
    const zhOption = languageSwitcherLabelFix.querySelector('option[value="zh"]');
    if (zhOption) zhOption.textContent = '中文';
  }

  const translations = {
    en: {
      html_lang: 'en',
      'meta.title': 'IndustHub | Industrial Equipment & Process Solutions',
      'meta.description': 'IndustHub supplies industrial equipment and process solutions for testing, filling, thermal management, and production support.',
      'meta.og_title': 'IndustHub | Industrial Equipment & Process Solutions',
      'meta.og_description': 'Industrial equipment and process solutions engineered for demanding production environments.',
      'meta.twitter_title': 'IndustHub | Industrial Equipment & Process Solutions',
      'meta.twitter_description': 'Industrial equipment and process solutions for global manufacturing teams.',
      'common.skip': 'Skip to main content',
      'brand.name': 'IndustHub',
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.quote': 'Get Quote',
      'hero.slide0.badge': 'Industrial Equipment and Process Solutions',
      'hero.slide0.title_prefix': 'Quick Connections for',
      'hero.slide0.title_highlight': 'Testing, Cooling, and Filling',
      'hero.slide0.description': 'Explore industrial equipment and engineered product lines built for production teams that need faster setup, cleaner integration, and more stable results.',
      'hero.slide0.primary_cta': 'Browse Product Lines',
      'hero.slide0.secondary_cta': 'Request Engineering Help',
      'hero.slide0.proof1_title': 'Response in 24h',
      'hero.slide0.proof1_text': 'Application review from engineering',
      'hero.slide0.proof2_title': 'Standard + Custom',
      'hero.slide0.proof2_text': 'Fast matching for ports, threads, and tubes',
      'hero.slide0.proof3_title': '3 Core Product Lines',
      'hero.slide0.proof3_text': 'Connectors, thermal loops, and leak test systems',
      'hero.slide0.panel_tag': 'Core Applications',
      'hero.slide0.panel_title': 'Built for the Real Workflow',
      'hero.slide0.quick1_title': 'Pressure Test Connection',
      'hero.slide0.quick1_text': 'Seal quickly to threaded ports, tubes, and custom interfaces.',
      'hero.slide0.quick2_title': 'Liquid Cooling Routing',
      'hero.slide0.quick2_text': 'Compact couplings for serviceable coolant loops and battery systems.',
      'hero.slide0.quick3_title': 'Leak Test Method Matching',
      'hero.slide0.quick3_text': 'Choose pressure decay, differential, mass flow, or helium by target and cycle time.',
      'hero.slide0.input_tag': 'Typical Inputs',
      'hero.slide0.input_text': 'Thread spec, tube size, media, pressure range, coolant type, leak-rate target.',
      'hero.slide0.output_tag': 'Typical Output',
      'hero.slide0.output_text': 'A faster first recommendation instead of a generic catalog reply.',
      'hero.slide1.badge': 'Quick Seal Connectors',
      'hero.slide1.title_prefix': 'Seal to the Part',
      'hero.slide1.title_highlight': 'Faster and More Reliably',
      'hero.slide1.description': 'Pneumatic, hydraulic, manual, and vacuum connector concepts for pressure testing, leak testing, filling, and evacuation workflows.',
      'hero.slide1.primary_cta': 'Explore Connectors',
      'hero.slide1.secondary_cta': 'Request Specs',
      'hero.slide2.badge': 'Liquid Cooling Connectors',
      'hero.slide2.title_prefix': 'Cleaner Connections for',
      'hero.slide2.title_highlight': 'Cooling Loops',
      'hero.slide2.description': 'Compact quick connectors for battery thermal management, coolant service access, and low-spill fluid routing in tighter assemblies.',
      'hero.slide2.primary_cta': 'View Cooling Connectors',
      'hero.slide2.secondary_cta': 'Discuss Your Loop Design',
      'hero.slide3.badge': 'Leak Detection Systems',
      'hero.slide3.title_prefix': 'Choose the Right',
      'hero.slide3.title_highlight': 'Leak Test Method',
      'hero.slide3.description': 'Pressure decay, differential pressure, mass flow, and helium leak testing systems for production QA, validation, and critical sealing checks.',
      'hero.slide3.primary_cta': 'Explore Leak Detection',
      'hero.slide3.secondary_cta': 'Compare Test Methods',
      'hero.stats.lines': 'Focused Product Lines',
      'hero.stats.response': 'Engineering Response Goal',
      'hero.stats.tech': 'Leak Test Technologies',
      'hero.stats.standard_value': 'Standard',
      'hero.stats.standard_text': 'Plus Custom Support',
      'hero.scroll': 'Scroll',
      'trust.tag': 'Why Buyers Move Fast',
      'trust.title': 'Shorten Qualification Time for Your Next Project',
      'trust.description': 'We help teams move from drawing review to a practical recommendation without wasting time on the wrong connector family or leak test method.',
      'trust.card1_title': 'Application-First Selection',
      'trust.card1_text': 'We recommend by port geometry, pressure range, media, and cycle target, not by catalog guesswork.',
      'trust.card2_title': 'Prototype to Production',
      'trust.card2_text': 'Use standard models for quick validation, then scale to custom fixtures and repeatable production setups.',
      'trust.card3_title': 'Technical Communication',
      'trust.card3_text': 'Share drawings, photos, or thread standards and get clearer feedback for sealing method and connection risk.',
      'trust.card4_title': 'Lower False Failure Risk',
      'trust.card4_text': 'Stable sealing interfaces help reduce retests, operator variation, and leakage caused by manual threaded hookups.',
      'products.tag': 'Product Lines',
      'products.title': 'Core Product Lines for the Overseas Market',
      'products.description': 'Present your current lead categories under a broader industrial equipment theme, while leaving room for future expansion into additional machinery lines.',
      'products.card1_title': 'Quick Seal Connectors',
      'products.card1_text': 'Pneumatic, hydraulic, manual, and vacuum sealing connectors for pressure testing, leak testing, fluid filling, and evacuation.',
      'products.card2_title': 'Liquid Cooling Connectors',
      'products.card2_text': 'Compact quick connectors for coolant loops, battery thermal systems, service ports, and cleaner fluid handling layouts.',
      'products.card3_title': 'Leak Detection Systems',
      'products.card3_text': 'Pressure decay, differential pressure, mass flow, and helium detection systems for repeatable quality assurance.',
      'products.card4_title': 'Custom Engineering',
      'products.card4_text': 'Application-specific sealing heads and connector concepts for difficult interfaces, non-standard geometry, and line-side integration.',
      'visual.tag': 'Visual Snapshot',
      'visual.title': 'See the Core Product Range at a Glance',
      'visual.description': 'Real product photography makes the homepage feel more like an industrial catalog and less like a generic corporate brochure.',
      'visual.card1_tag': 'Connection',
      'visual.card1_title': 'Quick Seal Connectors',
      'visual.card1_text': 'Connector families for filling, pressure testing, evacuation, and repeated production-side connection tasks.',
      'visual.card2_tag': 'Thermal',
      'visual.card2_title': 'Liquid Cooling Connectors',
      'visual.card2_text': 'Compact quick connections for thermal loops, battery cooling, service ports, and cleaner fluid handling.',
      'visual.card3_tag': 'Testing',
      'visual.card3_title': 'Leak Detection Systems',
      'visual.card3_text': 'Method-based leak test equipment for pressure decay, differential pressure, mass flow, and helium inspection.',
      'scenario.tag': 'Application Snapshot',
      'scenario.title': 'Where Buyers Usually Start',
      'scenario.description': 'These are the practical use cases that make overseas visitors stop, compare, and send an inquiry.',
      'scenario.card1_tag': 'Pressure Testing',
      'scenario.card1_title': 'Replace Slow Threaded Hookups',
      'scenario.card1_text': 'Use quick seal connectors where manual threaded connection is slowing the cycle or causing false failures.',
      'scenario.card2_tag': 'Filling',
      'scenario.card2_title': 'Charge Media Faster',
      'scenario.card2_text': 'Connect quickly for gas or fluid filling tasks where repeatability and handling time both matter.',
      'scenario.card3_tag': 'Liquid Cooling',
      'scenario.card3_title': 'Keep Cooling Loops Cleaner',
      'scenario.card3_text': 'Choose compact low-spill connectors for battery thermal management, service ports, and tighter routing.',
      'scenario.card4_tag': 'Leak Detection',
      'scenario.card4_title': 'Match the Right Test Method',
      'scenario.card4_text': 'Compare sensitivity, part volume, and cycle time before committing to the wrong leak test approach.',
      'paths.tag': 'Start Here',
      'paths.title': 'Three Common Buying Paths',
      'paths.description': 'Most overseas buyers arrive with one of these questions first. This section helps them choose the right next page faster.',
      'paths.card1_badge': 'Connection',
      'paths.card1_title': 'Need to Seal to a Port, Tube, or Thread?',
      'paths.card1_text': 'Start with quick seal connectors if the main task is connecting to the part reliably for filling, evacuation, or test pressure.',
      'paths.card1_tag1': 'Pneumatic',
      'paths.card1_tag2': 'Hydraulic',
      'paths.card1_tag3': 'Manual',
      'paths.card1_tag4': 'Vacuum',
      'paths.card1_cta': 'Open Connector Range',
      'paths.card2_badge': 'Thermal',
      'paths.card2_title': 'Need a Cleaner Liquid Cooling Connection?',
      'paths.card2_text': 'Start here if you are selecting compact connectors for coolant loops, battery thermal systems, or service-friendly fluid routing.',
      'paths.card2_tag1': 'Cooling Loops',
      'paths.card2_tag2': 'Low Spill',
      'paths.card2_tag3': 'Compact Layout',
      'paths.card2_tag4': 'Service Access',
      'paths.card2_cta': 'Open Cooling Connectors',
      'paths.card3_badge': 'Testing',
      'paths.card3_title': 'Need to Measure the Leak Accurately?',
      'paths.card3_text': 'Start with leak detection systems when the key decision is which test method fits your leak limit, volume, and cycle time.',
      'paths.card3_tag1': 'Pressure Decay',
      'paths.card3_tag2': 'Differential',
      'paths.card3_tag3': 'Mass Flow',
      'paths.card3_tag4': 'Helium',
      'paths.card3_cta': 'Open Leak Test Systems',
      'workflow.tag': 'How We Work',
      'workflow.title': 'A Clear Path from Inquiry to Verified Fit',
      'workflow.description': 'Built for industrial sourcing teams that need fast answers, technical confidence, and practical next steps.',
      'workflow.step1_title': 'Share the Interface',
      'workflow.step1_text': 'Send port size, thread standard, tube OD, sealing face, or a part drawing.',
      'workflow.step2_title': 'Define the Test Duty',
      'workflow.step2_text': 'We review pressure, media, cycle frequency, target leak rate, and operator workflow.',
      'workflow.step3_title': 'Select or Customize',
      'workflow.step3_text': 'Choose from proven standard models or move into a custom sealing solution for non-standard geometry.',
      'workflow.step4_title': 'Validate on Your Line',
      'workflow.step4_text': 'Confirm fit, cycle time, and repeatability before scaling into production purchasing.',
      'switch.tag': 'Why Teams Switch',
      'switch.title': 'Why Buyers Move Away from Repeated Threaded Hookups',
      'switch.description': 'One of the strongest homepage messages for this market is not just what you sell, but what problem you help remove on the line.',
      'switch.old_label': 'Typical Pain Points',
      'switch.old_title': 'Threaded or Manual Rework Loops',
      'switch.old1': 'Longer connection time at every cycle',
      'switch.old2': 'Operator variation between shifts',
      'switch.old3': 'Higher risk of false leak-test failure',
      'switch.old4': 'Wear on threads and sealing faces',
      'switch.old5': 'Harder fixture-side automation',
      'switch.new_label': 'What We Help Improve',
      'switch.new_title': 'Quick Seal and Method-Matched Testing',
      'switch.new1': 'Faster connect and release on the line',
      'switch.new2': 'More stable sealing repeatability',
      'switch.new3': 'Cleaner routing for liquid cooling loops',
      'switch.new4': 'Better match between leak target and test method',
      'switch.new5': 'Stronger path from trial to production use',
      'industry.tag': 'Industries Served',
      'industry.title': 'Trusted Across Manufacturing Sectors',
      'industry.description': 'Our sealing and testing solutions are best aligned with applications where repeatable connection quality and test stability matter.',
      'industry.item1': 'Automotive & EV',
      'industry.item2': 'Medical Devices',
      'industry.item3': 'HVAC-R',
      'industry.item4': 'General Industry',
      'industry.item5': 'Battery and Energy Storage',
      'industry.item6': 'Power Electronics',
      'rfq.tag': 'Request for Quote',
      'rfq.title': 'Send These 5 Details to Get a Better Recommendation',
      'rfq.description': 'The more precise your first inquiry is, the faster we can suggest the right connector series or custom route.',
      'rfq.item1': 'Port or tube dimensions, thread type, and sealing surface',
      'rfq.item2': 'Test pressure, pressure range, or vacuum requirement',
      'rfq.item3': 'Media type such as air, nitrogen, helium, water, oil, or refrigerant',
      'rfq.item4': 'Cycle target, takt time, and manual or automated operation',
      'rfq.item5': 'Any drawing, product photo, or leak-rate target if available',
      'rfq.scope_title': 'Typical support scope',
      'rfq.scope1': 'Quick seal connectors for leak and pressure tests',
      'rfq.scope2': 'Liquid cooling connectors for compact thermal loops',
      'rfq.scope3': 'Fixture-side connection concepts for production lines',
      'rfq.scope4': 'Leak detection method guidance and system matching',
      'rfq.cta': 'Start Your RFQ',
      'why.tag': 'Why IndustHub',
      'why.title': 'Engineered for Precision. Built for Reliability.',
      'why.card1_title': '100% Tested',
      'why.card1_text': 'Every connector undergoes rigorous final inspection before leaving our facility.',
      'why.card2_title': 'Custom Engineering',
      'why.card2_text': 'Application-specific designs tailored to your exact geometry and media requirements.',
      'why.card3_title': 'Focused Product Logic',
      'why.card3_text': 'We keep product selection organized around the real buying questions: how to connect, how to cool, and how to test.',
      'why.card4_title': 'Faster First Recommendation',
      'why.card4_text': 'When you share drawings, media, and pressure conditions clearly, we can narrow the route much faster.',
      'testimonial.text': "IndustHub's quick seal connectors significantly reduced our cycle time. The push-to-connect setup also removed false failures we used to get from repeated threaded hookups, and their team was easy to work with when our interface geometry was not standard.",
      'testimonial.author': '— Senior Manufacturing Engineer, Global Automotive OEM',
      'faq.tag': 'FAQ',
      'faq.title': 'Questions Buyers Ask Before They Contact Us',
      'faq.description': 'These are usually the fastest checkpoints when evaluating an industrial connector or leak testing supplier.',
      'faq.card1_title': 'Do you only supply standard products?',
      'faq.card1_text': 'No. We support both standard series and custom-engineered solutions when your interface, media, or cycle requirement is non-standard.',
      'faq.card2_title': 'What information should we send first?',
      'faq.card2_text': 'Thread or port details, pressure range, media, cycle frequency, and a drawing or product photo will usually speed up selection significantly.',
      'faq.card3_title': 'Can you support automated production lines?',
      'faq.card3_text': 'Yes. We support manual, pneumatic, hydraulic, and integrated fixture-side concepts for higher-throughput testing workflows.',
      'faq.card4_title': 'How do you help reduce leak-test instability?',
      'faq.card4_text': 'By improving sealing repeatability, interface matching, and operator consistency, especially where threaded hookups are slowing testing down.',
      'cta.title': 'Ready to Improve Your Production Process?',
      'cta.text': 'Tell us your interface, media, pressure, and leak-rate target. We will help you narrow the right connector or leak testing route.',
      'cta.primary': 'Request a Consultation',
      'cta.secondary': 'Browse Product Center',
      'footer.brand_text': 'Industrial equipment, connection systems, and process support solutions for demanding production environments.',
      'footer.brand_text_short': 'Industrial equipment, connection systems, and process support solutions.',
      'footer.brand_text_full': 'Industrial equipment, connector systems, and test solutions for demanding production applications.',
      'footer.products': 'Products',
      'footer.product1': 'Seal Connectors',
      'footer.product2': 'Liquid Cooling Connectors',
      'footer.product3': 'Leak Detectors',
      'footer.product4': 'Custom Solutions',
      'footer.company': 'Company',
      'footer.company1': 'About Us',
      'footer.company2': 'Contact',
      'footer.company3': 'Privacy Policy',
      'footer.company4': 'Terms of Service',
      'footer.company5': 'Product Center',
      'footer.company6': 'Engineering Support',
      'footer.support': 'Support',
      'footer.support1': 'Technical Support',
      'footer.support2': 'Request Quote',
      'footer.support3': 'Send Drawing for Review',
      'footer.copyright': '© 2026 IndustHub. All rights reserved.',
      'cookie.text': 'This website uses cookies to ensure the best experience. By continuing, you agree to our',
      'cookie.link': 'Privacy Policy',
      'cookie.decline': 'Decline',
      'cookie.accept': 'Accept',
      'products_page.meta.title': 'Products | IndustHub',
      'products_page.meta.description': 'IndustHub Products - industrial equipment, connection systems, and leak detection solutions for industrial manufacturing.',
      'products_page.meta.og_title': 'Products | IndustHub',
      'products_page.meta.og_description': 'Explore our core industrial product lines for connection, thermal management, and leak detection.',
      'products_page.hero.title': 'Our Products',
      'products_page.hero.text': 'Explore our current core industrial product lines in connection systems, liquid cooling solutions, and leak detection equipment.',
      'products_page.stats.lines': 'Core Product Lines',
      'products_page.stats.paths': 'Core Selection Paths',
      'products_page.stats.tech': 'Leak Test Technologies',
      'products_page.stats.response': 'Engineering Response Goal',
      'products_page.directory.tag': 'Product Directory',
      'products_page.directory.title': 'Browse by Product Family, Technology, or Application',
      'products_page.directory.text': 'This page is organized around the core product groups we currently lead with internationally: connection systems, liquid cooling solutions, and leak detection.',
      'about_page.meta.title': 'About Us | IndustHub',
      'about_page.meta.description': 'About IndustHub - industrial equipment and process solutions for global manufacturers.',
      'about_page.meta.og_title': 'About IndustHub | Industrial Equipment & Process Solutions',
      'about_page.meta.og_description': 'Industrial equipment and process solutions for demanding production environments.',
      'about_page.hero.crumb': 'About Us',
      'about_page.hero.title': 'About IndustHub',
      'about_page.hero.text': 'We build industrial solutions for manufacturers that need faster setup, better repeatability, and clearer engineering support.',
      'contact_page.meta.title': 'Contact Us | IndustHub',
      'contact_page.meta.description': 'Contact IndustHub for industrial equipment, connector systems, and process solutions. Request a quote, technical support, or engineering consultation.',
      'contact_page.meta.og_title': 'Contact IndustHub | Industrial Equipment',
      'contact_page.meta.og_description': 'Get in touch with IndustHub for industrial equipment, connection systems, and process solutions.',
      'contact_page.hero.crumb': 'Contact',
      'contact_page.hero.title': 'Get in Touch',
      'contact_page.hero.text': 'Tell us your interface, pressure, media, cooling loop, or leak-rate target. We typically respond with a practical next step within 24 hours.'
    },
    zh: {
      html_lang: 'zh-CN',
      'meta.title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.description': 'IndustHub 专注于测试、充注、热管理与产线配套场景的工业设备与工艺解决方案。',
      'meta.og_title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.og_description': '面向严苛工业工况的工业设备、连接系统与工艺解决方案。',
      'meta.twitter_title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.twitter_description': '面向全球制造团队的工业设备、连接系统与工艺解决方案。',
      'common.skip': '跳转到主要内容',
      'brand.name': 'IndustHub',
      'nav.home': '首页',
      'nav.products': '产品中心',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.quote': '获取报价',
      'hero.slide0.badge': '工业设备与工艺解决方案',
      'hero.slide0.title_prefix': '更快完成',
      'hero.slide0.title_highlight': '测试、液冷与充注连接',
      'hero.slide0.description': '探索面向工业产线的工业设备与工程化产品线，帮助团队实现更快导入、更干净集成和更稳定结果。',
      'hero.slide0.primary_cta': '浏览产品线',
      'hero.slide0.secondary_cta': '申请工程支持',
      'hero.slide0.proof1_title': '24 小时内响应',
      'hero.slide0.proof1_text': '工程团队快速评估应用需求',
      'hero.slide0.proof2_title': '标准品 + 定制',
      'hero.slide0.proof2_text': '快速匹配端口、螺纹与管路接口',
      'hero.slide0.proof3_title': '3 大核心产品线',
      'hero.slide0.proof3_text': '连接、热管理回路与检漏系统',
      'hero.slide0.panel_tag': '核心应用',
      'hero.slide0.panel_title': '围绕真实工艺流程而建',
      'hero.slide0.quick1_title': '压力测试连接',
      'hero.slide0.quick1_text': '快速密封螺纹口、管口以及非标接口。',
      'hero.slide0.quick2_title': '液冷回路连接',
      'hero.slide0.quick2_text': '适用于可维护冷却回路和电池系统的紧凑型接头。',
      'hero.slide0.quick3_title': '检漏方法匹配',
      'hero.slide0.quick3_text': '根据泄漏目标与节拍选择压降、差压、流量或氦检方案。',
      'hero.slide0.input_tag': '常见输入条件',
      'hero.slide0.input_text': '螺纹规格、管径、介质、压力范围、冷却液类型、泄漏率目标。',
      'hero.slide0.output_tag': '常见输出结果',
      'hero.slide0.output_text': '更快得到初步推荐，而不是泛泛的目录回复。',
      'hero.slide1.badge': '快速密封接头',
      'hero.slide1.title_prefix': '更快更稳地',
      'hero.slide1.title_highlight': '连接到工件',
      'hero.slide1.description': '适用于压力测试、检漏、充注和抽空流程的气动、液压、手动和真空连接方案。',
      'hero.slide1.primary_cta': '查看接头系列',
      'hero.slide1.secondary_cta': '索取规格',
      'hero.slide2.badge': '液冷接头',
      'hero.slide2.title_prefix': '更干净的',
      'hero.slide2.title_highlight': '冷却回路连接',
      'hero.slide2.description': '适用于电池热管理、维护接口和低溢漏流体布置的紧凑型快接方案。',
      'hero.slide2.primary_cta': '查看液冷接头',
      'hero.slide2.secondary_cta': '讨论回路设计',
      'hero.slide3.badge': '检漏系统',
      'hero.slide3.title_prefix': '为你的应用选择',
      'hero.slide3.title_highlight': '合适的检漏方法',
      'hero.slide3.description': '适用于产线质量控制、验证和关键密封检查的压降、差压、流量与氦检系统。',
      'hero.slide3.primary_cta': '查看检漏方案',
      'hero.slide3.secondary_cta': '比较测试方法',
      'hero.stats.lines': '核心产品线',
      'hero.stats.response': '工程响应目标',
      'hero.stats.tech': '检漏技术路线',
      'hero.stats.standard_value': '标准品',
      'hero.stats.standard_text': '支持定制开发',
      'hero.scroll': '继续浏览',
      'trust.tag': '为什么买家推进更快',
      'trust.title': '缩短下一个项目的选型确认时间',
      'trust.description': '我们帮助团队从图纸评估更快走向可执行建议，避免在错误的接头家族或检漏方法上浪费时间。',
      'trust.card1_title': '按应用优先选型',
      'trust.card1_text': '我们根据接口几何、压力范围、介质和节拍目标推荐，而不是靠目录猜测。',
      'trust.card2_title': '从打样到量产',
      'trust.card2_text': '先用标准型号快速验证，再延伸到定制夹具与可重复量产方案。',
      'trust.card3_title': '更清晰的技术沟通',
      'trust.card3_text': '分享图纸、照片或螺纹标准，可更快获得密封方式与连接风险反馈。',
      'trust.card4_title': '降低误判风险',
      'trust.card4_text': '稳定的密封界面有助于减少复测、操作差异和手工螺纹连接带来的误判。',
      'products.tag': '产品线',
      'products.title': '面向海外市场的核心产品线',
      'products.description': '用更宽的工业设备主题承载当前主推品类，同时为后续新增设备类目预留空间。',
      'products.card1_title': '快速密封接头',
      'products.card1_text': '面向压力测试、检漏、流体充注与抽空任务的气动、液压、手动和真空密封接头。',
      'products.card2_title': '液冷接头',
      'products.card2_text': '适用于冷却回路、电池热系统、维护端口和更清洁流体处理布局的紧凑快接方案。',
      'products.card3_title': '检漏系统',
      'products.card3_text': '面向重复质量控制的压降、差压、流量和氦检系统。',
      'products.card4_title': '定制工程',
      'products.card4_text': '适用于复杂接口、非标几何与产线集成的定制密封头与连接方案。',
      'visual.tag': '可视化总览',
      'visual.title': '快速看懂核心产品范围',
      'visual.description': '真实产品摄影让首页更像工业产品目录，而不是泛泛的企业宣传页。',
      'visual.card1_tag': '连接',
      'visual.card1_title': '快速密封接头',
      'visual.card1_text': '用于充注、压力测试、抽空和重复产线连接任务的接头家族。',
      'visual.card2_tag': '热管理',
      'visual.card2_title': '液冷接头',
      'visual.card2_text': '适用于热回路、电池冷却、维护端口和更清洁流体处理的紧凑快接方案。',
      'visual.card3_tag': '测试',
      'visual.card3_title': '检漏系统',
      'visual.card3_text': '基于压降、差压、流量和氦检方法组织的检漏设备。',
      'scenario.tag': '应用场景',
      'scenario.title': '海外买家通常从这里开始',
      'scenario.description': '这些实际使用场景最容易让海外访客停留、比较并发起询盘。',
      'scenario.card1_tag': '压力测试',
      'scenario.card1_title': '替代低效螺纹连接',
      'scenario.card1_text': '当手工螺纹连接拖慢节拍或带来误判时，可用快速密封接头替代。',
      'scenario.card2_tag': '充注',
      'scenario.card2_title': '更快完成介质充注',
      'scenario.card2_text': '适用于重复性和操作时间都很关键的气体或流体充注任务。',
      'scenario.card3_tag': '液冷',
      'scenario.card3_title': '让冷却回路更整洁',
      'scenario.card3_text': '为电池热管理、维护端口和紧凑布置选择低溢漏紧凑接头。',
      'scenario.card4_tag': '检漏',
      'scenario.card4_title': '匹配正确测试方法',
      'scenario.card4_text': '在投入错误检漏路线前，先比较灵敏度、工件容积和节拍要求。',
      'paths.tag': '从这里开始',
      'paths.title': '三条常见采购路径',
      'paths.description': '大多数海外买家会带着以下其中一个问题进入站点，这一部分帮助他们更快找到下一页。',
      'paths.card1_badge': '连接',
      'paths.card1_title': '需要密封到端口、管口或螺纹吗？',
      'paths.card1_text': '如果核心任务是为了充注、抽空或测试压力可靠连接到工件，可从快速密封接头开始。',
      'paths.card1_tag1': '气动',
      'paths.card1_tag2': '液压',
      'paths.card1_tag3': '手动',
      'paths.card1_tag4': '真空',
      'paths.card1_cta': '查看接头范围',
      'paths.card2_badge': '热管理',
      'paths.card2_title': '需要更干净的液冷连接？',
      'paths.card2_text': '若你正在为冷却回路、电池热系统或维护友好型流体布置选型，可从这里开始。',
      'paths.card2_tag1': '冷却回路',
      'paths.card2_tag2': '低溢漏',
      'paths.card2.tag3': '紧凑布局',
      'paths.card2_tag4': '维护接入',
      'paths.card2_cta': '查看液冷接头',
      'paths.card3_badge': '测试',
      'paths.card3_title': '需要更准确地测出泄漏？',
      'paths.card3_text': '当关键问题是按泄漏目标、容积和节拍来选择测试方法时，可从检漏系统开始。',
      'paths.card3_tag1': '压降',
      'paths.card3_tag2': '差压',
      'paths.card3_tag3': '流量',
      'paths.card3_tag4': '氦检',
      'paths.card3_cta': '查看检漏系统',
      'workflow.tag': '合作方式',
      'workflow.title': '从询盘到确认适配的清晰路径',
      'workflow.description': '为需要快速答案、技术把握和明确下一步的工业采购团队而设计。',
      'workflow.step1_title': '提供接口信息',
      'workflow.step1_text': '发送端口尺寸、螺纹标准、管外径、密封面或工件图纸。',
      'workflow.step2_title': '定义测试任务',
      'workflow.step2_text': '我们会评估压力、介质、循环频率、目标泄漏率和操作流程。',
      'workflow.step3_title': '标准或定制',
      'workflow.step3_text': '优先采用成熟标准型号，必要时进入非标几何的定制密封方案。',
      'workflow.step4_title': '在线验证',
      'workflow.step4_text': '在正式量产采购前确认匹配性、节拍和重复稳定性。',
      'switch.tag': '为什么团队会切换',
      'switch.title': '为什么买家会放弃重复螺纹连接',
      'switch.description': '这个市场最有力的信息不只是你卖什么，而是你能帮客户消除什么产线问题。',
      'switch.old_label': '典型痛点',
      'switch.old_title': '螺纹连接或人工返工流程',
      'switch.old1': '每个节拍的连接时间更长',
      'switch.old2': '不同班次操作差异更大',
      'switch.old3': '误判检漏失败的风险更高',
      'switch.old4': '螺纹和密封面磨损更快',
      'switch.old5': '更难实现夹具侧自动化',
      'switch.new_label': '我们帮助改善的方向',
      'switch.new_title': '快速密封与方法匹配的测试流程',
      'switch.new1': '产线连接与释放更快',
      'switch.new2': '密封重复性更稳定',
      'switch.new3': '液冷回路布置更整洁',
      'switch.new4': '泄漏目标与测试方法更匹配',
      'switch.new5': '从试用走向量产的路径更清晰',
      'industry.tag': '服务行业',
      'industry.title': '广泛适配制造业场景',
      'industry.description': '我们的连接与测试方案更适合那些对重复连接质量和测试稳定性要求较高的应用。',
      'industry.item1': '汽车与新能源',
      'industry.item2': '医疗器械',
      'industry.item3': 'HVAC-R',
      'industry.item4': '通用工业',
      'industry.item5': '电池与储能',
      'industry.item6': '电力电子',
      'rfq.tag': '询价建议',
      'rfq.title': '先提供这 5 类信息，可更快获得建议',
      'rfq.description': '首轮询盘越具体，我们越能更快推荐合适的接头系列或定制路线。',
      'rfq.item1': '端口或管路尺寸、螺纹类型和密封面信息',
      'rfq.item2': '测试压力、压力范围或真空要求',
      'rfq.item3': '介质类型，如空气、氮气、氦气、水、油或制冷剂',
      'rfq.item4': '节拍目标、循环时间以及手动或自动化方式',
      'rfq.item5': '如有图纸、产品照片或目标泄漏率请一并提供',
      'rfq.scope_title': '典型支持范围',
      'rfq.scope1': '检漏与压力测试用快速密封接头',
      'rfq.scope2': '紧凑热回路用液冷接头',
      'rfq.scope3': '面向产线的夹具侧连接方案',
      'rfq.scope4': '检漏方法建议与系统匹配',
      'rfq.cta': '开始 RFQ',
      'why.tag': '为什么选择 IndustHub',
      'why.title': '面向精度而设计，为可靠性而打造。',
      'why.card1_title': '100% 检测',
      'why.card1_text': '每个接头出厂前都经过严格终检。',
      'why.card2_title': '定制工程',
      'why.card2_text': '按你的几何接口与介质要求提供针对性设计。',
      'why.card3_title': '聚焦型产品逻辑',
      'why.card3_text': '我们按真实采购问题组织产品：怎么连接、怎么冷却、怎么测试。',
      'why.card4_title': '更快的首次建议',
      'why.card4_text': '当你清晰提供图纸、介质和压力条件时，我们能更快缩小推荐范围。',
      'testimonial.text': 'IndustHub 的快速密封接头明显缩短了我们的循环时间。推压式连接也消除了过去反复螺纹连接带来的误判问题，而且即使我们的接口几何并不标准，他们的团队也很容易合作。',
      'testimonial.author': '— 某全球汽车 OEM 资深制造工程师',
      'faq.tag': '常见问题',
      'faq.title': '买家在联系前常问的问题',
      'faq.description': '这些通常是评估工业接头或检漏供应商时最先要确认的几个点。',
      'faq.card1_title': '你们只提供标准产品吗？',
      'faq.card1_text': '不是。对于接口、介质或节拍要求非标的项目，我们同时支持标准系列和定制方案。',
      'faq.card2_title': '我们应该先提供什么信息？',
      'faq.card2_text': '螺纹或端口细节、压力范围、介质、循环频率以及图纸或产品照片，通常都能明显加快选型。',
      'faq.card3_title': '你们能支持自动化产线吗？',
      'faq.card3_text': '可以。我们支持手动、气动、液压以及夹具侧集成方案，以适配更高吞吐的测试流程。',
      'faq.card4_title': '你们如何帮助降低检漏不稳定？',
      'faq.card4_text': '通过提升密封重复性、接口匹配度和操作一致性，尤其是在螺纹连接拖慢测试节拍的场景中。',
      'cta.title': '准备优化你的生产流程？',
      'cta.text': '告诉我们你的接口、介质、压力和泄漏率目标，我们会帮你收敛到合适的连接或检漏路线。',
      'cta.primary': '申请咨询',
      'cta.secondary': '浏览产品中心',
      'footer.brand_text': '面向严苛工业工况的工业设备、连接系统与工艺支持解决方案。',
      'footer.brand_text_short': '工业设备、连接系统与工艺支持解决方案。',
      'footer.brand_text_full': '面向严苛工业应用的工业设备、连接系统与测试解决方案。',
      'footer.products': '产品',
      'footer.product1': '密封接头',
      'footer.product2': '液冷接头',
      'footer.product3': '检漏系统',
      'footer.product4': '定制方案',
      'footer.company': '公司',
      'footer.company1': '关于我们',
      'footer.company2': '联系我们',
      'footer.company3': '隐私政策',
      'footer.company4': '服务条款',
      'footer.company5': '产品中心',
      'footer.company6': '工程支持',
      'footer.support': '支持',
      'footer.support1': '技术支持',
      'footer.support2': '申请报价',
      'footer.support3': '发送图纸评估',
      'footer.copyright': '© 2026 IndustHub. 保留所有权利。',
      'cookie.text': '本网站使用 Cookie 以确保最佳体验。继续访问即表示你同意我们的',
      'cookie.link': '隐私政策',
      'cookie.decline': '拒绝',
      'cookie.accept': '接受',
      'products_page.meta.title': '产品中心 | IndustHub',
      'products_page.meta.description': 'IndustHub 产品中心 - 面向工业制造的工业设备、连接系统与检漏解决方案。',
      'products_page.meta.og_title': '产品中心 | IndustHub',
      'products_page.meta.og_description': '浏览我们围绕连接、热管理与检漏场景的核心工业产品线。',
      'products_page.hero.title': '我们的产品',
      'products_page.hero.text': '浏览我们当前面向海外市场主推的连接系统、液冷方案与检漏设备产品线。',
      'products_page.stats.lines': '核心产品线',
      'products_page.stats.paths': '核心选型入口',
      'products_page.stats.tech': '检漏技术路线',
      'products_page.stats.response': '工程响应目标',
      'products_page.directory.tag': '产品目录',
      'products_page.directory.title': '按产品家族、技术或应用浏览',
      'products_page.directory.text': '本页围绕我们当前国际站主推的核心产品组来组织：连接系统、液冷方案和检漏解决方案。',
      'about_page.meta.title': '关于我们 | IndustHub',
      'about_page.meta.description': '关于 IndustHub - 面向全球制造企业的工业设备与工艺解决方案。',
      'about_page.meta.og_title': '关于 IndustHub | 工业设备与工艺解决方案',
      'about_page.meta.og_description': '面向严苛生产环境的工业设备与工艺解决方案。',
      'about_page.hero.crumb': '关于我们',
      'about_page.hero.title': '关于 IndustHub',
      'about_page.hero.text': '我们为需要更快导入、更好重复性和更清晰工程支持的制造企业提供工业解决方案。',
      'contact_page.meta.title': '联系我们 | IndustHub',
      'contact_page.meta.description': '联系 IndustHub，获取工业设备、连接系统与工艺解决方案相关报价、技术支持与工程咨询。',
      'contact_page.meta.og_title': '联系 IndustHub | 工业设备',
      'contact_page.meta.og_description': '联系 IndustHub，获取工业设备、连接系统与工艺解决方案支持。',
      'contact_page.hero.crumb': '联系我们',
      'contact_page.hero.title': '联系我们',
      'contact_page.hero.text': '告诉我们你的接口、压力、介质、冷却回路或泄漏率目标，我们通常会在 24 小时内给出下一步建议。'
    },
    es: {
      html_lang: 'es',
      'meta.title': 'IndustHub | Equipos Industriales y Soluciones de Proceso',
      'meta.description': 'IndustHub suministra equipos industriales y soluciones de proceso para pruebas, llenado, gestion termica y soporte de produccion.',
      'meta.og_title': 'IndustHub | Equipos Industriales y Soluciones de Proceso',
      'meta.og_description': 'Equipos industriales y soluciones de proceso para entornos de produccion exigentes.',
      'meta.twitter_title': 'IndustHub | Equipos Industriales y Soluciones de Proceso',
      'meta.twitter_description': 'Equipos industriales y soluciones de proceso para equipos globales de manufactura.',
      'common.skip': 'Saltar al contenido principal',
      'brand.name': 'IndustHub',
      'nav.home': 'Inicio',
      'nav.products': 'Productos',
      'nav.about': 'Nosotros',
      'nav.contact': 'Contacto',
      'nav.quote': 'Solicitar cotizacion',
      'hero.slide0.badge': 'Equipos Industriales y Soluciones de Proceso',
      'hero.slide0.title_prefix': 'Conexiones Rapidas para',
      'hero.slide0.title_highlight': 'Prueba, Refrigeracion y Llenado',
      'hero.slide0.description': 'Explore equipos industriales y lineas de producto orientadas a ingenieria para equipos de produccion que necesitan una puesta en marcha mas rapida, integracion mas limpia y resultados mas estables.',
      'hero.slide0.primary_cta': 'Ver lineas de producto',
      'hero.slide0.secondary_cta': 'Solicitar apoyo tecnico',
      'hero.slide0.proof1_title': 'Respuesta en 24 h',
      'hero.slide0.proof1_text': 'Revision de aplicacion por ingenieria',
      'hero.slide0.proof2_title': 'Estandar + Personalizado',
      'hero.slide0.proof2_text': 'Coincidencia rapida para puertos, roscas y tubos',
      'hero.slide0.proof3_title': '3 lineas principales',
      'hero.slide0.proof3_text': 'Conectores, circuitos termicos y sistemas de fuga',
      'hero.slide0.panel_tag': 'Aplicaciones principales',
      'hero.slide0.panel_title': 'Pensado para el flujo de trabajo real',
      'hero.slide0.quick1_title': 'Conexion para prueba de presion',
      'hero.slide0.quick1_text': 'Selle rapidamente puertos roscados, tubos e interfaces especiales.',
      'hero.slide0.quick2_title': 'Conexion para refrigeracion liquida',
      'hero.slide0.quick2_text': 'Acoples compactos para circuitos de refrigerante y sistemas de baterias.',
      'hero.slide0.quick3_title': 'Seleccion del metodo de fuga',
      'hero.slide0.quick3_text': 'Elija presion, diferencial, flujo masico o helio segun objetivo y tiempo de ciclo.',
      'hero.slide0.input_tag': 'Entradas tipicas',
      'hero.slide0.input_text': 'Rosca, diametro de tubo, medio, rango de presion, tipo de refrigerante, objetivo de fuga.',
      'hero.slide0.output_tag': 'Resultado tipico',
      'hero.slide0.output_text': 'Una recomendacion inicial mas rapida en lugar de una respuesta generica de catalogo.',
      'hero.slide1.badge': 'Conectores de Sellado Rapido',
      'hero.slide1.title_prefix': 'Selle la pieza',
      'hero.slide1.title_highlight': 'Mas rapido y con mayor estabilidad',
      'hero.slide1.description': 'Conceptos de conexion neumatica, hidraulica, manual y de vacio para pruebas de presion, pruebas de fuga, llenado y evacuacion.',
      'hero.slide1.primary_cta': 'Explorar conectores',
      'hero.slide1.secondary_cta': 'Solicitar especificaciones',
      'hero.slide2.badge': 'Conectores para Refrigeracion Liquida',
      'hero.slide2.title_prefix': 'Conexiones mas limpias para',
      'hero.slide2.title_highlight': 'Circuitos de Refrigeracion',
      'hero.slide2.description': 'Conectores rapidos compactos para gestion termica de baterias, puertos de servicio y manejo de fluidos con bajo derrame.',
      'hero.slide2.primary_cta': 'Ver conectores de refrigeracion',
      'hero.slide2.secondary_cta': 'Hablar de su diseno de circuito',
      'hero.slide3.badge': 'Sistemas de Deteccion de Fugas',
      'hero.slide3.title_prefix': 'Elija el',
      'hero.slide3.title_highlight': 'Metodo de Fuga Correcto',
      'hero.slide3.description': 'Sistemas de presion, diferencial, flujo masico y helio para QA de produccion, validacion y verificaciones criticas.',
      'hero.slide3.primary_cta': 'Explorar deteccion de fugas',
      'hero.slide3.secondary_cta': 'Comparar metodos',
      'hero.stats.lines': 'Lineas principales',
      'hero.stats.response': 'Objetivo de respuesta',
      'hero.stats.tech': 'Tecnologias de fuga',
      'hero.stats.standard_value': 'Estandar',
      'hero.stats.standard_text': 'mas soporte personalizado',
      'hero.scroll': 'Desplazar',
      'trust.tag': 'Por que los compradores avanzan mas rapido',
      'trust.title': 'Acorte el tiempo de calificacion de su proximo proyecto',
      'trust.description': 'Ayudamos a los equipos a pasar de la revision del plano a una recomendacion practica sin perder tiempo en la familia o metodo equivocado.',
      'trust.card1_title': 'Seleccion segun aplicacion',
      'trust.card1_text': 'Recomendamos segun geometria, presion, medio y objetivo de ciclo, no por suposiciones de catalogo.',
      'trust.card2_title': 'De prototipo a produccion',
      'trust.card2_text': 'Use modelos estandar para validar rapido y despues escale a soluciones personalizadas y repetibles.',
      'trust.card3_title': 'Comunicacion tecnica clara',
      'trust.card3_text': 'Comparta planos, fotos o normas de rosca para recibir una respuesta mas clara sobre sellado y riesgo.',
      'trust.card4_title': 'Menor riesgo de falsas fallas',
      'trust.card4_text': 'Interfaces de sellado estables ayudan a reducir retrabajos, variacion del operador y fugas por conexiones roscadas.',
      'products.tag': 'Lineas de producto',
      'products.title': 'Lineas principales para el mercado internacional',
      'products.description': 'Presente sus categorias actuales bajo un tema mas amplio de equipos industriales, dejando espacio para futuras lineas de maquinaria.',
      'products.card1_title': 'Conectores de Sellado Rapido',
      'products.card1_text': 'Conectores neumaticos, hidraulicos, manuales y de vacio para pruebas de presion, fuga, llenado y evacuacion.',
      'products.card2_title': 'Conectores para Refrigeracion Liquida',
      'products.card2_text': 'Conectores compactos para circuitos de refrigerante, sistemas termicos de baterias, puertos de servicio y manejo mas limpio de fluidos.',
      'products.card3_title': 'Sistemas de Deteccion de Fugas',
      'products.card3_text': 'Sistemas de presion, diferencial, flujo masico y helio para aseguramiento de calidad repetible.',
      'products.card4_title': 'Ingenieria Personalizada',
      'products.card4_text': 'Cabezas de sellado y conceptos de conexion para interfaces dificiles, geometria no estandar e integracion en linea.',
      'visual.tag': 'Vista visual',
      'visual.title': 'Vea la gama principal de un vistazo',
      'visual.description': 'La fotografia real del producto hace que la pagina se sienta mas como un catalogo industrial y menos como un folleto generico.',
      'visual.card1_tag': 'Conexion',
      'visual.card1_title': 'Conectores de Sellado Rapido',
      'visual.card1_text': 'Familias de conectores para llenado, pruebas de presion, evacuacion y conexiones repetitivas en produccion.',
      'visual.card2_tag': 'Termico',
      'visual.card2_title': 'Conectores para Refrigeracion Liquida',
      'visual.card2_text': 'Conexiones rapidas compactas para circuitos termicos, enfriamiento de baterias, puertos de servicio y manejo mas limpio de fluidos.',
      'visual.card3_tag': 'Prueba',
      'visual.card3_title': 'Sistemas de Deteccion de Fugas',
      'visual.card3_text': 'Equipos de fuga basados en presion, diferencial, flujo masico y helio.',
      'scenario.tag': 'Aplicaciones',
      'scenario.title': 'Donde suelen empezar los compradores',
      'scenario.description': 'Estos casos de uso practicos son los que normalmente hacen que los visitantes comparen y envien una consulta.',
      'scenario.card1_tag': 'Prueba de Presion',
      'scenario.card1_title': 'Reemplace conexiones roscadas lentas',
      'scenario.card1_text': 'Use conectores de sellado rapido cuando la conexion roscada manual reduzca el ritmo o genere falsas fallas.',
      'scenario.card2_tag': 'Llenado',
      'scenario.card2_title': 'Cargue medios mas rapido',
      'scenario.card2_text': 'Conecte rapidamente para tareas de llenado de gas o fluido donde importan el tiempo y la repetibilidad.',
      'scenario.card3_tag': 'Refrigeracion Liquida',
      'scenario.card3_title': 'Mantenga los circuitos mas limpios',
      'scenario.card3_text': 'Elija conectores compactos de bajo derrame para gestion termica de baterias, puertos de servicio y rutas mas ajustadas.',
      'scenario.card4_tag': 'Deteccion de Fugas',
      'scenario.card4_title': 'Elija el metodo correcto',
      'scenario.card4_text': 'Compare sensibilidad, volumen de pieza y tiempo de ciclo antes de comprometerse con el metodo equivocado.',
      'paths.tag': 'Empiece aqui',
      'paths.title': 'Tres rutas comunes de compra',
      'paths.description': 'La mayoria de los compradores internacionales llegan con una de estas preguntas. Esta seccion les ayuda a entrar en la pagina correcta mas rapido.',
      'paths.card1_badge': 'Conexion',
      'paths.card1_title': 'Necesita sellar un puerto, tubo o rosca?',
      'paths.card1_text': 'Empiece con conectores de sellado rapido si la tarea principal es conectarse a la pieza para llenado, evacuacion o prueba de presion.',
      'paths.card1_tag1': 'Neumatico',
      'paths.card1_tag2': 'Hidraulico',
      'paths.card1_tag3': 'Manual',
      'paths.card1_tag4': 'Vacio',
      'paths.card1_cta': 'Abrir gama de conectores',
      'paths.card2_badge': 'Termico',
      'paths.card2_title': 'Necesita una conexion de refrigeracion mas limpia?',
      'paths.card2_text': 'Empiece aqui si esta seleccionando conectores compactos para circuitos de refrigerante, sistemas termicos de baterias o rutas de servicio.',
      'paths.card2_tag1': 'Circuitos',
      'paths.card2_tag2': 'Bajo derrame',
      'paths.card2_tag3': 'Diseno compacto',
      'paths.card2_tag4': 'Acceso de servicio',
      'paths.card2_cta': 'Abrir conectores de refrigeracion',
      'paths.card3_badge': 'Prueba',
      'paths.card3_title': 'Necesita medir la fuga con precision?',
      'paths.card3_text': 'Empiece con sistemas de deteccion de fugas cuando la decision clave sea que metodo encaja con su objetivo, volumen y tiempo de ciclo.',
      'paths.card3_tag1': 'Presion',
      'paths.card3_tag2': 'Diferencial',
      'paths.card3_tag3': 'Flujo',
      'paths.card3_tag4': 'Helio',
      'paths.card3_cta': 'Abrir sistemas de fuga',
      'workflow.tag': 'Como trabajamos',
      'workflow.title': 'Un camino claro desde la consulta hasta la validacion',
      'workflow.description': 'Pensado para equipos de compras industriales que necesitan respuestas rapidas, confianza tecnica y siguientes pasos claros.',
      'workflow.step1_title': 'Comparta la interfaz',
      'workflow.step1_text': 'Envie tamano de puerto, norma de rosca, diametro exterior de tubo, cara de sellado o un plano.',
      'workflow.step2_title': 'Defina la condicion de prueba',
      'workflow.step2_text': 'Revisamos presion, medio, frecuencia de ciclo, objetivo de fuga y flujo operativo.',
      'workflow.step3_title': 'Seleccione o personalice',
      'workflow.step3_text': 'Elija modelos estandar comprobados o avance a una solucion personalizada para geometria no estandar.',
      'workflow.step4_title': 'Valide en su linea',
      'workflow.step4_text': 'Confirme ajuste, tiempo de ciclo y repetibilidad antes de escalar a compra de produccion.',
      'switch.tag': 'Por que cambian los equipos',
      'switch.title': 'Por que los compradores dejan conexiones roscadas repetitivas',
      'switch.description': 'Uno de los mensajes mas fuertes para este mercado no es solo lo que vende, sino el problema que ayuda a eliminar en la linea.',
      'switch.old_label': 'Problemas tipicos',
      'switch.old_title': 'Bucles manuales o roscados',
      'switch.old1': 'Mas tiempo de conexion en cada ciclo',
      'switch.old2': 'Variacion entre operadores y turnos',
      'switch.old3': 'Mayor riesgo de falsa falla de fuga',
      'switch.old4': 'Desgaste de roscas y caras de sellado',
      'switch.old5': 'Automatizacion mas dificil en fixture',
      'switch.new_label': 'Lo que ayudamos a mejorar',
      'switch.new_title': 'Sellado rapido y prueba mejor alineada',
      'switch.new1': 'Conexion y liberacion mas rapidas en linea',
      'switch.new2': 'Mayor repetibilidad del sellado',
      'switch.new3': 'Rutas mas limpias para circuitos liquidos',
      'switch.new4': 'Mejor ajuste entre objetivo de fuga y metodo',
      'switch.new5': 'Camino mas solido de prueba a produccion',
      'industry.tag': 'Industrias atendidas',
      'industry.title': 'Confiable en multiples sectores',
      'industry.description': 'Nuestras soluciones de sellado y prueba se alinean mejor con aplicaciones donde importan la repetibilidad y la estabilidad.',
      'industry.item1': 'Automocion y EV',
      'industry.item2': 'Dispositivos medicos',
      'industry.item3': 'HVAC-R',
      'industry.item4': 'Industria general',
      'industry.item5': 'Baterias y almacenamiento',
      'industry.item6': 'Electronica de potencia',
      'rfq.tag': 'Solicitud de Cotizacion',
      'rfq.title': 'Envie estos 5 datos para obtener una mejor recomendacion',
      'rfq.description': 'Cuanto mas precisa sea su primera consulta, mas rapido podremos sugerir la serie correcta o una ruta personalizada.',
      'rfq.item1': 'Dimensiones del puerto o tubo, tipo de rosca y superficie de sellado',
      'rfq.item2': 'Presion de prueba, rango de presion o requisito de vacio',
      'rfq.item3': 'Tipo de medio como aire, nitrogeno, helio, agua, aceite o refrigerante',
      'rfq.item4': 'Objetivo de ciclo, takt time y operacion manual o automatizada',
      'rfq.item5': 'Cualquier plano, foto del producto u objetivo de fuga disponible',
      'rfq.scope_title': 'Alcance tipico de soporte',
      'rfq.scope1': 'Conectores de sellado rapido para pruebas de fuga y presion',
      'rfq.scope2': 'Conectores de refrigeracion liquida para circuitos termicos compactos',
      'rfq.scope3': 'Conceptos de conexion en fixture para lineas de produccion',
      'rfq.scope4': 'Guia de metodo de fuga y seleccion del sistema',
      'rfq.cta': 'Inicie su RFQ',
      'why.tag': 'Por que IndustHub',
      'why.title': 'Ingenieria para precision. Construido para confiabilidad.',
      'why.card1_title': '100% probado',
      'why.card1_text': 'Cada conector pasa por una inspeccion final rigurosa antes de salir de fabrica.',
      'why.card2_title': 'Ingenieria personalizada',
      'why.card2_text': 'Disenos especificos para su geometria y requerimientos de medio.',
      'why.card3_title': 'Logica de producto enfocada',
      'why.card3_text': 'Organizamos la seleccion alrededor de las preguntas reales: como conectar, como enfriar y como probar.',
      'why.card4_title': 'Primera recomendacion mas rapida',
      'why.card4_text': 'Cuando comparte planos, medio y presion claramente, podemos reducir la ruta mucho mas rapido.',
      'testimonial.text': 'Los conectores de sellado rapido de IndustHub redujeron claramente nuestro tiempo de ciclo. El sistema push-to-connect tambien elimino falsas fallas causadas por conexiones roscadas repetitivas, y su equipo fue facil de tratar incluso con una geometria de interfaz no estandar.',
      'testimonial.author': '— Ingeniero Senior de Manufactura, OEM Automotriz Global',
      'faq.tag': 'FAQ',
      'faq.title': 'Preguntas que hacen los compradores antes de contactarnos',
      'faq.description': 'Estos suelen ser los puntos mas rapidos para evaluar un proveedor industrial de conectores o pruebas de fuga.',
      'faq.card1_title': 'Solo suministran productos estandar?',
      'faq.card1_text': 'No. Admitimos tanto series estandar como soluciones personalizadas cuando la interfaz, el medio o el ciclo no son estandar.',
      'faq.card2_title': 'Que informacion debemos enviar primero?',
      'faq.card2_text': 'Detalles de rosca o puerto, rango de presion, medio, frecuencia de ciclo y un plano o foto normalmente aceleran mucho la seleccion.',
      'faq.card3_title': 'Pueden apoyar lineas automatizadas?',
      'faq.card3_text': 'Si. Apoyamos conceptos manuales, neumaticos, hidraulicos e integrados en fixture para flujos de prueba de mayor rendimiento.',
      'faq.card4_title': 'Como ayudan a reducir la inestabilidad de prueba?',
      'faq.card4_text': 'Mejorando la repetibilidad del sellado, el ajuste de interfaz y la consistencia del operador, especialmente donde las conexiones roscadas retrasan la prueba.',
      'cta.title': 'Listo para optimizar su proceso de produccion?',
      'cta.text': 'Digamos su interfaz, medio, presion y objetivo de fuga. Le ayudaremos a reducir la ruta correcta de conexion o prueba.',
      'cta.primary': 'Solicitar una consulta',
      'cta.secondary': 'Ver centro de productos',
      'footer.brand_text': 'Equipos industriales, sistemas de conexion y soluciones de soporte de proceso para entornos de produccion exigentes.',
      'footer.brand_text_short': 'Equipos industriales, sistemas de conexion y soluciones de soporte de proceso.',
      'footer.brand_text_full': 'Equipos industriales, sistemas de conexion y soluciones de prueba para aplicaciones de produccion exigentes.',
      'footer.products': 'Productos',
      'footer.product1': 'Conectores de sellado',
      'footer.product2': 'Conectores de refrigeracion liquida',
      'footer.product3': 'Detectores de fuga',
      'footer.product4': 'Soluciones personalizadas',
      'footer.company': 'Empresa',
      'footer.company1': 'Sobre nosotros',
      'footer.company2': 'Contacto',
      'footer.company3': 'Politica de privacidad',
      'footer.company4': 'Terminos del servicio',
      'footer.company5': 'Centro de productos',
      'footer.company6': 'Soporte de ingenieria',
      'footer.support': 'Soporte',
      'footer.support1': 'Soporte tecnico',
      'footer.support2': 'Solicitar cotizacion',
      'footer.support3': 'Enviar plano para revision',
      'footer.copyright': '© 2026 IndustHub. Todos los derechos reservados.',
      'cookie.text': 'Este sitio usa cookies para asegurar la mejor experiencia. Al continuar, acepta nuestra',
      'cookie.link': 'Politica de privacidad',
      'cookie.decline': 'Rechazar',
      'cookie.accept': 'Aceptar',
      'products_page.meta.title': 'Productos | IndustHub',
      'products_page.meta.description': 'Productos IndustHub - equipos industriales, sistemas de conexion y soluciones de deteccion de fugas para fabricacion industrial.',
      'products_page.meta.og_title': 'Productos | IndustHub',
      'products_page.meta.og_description': 'Explore nuestras lineas industriales principales para conexion, gestion termica y deteccion de fugas.',
      'products_page.hero.title': 'Nuestros Productos',
      'products_page.hero.text': 'Explore nuestras lineas industriales principales para el mercado internacional: sistemas de conexion, soluciones de refrigeracion liquida y equipos de deteccion de fugas.',
      'products_page.stats.lines': 'Lineas principales',
      'products_page.stats.paths': 'Rutas de seleccion',
      'products_page.stats.tech': 'Tecnologias de fuga',
      'products_page.stats.response': 'Objetivo de respuesta',
      'products_page.directory.tag': 'Directorio de productos',
      'products_page.directory.title': 'Explore por familia, tecnologia o aplicacion',
      'products_page.directory.text': 'Esta pagina esta organizada alrededor de las familias principales que hoy lideramos internacionalmente: sistemas de conexion, refrigeracion liquida y deteccion de fugas.',
      'about_page.meta.title': 'Sobre Nosotros | IndustHub',
      'about_page.meta.description': 'Sobre IndustHub - equipos industriales y soluciones de proceso para fabricantes globales.',
      'about_page.meta.og_title': 'Sobre IndustHub | Equipos Industriales y Soluciones de Proceso',
      'about_page.meta.og_description': 'Equipos industriales y soluciones de proceso para entornos de produccion exigentes.',
      'about_page.hero.crumb': 'Sobre Nosotros',
      'about_page.hero.title': 'Sobre IndustHub',
      'about_page.hero.text': 'Construimos soluciones industriales para fabricantes que necesitan puesta en marcha mas rapida, mejor repetibilidad y apoyo tecnico mas claro.',
      'contact_page.meta.title': 'Contacto | IndustHub',
      'contact_page.meta.description': 'Contacte a IndustHub para equipos industriales, sistemas de conexion y soluciones de proceso. Solicite una cotizacion o soporte tecnico.',
      'contact_page.meta.og_title': 'Contacte a IndustHub | Equipos Industriales',
      'contact_page.meta.og_description': 'Pongase en contacto con IndustHub para equipos industriales, sistemas de conexion y soluciones de proceso.',
      'contact_page.hero.crumb': 'Contacto',
      'contact_page.hero.title': 'Pongase en contacto',
      'contact_page.hero.text': 'Comparta su interfaz, presion, medio, circuito de refrigeracion o objetivo de fuga. Normalmente respondemos con un siguiente paso practico en 24 horas.'
    }
  };

  const translationOverrides = {
    zh: {
      html_lang: 'zh-CN',
      'meta.title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.description': 'IndustHub 专注于连接、检漏、液冷与工业工艺支持场景的设备和解决方案。',
      'meta.og_title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.og_description': '面向全球制造业客户的工业连接、测试与工艺解决方案。',
      'meta.twitter_title': 'IndustHub | 工业设备与工艺解决方案',
      'meta.twitter_description': '服务全球制造团队的工业设备、连接系统与工艺解决方案。',
      'common.skip': '跳转到主要内容',
      'brand.name': 'IndustHub',
      'nav.home': '首页',
      'nav.products': '产品中心',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.quote': '获取报价',
      'hero.slide0.badge': '工业设备与工艺解决方案',
      'hero.slide0.title_prefix': '从',
      'hero.slide0.title_highlight': '核心产品大类',
      'hero.slide0.description': '先进入一级产品分类，再在每个大类页中继续浏览更细的应用、结构与工艺方向。',
      'hero.slide0.primary_cta': '浏览产品分类',
      'hero.slide0.secondary_cta': '申请工程支持',
      'hero.slide0.proof1_title': '先看大类',
      'hero.slide0.proof1_text': '再进入更细分的内部结构',
      'hero.slide0.proof2_title': '标准品 + 定制',
      'hero.slide0.proof2_text': '兼顾目录选型与工程开发',
      'hero.slide0.proof3_title': '3 个主分类',
      'hero.slide0.proof3_text': '快速密封、检漏系统与工程扩展',
      'hero.slide0.panel_tag': '浏览方式',
      'hero.slide0.panel_title': '顶层简洁，内部更深',
      'hero.slide0.quick1_title': '快速密封接头分类',
      'hero.slide0.quick1_text': '内部继续拆分为充装、测试、抽空、液冷和结构方向。',
      'hero.slide0.quick2_title': '检漏系统分类',
      'hero.slide0.quick2_text': '内部继续按方法、灵敏度、节拍和应用场景展开。',
      'hero.slide0.quick3_title': '工程路线',
      'hero.slide0.quick3_text': '适合非标项目和未来新增设备品类。',
      'hero.slide0.input_tag': '适合提供的信息',
      'hero.slide0.input_text': '应用场景、接口形式、压力、介质、节拍、泄漏指标或图纸。',
      'hero.slide0.output_tag': '目标结果',
      'hero.slide0.output_text': '先更快进入正确分类页，再继续深入到具体产品方向。',
      'hero.slide1.badge': '快速密封接头',
      'hero.slide1.title_prefix': '一个大类页',
      'hero.slide1.title_highlight': '多个内部方向',
      'hero.slide1.description': '把快速密封接头作为主分类页，再继续深入到充装、压力测试、抽空、液冷和结构分支。',
      'hero.slide1.primary_cta': '进入快速密封分类',
      'hero.slide1.secondary_cta': '索取规格',
      'hero.slide2.badge': '检漏系统',
      'hero.slide2.title_prefix': '独立分类页承接',
      'hero.slide2.title_highlight': '检漏测试逻辑',
      'hero.slide2.description': '将检漏系统保持为独立主分类，再在页面内部继续拆成压降、差压、流量、氦检和行业路线。',
      'hero.slide2.primary_cta': '进入检漏系统分类',
      'hero.slide2.secondary_cta': '比较测试方法',
      'hero.stats.lines': '主产品分类',
      'hero.stats.response': '工程响应目标',
      'hero.stats.tech': '检漏技术路线',
      'hero.stats.standard_value': '可扩展',
      'hero.stats.standard_text': '适合未来增加设备品类',
      'products.tag': '主分类',
      'products.title': '先从一级产品分类进入',
      'products.description': '首页保持简洁，真正更细的产品拆分放到分类页内部。',
      'products.card1_title': '快速密封接头',
      'products.card1_text': '先进入这个大类页，再继续看充装、压力测试、抽空、液冷和结构方向。',
      'products.card2_title': '检漏系统',
      'products.card2_text': '先进入这个大类页，再继续看压降、差压、流量、氦检和更深入的检测逻辑。',
      'products.card3_title': '定制工程与未来设备',
      'products.card3_text': '用于承接当前非标项目，同时为后续喷码机等新设备分类预留空间。',
      'visual.tag': '可视化概览',
      'visual.title': '先看大类，再看细分',
      'visual.description': '沿用更适合工业目录站的结构逻辑：顶层简单，点击后再进入大类页内部拆分。',
      'visual.card1_tag': '主分类',
      'visual.card1_title': '快速密封接头分类页',
      'visual.card1_text': '液冷、充装、抽空、压力测试和连接结构都应在这个大类页内继续展开。',
      'visual.card2_tag': '主分类',
      'visual.card2_title': '检漏系统分类页',
      'visual.card2_text': '更深入的拆分应在分类页内部按方法、节拍、灵敏度和行业场景继续展开。',
      'visual.card3_tag': '未来分类',
      'visual.card3_title': '未来设备扩展',
      'visual.card3_text': '后续新增设备线时，可以作为新的一级分类页加入，而不破坏当前结构。',
      'footer.brand_text': '面向严苛生产场景的工业设备、连接系统与工艺支持解决方案。',
      'footer.brand_text_short': '工业设备、连接系统与工艺支持解决方案。',
      'footer.brand_text_full': '面向严苛工业应用的工业设备、连接系统与测试解决方案。',
      'footer.products': '产品',
      'footer.product1': '密封接头',
      'footer.product2': '液冷接头',
      'footer.product3': '检漏系统',
      'footer.product4': '定制方案',
      'footer.company': '公司',
      'footer.company1': '关于我们',
      'footer.company2': '联系我们',
      'footer.company3': '隐私政策',
      'footer.company4': '服务条款',
      'footer.company5': '产品中心',
      'footer.company6': '工程支持',
      'footer.support': '支持',
      'footer.support1': '技术支持',
      'footer.support2': '申请报价',
      'footer.support3': '发送图纸评估',
      'footer.copyright': '© 2026 IndustHub. 保留所有权利。',
      'cookie.text': '本网站使用 Cookie 以确保更好的浏览体验。继续访问即表示你同意我们的',
      'cookie.link': '隐私政策',
      'cookie.decline': '拒绝',
      'cookie.accept': '接受',
      'products_page.meta.title': '产品中心 | IndustHub',
      'products_page.meta.description': '浏览 IndustHub 的主产品分类，进入各大类页继续查看更细的产品结构。',
      'products_page.meta.og_title': '产品中心 | IndustHub',
      'products_page.meta.og_description': '查看 IndustHub 的主产品分类，并进入各分类页继续深入浏览。',
      'products_page.hero.title': '产品分类',
      'products_page.hero.text': '先从一级产品分类进入。在每个分类页内，再继续按应用、结构或技术路线深入浏览。',
      'products_page.stats.major': '当前主分类数量',
      'products_page.stats.response': '工程响应目标',
      'products_page.stats.tech': '检漏技术路线',
      'products_page.stats.expand': '支持未来品类扩展',
      'about_page.meta.title': '关于我们 | IndustHub',
      'about_page.meta.description': '关于 IndustHub：服务全球制造业客户的工业设备与工艺解决方案。',
      'about_page.meta.og_title': '关于 IndustHub | 工业设备与工艺解决方案',
      'about_page.meta.og_description': '面向严苛生产环境的工业设备与工艺解决方案。',
      'about_page.hero.crumb': '关于我们',
      'about_page.hero.title': '关于 IndustHub',
      'about_page.hero.text': '我们为需要更快导入、更好重复性和更清晰工程支持的制造企业提供工业解决方案。',
      'contact_page.meta.title': '联系我们 | IndustHub',
      'contact_page.meta.description': '联系 IndustHub，获取工业设备、连接系统与工艺解决方案相关支持。',
      'contact_page.meta.og_title': '联系 IndustHub | 工业设备',
      'contact_page.meta.og_description': '就工业设备、连接系统和工艺解决方案与 IndustHub 取得联系。',
      'contact_page.hero.crumb': '联系我们',
      'contact_page.hero.title': '联系我们',
      'contact_page.hero.text': '告诉我们你的接口、压力、介质、液冷回路或泄漏目标，我们通常会在 24 小时内回复下一步建议。',
      'contact_page.form.success_title': '询盘邮件已准备好',
      'contact_page.form.success_text': '系统会尝试打开你的邮件客户端并生成询盘内容。如果没有自动打开，请复制下方内容发送至 sales@industhub.com。',
      'contact_page.form.email_cta': '再次打开邮件',
      'testimonial.author': 'Senior Manufacturing Engineer, Global Automotive OEM'
    }
  };

  Object.keys(translationOverrides).forEach(function(langKey) {
    translations[langKey] = Object.assign({}, translations[langKey] || {}, translationOverrides[langKey]);
  });

  const pageTranslations = window.pageTranslations || {};
  Object.keys(pageTranslations).forEach(function(langKey) {
    translations[langKey] = Object.assign({}, translations[langKey] || {}, pageTranslations[langKey]);
  });

  const languageSwitcher = document.getElementById('language-switcher');

  function getCurrentLanguage() {
    return localStorage.getItem('siteLanguage') || 'en';
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = dict.html_lang || lang;

    document.querySelectorAll('[data-i18n]').forEach(function(node) {
      const key = node.getAttribute('data-i18n');
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-content]').forEach(function(node) {
      const key = node.getAttribute('data-i18n-content');
      if (dict[key]) {
        node.setAttribute('content', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(node) {
      const key = node.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        node.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function(node) {
      const key = node.getAttribute('data-i18n-value');
      if (dict[key]) {
        node.setAttribute('value', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(node) {
      const key = node.getAttribute('data-i18n-html');
      if (dict[key]) {
        node.innerHTML = dict[key];
      }
    });

    const titleNode = document.querySelector('title[data-i18n]');
    if (titleNode) {
      const titleKey = titleNode.getAttribute('data-i18n');
      if (dict[titleKey]) {
        document.title = dict[titleKey];
      }
    }

    applyVisibleTextFallbacks(lang);

    if (languageSwitcher) {
      languageSwitcher.value = lang;
    }
  }

  function applyVisibleTextFallbacks(lang) {
    const fallback = {
      zh: {
        'Quick Seal Connectors': '快速密封连接器',
        'Leak Detection Systems': '检漏仪系统',
        'Product Details': '产品详情',
        'Selection Table': '选型表',
        'Applications': '应用场景',
        'Recommended': '推荐产品',
        'Recommended Products': '推荐产品',
        'Recommended Models': '推荐型号',
        'Related Series to Compare': '相关系列对比',
        'Related Models to Compare': '相关型号对比',
        'Product Parameters': '产品参数',
        'Product Features': '产品特点',
        'Model Overview': '型号概览',
        'Quick Facts': '快速信息',
        'Typical Use Direction': '典型使用方向',
        'Typical Application Fit': '典型应用匹配',
        'Why Evaluate This Series': '为什么评估这个系列',
        'Why This Series Is Used': '为什么使用这个系列',
        'Product Selection Table': '产品选型表',
        'Before Selection': '选型前确认',
        'Detailed Model Data Reserved': '详细型号资料预留',
        'Model Detail Reserved': '型号详情预留',
        'Common Evaluation Scenarios': '常见评估场景',
        'Application Cases': '应用案例',
        'Production Test': '生产测试',
        'Service Access': '维护接口',
        'Automation Fixture': '自动化工装',
        'Custom Interface': '定制接口',
        'View Series': '查看系列',
        'View Series Details': '查看系列详情',
        'View Model': '查看型号',
        'View Category': '查看分类',
        'Request Selection Review': '申请选型评估',
        'Request Model Review': '申请型号评估',
        'Need to Confirm a Specific Model?': '需要确认具体型号吗？',
        'Series Detail Built Around the Real Interface': '围绕实际接口建立的系列详情页',
        'This page reserves the domestic-style product detail structure so exact dimensions, model tables, and application cases can be filled later.': '这个页面先预留国内站式产品详情结构，后续可补充精确尺寸、型号表和应用案例。',
        'This model page follows a catalog-style structure for product details, model comparison, application notes, and engineering selection review.': '这个型号页采用目录式结构，方便展示产品详情、型号对比、应用说明和工程选型评估。',
        'For industrial stations that need quick connection, repeatable sealing, and stable test or service rhythm.': '适合需要快速连接、可重复密封和稳定测试节拍的工业工位。',
        'Built for repeated industrial connection where cycle time and handling consistency matter.': '适用于重视节拍和操作一致性的重复工业连接场景。',
        'The correct variant depends on port geometry, pressure, media, and available operating space.': '具体型号取决于接口几何、压力、介质和可用操作空间。',
        'Reserved content block for manual, pneumatic, or automation fixture notes.': '预留手动、气动或自动化工装说明内容。',
        'Can be reviewed for manual operation, pneumatic actuation, or automation fixture integration according to the project.': '可根据项目评估手动操作、气动驱动或自动化工装集成方式。',
        'Exact dimensions, codes, and drawings can be synchronized from the domestic catalog later.': '精确尺寸、型号编码和图纸后续可从国内目录同步。',
        'Exact dimensions, model codes, and drawings are confirmed according to the interface and project requirements.': '精确尺寸、型号编码和图纸会根据接口和项目要求确认。',
        'To be completed with domestic model data': '后续按国内型号资料补齐',
        'Confirm by interface drawing and project requirements': '按接口图纸和项目要求确认',
        'Confirm interface size, pressure, media, temperature, operation mode, and available space.': '请确认接口尺寸、压力、介质、温度、操作方式和可用空间。',
        'Exact model codes and selection data can be synchronized from the domestic catalog later.': '精确型号编码和选型数据后续可从国内目录同步。',
        'Exact model codes and selection data are confirmed after interface, pressure, media, and operation details are reviewed.': '精确型号编码和选型数据会在确认接口、压力、介质和操作细节后确定。',
        'This series can be evaluated for industrial testing, line-side connection, maintenance, or filling stations.': '该系列可用于工业测试、产线连接、维护或充装工位评估。',
        'Repeated connection points for pressure, flow, and leak-test benches.': '用于压力、流量和检漏测试台的重复连接点。',
        'Maintenance or commissioning connections where fast handling matters.': '用于需要快速操作的维护或调试连接。',
        'Fixture-ready route when manual operation needs to move toward line integration.': '当手动操作需要向产线集成过渡时，可作为工装化方向。',
        'Reserved area for interface-specific notes and project photos.': '预留接口说明和项目照片区域。',
        'Interface-specific notes and project photos can be reviewed during selection.': '接口说明和项目照片可在选型评估时一起确认。',
        'Compare nearby series in the same category before choosing the final model route.': '确定最终型号前，可先对比同分类下的相邻系列。',
        'Return to the category shelf to compare other series in this branch.': '返回分类货架，对比该分支下的其它系列。',
        'Browse the full connector family by fitting type, application, and project information.': '按管件类型、应用场景和项目信息浏览完整连接器家族。',
        'Send interface drawing, photos, pressure, media, and operation mode so detailed selection can be filled accurately later.': '发送接口图纸、照片、压力、介质和操作方式，后续可准确补入详细选型。',
        'Family': '系列方向',
        'Connection Route': '连接方式',
        'Typical Pressure': '典型压力',
        'Medium': '介质',
        'Operation': '操作方式',
        'Body Material': '本体材料',
        'Seal Material': '密封材料',
        'Model': '型号',
        'Interface Range': '接口范围',
        'Pressure': '压力',
        'Notes': '备注',
        'Project-specific': '按项目确认',
        'Confirm by drawing': '按图纸确认',
        'Selection Data Under Review': '选型数据评估中',
        'Detailed Selection Data': '详细选型数据',
        'Model Detail Notes': '型号详情说明',
        'G20A Liquid Cooling Connector': 'G20A 液冷快速接头',
        'G20F Flat-Face Liquid Cooling Connector': 'G20F 平面式液冷接头',
        'G25A Liquid Cooling Connector': 'G25A 液冷快速接头',
        'G25F Flat-Face Liquid Cooling Connector': 'G25F 平面式液冷接头',
        'G30 Straight Tube Connector': 'G30 直管密封接头',
        'G35 Straight / Flared Tube Connector': 'G35 直管/扩口管接头',
        'G35C Compact Tube Connector': 'G35C 紧凑型管端接头',
        'G65 Threaded Quick Seal Connector': 'G65 螺纹快速密封接头',
        'G70 Gas Cylinder Filling Connector': 'G70 气瓶充装接头',
        'G70P Pneumatic Gas Cylinder Filling Connector': 'G70P 气动气瓶充装接头',
        'G72R Male-Female Quick Connector': 'G72R 公母快速接头',
        'G90 Special Quick Connector': 'G90 特殊快速接头',
        'G10 Cooling Water Pipe Connector': 'G10 冷却水管接头',
        'G10 Pro Cooling Water Pipe Connector': 'G10 Pro 冷却水管接头',
        'G10D Cooling Water Pipe Connector': 'G10D 冷却水管接头',
        'G15 Fuel Pipe Connector': 'G15 燃油管接头',
        'G15 Pro Fuel Pipe Connector': 'G15 Pro 燃油管接头',
        'G15K Fuel Pipe Connector': 'G15K 燃油管接头',
        'G60 External Thread Connector': 'G60 外螺纹接头',
        'G80 Internal Thread Connector': 'G80 内螺纹接头',
        'G85 High-Pressure External Thread Connector': 'G85 高压外螺纹接头',
        'L530 Differential Pressure Leak Tester': 'L530 差压电子调压阀检漏仪',
        'L520 Differential Pressure Leak Tester': 'L520 差压手动调压阀检漏仪',
        'L330 Direct Pressure Leak Tester': 'L330 直压电子调压阀检漏仪',
        'L320 Direct Pressure Leak Tester': 'L320 直压手动调压阀检漏仪'
      },
      es: {
        'Quick Seal Connectors': 'Conectores de sellado rapido',
        'Leak Detection Systems': 'Sistemas de deteccion de fugas',
        'Product Details': 'Detalles del producto',
        'Selection Table': 'Tabla de seleccion',
        'Applications': 'Aplicaciones',
        'Recommended': 'Recomendados',
        'Recommended Products': 'Productos recomendados',
        'Recommended Models': 'Modelos recomendados',
        'Related Series to Compare': 'Series relacionadas para comparar',
        'Related Models to Compare': 'Modelos relacionados para comparar',
        'Product Parameters': 'Parametros del producto',
        'Product Features': 'Caracteristicas del producto',
        'Model Overview': 'Resumen del modelo',
        'Quick Facts': 'Datos rapidos',
        'Typical Use Direction': 'Uso tipico',
        'Typical Application Fit': 'Aplicacion tipica',
        'Why Evaluate This Series': 'Por que evaluar esta serie',
        'Why This Series Is Used': 'Por que se usa esta serie',
        'Product Selection Table': 'Tabla de seleccion del producto',
        'Before Selection': 'Antes de seleccionar',
        'Detailed Model Data Reserved': 'Datos detallados reservados',
        'Model Detail Reserved': 'Detalle del modelo reservado',
        'Common Evaluation Scenarios': 'Escenarios comunes de evaluacion',
        'Application Cases': 'Casos de aplicacion',
        'Production Test': 'Prueba de produccion',
        'Service Access': 'Acceso de servicio',
        'Automation Fixture': 'Fixture de automatizacion',
        'Custom Interface': 'Interfaz personalizada',
        'View Series': 'Ver serie',
        'View Series Details': 'Ver detalles de la serie',
        'View Model': 'Ver modelo',
        'View Category': 'Ver categoria',
        'Request Selection Review': 'Solicitar revision de seleccion',
        'Request Model Review': 'Solicitar revision del modelo',
        'Need to Confirm a Specific Model?': 'Necesita confirmar un modelo especifico?',
        'Series Detail Built Around the Real Interface': 'Detalle de serie basado en la interfaz real',
        'This page reserves the domestic-style product detail structure so exact dimensions, model tables, and application cases can be filled later.': 'Esta pagina reserva la estructura de detalle tipo catalogo para completar dimensiones, tablas y casos mas adelante.',
        'This model page follows a catalog-style structure for product details, model comparison, application notes, and engineering selection review.': 'Esta pagina de modelo sigue una estructura de catalogo para detalles, comparacion, aplicaciones y revision de seleccion.',
        'For industrial stations that need quick connection, repeatable sealing, and stable test or service rhythm.': 'Para estaciones industriales que necesitan conexion rapida, sellado repetible y ritmo estable.',
        'Built for repeated industrial connection where cycle time and handling consistency matter.': 'Pensado para conexiones repetidas donde importan ciclo y consistencia.',
        'The correct variant depends on port geometry, pressure, media, and available operating space.': 'La variante correcta depende de geometria, presion, medio y espacio disponible.',
        'Reserved content block for manual, pneumatic, or automation fixture notes.': 'Bloque reservado para notas manuales, neumaticas o de automatizacion.',
        'Can be reviewed for manual operation, pneumatic actuation, or automation fixture integration according to the project.': 'Puede revisarse para operacion manual, actuacion neumatica o integracion en fixture segun el proyecto.',
        'Exact dimensions, codes, and drawings can be synchronized from the domestic catalog later.': 'Dimensiones, codigos y planos exactos podran sincronizarse desde el catalogo domestico.',
        'Exact dimensions, model codes, and drawings are confirmed according to the interface and project requirements.': 'Dimensiones, codigos y planos se confirman segun la interfaz y requisitos del proyecto.',
        'To be completed with domestic model data': 'Pendiente de completar con datos domesticos',
        'Confirm by interface drawing and project requirements': 'Confirmar por dibujo de interfaz y requisitos del proyecto',
        'Confirm interface size, pressure, media, temperature, operation mode, and available space.': 'Confirme interfaz, presion, medio, temperatura, operacion y espacio.',
        'Exact model codes and selection data can be synchronized from the domestic catalog later.': 'Codigos y datos de seleccion podran sincronizarse desde el catalogo domestico.',
        'Exact model codes and selection data are confirmed after interface, pressure, media, and operation details are reviewed.': 'Codigos y datos de seleccion se confirman tras revisar interfaz, presion, medio y operacion.',
        'This series can be evaluated for industrial testing, line-side connection, maintenance, or filling stations.': 'La serie puede evaluarse para pruebas, conexion de linea, mantenimiento o llenado.',
        'Repeated connection points for pressure, flow, and leak-test benches.': 'Puntos repetidos para bancos de presion, flujo y fugas.',
        'Maintenance or commissioning connections where fast handling matters.': 'Conexiones de mantenimiento o puesta en marcha donde importa la rapidez.',
        'Fixture-ready route when manual operation needs to move toward line integration.': 'Ruta lista para fixture cuando la operacion manual pasa a integracion de linea.',
        'Reserved area for interface-specific notes and project photos.': 'Area reservada para notas de interfaz y fotos del proyecto.',
        'Interface-specific notes and project photos can be reviewed during selection.': 'Notas de interfaz y fotos del proyecto pueden revisarse durante la seleccion.',
        'Compare nearby series in the same category before choosing the final model route.': 'Compare series cercanas antes de elegir el modelo final.',
        'Return to the category shelf to compare other series in this branch.': 'Volver a la categoria para comparar otras series.',
        'Browse the full connector family by fitting type, application, and project information.': 'Explore la familia completa por tipo, aplicacion e informacion del proyecto.',
        'Send interface drawing, photos, pressure, media, and operation mode so detailed selection can be filled accurately later.': 'Envie dibujo, fotos, presion, medio y operacion para completar la seleccion.',
        'Family': 'Familia',
        'Connection Route': 'Ruta de conexion',
        'Typical Pressure': 'Presion tipica',
        'Medium': 'Medio',
        'Operation': 'Operacion',
        'Body Material': 'Material del cuerpo',
        'Seal Material': 'Material del sello',
        'Model': 'Modelo',
        'Interface Range': 'Rango de interfaz',
        'Pressure': 'Presion',
        'Notes': 'Notas',
        'Project-specific': 'Segun proyecto',
        'Confirm by drawing': 'Confirmar por dibujo',
        'Selection Data Under Review': 'Datos de seleccion en revision',
        'Detailed Selection Data': 'Datos detallados de seleccion',
        'Model Detail Notes': 'Notas de detalle del modelo',
        'G20A Liquid Cooling Connector': 'Conector de refrigeracion liquida G20A',
        'G20F Flat-Face Liquid Cooling Connector': 'Conector plano de refrigeracion liquida G20F',
        'G25A Liquid Cooling Connector': 'Conector de refrigeracion liquida G25A',
        'G25F Flat-Face Liquid Cooling Connector': 'Conector plano de refrigeracion liquida G25F',
        'G30 Straight Tube Connector': 'Conector para tubo recto G30',
        'G35 Straight / Flared Tube Connector': 'Conector para tubo recto/abocardado G35',
        'G35C Compact Tube Connector': 'Conector compacto para tubo G35C',
        'G65 Threaded Quick Seal Connector': 'Conector roscado rapido G65',
        'G70 Gas Cylinder Filling Connector': 'Conector de llenado de cilindros G70',
        'G70P Pneumatic Gas Cylinder Filling Connector': 'Conector neumatico de llenado G70P',
        'G72R Male-Female Quick Connector': 'Conector rapido macho-hembra G72R',
        'G90 Special Quick Connector': 'Conector rapido especial G90',
        'G10 Cooling Water Pipe Connector': 'Conector para tubo de agua G10',
        'G10 Pro Cooling Water Pipe Connector': 'Conector para tubo de agua G10 Pro',
        'G10D Cooling Water Pipe Connector': 'Conector para tubo de agua G10D',
        'G15 Fuel Pipe Connector': 'Conector para tubo de combustible G15',
        'G15 Pro Fuel Pipe Connector': 'Conector para tubo de combustible G15 Pro',
        'G15K Fuel Pipe Connector': 'Conector para tubo de combustible G15K',
        'G60 External Thread Connector': 'Conector de rosca externa G60',
        'G80 Internal Thread Connector': 'Conector de rosca interna G80',
        'G85 High-Pressure External Thread Connector': 'Conector de rosca externa alta presion G85',
        'L530 Differential Pressure Leak Tester': 'Detector de fugas diferencial L530',
        'L520 Differential Pressure Leak Tester': 'Detector de fugas diferencial L520',
        'L330 Direct Pressure Leak Tester': 'Detector de fugas directo L330',
        'L320 Direct Pressure Leak Tester': 'Detector de fugas directo L320'
      }
    };

    const activeFallback = fallback[lang];
    const englishFallback = fallback.en || {};
    const nodes = document.querySelectorAll('title,h1,h2,h3,p,span,a,th,td,strong,button');
    nodes.forEach(function(node) {
      if (node.children && node.children.length) return;
      if (!node.dataset.i18nOriginalText) {
        node.dataset.i18nOriginalText = node.textContent.trim();
      }
      const original = node.dataset.i18nOriginalText;
      if (!original) return;
      if (lang === 'en') {
        node.textContent = englishFallback[original] || original;
        return;
      }
      if (activeFallback && activeFallback[original]) {
        node.textContent = activeFallback[original];
      }
    });

    const currentTitle = document.title.replace(' | IndustHub', '');
    if (!document.documentElement.dataset.i18nOriginalTitle) {
      document.documentElement.dataset.i18nOriginalTitle = currentTitle;
    }
    const originalTitle = document.documentElement.dataset.i18nOriginalTitle;
    if (lang === 'en') {
      document.title = originalTitle + (document.title.includes('IndustHub') ? ' | IndustHub' : '');
    } else if (activeFallback && activeFallback[originalTitle]) {
      document.title = activeFallback[originalTitle] + (document.title.includes('IndustHub') ? ' | IndustHub' : '');
    }
  }

  applyTranslations(getCurrentLanguage());

  if (languageSwitcher) {
    const zhOptionClean = languageSwitcher.querySelector('option[value="zh"]');
    if (zhOptionClean) zhOptionClean.textContent = '中文';
  }

  if (languageSwitcher) {
    const zhOption = languageSwitcher.querySelector('option[value="zh"]');
    if (zhOption) zhOption.textContent = '中文';

    languageSwitcher.addEventListener('change', function() {
      const lang = this.value;
      localStorage.setItem('siteLanguage', lang);
      applyTranslations(lang);
    });
  }

  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      const expanded = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', expanded);
      toggle.classList.toggle('open', expanded);
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });
  }

  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function goToSlide(index) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (dots.length) dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    if (dots.length) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }

  if (totalSlides > 1) {
    slideInterval = setInterval(nextSlide, 7000);

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-index'), 10);
        goToSlide(idx);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
      });
    });

    let touchStartX = 0;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
      });
      hero.addEventListener('touchend', function(e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          clearInterval(slideInterval);
          if (diff > 0) goToSlide((currentSlide + 1) % totalSlides);
          else goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
          slideInterval = setInterval(nextSlide, 7000);
        }
      });
    }
  }

  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const fadeElements = document.querySelectorAll('.scroll-fade');
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function(el) {
    fadeObserver.observe(el);
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const dict = translations[getCurrentLanguage()] || translations.en;
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const getValue = function(id) {
        const field = document.getElementById(id);
        return field ? field.value.trim() : '';
      };
      const getSelectedText = function(id) {
        const field = document.getElementById(id);
        if (!field || field.selectedIndex < 0) return '';
        return field.options[field.selectedIndex].text.trim();
      };

      const inquiry = {
        name: getValue('name'),
        company: getValue('company'),
        email: getValue('email'),
        interest: getSelectedText('interest'),
        application: getSelectedText('application'),
        details: getValue('details'),
        message: getValue('message'),
        page: window.location.href
      };

      const subject = 'IndustHub Inquiry - ' + (inquiry.company || inquiry.name);
      const bodyLines = [
        'New inquiry from IndustHub website',
        '',
        'Name: ' + inquiry.name,
        'Company: ' + inquiry.company,
        'Email: ' + inquiry.email,
        'Product interest: ' + inquiry.interest,
        'Application focus: ' + (inquiry.application || 'Not specified'),
        'Technical details: ' + (inquiry.details || 'Not specified'),
        '',
        'Message:',
        inquiry.message,
        '',
        'Source page: ' + inquiry.page
      ];
      const body = bodyLines.join('\n');
      const mailto = 'mailto:sales@industhub.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      btn.textContent = dict['contact_page.form.sending'] || 'Sending...';
      btn.disabled = true;
      window.location.href = mailto;

      contactForm.innerHTML = '<div class="form-success active">' +
        '<div class="form-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg></div>' +
        '<h3>' + (dict['contact_page.form.success_title'] || 'Inquiry Prepared') + '</h3>' +
        '<p>' + (dict['contact_page.form.success_text'] || 'Your email client should open with the inquiry ready to send. If it does not open, copy the inquiry summary below and email it to sales@industhub.com.') + '</p>' +
        '<textarea class="inquiry-copy" readonly>' + body.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</textarea>' +
        '<a class="btn btn-primary btn-lg" href="' + mailto + '">' + (dict['contact_page.form.email_cta'] || 'Open Email Again') + '</a>' +
        '</div>';
    });
  }
});

(function() {
  if (localStorage.getItem('cookieConsent')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  setTimeout(function() {
    banner.classList.add('show');
  }, 800);

  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.remove('show');
    setTimeout(function() {
      banner.remove();
    }, 400);
  });

  document.getElementById('cookie-deny').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'denied');
    banner.classList.remove('show');
    setTimeout(function() {
      banner.remove();
    }, 400);
  });
})();
