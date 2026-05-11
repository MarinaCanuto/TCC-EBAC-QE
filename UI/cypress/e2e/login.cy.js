describe('Login EBAC Shop', () => {

    it('Deve fazer login com sucesso', () => {

        cy.visit('/minha-conta/')

        cy.get('#username').type('user1_ebac')
        cy.get('#password').type('psw!ebac@test')

        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    })
})