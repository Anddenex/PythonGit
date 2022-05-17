/// <reference types="cypress" />

describe('Coin Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })

    it('Ionomy coin page assertion', () => {
        cy.prices_coin('Ionomy')
        cy.url().should('include', '/prices/ION')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Ionomy")
    })

    it('EmberCoin coin page assertion', () => {
        cy.prices_coin('EmberCoin')
        cy.url().should('include', '/prices/EMB')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "EmberCoin")
    })

    it('Blox coin page assertion', () => {
        cy.prices_coin('Blox')
        cy.url().should('include', '/prices/CDT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Blox")
    })

    it('AEON coin page assertion', () => {
        cy.prices_coin('AEON')
        cy.url().should('include', '/prices/AEON')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "AEON")
    })

    it('IOCoin coin page assertion', () => {
        cy.prices_coin('IOCoin')
        cy.url().should('include', '/prices/IOC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "IOCoin")
    })

    it('MinexCoin coin page assertion', () => {
        cy.prices_coin('MinexCoin')
        cy.url().should('include', '/prices/MNX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "MinexCoin")
    })

    it('TrustCoin coin page assertion', () => {
        cy.prices_coin('TrustCoin')
        cy.url().should('include', '/prices/TRST')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "TrustCoin")
    })

    it('Crown Coin coin page assertion', () => {
        cy.prices_coin('Crown Coin')
        cy.url().should('include', '/prices/CRW')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Crown Coin")
    })

    it('bitCNY coin page assertion', () => {
        cy.prices_coin('bitCNY')
        cy.url().should('include', '/prices/BITCNY')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "bitCNY")
    })

    it('Token as a Service coin page assertion', () => {
        cy.prices_coin('Token as a Service')
        cy.url().should('include', '/prices/TAAS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Token as a Service")
    })

    it('Elastic coin page assertion', () => {
        cy.prices_coin('Elastic')
        cy.url().should('include', '/prices/XEL')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Elastic")
    })

    it('MonetaryUnit coin page assertion', () => {
        cy.prices_coin('MonetaryUnit')
        cy.url().should('include', '/prices/MUE')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "MonetaryUnit")
    })

    it('Expanse coin page assertion', () => {
        cy.prices_coin('Expanse')
        cy.url().should('include', '/prices/EXP')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Expanse")
    })

    it('HyperSpace coin page assertion', () => {
        cy.prices_coin('HyperSpace')
        cy.url().should('include', '/prices/AMP')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "HyperSpace")
    })

    it('Simple Token coin page assertion', () => {
        cy.prices_coin('Simple Token')
        cy.url().should('include', '/prices/OST')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Simple Token")
    })

    it('Swarm City Token coin page assertion', () => {
        cy.prices_coin('Swarm City Token')
        cy.url().should('include', '/prices/SWT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Swarm City Token")
    })

    it('Nuls coin page assertion', () => {
        cy.prices_coin('Nuls')
        cy.url().should('include', '/prices/NULS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Nuls")
    })
})