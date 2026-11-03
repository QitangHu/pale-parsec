export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'hero.title': 'Welcome',
    'about.title': 'About me',
    'blog.title': 'Blog',
    'blog.description': 'Welcome, I will update this site regularly.',
    'hero.description':
      'Welcome to my personal blog site! Here, I share my thoughts, experiences, and insights on a variety of topics.',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.blog': '博客',
    'hero.title': '欢迎',
    'about.title': '关于我',
    'blog.title': '博客',
    'blog.description': '欢迎来到博客，我会定期更新这里的内容。',
    'hero.description': '欢迎来到我的个人博客！这里分享我对各种主题的想法、经历和见解。',
  },
} as const;

export function useTranslations(locale: string | undefined) {
  return locale === 'ch' || locale === 'zh' ? ui.zh : ui.en;
}
