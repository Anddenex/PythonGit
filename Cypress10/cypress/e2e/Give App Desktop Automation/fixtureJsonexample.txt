/// <reference types="cypress" />

describe('Login', () => {
    it('Login and Confirm Page Loaded', () => {
        cy.visit("https://giveblockchain.io/login/");
        cy.fixture("userData.json").then((user)=>{
            cy.get("#user_login").type(user.email);
            cy.get("#user_pass").type(user.password);
            cy.get("#wp-submit").click();            
        })
    })
})