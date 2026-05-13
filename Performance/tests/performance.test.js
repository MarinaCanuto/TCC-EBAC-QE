import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '2m', target: 20 },
    { duration: '20s', target: 0 }
  ],

  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01']
  }
}

export default function () {

  const produtos = http.get('https://dummyjson.com/products')

  check(produtos, {
    'GET produtos status 200': (r) => r.status === 200,
    'GET produtos resposta < 2s': (r) => r.timings.duration < 2000
  })

  sleep(1)

  const categorias = http.get('https://dummyjson.com/products/categories')

  check(categorias, {
    'GET categorias status 200': (r) => r.status === 200,
    'GET categorias resposta < 2s': (r) => r.timings.duration < 2000
  })

  sleep(1)
}