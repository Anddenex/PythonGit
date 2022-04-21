/// <reference types="cypress" />

describe('Login to Progressive Web App (PWA) ', () => {
    it('App Login', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.wait(2000);
        cy.get("[data-cy='nav-inventory']").click();
        cy.wait(2000);

    })
})