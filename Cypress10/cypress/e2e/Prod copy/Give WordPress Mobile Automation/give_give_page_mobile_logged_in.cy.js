/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/login/")
        cy.url()
            .should("include", "/login/")
        cy.get('#user_login')
            .type(Cypress.env('email'))
        cy.get('#user_pass')
            .type(Cypress.env('password'))  
        cy.get("#wp-submit").click();
        cy.url()
            .should("include", "/dashboard/")
        cy.get('#menu-item-10710').first().click()
        cy.get('[class="vc_custom_heading"]').should('have.text', 'Give')   
    })

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        cy.get('h2').should('have.length.gte', 6)
        cy.get('h2').should(($h2) => {
            expect($h2.eq(0), 'h2 First Title')
                .to.contain("Can’t decide who to give to?")
            expect($h2.eq(1), 'h2 Second Title')
                .to.contain("Together")
                .to.contain("We")
                .to.contain("Can")
                .to.contain("Have")
                .to.contain("a")
                .to.contain("Greater")
                .to.contain("Impact")
            expect($h2.eq(2), 'h2 Third Title')
                .to.contain("Receive digital rewards with Give.")
            expect($h2.eq(3), 'h2 Fourth Title')
                .to.contain("Become a part of the global movement.")
            expect($h2.eq(4), 'h2 Fifth Title')
                .to.contain("Learn more about our mission and values.")
            expect($h2.eq(5), 'h2 Sixth Title')
                .to.contain("Do you have a cause we should support?")            
        })

        cy.get('h4').should('have.length.gte', 1)
        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'h4 First Title')
                .to.contain("Let us decide for you!")         
        })

        cy.get('h5').should('have.length.gte', 6)
        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'h5 First Title')
                .to.contain("The Give Blockchain is a global community of philanthropists and concerned citizens who share one unifying vision: a community that empowers and provides support to many important causes around the world.")
            expect($h5.eq(1), 'h5 Second Title')
                .to.contain("Save")
            expect($h5.eq(2), 'h5 Third Title')
                .to.contain("Water")
            expect($h5.eq(3), 'h5 Fourth Title')
                .to.contain("Humanitarian")
            expect($h5.eq(4), "h5 Fifth Title")
                .to.contain('We invite all to submit a proposal for global causes where the Give community can make an impact.')
            expect($h5.eq(5), 'h5 Sixth Title')
                .to.contain("Submit a Proposal")
        })

        cy.get('h6').should('have.length.gte', 1)
        cy.get('h6').should('have.text', "Support. Contribute. Give.")
        
        cy.get('[class="nectar-button jumbo see-through accent-color"]').should('have.text', "Give to Give")

        cy.get('[class="link_text"]').should(($class_link) => {
            expect($class_link.eq(0), 'Slider Link First Text')
                .to.contain("Buy a Give Node")
            expect($class_link.eq(1), 'Slider Link Second Text')
                .to.contain("Register for Free") 
            expect($class_link.eq(2), 'Slider Link Third Text')
                .to.contain("Explore")          
        })

        cy.get('[class="hover-content"]').should(($hover) => {
            expect($hover.eq(0).trigger('mouseover'), 'Save Sponsor')
                .to.have.contain("LEARN MORE")
            expect($hover.eq(1).trigger('mouseover'), 'Water Sponsor')
                .to.have.contain("LEARN MORE")
            expect($hover.eq(2).trigger('mouseover'), 'Humanitarian Sponsor')
                .to.have.contain("LEARN MORE")          
        })

        cy.get('[class="box-link"]')
            .eq(0)
            .should('have.attr', 'href', "/save/")
            .click()
        cy.url()
            .should('include', '/save/')
        cy.go('back')
        cy.get('[class="vc_custom_heading"]').should('have.text', 'Give') 

        cy.get('[class="box-link"]')
            .eq(1)
            .should('have.attr', 'href', "/water/")
            .click()
        cy.url()
            .should('include', '/water/')
        cy.go('back')
        cy.get('[class="vc_custom_heading"]').should('have.text', 'Give') 

        cy.get('[class="box-link"]')
            .eq(2)
            .should('have.attr', 'href', "/humanitarian/")
            .click()
        cy.url()
            .should('include', '/humanitarian/')
        cy.go('back')
        cy.get('[class="vc_custom_heading"]').should('have.text', 'Give') 

        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .click()
        cy.url()
            .should('include', '/give-to-give/')
        cy.go('back')

        cy.get('[class="link_text"]')
            .eq(0)
            .should('have.attr', 'href', "/give-node-information/")
            .click()
        cy.url()
            .should('include', '/give-node-information/')
        cy.go('back')
        cy.get('[class="vc_custom_heading"]').should('have.text', 'Give')
        
        cy.get('[class="link_text"]')
            .eq(1)
            .should('have.attr', 'href', "/lets-give/")
            .click()
        cy.url()
            .should('include', '/lets-give/')
            cy.go('back')
            cy.get('[class="vc_custom_heading"]').should('have.text', 'Give')

        cy.get('[class="link_text"]')
            .eq(2)
            .should('have.attr', 'href', "/mission/")
            // .click()
        // cy.url()
        //     .should('include', '/mission/')
        // cy.go('back')
        // cy.get('[class="vc_custom_heading"]').should('have.text', 'Give')

        // cy.get('[class="link_text nectar_video_lightbox magnific-popup"]')
        //     .should('have.attr', 'href', "/submit-a-proposal/")
        //     .click()
    })

    // it('Document Test - iPhone-x-portrait', () => {
    //     cy.viewport('iphone-x', 'portrait')
        
    // })

    // it('Document Test - iPad-mini-landscape', () => {
    //     cy.viewport('ipad-mini', 'landscape')
        
    // })

    // it('Document Test - iPad-2-landscape', () => {
    //     cy.viewport('ipad-2', 'landscape')
        
    // })

    // it('Document Test - SamsungS10-portrait', () => {
    //     cy.viewport('samsung-s10', 'portrait')
        
    // })

    // it('Document Test - Samsung-Note9-portrait', () => {
    //     cy.viewport('samsung-note9', 'portrait')
        
    // })

    // it('Document Test - iPhone12-portrait', () => {
    //     cy.viewport(390,844, 'portrait')
        
    // })

    // it('Document Test - iPhone12-Mini-portrait', () => {
    //     cy.viewport(390,780, 'portrait')
        
    // })

    // it('Document Test - iPad-Pro-landscape', () => {
    //     cy.viewport(1366,1024, 'landscape')
        
    // })

    // it('Document Test - iPad-Pro-portrait', () => {
    //     cy.viewport(1024,1366, 'portrait')
        
    // })
})