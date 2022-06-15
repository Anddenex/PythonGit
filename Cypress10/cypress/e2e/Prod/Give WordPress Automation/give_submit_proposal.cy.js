/// <reference types="cypress" />
// When a customer is logged out

describe('Login', () => {
    beforeEach(() => {
        cy.wordpresslogin(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://giveblockchain.io/submit-a-proposal/")
        cy.url()
            .should("include", "/submit-a-proposal/")
    })

    it('Expecting/Asserting all text on the page', () => {

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain('Your Details ')
            expect($h3.eq(1), 'H3 Second Title')
                .to.contain('Organization Details')
        }) 

        cy.get('[class="wpforms-field-label"]').should(($field_labels) => {
            expect($field_labels.eq(0), 'Field Label First title text')
                .to.contain("Name ")
            expect($field_labels.eq(1), 'Field Label Second title text')
                .to.contain("Email ")
            expect($field_labels.eq(2), 'Field Label Third title text')
                .to.contain("Organization Name ")
            expect($field_labels.eq(3), 'Field Label Fourth title text')
                .to.contain("Reason to Give ")
            expect($field_labels.eq(4), 'Field Label Fifth title text')
                .to.contain("Do you have the Organization details ")
        })

        cy.get('[class="wpforms-field-sublabel after "]').should(($field_sublabel) => {
            expect($field_sublabel.eq(0), 'First sublabel text')
                .to.contain("First")
            expect($field_sublabel.eq(1), 'Second sublabel text')
                .to.contain("Last")
        })

        cy.get('[class="wpforms-field-label-inline"]').should(($field_inline) => {
            expect($field_inline.eq(0), 'First radio button text')
                .to.contain("Yes")
            expect($field_inline.eq(1), 'Second radio button text')
                .to.contain("No")
        })

        cy.get('[class="wpforms-submit"]').should(($button) => {
            expect($button.eq(0), 'Button text')
                .to.contain("Submit")        
        }) 
    })

    it('Expecting/Asserting input fields', () => {

        cy.get('#wpforms-9716-field_2')
            .type("Andrew")
        cy.get('#wpforms-9716-field_2-last')
            .type("Exon")
        cy.get('#wpforms-9716-field_3')
            .type(Cypress.env('email'))
        cy.get('#wpforms-9716-field_5')
            .type("Nerd United")
        cy.get('#wpforms-9716-field_6')
            .type("This is a QA test for this form, which can be ignored.")
        cy.get('#wpforms-9716-field_7_1')
            .click()
        cy.get('#wpforms-9716-field_7_2')
            .click()
        cy.get('#wpforms-submit-9716')
            .click()
        cy.wait(500)
        cy.get('#wpforms-confirmation-9716 > p')
            .should('have.text', "Thanks for contacting us! We will be in touch with you shortly.")
    })
})