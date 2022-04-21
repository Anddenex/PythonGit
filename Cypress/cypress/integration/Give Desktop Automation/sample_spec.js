/// <reference types="cypress" />

describe('Login', () => {
    it('Login and Check Menu Navigation', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        // Checking the Inventory Nav
        cy.get("[data-cy='nav-inventory']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            //expect($balance_title.text()).to.eq("Balances");
        })
        cy.wait(5000);
    })

    it('Login and Check Menu Navigation', () => {
        // Checking the Nodes Nav
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("[data-cy='nav-nodes']").click();
        cy.get("a[data-cy='nav-nodes'] span[class='v-btn__content']").should($nodemenu => {
            console.log($nodemenu.text());
            // expect($nodemenu.text()).to.eq("Nodes");
        })
        cy.wait(5000);

    })

    it('Login and Check Menu Navigation', () => {
        // Checking the Vault Nav
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("[data-cy='nav-vault']").click();
        cy.get("a[data-cy='nav-vault'] span[class='v-btn__content']").should($vaultmenu => {
            console.log($vaultmenu.text());
            // expect($vaultmenu.text()).to.eq("Vault");
        })
        cy.wait(5000);

    })

    it('Login and Check Menu Navigation', () => {
        // Checking the Summary Nav
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("[data-cy='nav-summary']").click();
        cy.get("a[data-cy='nav-summary'] span[class='v-btn__content']").should($summarymenu => {
            console.log($summarymenu.text());
            // expect($summarymenu.text()).to.eq("Summary");
        })
        cy.wait(5000);

    })

    it('Login and Check Menu Navigation', () => {
        // Checking the Dashboard Nav
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("a[class='v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text'] span[class='v-btn__content']").click();
        cy.get("a[class='v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text'] span[class='v-btn__content']").should($dashboardmenu => {
            console.log($dashboardmenu.text());
            // expect($dashboardmenu.text()).to.eq("Dashboard");
        })
        cy.wait(5000);

    })
})