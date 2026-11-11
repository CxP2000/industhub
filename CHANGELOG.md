# IndustHub 站点更新日志

## 站点结构

| 位置 | 内容 | 入口 |
| --- | --- | --- |
| 仓库根目录 | 英文站（66 页） | `index.html` |
| `zh/` | 中文站（66 页） | `zh/index.html` |
| `assets/` `css/` `js/` | 共享静态资源 | — |
| `_dev/fix-scripts/` | 内容同步与英文站生成脚本 | 见下方流程 |

站内绝对 URL（canonical、hreflang、og、sitemap）目前使用 `https://industhub.com`。更换域名时，需批量替换 `.html`、`sitemap.xml`、`robots.txt` 中的该域名。

## 2026-11-11 · 初始提交

- 中文站 66 页 + 英文站 66 页完整上线；英文站由 `gen_en_site.py` 从中文站生成
- 覆盖 24 个型号页、13 篇文章、5 个检漏仪资源页，以及液冷 / 公母头 / 气瓶等分类页
- 双向 hreflang + x-default、sitemap 125 条、JSON-LD 全部合法
- 73 张产品图裁白边「饱满化」；G30 / G72K 主图替换，G20F 换 1000×1000 高清原图
- 修复：hreflang 指错、JSON-LD 中文与转义残留、中文规格书下载链接、JS aria-label 双语

## 更新新闻 / 资讯时必须按顺序做

1. 新文章放 `zh/resources/articles/<slug>.html`，`<head>` 里加 `meta res-channel`（news / company / cases / faq）和 `meta res-summary`
2. `python _dev/fix-scripts/sync_resources.py` — 重建 hub 四频道、cases 列表、首页最新资讯、sitemap
3. `python _dev/fix-scripts/gen_en_site.py` — **英文站是从中文站生成的，漏跑会中英不一致**
4. `python _dev/fix-scripts/gen_en_site.py --check` — 应输出 `residual CJK nodes: 0`
5. 校验链接 → commit → push

新增中文页若要英文版，还需把相对路径加进 `gen_en_site.py` 的 `ALL_PAGES`，并按 `_dev/en_worklist.tsv` 的稳定 ID 追加译文。

## 协作约定

- 每次改动 = 一条 commit，message 用中文写清楚，例如：`内容｜新增《XX》新闻（中英双站已同步）`
- 明确写出「已跑 sync_resources + gen_en_site」，让对方一眼看出更新是否完整
- 协作者在仓库页 `Watch → All Activity` 收取通知
- 多人同时改时用分支 + Pull Request + Reviewers，Approve 后合并，避免互相覆盖

## 更新记录

| 日期 | 更新内容 | 已跑脚本 |
| --- | --- | --- |
| 2026-11-11 | 初始提交：中英双站 132 页完整上线 | sync_resources / gen_en_site |
