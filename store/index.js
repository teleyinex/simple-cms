import Vue from 'vue'
export const state = () => ({
  toc: [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire',
    },
  ],
  content: null,
})

export const getters = {
  toc: (state) => {
    return state.toc
  },
}

export const mutations = {
  setTocFromArticle(state, toc) {
    const tmp = []
    for (const item of toc) {
      tmp.push({
        icon: 'mdi-chevron-right',
        title: item.text,
        to: `#${item.id}`,
      })
    }
    Vue.set(state, 'toc', tmp)
  },
  setTocFromArticles(state, articles) {
    const tmp = []
    for (const article of articles) {
      tmp.push({
        icon: 'mdi-chevron-right',
        title: article.title,
        to: `/${article.slug}`,
      })
    }
    Vue.set(state, 'toc', tmp)
  },

  setContent(state, content) {
    Vue.set(state, 'content', content)
  },
}
