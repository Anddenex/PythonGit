/// <reference types="cypress" />

describe('First 30 Coins Loop Assertion...', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })
    it('First 30 Coins Assertions....', () => {
        let coin_names = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin'];
        for (var j = 0; j < coin_names.length; j++) {
            let name = coin_names[j];
            cy.log('Current Coin being tested', name);
            cy.prices_coin(name)
            cy.get('.offset-3 > .container > .row > :nth-child(2)')
                .should('have.text', name)
            cy.go('back')
        }
    })
})