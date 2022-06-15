/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-app-information/")
        cy.url()
            .should("include", "/give-app-information/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        // cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
        //     expect($button.eq(0), 'First button text')
        //         .to.contain("Get The Give App Free")
        //     expect($button.eq(1), 'Second button text')
        //         .to.contain("Get The Give App Free")
        // }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Login to make purchases and give.")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("Give Node")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("$25")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 
        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]').should(($necton) => {
            expect($necton.eq(0), 'Login button')
                .to.contain('Login')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; visibility: visible;")
                .to.have.attr('href', "/login/")
                .to.have.attr('data-hover-text-color-override', "#fff")
            expect($necton.eq(1), 'Sign Up Free button')
                .to.contain('Sign Up Free')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; visibility: visible;")
                .to.have.attr('href', "/lets-give/")
                .to.have.attr('data-hover-text-color-override', "#fff")
            })
    })

    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="nectar-button large see-through-2 "]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large see-through-2 "]')
            .eq(1)
            .click()
                // Login and Sign up Section tests
                cy.get('h4')
                .eq(0)
                .should('have.text', "Login to make purchases and give.")
                .should('have.attr', 'style', "text-align: center;")
        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', '/login')
        cy.get('h5')
            .should('have.text', "Login to access your account:")
        cy.go('back')
        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', '/lets-give/')
        cy.get('h5')
            .should('have.text', "Join The Movement")

    })
})