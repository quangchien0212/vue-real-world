<script setup lang="ts">
import ArticleDetail from '~/components/ArticleDetail.vue';
import { getArticle } from '~/services/api';
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

const route = useRoute()
const slug = route.params.slug as string
const loading = ref(true)
const article: Article = reactive(
  await getArticle(slug)
    .then((res) => {
      loading.value = false
      return res.data.article
  }))
</script>

<template lang="">
  <div v-if="loading">
    Loading...
  </div>
  <ArticleDetail
    v-else
    :article="article"
  />
</template>
