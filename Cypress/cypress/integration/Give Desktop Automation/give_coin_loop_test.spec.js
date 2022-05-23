/// <reference types="cypress" />

describe('First 30 Coins Loop Assertion...', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get('[type="button"]')
            .eq(2)
            .click()
        cy.wait(1000)
      })
    it('First List of Coins Assertions....', () => {
        let coin_names = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin', 'Cardano', 'Gala', 'IOTA', 'Dash', 'NEM', 'Monero', 'EOS', 'Bitcoin Gold', 'NEO', 'QTUM', 'Stellar', 'Ethereum Classic', 'Lisk', 'TRON', 'Verge', 'ICON Project', 'ZCash', 'Ardor', 'OmiseGo', 'Bitshares', 'Tether', 'Populous', 'Waves', 'Nxt', 'ByteCoin', 'Dogecoin', 'Komodo'];
        for (var j = 0; j < coin_names.length; j++) {
            let name = coin_names[j];
            cy.log('Current Coin being tested', name);
            cy.prices_coin(name)
            cy.get('.offset-3 > .container > .row > :nth-child(2)')
                .should('have.text', name)
            cy.go('back')
        }
    })

    it('Second List of Coins Assertions....', () => {
        let coin_names = ['Binance Coin', 'Salt Lending', 'Siacoin', 'Augur', 'Steem', 'Golem Network Token', 'ARK', 'Veritaseum', 'Private Instant Verified Transaction', 'MonaCoin', 'Decred', 'DigiByte'];
        for (var j = 0; j < coin_names.length; j++) {
            let name = coin_names[j];
            cy.log('Current Coin being tested', name);
            cy.prices_coin(name)
            cy.get('.offset-3 > .container > .row > :nth-child(2)')
                .should('have.text', name)
            cy.go('back')
        }
    })

    it('Third List of 30 Coins Assertions....', () => {
        let coin_names = ['Vechain', 'Status Network Token', 'MaidSafe Coin', 'SysCoin', 'Electroneum', 'Obyte'];
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