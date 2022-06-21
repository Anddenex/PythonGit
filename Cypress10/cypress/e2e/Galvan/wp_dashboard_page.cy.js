/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://galvan.health/log-in/");
        cy.get('#user_login').type(Cypress.env('galvanemail'));
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
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'h3 First Title')
                .to.contain("Notice")
        }) 
        cy.get('h4').should('be.visible').and('have.length.gte', 2)
        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'H4 First Title')
                .to.contain("Quick Links")
            expect($h4.eq(1), 'H4 First Title')
                .to.contain("My Account")
        }) 
        cy.get('p').should('be.visible').and('have.length.gte', 6)
        cy.get('p').should(($p) => {
            expect($p.eq(0), 'First Paragraph')
                .to.contain("Your Galvan Smart Node and Node licenses will be available in your app in 30-180 days from purchase.")
            expect($p.eq(1), 'Second Paragraph')
                .to.contain("You can download the Galvan Node Software on your Mac or PC, or run it on a VPS server.")
            expect($p.eq(2), 'Third Paragraph')
                .to.contain("You must fill out the Terms and Conditions before installing any software.")
            expect($p.eq(3), 'Fourth Paragraph')
                .to.contain("The information on this website is not meant to be a substitute for advice provided by a doctor or another qualified healthcare provider. Individuals should always consult with a doctor for professional medical advice, diagnosis, or treatment.")
            expect($p.eq(4), 'Fifth Paragraph')
                .to.contain("©2022 GALVAN DAO LLC    |   All Rights Reserved")
            expect($p.eq(5), 'Sixth Paragraph')
                .to.contain("©2022 GALVAN DAO, LLC")
        }) 
        cy.get('h6').should('be.visible').and('have.length.gte', 8)
        cy.get('h6').should(($h6) => {
            expect($h6.eq(0), 'h6 First Title')
                .to.contain("GALVAN DASHBOARD")
            expect($h6.eq(1), 'h6 Second Title')
                .to.contain("JOIN DISCORD")
            expect($h6.eq(2), 'h6 Third Title')
                .to.contain("BOOK A DEMO")
            expect($h6.eq(3), 'h6 Fourth Title')
                .to.contain("BUY SMART NODE")
            expect($h6.eq(4), 'h6 Fifth Title')
                .to.contain("BUY LITE NODE")
            expect($h6.eq(5), 'h6 Sixth Title')
                .to.contain("DOWNLOAD NODE SOFTWARE")
            expect($h6.eq(6), 'h6 Seventh Title')
                .to.contain("SHARE GALVAN")
            expect($h6.eq(7), 'h6 Eigth Title')
                .to.contain("NODE SOFTWARE DOWNLOAD + VPS")
        }) 
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('[class="column-link"]')
            .eq(0)
            .should('have.attr', "href", 'https://app.galvan.health/')
            .click()
        cy.url()
            .should('include', "app.galvan.health/")
        cy.get('[class="v-btn__content"]')
            .should('be.visible')
        cy.get('[class="v-btn__content"]')
            .eq(0)
            .click()

        cy.get('[class="column-link"]')
            .eq(1)
            .should('have.attr', "href", 'https://discord.com/invite/gVtqF5RQ7m')

        cy.get('[class="column-link"]')
            .eq(2)
            .should('have.attr', "href", '/book-demo/')
            .click()
        cy.url()
            .should('include', "/book-demo/")
        cy.get('h2').should('have.text', 'Book a Demo With Us')
        cy.go('back')

        cy.get('[class="column-link"]')
            .eq(3)
            .should('have.attr', "href", '/register-smart-node/')
            .click()
        cy.url()
            .should('include', "/register-smart-node/")
        cy.get('h5').should('have.text', 'BUY SMART NODE')
        cy.go('back')

        cy.get('[class="column-link"]')
            .eq(4)
            .should('have.attr', "href", '/register-node/')
            .click()
        cy.url()
            .should('include', "/register-node/")
        cy.get('h5').should('have.text', 'BUY LITE NODE')
        cy.go('back')

        cy.get('[class="column-link"]')
            .eq(5)
            .should('have.attr', "href", '#download')
            .click()

        cy.get('[class="column-link"]')
            .eq(6)
            .click()
        cy.get('[class="v-card__title text-h6 text-sm-h5"]').should('have.text', 'Share with your Friends!')
        cy.go('back')
    })

})