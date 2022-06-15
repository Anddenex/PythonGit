/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-thank-you/")
        cy.url()
            .should("include", "/give-thank-you/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h1')
            .should('have.text', "THANK YOU! ")

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain(', thank you for using the power of the decentralized blockchain to support Give through your generous gift. All of us here at Give are thrilled to have your support!')
            expect($features_para.eq(1), 'First paragraph text')
                .to.contain('We have been able to continue to contribute to the charities we sponsor and continue working towards realizing the full potential of the blockchain through your generous giving to support Give.')
            expect($features_para.eq(2), 'First paragraph text')
                .to.contain('Thank you again, your willingness to support Give and so many others makes all the difference.')
            expect($features_para.eq(3), 'First paragraph text')
                .to.contain('Sincerely,')
        }) 

        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Go to Dashboard")
        }) 
    })

    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]')
            .click()
        cy.url().should('include', "giveblockchain.io/dashboard/")
    })
})