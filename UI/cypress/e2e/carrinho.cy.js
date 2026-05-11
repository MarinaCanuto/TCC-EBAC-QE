describe('Carrinho EBAC Shop', () => {

    it('Deve adicionar produto ao carrinho com sucesso', () => {

        cy.visit('/')

        cy.get('.product-block')
            .first()
            .click()

        cy.get('.button-variable-item-XS')
            .click()

        cy.get('.button-variable-item-Red')
            .click()

        cy.get('.single_add_to_cart_button')
            .click()

        cy.get('.woocommerce-message')
            .should('contain', 'foi adicionado no seu carrinho')
    })
})