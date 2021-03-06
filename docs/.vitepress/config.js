/** @typedef {import('vitepress').UserConfig} UserConfig */

/** @type {UserConfig['head']} */
const head = [['link', { rel: 'icon', href: `/logo.png` }]]

if (process.env.NODE_ENV === 'production') {
  head.push([
    'script',
    {
      src: 'https://unpkg.com/thesemetrics@latest',
      async: '',
    },
  ])
}

/** @type {UserConfig} */
const config = {
  lang: 'en-US',
  title: 'Vue Router',
  description: 'The official router for Vue.js.',
  head,
  // serviceWorker: true,
  themeConfig: {
    repo: 'vuejs/vue-router-next',
    docsRepo: 'vuejs/vue-router-next',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    carbonAds: {
      carbon: 'CEBICK3I',
      custom: 'CEBICK3M',
      placement: 'routervuejsorg',
    },

    algolia: {
      apiKey: '07ed552fc16926cc57c9eb0862c1a7f9',
      indexName: 'next_router_vuejs',
      searchParams: {
        facetFilters: ['tags:guide,api,migration'],
      },
    },

    locales: {
      // English
      '/': {
        lang: 'en-US',
        label: 'English',
        selectText: 'Languages',
        title: 'Vue Router',
        description: 'The official router for Vue.js.',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'API Reference',
            link: '/api/',
          },
          {
            text: 'v4.x',
            items: [{ text: 'v3.x', link: 'https://router.vuejs.org' }],
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vue-router-next/blob/master/CHANGELOG.md',
          },
        ],

        sidebar: [
          {
            text: 'Introduction',
            link: '/introduction.html',
          },
          {
            text: 'Installation',
            link: '/installation.html',
          },
          {
            text: 'Essentials',
            collapsable: false,
            children: [
              {
                text: 'Getting Started',
                link: '/guide/',
              },
              {
                text: 'Dynamic Route Matching',
                link: '/guide/essentials/dynamic-matching.html',
              },
              {
                text: "Routes' Matching Syntax",
                link: '/guide/essentials/route-matching-syntax.html',
              },
              {
                text: 'Nested Routes',
                link: '/guide/essentials/nested-routes.html',
              },
              {
                text: 'Programmatic Navigation',
                link: '/guide/essentials/navigation.html',
              },
              {
                text: 'Named Routes',
                link: '/guide/essentials/named-routes.html',
              },
              {
                text: 'Named Views',
                link: '/guide/essentials/named-views.html',
              },
              {
                text: 'Redirect and Alias',
                link: '/guide/essentials/redirect-and-alias.html',
              },
              {
                text: 'Passing Props to Route Components',
                link: '/guide/essentials/passing-props.html',
              },
              {
                text: 'Different History modes',
                link: '/guide/essentials/history-mode.html',
              },
            ],
          },
          {
            text: 'Advanced',
            collapsable: false,
            children: [
              {
                text: 'Navigation guards',
                link: '/guide/advanced/navigation-guards.html',
              },
              {
                text: 'Route Meta Fields',
                link: '/guide/advanced/meta.html',
              },
              {
                text: 'Data Fetching',
                link: '/guide/advanced/data-fetching.html',
              },
              {
                text: 'Composition API',
                link: '/guide/advanced/composition-api.html',
              },
              {
                text: 'Transitions',
                link: '/guide/advanced/transitions.html',
              },
              {
                text: 'Scroll Behavior',
                link: '/guide/advanced/scroll-behavior.html',
              },
              {
                text: 'Lazy Loading Routes',
                link: '/guide/advanced/lazy-loading.html',
              },
              {
                text: 'Extending RouterLink',
                link: '/guide/advanced/extending-router-link.html',
              },
              {
                text: 'Navigation Failures',
                link: '/guide/advanced/navigation-failures.html',
              },
              {
                text: 'Dynamic Routing',
                link: '/guide/advanced/dynamic-routing.html',
              },
            ],
          },
          {
            text: 'Migrating from Vue 2',
            link: '/guide/migration/index.html',
          },
        ],
      },
      // ????????????
      '/zh/': {
        lang: 'zh-CN',
        label: '??????',
        selectText: '????????????',
        title: 'Vue Router',
        description: 'Vue.js ???????????????',
        nav: [
          {
            text: '??????',
            link: '/zh/guide/',
          },
          {
            text: 'API ??????',
            link: '/zh/api/',
          },
          {
            text: 'v4.x',
            items: [{ text: 'v3.x', link: 'https://router.vuejs.org/zh' }],
          },
          {
            text: '????????????',
            link: 'https://github.com/vuejs/vue-router-next/blob/master/CHANGELOG.md',
          },
        ],

        sidebar: [
          {
            text: '??????',
            link: '/zh/introduction.html',
          },
          {
            text: '??????',
            link: '/zh/installation.html',
          },
          {
            text: '??????',
            collapsable: false,
            children: [
              {
                text: '??????',
                link: '/zh/guide/',
              },
              {
                text: '??????????????????',
                link: '/zh/guide/essentials/dynamic-matching.html',
              },
              {
                text: '?????????????????????',
                link: '/zh/guide/essentials/route-matching-syntax.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/essentials/nested-routes.html',
              },
              {
                text: '???????????????',
                link: '/zh/guide/essentials/navigation.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/essentials/named-routes.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/essentials/named-views.html',
              },
              {
                text: '??????????????????',
                link: '/zh/guide/essentials/redirect-and-alias.html',
              },
              {
                text: '??????????????????',
                link: '/zh/guide/essentials/passing-props.html',
              },
              {
                text: '???????????????????????????',
                link: '/zh/guide/essentials/history-mode.html',
              },
            ],
          },
          {
            text: '??????',
            collapsable: false,
            children: [
              {
                text: '????????????',
                link: '/zh/guide/advanced/navigation-guards.html',
              },
              {
                text: '???????????????',
                link: '/zh/guide/advanced/meta.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/advanced/data-fetching.html',
              },
              {
                text: '????????? API',
                link: '/zh/guide/advanced/composition-api.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/advanced/transitions.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/advanced/scroll-behavior.html',
              },
              {
                text: '???????????????',
                link: '/zh/guide/advanced/lazy-loading.html',
              },
              {
                text: '?????? RouterLink',
                link: '/zh/guide/advanced/extending-router-link.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/advanced/navigation-failures.html',
              },
              {
                text: '????????????',
                link: '/zh/guide/advanced/dynamic-routing.html',
              },
            ],
          },
          {
            text: '??? Vue2 ??????',
            link: '/zh/guide/migration/index.html',
          },
        ],
      },
    },
  },
}

module.exports = config
