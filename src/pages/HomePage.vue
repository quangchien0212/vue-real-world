<script setup lang="ts">
import useArticles from '~/composable/useArticles'
import ArticleItem from '~/components/ArticleItem.vue'
import Pagination from '~/components/Pagination.vue';

const {
  articles,
  loading,
  articlesCount,
  page,
  changePage
} = useArticles()

</script>

<template>
  <div v-if="loading">
    Loading....
  </div>
  <ArticleItem
    v-for="article in articles"
    :key="article.slug"
    :article="article"
  />
  <Pagination
    :page="page"
    :count="articlesCount"
    @page-change="changePage"
  />
</template>