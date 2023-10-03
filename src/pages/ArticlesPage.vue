<script setup lang="ts">
import useArticles from '~/composable/useArticles'
import ArticleItem from '~/components/ArticleItem.vue'

const { articles, loading, articlesCount } = useArticles()

</script>

<template>
  <div v-if="loading">
    Loading....
  </div>
  <ArticleItem
    v-for="article in articles"
    v-else
    :key="article.slug"
    :article="article"
  />
  {{ articlesCount }}
</template>