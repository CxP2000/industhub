# -*- coding: utf-8 -*-
"""English translation data for gen_en_site.py.

COMMON : exact text-node / attribute-value strings shared across pages.
TERMS  : conservative substring fallbacks for mixed text (brand + Chinese).
PAGES  : per-page exact strings (key = path relative to site root / zh root).
META   : optional per-page title / description / og:title overrides.

Only real facts are translated. Model codes, pressure/dimension values, lead
times and MOQ are preserved verbatim. Nothing is invented.
"""

COMMON = {
    # --- navigation / chrome ---
    "跳到主要内容": "Skip to main content",
    "主导航": "Main navigation",
    "打开导航菜单": "Open navigation menu",
    "切换导航菜单": "Toggle navigation menu",
    "向左滚动导航": "Scroll navigation left",
    "向右滚动导航": "Scroll navigation right",
    "上一张": "Previous slide",
    "下一张": "Next slide",
    "首页": "Home",
    "产品": "Products",
    "行业应用": "Applications",
    "关于": "About",
    "联系": "Contact",
    "获取报价": "Get a Quote",
    "资讯中心": "Resources",
    "关于我们": "About Us",
    "联系我们": "Contact Us",
    "公司": "Company",
    "支持": "Support",
    "技术支持": "Technical Support",
    "发送图纸评估": "Send Drawings for Review",
    "&copy; 2026 IndustHub. 保留所有权利。": "&copy; 2026 IndustHub. All rights reserved.",
    "本网站使用 Cookie 以确保更好的浏览体验。继续使用即表示你同意我们使用 Cookie。":
        "This site uses cookies to give you a better browsing experience. By continuing, you agree to our use of cookies.",
    "拒绝": "Decline",
    "接受": "Accept",

    # --- product line names ---
    "快速密封连接器": "Quick Seal Connectors",
    "气密性检漏仪": "Differential Pressure Leak Detectors",
    "液冷和公母头": "Liquid Cooling & Couplings",
    "气瓶充装连接器": "Gas Cylinder Filling Connectors",
    "气瓶充装": "Gas Cylinder Filling",
    "电连接器": "Electrical Connectors",
    "液冷快换接头": "Liquid Cooling Quick Couplings",
    "液冷接头": "Liquid Cooling Couplings",
    "C 系列公母头": "C Series Male-Female Couplings",
    "公母头": "Male-Female Couplings",

    # --- buttons / CTAs ---
    "查看系列详情": "View Series Details",
    "查看型号详情": "View Model Details",
    "查看系列": "View Series",
    "查看选型表": "View Selection Table",
    "下载产品总目录": "Download Full Catalog",
    "获取选型建议": "Get Selection Advice",
    "获取选型支持": "Get Selection Support",
    "提交工况": "Submit Your Conditions",
    "提交应用需求": "Submit Your Application",
    "浏览产品中心": "Browse Products",
    "了解检漏仪": "Explore Leak Detectors",
    "查看连接器": "View Connectors",
    "查看充装接头": "View Filling Connectors",
    "查看公母头": "View Couplings",
    "查看液冷快换": "View Liquid Cooling Couplings",
    "了解更多": "Learn More",
    "查看详情": "View Details",
    "返回首页": "Back to Home",
    "发送接口图纸，获取选型建议": "Send your port drawings for a pairing recommendation",
    "获取 C 系列配对建议": "Get a C Series Pairing Recommendation",
    "不确定选哪个型号？": "Not sure which model fits?",
    "需要确认 C 系列的具体配对？": "Need help confirming your C Series pairing?",
    "需要液冷快换选型建议？": "Need liquid cooling coupling selection support?",

    # --- section tags / headings / labels ---
    "产品线": "Product Lines",
    "常见问答": "FAQ",
    "新闻资讯": "News",
    "公司动态": "Company News",
    "应用案例": "Case Studies",
    "选型指南": "Selection Guide",
    "系列列表": "Series List",
    "选型表": "Selection Table",
    "产品参数": "Specifications",
    "规格": "Specifications",
    "相关系列": "Related Series",
    "相关产品": "Related Products",
    "推荐 产品": "Recommended",
    "推荐": "Recommended",
    "应用": "Applications",
    "型号": "Model",
    "快速信息": "At a Glance",
    "产品详情导航": "Product Navigation",
    "系列总览": "Series Overview",
    "选型参数": "Selection Parameters",
    "选型支持": "Selection Support",
    "定制咨询": "Custom Enquiries",
    "总览": "Overview",
    "对比": "Comparison",
    "暂无已发布文章": "No articles published yet",

    # --- spec table headers / values ---
    "类型": "Type",
    "流量孔": "Flow Bore",
    "母头 / 公头": "Female / Male",
    "金属滑套": "Metal Sleeve",
    "无": "None",
    "最小爆破压力": "Min. Burst Pressure",
    "通径": "Nominal Bore",
    "尾端螺纹": "End Thread",
    "管内径": "Tube ID",
    "管外径": "Tube OD",
    "手动调压": "Manual Regulator",
    "电子调压": "Electronic Regulator",
    "自动公母头": "Automatic Male-Female",
    "手动公母头": "Manual Male-Female",
    "手动公头": "Manual Male",
    "手动母头": "Manual Female",
    "自动公头": "Automatic Male",
    "单通道": "Single Channel",
    "单晶硅 ±6 kPa": "Monocrystalline silicon ±6 kPa",
    "Cv 值": "Cv Value",
    "工作压力": "Working Pressure",
    "密封范围": "Sealing Range",
    "介质": "Media",
    "温度": "Temperature",
    "材质": "Material",
    "驱动方式": "Actuation",
    "接口": "Port",
    "流量": "Flow",

    # --- hero proof bar ---
    "7 天": "7 Days",
    "标准件发货": "Standard item lead time",
    "2 件起订": "MOQ 2 pcs",
    "支持小批量试单验证": "Small trial orders welcome",
    "成套供应": "One Supplier",
    "密封接头与检漏仪同一供应商": "Connectors and leak testers from the same source",
    "密封接头与检漏仪同一家": "Connectors and leak testers from one supplier",
}

# Substring fallbacks, applied only when no exact match exists.
TERMS = {
    "快速密封连接器": "Quick Seal Connectors",
    "气密性检漏仪": "Differential Pressure Leak Detectors",
    "液冷和公母头": "Liquid Cooling & Couplings",
    "气瓶充装连接器": "Gas Cylinder Filling Connectors",
    "电连接器": "Electrical Connectors",
    "液冷快换接头": "Liquid Cooling Quick Couplings",
    "检漏仪": "Leak Detector",
    "连接器": "Connector",
    "公母头": "Male-Female Couplings",
    "密封接头": "Seal Connector",
    "标准件": "standard items",
    "非标定制": "custom builds",
    "非标": "custom",
    "起订": "MOQ",
    "工作日": "working days",
    "个工作日": "working days",
}

# Per-page exact strings. Filled in after the first residual scan.
PAGES = {}

# Optional explicit meta overrides (None -> use PAGES/COMMON translation of
# <title> and meta content instead).
META = {}

# Structured-data replacements (substring, applied inside ld+json blocks only).
JSON_LD = {
    '"@type":"产品"': '"@type":"Product"',
    '"@type":"产品系列"': '"@type":"ProductGroup"',
    '"@type":"文章"': '"@type":"Article"',
    '"@type":"常见问题"': '"@type":"FAQPage"',
    '"category":"工业连接设备"': '"category":"Industrial Connection Equipment"',
    '"name":"首页"': '"name":"Home"',
    '"name":"产品"': '"name":"Products"',
    '"name":"关于我们"': '"name":"About Us"',
    '"name":"关于"': '"name":"About"',
    '"name":"联系"': '"name":"Contact"',
    '"name":"联系我们"': '"name":"Contact Us"',
    '"name":"资讯中心"': '"name":"Resources"',
    '"name":"行业应用"': '"name":"Applications"',
    '"name":"快速密封连接器"': '"name":"Quick Seal Connectors"',
    '"name":"气密性检漏仪"': '"name":"Differential Pressure Leak Detectors"',
    '"name":"液冷和公母头"': '"name":"Liquid Cooling & Couplings"',
    '"description":"面向生产测试、流体充注、抽真空、气密检测与气瓶充装的快速密封连接器系列。"':
        '"description":"Quick seal connector series for production testing, fluid filling, vacuum, leak detection and gas cylinder filling."',
    '"inLanguage":"zh-CN"': '"inLanguage":"en"',
}

# Per-page prose translations live in separate modules so they can be extended
# in batches without rewriting this file.
try:
    from en_translations_core import CORE
    COMMON.update(CORE)
except ImportError:
    CORE = {}
