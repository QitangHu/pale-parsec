export const supportedLocales = ['en', 'zh', 'es', 'ja'] as const;
export const localizedLocales = ['zh', 'es', 'ja'] as const;

export const localeNames = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  ja: '日本語',
} as const;

export const ui = {
  en: {
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.resources': 'Resources',
    'nav.study': 'Study',
    'nav.blog': 'Blog',
    'menu.label': 'Menu',
    'language.label': 'Language',
    'page.home.title': 'Welcome',
    'page.home.description':
    'Welcome to my personal site! Here, I share my thoughts, experiences, and insights on a variety of topics.',
    'page.about.title': 'About Me',
    'page.about.description': 'Hello, my name is HSY.',
    'page.projects.title': 'Projects',
    'page.projects.description': 'A collection of projects I have worked on.',
    'page.resources.title': 'Resources',
    'page.resources.description': 'Useful resources and references will be collected here.',
    'page.study.title': 'Study',
    'page.study.description': 'Notes and materials from my studies will be collected here.',
    'page.blog.title': 'Blog',
    'page.blog.description': 'Welcome! I will update this site regularly.',
  },
  zh: {
    'nav.label': '主导航',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.resources': '资源',
    'nav.study': '学习',
    'nav.blog': '博客',
    'menu.label': '菜单',
    'language.label': '语言',
    'page.home.title': '欢迎',
    'page.home.description': '欢迎来到我的个人网站！这里分享我对各种主题的想法、经历和见解。',
    'page.about.title': '关于我',
    'page.about.description': '你好，我叫 HSY。',
    'page.projects.title': '项目',
    'page.projects.description': '这里将展示我参与和完成的项目。',
    'page.resources.title': '资源',
    'page.resources.description': '这里将整理实用的资源和参考资料。',
    'page.study.title': '学习',
    'page.study.description': '这里将整理学习笔记和资料。',
    'page.blog.title': '博客',
    'page.blog.description': '欢迎来到博客，我会定期更新这里的内容。',
  },
  es: {
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.resources': 'Recursos',
    'nav.study': 'Estudio',
    'nav.blog': 'Blog',
    'menu.label': 'Menú',
    'language.label': 'Idioma',
    'page.home.title': 'Bienvenido',
    'page.home.description':
      '¡Bienvenido a mi sitio personal! Aquí comparto mis ideas, experiencias y perspectivas sobre diversos temas.',
    'page.about.title': 'Sobre mí',
    'page.about.description': 'Hola, me llamo HSY.',
    'page.projects.title': 'Proyectos',
    'page.projects.description': 'Una colección de los proyectos en los que he trabajado.',
    'page.resources.title': 'Recursos',
    'page.resources.description': 'Aquí reuniré recursos y referencias útiles.',
    'page.study.title': 'Estudio',
    'page.study.description': 'Aquí reuniré apuntes y materiales de estudio.',
    'page.blog.title': 'Blog',
    'page.blog.description': '¡Bienvenido! Actualizaré este sitio con regularidad.',
  },
  ja: {
    'nav.label': 'メインナビゲーション',
    'nav.home': 'ホーム',
    'nav.about': 'プロフィール',
    'nav.projects': 'プロジェクト',
    'nav.resources': 'リソース',
    'nav.study': '学習',
    'nav.blog': 'ブログ',
    'menu.label': 'メニュー',
    'language.label': '言語',
    'page.home.title': 'ようこそ',
    'page.home.description':
      '個人サイトへようこそ。さまざまなテーマについて、考えや経験、知見を共有します。',
    'page.about.title': 'プロフィール',
    'page.about.description': 'こんにちは、HSYです。',
    'page.projects.title': 'プロジェクト',
    'page.projects.description': 'これまでに取り組んだプロジェクトを紹介します。',
    'page.resources.title': 'リソース',
    'page.resources.description': '役立つリソースや参考資料をまとめます。',
    'page.study.title': '学習',
    'page.study.description': '学習ノートや資料をまとめます。',
    'page.blog.title': 'ブログ',
    'page.blog.description': 'ようこそ。このサイトは定期的に更新します。',
  },
} as const;

export function useTranslations(locale: string) {
  const dictionary = ui[locale as keyof typeof ui] ?? ui.en;

  return function t(key: keyof typeof ui.en) {
    return dictionary[key];
  };
}
