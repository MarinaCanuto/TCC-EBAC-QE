describe('Carrinho EBAC Shop', () => {

  it('Deve adicionar produto ao carrinho com sucesso', () => {
    cy.adicionarProdutoAoCarrinho()

    cy.get('.woocommerce-message')
      .should('contain', 'foi adicionado no seu carrinho')
  })

  it('Deve exibir o produto adicionado no carrinho', () => {
    cy.adicionarProdutoAoCarrinho()

    cy.get('.woocommerce-message a')
      .click()

    cy.get('.cart_item')
      .should('be.visible')
  })

  it('Deve atualizar a quantidade do produto no carrinho', () => {
    cy.adicionarProdutoAoCarrinho()

    cy.get('.woocommerce-message a')
      .click()

    cy.get('.qty')
      .clear()
      .type('2')

    cy.get('[name="update_cart"]')
      .click()

    cy.get('.woocommerce-message')
      .should('be.visible')
  })

  it('Deve validar o limite máximo de 10 itens do mesmo produto', () => {
    cy.adicionarProdutoAoCarrinho()

    cy.get('.woocommerce-message a')
      .click()

    cy.get('.qty')
      .clear()
      .type('11')

    cy.get('[name="update_cart"]')
      .click()
      cy.wait(1000)

    cy.get('.woocommerce-error, .woocommerce-message')
      .should('be.visible')
  })
})