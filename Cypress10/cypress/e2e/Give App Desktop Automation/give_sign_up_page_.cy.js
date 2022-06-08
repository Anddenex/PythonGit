/// <reference types="cypress" />

describe('Login', () => {
    it('Asserting Text is Accurate', () => {
        cy.visit("https://giveblockchain.io/lets-give/");
        cy.get("h5")
            .should('have.text', "Join The Movement");
        cy.get(":nth-child(4) > .mepr_price_cell_label")
            .should('have.text', "Price:");
        cy.get(".mepr_price_cell")
            .contains("Free");
        cy.get(".mepr_first_name > .mp-form-label > label")
            .should('have.text', "First Name:*");
        cy.get(".mepr_last_name > .mp-form-label > label")
            .should('have.text', "Last Name:*");
        cy.get(".mepr_email > .mp-form-label > label")
            .should('have.text', "Email:*");
        cy.get(".mepr_password > .mp-form-label > label")
            .should('have.text', "Password:*");
        cy.get(".mepr_password_confirm > .mp-form-label > label")
            .should('have.text', "Password Confirmation:*");
        cy.get(".mepr_price_cell_label > :nth-child(1)")
            .contains("Your password requires at least:");
        cy.get("[style='margin-top:-20px;']")
            .should('have.text', "8 Characters");
        cy.get("[style='font-size:12px;'] > :nth-child(2)")
            .should('have.text', "One uppercase and one lowercase character");
        cy.get("[style='font-size:12px;'] > :nth-child(3)")
            .should('have.text', "One special character");
        cy.get(".mepr-checkbox-field")
            .contains("Please read and accept our Privacy Policy.");
    })

    it('Asserting the Form Functions Work', () => {
        cy.create_account(Cypress.env('first_name'), Cypress.env('last_name'), Cypress.env('newemail'), Cypress.env('newpassword'), Cypress.env('confirm_password'))
    })
})