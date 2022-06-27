/// <reference types="cypress" />

describe('Login', () => {
    // Custom code to log in to Give App
    it('Asserting the Form Functions Work', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    // Custom code to log in to Give WordPress
    it('Asserting the Form Functions Work', () => {
        cy.wordpresslogin(Cypress.env('email'), Cypress.env('password'))
    })

    // Custom code to confirm coin for /prices page
    it('Asserting Searching for Coin', () => {
        cy.prices_search('Gala')
    })

    // One line of code for a custom command that can be used over and over
    it('Asserting the Form Functions Work for Creating an Account: ', () => {
        cy.create_account(Cypress.env('first_name'), Cypress.env('last_name'), Cypress.env('newemail'), Cypress.env('newpassword'), Cypress.env('confirm_password'))
    })

    it('First List of Coins Assertions....', () => {
        let coin_names = ['Bitcoin', 'Ethereum', 'XRP', 'Bitcoin Cash', 'Litecoin', 'Cardano', 'Gala', 'IOTA', 'Dash', 'NEM', 'Monero', 'EOS', 'Bitcoin Gold', 'NEO', 'QTUM', 'Stellar', 'Ethereum Classic', 'Lisk', 'TRON', 'Verge', 'ICON Project', 'ZCash', 'Ardor', 'OmiseGo', 'Bitshares', 'Tether', 'Populous', 'Waves', 'Nxt', 'ByteCoin', 'Dogecoin', 'Komodo'];
        for (var j = 0; j < coin_names.length; j++) {
            let name = coin_names[j];
            cy.log('Current Coin being tested', name);
            cy.prices_coin(name)
            cy.get('.offset-3 > .container > .row > :nth-child(2)')
                .should('have.text', name)
            cy.get('[type="button"]').click()
            // cy.go('back')
        }
    })
})