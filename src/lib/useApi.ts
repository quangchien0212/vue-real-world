import { ref } from "vue";
import { AxiosRequestConfig } from "axios";
import { api } from '~/services/api'

export const PAGE_LIMIT = 10

export function pageToOffset (page: number = 1, localLimit = PAGE_LIMIT): {limit: number, offset: number} {
  const offset = (page - 1) * localLimit
  return { limit: localLimit, offset }
}

export function useApi<T = any>(requestConfig: AxiosRequestConfig = {}) {
  const data = ref<T>()
  const isLoading = ref(false)
  const error = ref<unknown>()

  const loading = (loading: boolean) => {
    isLoading.value = loading
  }

  loading(true)

  api({...requestConfig})
    .then((r: any) => {
      const result = r.data
      data.value = result
    })
    .catch((e: any) => {
      error.value = e
    })
    .finally(() => {
      loading(false)
    })

  return {
    data: data,
    loading: isLoading,
    error: error
  }
}

export default useApi
