/// <reference types="cypress" />

describe('Login', () => {
    it('Login Page Accessible', () => {
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get(".v-card__text.justify-center.text-center")
            .contains("Send BTC to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
        cy.get(".v-card__text.justify-center.text-center")
            .contains("Send ETH to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get(".v-card__text.justify-center.text-center")
            .contains("Send GALA to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click();
        // cy.get("[class='v-responsive__content']")
        //     .eq(3)
        //     .click();
        // cy.get(".v-card__text.justify-center.text-center").contains("Send GALVAN to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get(".v-card__text.justify-center.text-center")
            .contains("Send GREEN to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        // cy.get(".v-card__text.justify-center.text-center").contains("Send WIN to your address:");
        cy.get("[data-cy='nav-inventory']")
            .click();
    })
})
