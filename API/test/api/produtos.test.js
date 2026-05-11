const { spec } = require('pactum')

describe('API EBAC - Produtos', () => {

  it('Deve listar produtos com status 200', async () => {

    await spec()
      .get('https://fakestoreapi.com/products')
      .expectStatus(200)
  })

  it('Deve validar retorno de produtos', async () => {

    await spec()
      .get('https://fakestoreapi.com/products')
      .expectStatus(200)
      .expectJsonLike([
        {
          id: 1
        }
      ])
  })

  it('Deve validar tempo de resposta da API', async () => {

    await spec()
      .get('https://fakestoreapi.com/products')
      .expectResponseTime(2000)
      .expectStatus(200)
  })

  it('Deve retornar erro para endpoint inexistente', async () => {

    await spec()
      .get('https://fakestoreapi.com/produtos-inexistentes')
      .expectStatus(404)
  })
})