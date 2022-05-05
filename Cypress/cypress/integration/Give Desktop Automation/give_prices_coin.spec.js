/// <reference types="cypress" />

describe('Sidebar Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://app.giveblockchain.io/prices/")
        cy.wait(1000)
      })

    it('Expecting/Asserting coin is accurate with styling', () => {
        //cy.percySnapshot()
        cy.get('[class="v-responsive__content"]').should(($coin) => {
            expect($coin.eq(0), 'first button')
                .to.contain("Bitcoin")
                .to.have.attr('style', "width: 300px;")
            expect($coin.eq(1), 'second button')
                .to.contain("Ethereum")
                .to.have.attr('style', "width: 300px;")
            expect($coin.eq(2), 'third button')
                .to.contain("XRP")
                .to.have.attr('style', "width: 300px;")
            expect($coin.eq(3), 'fourth button')
                .to.contain("Bitcoin Cash")
                .to.have.attr('style', "width: 300px;")
            expect($coin.eq(4), 'fifth button')
                .to.contain("Litecoin")
                .to.have.attr('style', "width: 300px;")
          })    
    })

    // it('Check the first 10 Coin pages', () => {
    //     cy.get('[class="v-responsive__content"]')
    //         .eq(0)
    //         .click()
    //     cy.url().should("include", "/prices/BTC");
    //     cy.get('.offset-3 > .container > .row > :nth-child(2)')
    //         .should('have.text', "Bitcoin")
    // })
})