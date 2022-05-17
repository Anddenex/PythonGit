/// <reference types="cypress" />

describe('Coin Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })

    it('Bitcoin coin page assertion', () => {
        cy.prices_coin('Bitcoin')
        cy.url().should('include', '/prices/BTC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bitcoin")
    })

    it('Ethereum coin page assertion', () => {
        cy.prices_coin('Ethereum')
        cy.url().should('include', '/prices/ETH')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Ethereum")
    })

    it('XRP coin page assertion', () => {
        cy.prices_coin('XRP')
        cy.url().should('include', '/prices/XRP')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "XRP")
    })

    it('Bitcoin Cash coin page assertion', () => {
        cy.prices_coin('Bitcoin Cash')
        cy.url().should('include', '/prices/BCH')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bitcoin Cash")
    })

    it('Litecoin coin page assertion', () => {
        cy.prices_coin('Litecoin')
        cy.url().should('include', '/prices/LTC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Litecoin")
    })

    it('Cardano coin page assertion', () => {
        cy.prices_coin('Cardano')
        cy.url().should('include', '/prices/ADA')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Cardano")
    })

    it('Gala coin page assertion', () => {
        cy.prices_coin('Gala')
        cy.url().should('include', '/prices/GALA')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Gala")
    })

    it('IOTA coin page assertion', () => {
        cy.prices_coin('IOTA')
        cy.url().should('include', '/prices/MIOTA')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "IOTA")
    })

    it('Dash coin page assertion', () => {
        cy.prices_coin('Dash')
        cy.url().should('include', '/prices/DASH')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Dash")
    })

    it('NEM coin page assertion', () => {
        cy.prices_coin('NEM')
        cy.url().should('include', '/prices/XEM')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "NEM")
    })

    it('Monero coin page assertion', () => {
        cy.prices_coin('Monero')
        cy.url().should('include', '/prices/XMR')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Monero")
    })

    it('EOS coin page assertion', () => {
        cy.prices_coin('EOS')
        cy.url().should('include', '/prices/EOS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "EOS")
    })

    it('Bitcoin Gold coin page assertion', () => {
        cy.prices_coin('Bitcoin Gold')
        cy.url().should('include', '/prices/BTG')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bitcoin Gold")
    })

    it('NEO coin page assertion', () => {
        cy.prices_coin('NEO')
        cy.url().should('include', '/prices/NEO')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "NEO")
    })

    it('QTUM coin page assertion', () => {
        cy.prices_coin('QTUM')
        cy.url().should('include', '/prices/QTUM')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "QTUM")
    })

    it('Stellar coin page assertion', () => {
        cy.prices_coin('Stellar')
        cy.url().should('include', '/prices/XLM')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Stellar")
    })

    it('Ethereum Classic coin page assertion', () => {
        cy.prices_coin('Ethereum Classic')
        cy.url().should('include', '/prices/ETC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Ethereum Classic")
    })

    it('Lisk coin page assertion', () => {
        cy.prices_coin('Lisk')
        cy.url().should('include', '/prices/LSK')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Lisk")
    })

    it('TRON coin page assertion', () => {
        cy.prices_coin('TRON')
        cy.url().should('include', '/prices/TRX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "TRON")
    })

    it('Verge coin page assertion', () => {
        cy.prices_coin('Verge')
        cy.url().should('include', '/prices/XVG')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Verge")
    })

    it('ICON Project coin page assertion', () => {
        cy.prices_coin('ICON Project')
        cy.url().should('include', '/prices/ICX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "ICON Project")
    })

    it('ZCash coin page assertion', () => {
        cy.prices_coin('ZCash')
        cy.url().should('include', '/prices/ZEC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "ZCash")
    })

    it('Ardor coin page assertion', () => {
        cy.prices_coin('Ardor')
        cy.url().should('include', '/prices/ARDR')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Ardor")
    })

    it('OmiseGo coin page assertion', () => {
        cy.prices_coin('OmiseGo')
        cy.url().should('include', '/prices/OMG')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "OmiseGo")
    })

    it('Bitshares coin page assertion', () => {
        cy.prices_coin('Bitshares')
        cy.url().should('include', '/prices/BTS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bitshares")
    })

    it('Tether coin page assertion', () => {
        cy.prices_coin('Tether')
        cy.url().should('include', '/prices/USDT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Tether")
    })

    it('Populous coin page assertion', () => {
        cy.prices_coin('Populous')
        cy.url().should('include', '/prices/PPT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Populous")
    })

    it('Waves coin page assertion', () => {
        cy.prices_coin('Waves')
        cy.url().should('include', '/prices/WAVES')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Waves")
    })

    it('Nxt coin page assertion', () => {
        cy.prices_coin('Nxt')
        cy.url().should('include', '/prices/NXT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Nxt")
    })

    it('ByteCoin coin page assertion', () => {
        cy.prices_coin('ByteCoin')
        cy.url().should('include', '/prices/BCN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "ByteCoin")
    })
})