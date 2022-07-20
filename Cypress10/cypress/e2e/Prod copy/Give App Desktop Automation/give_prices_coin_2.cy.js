/// <reference types="cypress" />

describe('Coin Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })

    it('Dogecoin coin page assertion', () => {
        cy.prices_coin('Dogecoin')
        cy.url().should('include', '/prices/DOGE')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Dogecoin")
    })

    it('Komodo coin page assertion', () => {
        cy.prices_coin('Komodo')
        cy.url().should('include', '/prices/KMD')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Komodo")
    })

    it('Binance Coin coin page assertion', () => {
        cy.prices_coin('Binance Coin')
        cy.url().should('include', '/prices/BNB')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Binance Coin")
    })

    it('Salt Lending coin page assertion', () => {
        cy.prices_coin('Salt Lending')
        cy.url().should('include', '/prices/SALT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Salt Lending")
    })

    it('Siacoin coin page assertion', () => {
        cy.prices_coin('Siacoin')
        cy.url().should('include', '/prices/SC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Siacoin")
    })

    it('Augur coin page assertion', () => {
        cy.prices_coin('Augur')
        cy.url().should('include', '/prices/REP')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Augur")
    })

    it('Steem coin page assertion', () => {
        cy.prices_coin('Steem')
        cy.url().should('include', '/prices/STEEM')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Steem")
    })

    it('Golem Network Token coin page assertion', () => {
        cy.prices_coin('Golem Network Token')
        cy.url().should('include', '/prices/GNT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Golem Network Token")
    })

    it('ARK coin page assertion', () => {
        cy.prices_coin('ARK')
        cy.url().should('include', '/prices/ARK')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "ARK")
    })

    it('Veritaseum coin page assertion', () => {
        cy.prices_coin('Veritaseum')
        cy.url().should('include', '/prices/VERI')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Veritaseum")
    })

    it('Private Instant Verified Transaction coin page assertion', () => {
        cy.prices_coin('Private Instant Verified Transaction')
        cy.url().should('include', '/prices/PIVX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Private Instant Verified Transaction")
    })

    it('MonaCoin coin page assertion', () => {
        cy.prices_coin('MonaCoin')
        cy.url().should('include', '/prices/MONA')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "MonaCoin")
    })

    it('Decred coin page assertion', () => {
        cy.prices_coin('Decred')
        cy.url().should('include', '/prices/DCR')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Decred")
    })

    it('DigiByte coin page assertion', () => {
        cy.prices_coin('DigiByte')
        cy.url().should('include', '/prices/DGB')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "DigiByte")
    })

    it('Vechain coin page assertion', () => {
        cy.prices_coin('Vechain')
        cy.url().should('include', '/prices/VET')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Vechain")
    })

    it('Status Network Token coin page assertion', () => {
        cy.prices_coin('Status Network Token')
        cy.url().should('include', '/prices/SNT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Status Network Token")
    })

    it('MaidSafe Coin coin page assertion', () => {
        cy.prices_coin('MaidSafe Coin')
        cy.url().should('include', '/prices/MAID')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "MaidSafe Coin")
    })

    it('SysCoin coin page assertion', () => {
        cy.prices_coin('SysCoin')
        cy.url().should('include', '/prices/SYS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "SysCoin")
    })

    it('Electroneum coin page assertion', () => {
        cy.prices_coin('Electroneum')
        cy.url().should('include', '/prices/ETN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Electroneum")
    })

    it('Obyte coin page assertion', () => {
        cy.prices_coin('Obyte')
        cy.url().should('include', '/prices/GBYTE')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Obyte")
    })

    it('TenX coin page assertion', () => {
        cy.prices_coin('TenX')
        cy.url().should('include', '/prices/PAY')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "TenX")
    })

    it('Basic Attention Token coin page assertion', () => {
        cy.prices_coin('Basic Attention Token')
        cy.url().should('include', '/prices/BAT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Basic Attention Token")
    })

    it('Bytom coin page assertion', () => {
        cy.prices_coin('Bytom')
        cy.url().should('include', '/prices/BTM')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bytom")
    })

    it('Factom coin page assertion', () => {
        cy.prices_coin('Factom')
        cy.url().should('include', '/prices/FCT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Factom")
    })

    it('Santiment coin page assertion', () => {
        cy.prices_coin('Santiment')
        cy.url().should('include', '/prices/SAN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Santiment")
    })

    it('BitcoinDark coin page assertion', () => {
        cy.prices_coin('BitcoinDark')
        cy.url().should('include', '/prices/BTCD')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "BitcoinDark")
    })

    it('Aeternity coin page assertion', () => {
        cy.prices_coin('Aeternity')
        cy.url().should('include', '/prices/AE')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Aeternity")
    })

    it('Reddcoin coin page assertion', () => {
        cy.prices_coin('Reddcoin')
        cy.url().should('include', '/prices/RDD')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Reddcoin")
    })

    it('Quoine Liquid coin page assertion', () => {
        cy.prices_coin('Quoine Liquid')
        cy.url().should('include', '/prices/QASH')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Quoine Liquid")
    })

    it('Digix DAO coin page assertion', () => {
        cy.prices_coin('Digix DAO')
        cy.url().should('include', '/prices/DGD')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Digix DAO")
    })
})