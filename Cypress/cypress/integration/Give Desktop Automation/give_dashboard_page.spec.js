/// <reference types="cypress" />

describe('Login', () => {
    it('Covering the Dashboard Page "My Balance"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-3 one-fourths clear-both'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("MY BALANCE");
        cy.get("a[href='https://app.giveblockchain.io/inventory']").click();
    })

    it('Covering the Dashboard Page "My Licenses"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-4 one-fourths right-edge'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("MY LICENSES");
        cy.get("a[href='https://app.giveblockchain.io/nodes']").click();
    })

    it('Covering the Dashboard Page "My Vault"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-5 one-fourths clear-both'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("MY VAULT");
        cy.get("a[href='https://app.giveblockchain.io/vault']").click();
    })

    it('Covering the Share Page "Share Give"', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-6 one-fourths right-edge'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("SHARE GIVE");
        // cy.get("a[href='https://app.giveblockchain.io/vault']").click(); ... Currently not working
    })

    it('Covering the text section', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();
        cy.get("body > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
            .contains("Notice");
        cy.get("body > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > p:nth-child(1)")
            .contains("Your Node and Smart Node licenses will be available in your app in 30-180 days from purchase.");
        cy.get("body > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > p:nth-child(1)")
            .contains("Download Give Node Software. Works with Give Node and Give Smart Node Licences.");
        cy.get("body > div:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > p:nth-child(1)")
            .contains("You must fill out the Terms and Conditions before installing any software.");
    })
})