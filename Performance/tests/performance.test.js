import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '10s',

  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01']
  }
}

export default function () {

  const response = http.get('https://dummyjson.com/products')

  check(response, {
    'status deve ser 200': (r) => r.status === 200,
    'tempo de resposta menor que 2s': (r) => r.timings.duration < 2000
  })

  sleep(1)
}