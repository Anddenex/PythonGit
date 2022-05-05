/// <reference types="cypress" />
// When a customer is logged out
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-information/")
        cy.url()
            .should("include", "/give-information/")
       // cy.percySnapshot()
        cy.get('h1').should(($h1) => {
            expect($h1, 'H1 Title').to.contain('Give')
            expect($h1, 'H1 Title').to.have.attr('style', "text-align: center")
          })    
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.get('h5')
            .contains("The Give Blockchain is a global community of philanthropists and concerned citizens who share one unifying vision: a community that empowers and provides support to many important causes around the world.")
            .should('have.attr', 'style', "text-align: center;")
        cy.get('h4')
            .should('have.text', "Login to make purchases and give.")
            .should('have.attr', 'style', "text-align: center;")
        cy.get('[class="nectar-button jumbo regular regular-button"]').should(($necton) => {
            //expect($necton).to.have.length(3)
            expect($necton.eq(0), 'Login button')
                .to.contain('Login')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; color: rgb(239, 61, 57); background-color: rgb(255, 255, 255); visibility: visible;")
                .to.have.attr('href', "/login/")
                .to.have.attr('data-color-override', "#ffffff")
                .to.have.attr('data-hover-text-color-override', "#fff")
            expect($necton.eq(1), 'Sign Up Free button')
                .to.contain('Sign Up Free')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; color: rgb(239, 61, 57); background-color: rgb(255, 255, 255); visibility: visible;")
                .to.have.attr('href', "/lets-give/")
                .to.have.attr('data-color-override', "#ffffff")
                .to.have.attr('data-hover-text-color-override', "#fff")
            })   
    })

    it('Confirming/Asserting the three sponsor cards', () => {
        cy.get('[class="cell is-selected"]').should(($cell) => {
            expect($cell.eq(0), 'Save Sponsor')
                .to.have.attr('style', "position: absolute; left: 0%; height: 400px;")
            expect($cell.eq(1), 'Water Sponsor')
                .to.have.attr('style', "position: absolute; left: 34.46%; height: 400px;")
            expect($cell.eq(2), 'Humanitarian Sponsor')
                .to.have.attr('style', "position: absolute; left: 68.92%; height: 400px;")
            })   
        // Confirming "Save" Sponsor divs/classes attributes
        cy.get('[class="nectar-fancy-box using-img "]')
            .should('have.attr', 'style', "min-height: 400px")
            .should('have.attr', 'data-color', "extra-color-3")   
        cy.get('[class="box-link"]')
            .should('have.attr', 'href', "/save-information/")
    })
})