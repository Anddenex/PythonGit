/// <reference types="cypress" />

describe('Sidebar Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://app.giveblockchain.io/prices/")
        cy.wait(1000)
      })

    it('Check the first 10 Coin pages', () => {
        cy.get('[class="v-responsive__content"]')
            .eq(0)
            .click()
        cy.url().should("include", "/prices/BTC");
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bitcoin")
    })
})