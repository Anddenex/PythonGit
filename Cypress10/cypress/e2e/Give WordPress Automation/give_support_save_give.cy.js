/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/save-give/")
        cy.url()
            .should("include", "/save-give/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('Support Save')

        }) 
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Give $25")
            expect($h5.eq(1), 'Second title text')
                .to.contain("Give $50")
            expect($h5.eq(2), 'Third title text')
                .to.contain("Give $100")
            expect($h5.eq(3), 'Fourth title text')
                .to.contain("Give $500")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The global Give community is working with some of the world’s top nonprofit foundations and charities to fight against human trafficking. We invite you to join us in our pursuit toward ending this evil scourge and human suffering.")
        }) 
    })

    // The links are going to 404 pages right now. So, I'm not asserting anything on that page except that it opens
    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="box-link"]')
            .eq(0)
            .should('have.attr', 'href', "/save-25/")
            .click()
        cy.url().should('include', "/save-25/")
        cy.get('h5')
            .should('have.text', "Save")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(1)
            .should('have.attr', 'href', "/save-50/")
            .click()
        cy.url().should('include', "/save-50/")
        cy.get('h5')
            .should('have.text', "Save")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(2)
            .should('have.attr', 'href', "/save-100/")
            .click()
        cy.url().should('include', "/save-100/")
        cy.get('h5')
            .should('have.text', "Save")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(3)
            .should('have.attr', 'href', "/save-500/")
            .click()
        cy.url().should('include', "/save-500/")
        cy.get('h5')
            .should('have.text', "Save")
        cy.go('back')
    })
})