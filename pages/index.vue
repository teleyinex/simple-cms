<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="article of articles" style="margin-bottom: 30px;">
        <v-card-title class="headline">{{article.title}}</v-card-title>
        <v-card-text>{{article.description}}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt :to="`/${article.slug}`">{{article.title}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, store, params, error }) {
    const slug = params.slug || 'index'
    const articles = await $content('articles')
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Article not found' })
      })
    store.commit('setTocFromArticles', articles)
    return {
      articles,
    }
  },
}
</script>
