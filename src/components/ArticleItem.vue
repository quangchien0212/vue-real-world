<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import AppLink from './AppLink.vue';

interface Props {
  article: Article
}

const props = defineProps<Props>()

const createdDay = computed(() => dayjs(props.article.createdAt).format('MMM DD'))

</script>

<template lang="">
  <div class="c-article">
    <div class="c-article__author">
      <img
        :src="article.author.image"
        class="c-article__author-avatar"
      >
      <h6 class="c-article__author-name">
        {{ article.author.username }}
      </h6>
    </div>
    <h6 class="c-article__title">
      {{ article.title }}
    </h6>
    <p class="c-article__description">
      {{ article.description }}
    </p>
    <div class="c-article__meta">
      <span class="c-article__created-at">
        {{ createdDay }}
      </span>
      <span class="c-article__meta-dot">·</span>
      <span class="c-article__tags">
        <span
          v-for="tag in article.tagList"
          :key="tag"
          class="c-article__tag"
        >
          {{ tag }}
        </span>
      </span>
    </div>
    <AppLink
      name="article"
      :params="{slug: props.article.slug}"
      class="c-article__link"
    />
  </div>
</template>