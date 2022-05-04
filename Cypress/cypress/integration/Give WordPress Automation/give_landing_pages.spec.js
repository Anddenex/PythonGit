/// <reference types="cypress" />
// When a customer is logged out
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/")
        cy.url()
            .should('include', "giveblockchain")
        cy.get('[class="hover-wrap-inner img-loaded"]')
            .should('have.class', "hover-wrap-inner img-loaded")
         
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.percySnapshot()
        cy.get('[class="nectar-button jumbo see-through accent-color"]').should(($necton) => {
            //expect($necton).to.have.length(3)
            expect($necton.eq(0), 'first button').to.contain('Give')
            expect($necton.eq(1), 'second button').to.contain('Mission')
            expect($necton.eq(2), 'third button').to.contain('Blockchain')
            expect($necton.eq(3), 'fourth button').to.contain('Sign Up Free')
            expect($necton.eq(4), 'fifth button').to.contain('Login')
          })    
    })

    it('Covering the Give button', () => {
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .eq(0)
            .should('have.text', "Give")
            .should('have.attr', 'style', 'margin-right: 15px; margin-left: 15px; visibility: visible; color: rgb(255, 255, 255); border-color: rgba(255, 255, 255, 0.75);')
            .should('have.attr', 'href', "/give-information/")
            .click()
        cy.url()
            .should("include", "/give-information/")
        cy.percySnapshot()
        cy.get('h1').should(($h1) => {
            expect($h1, 'H1 Title').to.contain('Give')
            expect($h1, 'H1 Title').to.have.attr('style', "text-align: center")
          })    
    })

    it('Covering the Mission button', () => {
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .eq(1)
            .should('have.text', "Mission")
            .should('have.attr', 'style', 'margin-right: 15px; margin-left: 15px; border-color: rgba(255, 255, 255, 0.75); color: rgb(255, 255, 255); visibility: visible;')
            .should('have.attr', 'href', "/mission-information/")
            .click()
        cy.url()
            .should("include", "/mission-information/")
        cy.percySnapshot()
        cy.get('h1').should(($h1) => {
            expect($h1, 'H1 Title').to.contain('We Can Make a Change')
          })    
    })

    it('Covering the Blockchain button', () => {
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .eq(2)
            .should('have.text', "Blockchain")
            .should('have.attr', 'style', 'margin-right: 15px; margin-left: 15px; visibility: visible; color: rgb(255, 255, 255); border-color: rgba(255, 255, 255, 0.75);')
            .should('have.attr', 'href', "/give-node-information")
            .click()
        cy.url()
            .should("include", "/give-node-information/")
        cy.percySnapshot()
        cy.get('h4').should(($h4) => {
            expect($h4, 'H4 Title').to.contain('Login to make purchases and give.')
            expect($h4, 'style assert').to.have.attr('style', "text-align: center;")
          })    
    })
})