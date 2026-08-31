# Codex Skins

[Codex Skin Switcher](https://github.com/MarcWebber/codex-skin-switcher) 的静态皮肤市场。插件只在用户打开市场时读取 `manifest.json`，再按固定目录规则加载元信息、预览图和主题文件；没有服务端、数据库、账号、遥测或后台更新。

## 使用

先安装 Codex Skin Switcher：

```bash
codex plugin marketplace add MarcWebber/codex-skin-switcher && codex plugin add codex-skin-switcher@marcwebber
```

在 Codex 顶部打开皮肤菜单，点击右上角的小店铺图标即可进入市场。市场支持本地搜索、版本显示、预览、下载和删除。下载完成后不会自动换肤，而是询问“应用”或“稍后”。当前插件与市场均为 **macOS only**。

## 目录

`skins/` 下每个目录是一套皮肤。目录名就是皮肤 ID；`manifest.json` 从目录名自动生成，不重复保存路径或文件清单。

```text
skins/<id>/
├── meta.json
├── theme.json
├── extra.css
├── art.png
├── preview.png
└── optional fixed-name artwork
```

`theme.json` 保存名称、描述、顺序和 CSS 变量；`meta.json` 只保存市场版本与作者。`profile-art.png`、`help-art.png` 和 `home-card-a.png` 到 `home-card-d.png` 是可选的固定名称素材，缺少时由插件按规则回退。

## 投稿

1. Fork 本仓库并从 `main` 创建功能分支。
2. 在 `skins/<id>/` 新增或修改一套皮肤。
3. 运行 `npm run build` 自动更新 `manifest.json`。
4. 运行 `npm test` 校验目录、元信息和 Manifest。
5. 提交主题目录与生成后的 `manifest.json`，推送分支并发起 Pull Request。

当前没有自动投稿 Pull Request 的按钮。Skin Creator 负责在本机创建、预览、校验和调试主题；公开投稿仍通过上述 GitHub PR 流程。后续的一键投稿应由本地 Skill 显式调用 `gh`，并在提交和推送前让用户确认，而不是让皮肤市场持有 GitHub Token。

## 验收

```bash
npm run build
npm test
git diff --check
```

`main` 只接收通过验收的 Pull Request。Manifest 由构建脚本生成，不要手工添加路径、文件列表或平台字段。

## 素材

仓库可能包含基于第三方角色的演示素材。代码许可证不会授予第三方角色设计或图片的再分发权；面向更大范围发布前，请替换为自有素材或确认已获得相应授权。
