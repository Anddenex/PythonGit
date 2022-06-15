/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://galvan.health/log-in/");
        cy.get('#user_login').type(Cypress.env('email'));
        cy.get('#user_pass').type(Cypress.env('password'));
        cy.get('.dashicons').click();
        cy.get('#wp-submit').click();
        cy.url()
            .should("include", "/member-welcome/") 
    })

    it('Document Test - Title Properties', () => {
        cy.document().should(doc => {
            const titleText = doc.title
            const charsetText = doc.characterSet
            expect(titleText).to.eql('Galvan')
            expect(charsetText).to.eql('UTF-8')
        })
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h4').should('be.visible').and('have.length.gte', 20)
        cy.get('p').should('be.visible').and('have.length.gte', 20)
        cy.get('h6').should('be.visible').and('have.length.gte', 20)
        // cy.get('h3').should(($h3) => {
        //     expect($h3.eq(0), 'H3 First Title')
        //         .to.contain("Notice")
        // }) 

        // cy.get('h6').should(($h6) => {
        //     expect($h6.eq(0), 'First title text')
        //         .to.contain("MY BALANCE")
 
        // }) 

        // cy.get('p').should(($para) => {
        //     expect($para.eq(0), 'First paragraph text')
        //         .to.contain("Your Node and Smart Node licenses will be available in your app in 30-180 days from purchase.")
        //     expect($para.eq(1), 'Second paragraph text')
        //         .to.contain("Download Give Node Software. Works with Give Node and Give Smart Node Licences.")            
        //     expect($para.eq(2), 'Third paragraph text')
        //         .to.contain("You must fill out the Terms and Conditions before installing any software.")                    
        // }) 
    })

})