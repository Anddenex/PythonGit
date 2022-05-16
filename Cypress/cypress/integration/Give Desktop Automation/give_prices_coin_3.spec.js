/// <reference types="cypress" />

describe('Sidebar Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })

    it('0x coin page assertion', () => {
        cy.prices_coin('0x')
        cy.url().should('include', '/prices/ZRX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "0x")
    })

    it('Kyber Network coin page assertion', () => {
        cy.prices_coin('Kyber Network')
        cy.url().should('include', '/prices/KNC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Kyber Network")
    })

    it('Power Ledger coin page assertion', () => {
        cy.prices_coin('Power Ledger')
        cy.url().should('include', '/prices/POWR')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Power Ledger")
    })

    it('Civic coin page assertion', () => {
        cy.prices_coin('Civic')
        cy.url().should('include', '/prices/CVC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Civic")
    })

    it('Aion coin page assertion', () => {
        cy.prices_coin('Aion')
        cy.url().should('include', '/prices/AION')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Aion")
    })

    it('Vertcoin coin page assertion', () => {
        cy.prices_coin('Vertcoin')
        cy.url().should('include', '/prices/VTC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Vertcoin")
    })

    it('Waltonchain coin page assertion', () => {
        cy.prices_coin('Waltonchain')
        cy.url().should('include', '/prices/WTC')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Waltonchain")
    })

    it('Dent coin page assertion', () => {
        cy.prices_coin('Dent')
        cy.url().should('include', '/prices/DENT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Dent")
    })

    it('Gas coin page assertion', () => {
        cy.prices_coin('Gas')
        cy.url().should('include', '/prices/GAS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Gas")
    })

    it('Gamecredits coin page assertion', () => {
        cy.prices_coin('Gamecredits')
        cy.url().should('include', '/prices/GAME')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Gamecredits")
    })

    it('aelf coin page assertion', () => {
        cy.prices_coin('aelf')
        cy.url().should('include', '/prices/ELF')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "aelf")
    })

    it('NavCoin coin page assertion', () => {
        cy.prices_coin('NavCoin')
        cy.url().should('include', '/prices/NAV')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "NavCoin")
    })

    it('Substratum Network coin page assertion', () => {
        cy.prices_coin('Substratum Network')
        cy.url().should('include', '/prices/SUB')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Substratum Network")
    })

    it('FunFair coin page assertion', () => {
        cy.prices_coin('FunFair')
        cy.url().should('include', '/prices/FUN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "FunFair")
    })

    it('Skycoin coin page assertion', () => {
        cy.prices_coin('Skycoin')
        cy.url().should('include', '/prices/SKY')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Skycoin")
    })

    it('Iconomi coin page assertion', () => {
        cy.prices_coin('Iconomi')
        cy.url().should('include', '/prices/ICN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Iconomi")
    })

    it('Gnosis coin page assertion', () => {
        cy.prices_coin('Gnosis')
        cy.url().should('include', '/prices/GNO')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Gnosis")
    })

    it('Cryptonex coin page assertion', () => {
        cy.prices_coin('Cryptonex')
        cy.url().should('include', '/prices/CNX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Cryptonex")
    })

    it('Dragonchain coin page assertion', () => {
        cy.prices_coin('Dragonchain')
        cy.url().should('include', '/prices/DRGN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Dragonchain")
    })

    it('Enigma coin page assertion', () => {
        cy.prices_coin('Enigma')
        cy.url().should('include', '/prices/ENG')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Enigma")
    })

    it('Kucoin coin page assertion', () => {
        cy.prices_coin('Kucoin')
        cy.url().should('include', '/prices/KCS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Kucoin")
    })

    it('Request Network coin page assertion', () => {
        cy.prices_coin('Request Network')
        cy.url().should('include', '/prices/REQ')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Request Network")
    })

    it('Crypto.com coin page assertion', () => {
        cy.prices_coin('Crypto.com')
        cy.url().should('include', '/prices/MCO')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Crypto.com")
    })

    it('Bancor Network Token coin page assertion', () => {
        cy.prices_coin('Bancor Network Token')
        cy.url().should('include', '/prices/BNT')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Bancor Network Token")
    })

    it('RadonPay coin page assertion', () => {
        cy.prices_coin('RadonPay')
        cy.url().should('include', '/prices/RDN')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "RadonPay")
    })

    it('Ethos coin page assertion', () => {
        cy.prices_coin('Ethos')
        cy.url().should('include', '/prices/ETHOS')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Ethos")
    })

    it('Einsteinium coin page assertion', () => {
        cy.prices_coin('Einsteinium')
        cy.url().should('include', '/prices/EMC2')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Einsteinium")
    })

    it('BitBay coin page assertion', () => {
        cy.prices_coin('BitBay')
        cy.url().should('include', '/prices/BAY')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "BitBay")
    })

    it('Edgeless coin page assertion', () => {
        cy.prices_coin('Edgeless')
        cy.url().should('include', '/prices/EDG')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Edgeless")
    })

    it('Decentraland coin page assertion', () => {
        cy.prices_coin('Decentraland')
        cy.url().should('include', '/prices/MANA')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "Decentraland")
    })

    it('AdEx coin page assertion', () => {
        cy.prices_coin('AdEx')
        cy.url().should('include', '/prices/ADX')
        cy.get('.offset-3 > .container > .row > :nth-child(2)')
            .should('have.text', "AdEx")
    })
})