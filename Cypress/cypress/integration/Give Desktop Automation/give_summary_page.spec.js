/// <reference types="cypress" />

describe('Login', () => {
    it('Login Page Accessible', () => {
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
    })

    it('Next Level Rewards Section', () => {
        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");

        // This will be update once the button is wdirecting to the right page

    })

    it('Current Prices Section', () => {
        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));

        // This will cover the Current Prices section
        // Confirms Bitcoin
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");

    })
})
