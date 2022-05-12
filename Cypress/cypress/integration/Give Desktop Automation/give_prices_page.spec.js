/// <reference types="cypress" />

describe('Login', () => {
    it('Covering the Dashboard Page "My Balance"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login")
            .type(Cypress.env('email'))
            .should('have.value', Cypress.env('email'));
        cy.get("#user_pass")
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'));
        cy.get("#wp-submit")
            .click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-3 one-fourths clear-both'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("MY BALANCE");
        cy.get("a[href='https://app.giveblockchain.io/inventory']").click();
        cy.get("[data-cy='nav-summary']")
            .click();
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get(".v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon")
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");
        cy.get(".v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon")
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");
        cy.get(".v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon")
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");
        cy.get(".v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon")
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");
        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })
})