/// <reference types="cypress" />

import produtosPage from "../support/page-objects/produtos.page"

describe('Carrinho EBAC Shop', () => {

  it('Deve adicionar produto ao carrinho com sucesso', () => {
    cy.fixture('produtos').then((produtos) => {
      produtosPage.visitarProduto(produtos[0].nomeProduto)

      produtosPage.adicionarProdutoAoCarrinho(
        produtos[0].tamanho,
        produtos[0].cor,
        produtos[0].quantidade
      )

      cy.get('.woocommerce-message', { timeout: 15000 })
        .should('contain', produtos[0].titulo)
    })
  })

  it('Deve exibir o produto adicionado no carrinho', () => {
    cy.fixture('produtos').then((produtos) => {
      produtosPage.visitarProduto(produtos[0].nomeProduto)

      produtosPage.adicionarProdutoAoCarrinho(
        produtos[0].tamanho,
        produtos[0].cor,
        produtos[0].quantidade
      )

      produtosPage.acessarCarrinho()

      cy.get('.cart_item', { timeout: 15000 })
        .should('be.visible')
    })
  })

  it('Deve atualizar a quantidade do produto no carrinho', () => {
    cy.fixture('produtos').then((produtos) => {
      produtosPage.visitarProduto(produtos[0].nomeProduto)

      produtosPage.adicionarProdutoAoCarrinho(
        produtos[0].tamanho,
        produtos[0].cor,
        produtos[0].quantidade
      )

      produtosPage.acessarCarrinho()

      cy.get('.qty', { timeout: 15000 })
        .clear()
        .type('3')

      cy.get('[name="update_cart"]')
        .should('not.be.disabled')
        .click()

      cy.get('.woocommerce-message', { timeout: 15000 })
        .should('be.visible')
    })
  })

  it('Deve validar o limite máximo de 10 itens do mesmo produto', () => {
    cy.fixture('produtos').then((produtos) => {
      produtosPage.visitarProduto(produtos[0].nomeProduto)

      produtosPage.adicionarProdutoAoCarrinho(
        produtos[0].tamanho,
        produtos[0].cor,
        produtos[0].quantidade
      )

      produtosPage.acessarCarrinho()

      cy.get('.qty', { timeout: 15000 })
        .clear()
        .type('11')

      cy.get('[name="update_cart"]')
        .should('not.be.disabled')
        .click()

      cy.get('.woocommerce-error, .woocommerce-message', { timeout: 15000 })
        .should('be.visible')
    })
  })
})