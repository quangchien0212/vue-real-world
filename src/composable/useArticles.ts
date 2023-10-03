import { ref, watch } from 'vue'
import { pageToOffset } from '~/lib/useApi'
import api from '~/services/api'

export function useArticles() {
  const articles = ref<Article[]>([])
  const articlesCount = ref(0)
  const page = ref(1)
  const loading = ref(false)

  async function fetchArticles (): Promise<void> {
    const responsePromise = api({
      url: '/articles',
      method: 'get',
      params: {
        offset: pageToOffset(page.value).offset
      }
    }).then((res: any) => {
      loading.value = false
      return res.data
    })

    const response = await responsePromise
    articles.value = response.articles
    articlesCount.value = response.articlesCount
  }

  loading.value = true
  fetchArticles()

  const changePage = (value: number): void => {
    page.value = value
  }

  watch(page, () => {
    loading.value = true
    fetchArticles()
  })

  return {
    articles,
    articlesCount,
    loading,
    page,
    changePage,
  }
}


export default useArticles
