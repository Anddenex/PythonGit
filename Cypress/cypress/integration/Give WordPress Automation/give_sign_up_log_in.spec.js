/// <reference types="cypress" />

describe('Sign up and Log In Page', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/sign-up/")
        cy.url()
            .should("include", "/sign-up/")
    })

    it('Expecting/Asserting the Log In porition of page', () => {
        cy.get('h2')
            .eq(0)
            .should('have.text', "Log in Now")
        cy.get('p')
            .eq(0)
            .should('have.text', "If you already have a Give account sign in here.")
        cy.get('[class="mp-form-label"]').should(($label) => {
            expect($label.eq(0), 'First Label')
                .to.contain("Username or E-mail")
            expect($label.eq(1), 'Second Label')
                .to.contain("Password")

        })
        cy.get(':nth-child(3) > label')
            .contains(' Remember Me')
            .click()
        cy.get('#wp-submit')
            .should('have.attr', 'value', 'Log In')
        cy.get('[class="mepr-login-actions"]').should(($link_text) => {
            expect($link_text.eq(0), 'First Button Text')
                .to.contain("Forgot Password")
        })
        
        cy.get('#user_login').type(Cypress.env('email'))
        cy.get('#user_pass').type(Cypress.env('password'))
        cy.get('#wp-submit').click()
        cy.url().should('include', '/dashboard/')
    })

    it('Expecting/Asserting the Sign Up porition of page', () => {
        cy.get('h2')
            .eq(1)
            .should('have.text', "Sign Up")
        cy.get('p').should(($p_text) => {
            expect($p_text.eq(1))
                .to.contain("If you DO NOT")
        })

        cy.get('[class="mepr_price_cell_label"]').should(($cell_label) => {
            expect($cell_label.eq(0), 'First Cell Label')
                .to.contain("Price:")
            expect($cell_label.eq(2), 'First Cell Label')
                .to.contain("Your password requires at least:")
        })

        cy.get('.mepr_price_cell').should(($price_cell) => {
            expect($price_cell.eq(0), 'First Price Cell')
                .to.contain("Free")
        })

        cy.get('[class="mp-form-label"]').should(($label) => {
            expect($label.eq(2), 'First Label')
                .to.contain("First Name:*")
            expect($label.eq(3), 'Second Label')
                .to.contain("Last Name:*")
            expect($label.eq(6), 'Third Label')
                .to.contain("Email:*")
            expect($label.eq(7), 'Fourth Label')
                .to.contain("Password:*")
            expect($label.eq(8), 'Third Label')
                .to.contain("Password Confirmation:*")
        })

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(2), 'First paragraph text')
                .to.contain("Your password requires at least:")
        })

        cy.get('li').should(($requirement_text) => {
            expect($requirement_text.eq(0), 'First requirement text')
                .to.contain("8 Characters")
            expect($requirement_text.eq(1), 'First requirement text')
                .to.contain("One uppercase and one lowercase character")
            expect($requirement_text.eq(2), 'First requirement text')
                .to.contain("One special character")
        })

        cy.get('[class="mepr-checkbox-field mepr-form-input"]').should(($privacy_text) => {
            expect($privacy_text, "Privacy Policy text and href attr: ")
                .to.contain('Please read and accept our ')
        })

        cy.get('[class="mepr-checkbox-field mepr-form-input"]').click()

        cy.get('a')
            .eq(2)
            .should('have.text', "Privacy Policy")
            .should('have.attr', 'href', 'https://giveblockchain.io/privacy-policy/')

        cy.get('[class="mepr-submit"]')
            .should('have.value', "Sign Up")
    })

    it('Signin Up for a New Account', () => {

        cy.get('#user_first_name1')
            .type("Andrew")
        cy.get('#user_last_name1')
            .type("Exon")
        cy.get('#user_email1')
            .type(Cypress.env('email'))
        cy.get('#mepr_user_password1')
            .type(Cypress.env('password'))
        cy.get('#mepr_user_password_confirm1')
            .type(Cypress.env('password'))
        cy.get('[class="mepr-checkbox-field mepr-form-input"]').click()
    })
})