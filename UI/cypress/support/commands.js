Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/minha-conta/')

  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {

  cy.visit('/')

  cy.get('.product-block')
    .first()
    .should('be.visible')
    .click()

  cy.get('.button-variable-item-XS')
    .should('be.visible')
    .click()

  cy.get('.button-variable-item-Red')
    .should('be.visible')
    .click()

  cy.get('.single_add_to_cart_button')
    .should('be.visible')
    .click()

  cy.get('.woocommerce-message', { timeout: 10000 })
  .should('exist')
})