/// <reference types="cypress" />

describe('Login', () => {
    it('Covering the Dashboard Page "My Balance"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login")
            .type(Cypress.env('email'));
        cy.get("#user_pass")
            .type(Cypress.env('password'));
        cy.get("#wp-submit")
            .click();
        cy.get("#text-2")
            .contains("Who Are We");
        cy.get("#text-3")
            .contains("What We Do");
        cy.get("#text-7")
            .contains("How We Do It");
        cy.get("#text-5")
            .contains("Follow Us");
        cy.get("#menu-item-8983")
            .click();
        cy.get("h4")
            .should('have.text', "Privacy Policy");
        cy.get("#menu-item-9389")
            .click();
        cy.get("h3")
            .should('have.text', "Terms of Use");
        cy.get("#menu-item-9615")
            .click();
        cy.get(".wpb_text_column > .wpb_wrapper > h3")
            .should('have.text', "The Give App");
        cy.get("#menu-item-9613")
            .click();
        cy.get(":nth-child(3) > .wpb_wrapper > h3")
            .should('have.text', "Give Node");
        cy.get("#menu-item-9609")
            .click();
        cy.get(".vc_custom_heading")
            .should('have.text', "Meet the Give Team");
        cy.get("#menu-item-9608")
            .click();
        cy.get("h1")
            .should('have.text', "We Can Make a Change");
        cy.get("#wpforms-8980-field_1")
            .click()
            .type("aexon@nerdunited.com")
            .should('have.value', "aexon@nerdunited.com");
    })
})