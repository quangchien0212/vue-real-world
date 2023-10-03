<template>
  <ul class="c-pagination">
    <li
      v-for="pageNumber in pagesCount"
      :key="pageNumber"
      :class="['c-pagination__item', { 'is-active': isActive(pageNumber) }]"
      @click="onPageChange(pageNumber)"
    >
      {{ pageNumber }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

const LIMIT = 10

interface Props {
  page: number
  count: number
}

interface Emits {
  (e: 'page-change', index: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { count, page } = toRefs(props)
const pagesCount = computed(() => Math.ceil(count.value / LIMIT))
const isActive = (index: number) => page.value === index
const onPageChange = (index: number) => emit('page-change', index)
</script>
