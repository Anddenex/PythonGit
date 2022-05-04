/// <reference types="cypress" />

describe('Login', () => {
    it('Login and Confirm Page Loaded', () => {
        // WordPress log in logs you into the Dashboard rather than Summary or Balances
        cy.visit("https://connectunited.com/connect-to-friends/");
        cy.wait(1000);
        cy.get(".dark-version.default-logo").click();
        cy.get("#user_login")
            .type(Cypress.env('email'))
            .should('have.value', Cypress.env('email'));
        cy.get("#user_pass")
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'));
        cy.get("#wp-submit")
            .click();       
    })
})