describe('Login EBAC Shop', () => {

  it('Deve fazer login com sucesso usando usuário ativo', () => {
    cy.fixture('usuarios').then((usuarios) => {
      cy.login(
        usuarios.usuarioValido.username,
        usuarios.usuarioValido.password
      )

      cy.get('.woocommerce-MyAccount-content')
        .should('contain', 'Olá')
    })
  })

  it('Deve exibir mensagem de erro ao informar usuário inválido', () => {
    cy.fixture('usuarios').then((usuarios) => {
      cy.login(
        usuarios.usuarioInvalido.username,
        usuarios.usuarioInvalido.password
      )

      cy.get('.woocommerce-error')
        .should('be.visible')
    })
  })

  it('Deve exibir mensagem de erro ao informar senha inválida', () => {
    cy.fixture('usuarios').then((usuarios) => {
      cy.login(
        usuarios.senhaInvalida.username,
        usuarios.senhaInvalida.password
      )

      cy.get('.woocommerce-error')
        .should('be.visible')
    })
  })

  it('Deve exibir mensagem de erro ao tentar login com campos vazios', () => {
    cy.visit('/minha-conta/')

    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error')
      .should('be.visible')
  })
})