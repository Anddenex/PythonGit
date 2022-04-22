/// <reference types="cypress" />

describe('Login', () => {
    it('Login and Confirm Page Loaded', () => {
        // WordPress log in logs you into the Dashboard rather than Summary or Balances
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login").type(Cypress.env('email'));
        cy.get("#user_pass").type(Cypress.env('password'));
        cy.get("#wp-submit").click();   
        cy.visit('inventory')  
        cy.get("div[class='v-card__title']").contains("Balances")       
    })



})