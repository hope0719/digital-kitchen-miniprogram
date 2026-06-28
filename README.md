# 数字厨房 · Digital Kitchen

一个基于微信小程序的智能厨房助手，帮助用户发现菜谱、管理烹饪记录，并通过 AI 分析食材营养，让每个人都能轻松享受烹饪的乐趣。

欢迎公开使用、自由学习和二次开发 🍳

---

## ✨ 功能特色

### 🏠 首页 · 发现好菜
- **轮播Banner**：夏季清凉食谱、甜品推荐、轻食计划等精选内容
- **快捷分类**：快手菜、健康、甜点、早餐、家常菜、减脂、汤粥等八大类目
- **今日推荐**：横向滑动卡片，每日精选菜谱
- **热门食谱**：双列网格展示，支持点赞收藏
- **每日小贴士**：实用烹饪技巧，每天学一点

### 🔬 分析页 · AI 营养助手
- **营养成分分析**：自动计算蛋白质、碳水、脂肪含量
- **食材替代建议**：智能推荐更健康的食材替换方案（如蜂蜜替代白砂糖）
- **个性化烹饪建议**：基于食材比例与烹饪方式给出专业建议
- **支持图片识别**：可上传菜品图片进行分析

### 👤 个人中心
- **烹饪数据统计**：已做菜数、收藏数、粉丝数
- **烹饪记录**：查看历史烹饪记录
- **我的收藏**：管理收藏的菜谱
- **设置中心**：账号设置、通知管理、帮助支持

---

## 🏗️ 项目架构

```
数字厨房小程序
├── miniprogram/                # 小程序主目录
│   ├── app.ts                  # 小程序入口
│   ├── app.json                # 全局配置（页面路由、TabBar、窗口样式）
│   ├── app.scss                # 全局样式
│   ├── custom-tab-bar/         # 自定义底部导航栏
│   ├── components/              # 公共组件
│   │   ├── icon/               # 图标组件
│   │   └── navigation-bar/     # 自定义导航栏组件
│   ├── pages/                   # 页面目录
│   │   ├── index/               # 首页 - 菜谱发现
│   │   ├── analysis/            # 分析页 - AI 营养分析
│   │   ├── profile/             # 个人中心
│   │   └── logs/               # 操作日志
│   ├── styles/                  # 全局样式 Token
│   │   └── tokens.scss         # 设计变量（颜色、间距等）
│   └── utils/                  # 工具函数
│       └── util.ts
├── project.config.json          # 微信开发者工具项目配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目依赖
```

---

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| **微信小程序** | 基于微信原生小程序框架 |
| **TypeScript** | 类型安全，开发体验更佳 |
| **SASS/SCSS** | 样式预处理，支持变量和嵌套 |
| **Glass Easel** | 微信新一代组件框架 |
| **Skyline** | 微信高性能渲染引擎 |
| **自定义 TabBar** | 个性化底部导航栏 |

---

## 🚀 快速开始

### 前置条件
- 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 注册微信小程序账号并获取 AppID

### 本地开发

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/digital-kitchen-miniprogram.git
   cd digital-kitchen-miniprogram
   ```

2. **打开微信开发者工具**
   - 选择「导入项目」
   - 项目目录选择本仓库根目录
   - 填入你的 AppID（测试可使用测试号）
   - 勾选「使用 TypeScript 和 SASS 编译器插件」

3. **开始开发**
   - 修改 `miniprogram/` 目录下的文件，保存即可实时预览
   - 在微信开发者工具中点击「编译」查看效果

---

## 📦 项目配置说明

### `project.config.json` 关键配置
```json
{
  "miniprogramRoot": "miniprogram/",
  "setting": {
    "useCompilerPlugins": ["typescript", "sass"]
  },
  "appid": "wx8eaf2c0cffdf8bac"
}
```

> ⚠️ 上传到自己的账号时，请务必将 `appid` 替换为你自己的小程序 AppID。

---

## 🎨 设计风格

- **主色调**：暖橙色 `#FF6B35`，传递温暖烟火气息
- **辅助色**：健康绿 `#00B894`、甜品粉 `#EE5A6F`、深海蓝 `#4facfe`
- **背景色**：暖白 `#fcf9f8`，柔和护眼
- **圆角卡片**：统一 20rpx 圆角，现代亲和
- **图标系统**：基于 Material Icons 风格的统一图标

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 📄 开源协议

[MIT License](./LICENSE) — 自由使用、修改和分发。

---

## 🙏 致谢

感谢所有为开源烹饪社区做出贡献的开发者们 🍴

---

## 📮 联系方式

如有问题或建议，欢迎通过以下方式联系：
- 提交 [GitHub Issue](https://github.com/your-username/digital-kitchen-miniprogram/issues)
- 在微信开放社区交流

---

> 🍳 **数字厨房** — 让每个人都能享受烹饪的乐趣
