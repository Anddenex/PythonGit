/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/humanitarian-give/")
        cy.url()
            .should("include", "/humanitarian-give/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('Support Humanitarian')

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
                .to.contain("We create meaningful cultural and service experiences for humanitarian participants, execute impactful and sustainable change for communities in need at home and around the world, and grant service scholarships for deserving families to ROAM with purpose")
        }) 
    })

    // The links are going to 404 pages right now. So, I'm not asserting anything on that page except that it opens
    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="box-link"]')
            .eq(0)
            .should('have.attr', 'href', "/humanitarian-25/")
            .click()
        cy.url().should('include', "/humanitarian-25/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(1)
            .click()
        cy.url().should('include', "/humanitarian-50/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(2)
            .click()
        cy.url().should('include', "/humanitarian-100/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(3)
            .click()
        cy.url().should('include', "/humanitarian-500/")
        cy.go('back')
    })
})