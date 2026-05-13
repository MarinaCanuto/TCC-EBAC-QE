const request = require('supertest')
const { expect } = require('chai')

const baseUrl = 'http://lojaebac.ebaconline.art.br'
const token = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'

describe('API EBAC - Cupons', () => {

  let couponId
  const couponCode = `cupom_teste_${Date.now()}`

  it('Deve listar todos os cupons cadastrados', async () => {
    const response = await request(baseUrl)
      .get('/wp-json/wc/v3/coupons')
      .set('Authorization', token)

    expect(response.status).to.equal(200)
    expect(response.body).to.be.an('array')
  })

  it('Deve cadastrar um novo cupom', async () => {
    const response = await request(baseUrl)
      .post('/wp-json/wc/v3/coupons')
      .set('Authorization', token)
      .send({
        code: couponCode,
        amount: '10',
        discount_type: 'fixed_product',
        description: 'Cupom de desconto de teste'
      })

    expect(response.status).to.equal(201)
    expect(response.body).to.have.property('id')

    couponId = response.body.id
  })

  it('Deve buscar cupom por ID', async () => {
    const response = await request(baseUrl)
      .get(`/wp-json/wc/v3/coupons/${couponId}`)
      .set('Authorization', token)

    expect(response.status).to.equal(200)
    expect(response.body).to.have.property('id', couponId)
    expect(response.body).to.have.property('code', couponCode)
  })

})