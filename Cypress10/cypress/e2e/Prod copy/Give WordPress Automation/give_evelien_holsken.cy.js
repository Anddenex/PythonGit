/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/givers-evelien-holsken/")
        cy.url()
            .should("include", "/givers-evelien-holsken/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('Give to Evelien Hölsken')

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
                .to.contain("Giving to Evelein helps lighten her personal responsibility so she can concentrate her focus on ending child exploitation and providing hope for the girls rescued.")
        }) 
    })

    // The links are going to 404 pages right now. So, I'm not asserting anything on that page except that it opens
    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="box-link"]')
            .eq(0)
            .should('have.attr', 'href', "/givers-evelien-holsken-25/")
            .click()
        cy.url().should('include', "/givers-evelien-holsken-25/")
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Givers – Evelien Hölsken")
        }) 
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(1)
            .should('have.attr', 'href', "/givers-evelien-holsken-50/")
            .click()
        cy.url().should('include', "/givers-evelien-holsken-50/")
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Givers – Evelien Hölsken")
        }) 
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(2)
            .should('have.attr', 'href', "/givers-evelien-holsken-100/")
            .click()
        cy.url().should('include', "/givers-evelien-holsken-100/")
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Givers – Evelien Hölsken")
        }) 
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(3)
            .should('have.attr', 'href', "/givers-evelien-holsken-500/")
            .click()
        cy.url().should('include', "/givers-evelien-holsken-500/")
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Givers – Evelien Hölsken")
        }) 
        cy.go('back')
    })
})