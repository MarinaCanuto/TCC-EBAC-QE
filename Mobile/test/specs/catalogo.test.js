import catalogoPage from '../pageobjects/catalogo.page.js'

describe('Mobile - Catálogo de Produtos EBAC Shop', () => {

  it('Deve exibir o catálogo de produtos', async () => {
    await catalogoPage.validarTelaCatalogo()
  })

  it('Deve validar o campo de busca no catálogo', async () => {
    await catalogoPage.validarTelaCatalogo()
  })

  it('Deve realizar scroll no catálogo', async () => {
    await catalogoPage.validarTelaCatalogo()
    await catalogoPage.scrollCatalogo()
  })

})