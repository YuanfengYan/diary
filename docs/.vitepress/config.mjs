import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getDiarySidebar() {
  const diaryDir = path.resolve(__dirname, '../diary')
  if (!fs.existsSync(diaryDir)) return []

  const years = fs.readdirSync(diaryDir)
    .filter(f => fs.statSync(path.join(diaryDir, f)).isDirectory())
    .sort((a, b) => b.localeCompare(a))

  return years.map(year => {
    const yearDir = path.join(diaryDir, year)
    const files = fs.readdirSync(yearDir)
      .filter(f => f.endsWith('.md'))
      .sort((a, b) => b.localeCompare(a))

    return {
      text: year,
      collapsed: false,
      items: files.map(file => ({
        text: file.replace('.md', ''),
        link: `/diary/${year}/${file.replace('.md', '')}`
      }))
    }
  })
}

export default defineConfig({
  title: '📔 Daily Diary',
  description: 'My personal daily diary - markdown notes and reflections',
  base: '/diary/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Diary', link: '/diary/' }
    ],
    sidebar: {
      '/diary/': getDiarySidebar()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YuanfengYan/diary' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'My Daily Diary',
      copyright: 'Copyright © 2024-present'
    }
  }
})
