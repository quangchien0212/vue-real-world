<template lang="">
  <div>
    <h1>{{ article.title }}</h1>
    <div v-text="article.body">
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ article: Article }>()
</script>
