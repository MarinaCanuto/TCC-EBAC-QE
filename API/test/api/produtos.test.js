const { spec } = require('pactum')

describe('API EBAC - Produtos', () => {

  it('Deve listar produtos com status 200', async () => {

    await spec()
      .get('https://dummyjson.com/products')
      .expectStatus(200)
  })

  it('Deve validar retorno de produtos', async () => {

    await spec()
      .get('https://dummyjson.com/products')
      .expectStatus(200)
      .expectJsonLike({
        products: [
          {
            id: 1
          }
        ]
      })
  })

  it('Deve validar tempo de resposta da API', async () => {

    await spec()
      .get('https://dummyjson.com/products')
      .expectStatus(200)
      .expectResponseTime(3000)
  })

  it('Deve retornar erro para endpoint inexistente', async () => {

    await spec()
      .get('https://dummyjson.com/produtos-inexistentes')
      .expectStatus(404)
  })
})