/// <reference types="cypress" />
// When a customer is logged in
describe('Give to Give Page', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-to-give/")
        cy.url()
            .should("include", "/give-to-give/")     
    })

    it('Expecting/Asserting for all text on page', () => { 
        cy.get('h3')
            .should('have.text', "Support Give")
        // cy.get('.wpb_wrapper > p').should(($para) => {
        //     expect($para, 'First para text')
        //         .to.contain('have.text', "Not sure which organization to give to? We can do the hard part for you! Give to Give and we will make sure your contribution gets into the hands of one of the amazing organizations we support.")
        // }) 
        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Give $25")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Give $50")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give $100")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Give $500")
        }) 
    })

    it('Expecting/Asserting for all text on page', () => {
        cy.get('[class="box-link"]')
            .eq(0)
            .click()
        cy.url().should('include', ".io/give-25/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(1)
            .click()
        cy.url().should('include', ".io/give-50/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(2)
            .click()
        cy.url().should('include', ".io/give-100/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(3)
            .click()
        cy.url().should('include', ".io/give-500/")
        cy.go('back')
    })
})