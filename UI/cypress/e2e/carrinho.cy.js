describe('Carrinho EBAC Shop', () => {

  it('Deve adicionar produto ao carrinho com sucesso', () => {
    cy.adicionarProdutoAoCarrinho()

    cy.get('.woocommerce-message')
      .should('contain', 'foi adicionado no seu carrinho')
  })
})