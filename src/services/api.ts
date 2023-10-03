import axios from 'axios'

const BASE_URL: string = "https://api.realworld.io/api"

function createApi() {
  const api = axios.create({
    baseURL: BASE_URL,
  })
  return api
}

export const api = createApi()

export default api

export function getArticle(slug: string) {
  return api({
    url: `/articles/${slug}`,
    method: 'GET'
  })
}
