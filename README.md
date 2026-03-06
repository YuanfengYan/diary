# 📔 diary

A personal daily diary project — create markdown files each day and preview them through links.

## 🌐 Live Site

[https://YuanfengYan.github.io/diary/](https://YuanfengYan.github.io/diary/)

## ✨ Features

- 📝 **Daily Markdown files** — one `.md` file per day
- 🔗 **Preview via link** — each entry has a unique URL
- 🔍 **Full-text search** — instantly find any past entry
- 🚀 **Auto deployment** — push to `main`, GitHub Actions deploys to GitHub Pages

## 📁 Directory Structure

```
docs/
├── diary/
│   ├── 2024/
│   │   ├── 2024-01-01.md
│   │   └── 2024-03-15.md
│   └── 2025/
│       ├── 2025-01-01.md
│       └── 2025-03-03.md
└── index.md
```

## 📖 How to Add a New Entry

1. Create a new file: `docs/diary/YYYY/YYYY-MM-DD.md`
2. Use the template below
3. Commit and push to `main`
4. The site auto-deploys in ~1 minute

### Entry Template

```markdown
# YYYY-MM-DD

## Today's Highlights
- ...

## Learnings
- ...

## Thoughts
...
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```
