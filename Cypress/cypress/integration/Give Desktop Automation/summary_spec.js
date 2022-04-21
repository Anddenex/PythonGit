/// <reference types="cypress" />

describe('Login', () => {
    it('Login Page Accessible', () => {
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));

    })

})
