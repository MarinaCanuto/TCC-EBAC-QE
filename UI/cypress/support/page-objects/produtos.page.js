class ProdutosPage {

  visitarProduto(nomeProduto) {
    cy.visit(`/produto/${nomeProduto}/`)
  }

  adicionarProdutoAoCarrinho(tamanho, cor, quantidade) {
    cy.get(`.button-variable-item-${tamanho}`)
      .should('be.visible')
      .click()

    cy.get(`.button-variable-item-${cor}`)
      .should('be.visible')
      .click()

    cy.get('.qty')
      .clear()
      .type(quantidade)

    cy.get('.single_add_to_cart_button')
      .should('be.visible')
      .click()
  }

  acessarCarrinho() {
    cy.get('.woocommerce-message', { timeout: 15000 })
      .contains('Ver carrinho')
      .click()
  }
}

export default new ProdutosPage()