/// <reference types="cypress" />
// When a customer is logged out

describe('Login', () => {
    beforeEach(() => {
        cy.wordpresslogin(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://giveblockchain.io/light/")
        cy.url()
            .should("include", "/light/")
    })

    it('Expecting/Asserting all text on the page', () => {
        cy.get('h1').should(($h1) => {
            expect($h1.eq(0), 'h1 First Title')
                .to.contain("Light")
        }) 

        // The numbers aren't registering for some reason, looking further into it.
        cy.get('h2').should(($h2) => {
            expect($h2.eq(0), 'h2 First Title')
                .to.contain('GIVE')
            // expect($h2.eq(1), 'h2 Second Title')
            //     .to.contain('6,010')
            // expect($h2.eq(2), 'h2 Third Title')
            //     .to.contain('9')
            // expect($h2.eq(3), 'h2 Fourth Title')
            //     .to.contain('1')
            expect($h2.eq(4), 'h2 Fifth Title')
                .to.contain('HOW WE SERVE')
            expect($h2.eq(5), 'h2 Fifth Title')
                .to.contain('Are you ready to')
        })

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain('MISSION')
            expect($h3.eq(1), 'H3 Second Title')
                .to.contain('OBJECTIVES')
            expect($h3.eq(2), 'H3 Third Title')
                .to.contain('WHY GREEN?')
        }) 

        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'h4 First title text')
                .to.contain("Our community combats poverty by providing access to electricity and sustainable power around the world. Partnering with organizations that promote affordable, reliable, and sustainable energy, we can collectively impact those in need.")
            expect($h4.eq(1), 'h4 Second title text')
                .to.contain("Sponsoring:")
            expect($h4.eq(2), 'h4 Third title text')
                .to.contain("Honor Fallen Veterans")
            expect($h4.eq(3), 'h4 Fourth title text')
                .to.contain("Help Families")
            expect($h4.eq(4), 'h4 Fifth title text')
                .to.contain("Share Solar")
            // expect($h4.eq(5), 'h4 Sixth title text')
            //     .to.contain("Are you ready to")
        })

        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("Your contribution ensures that families of fallen veterans have access to free power in their homes.")
            expect($h5.eq(1), 'Second title text')
                .to.contain("Give $25")
            expect($h5.eq(2), 'Third title text')
                .to.contain("Give $50")
            expect($h5.eq(3), 'Fourth title text')
                .to.contain("Give $100")
            expect($h5.eq(4), 'Fifth title text')
                .to.contain("Give $500")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("Green Solar has committed to give back to families around the globe. We provide families of fallen veterans free power to their homes. We hope that through this small act we are able to honor their fallen loved ones and lighten some financial burden.")
            // expect($features_para.eq(1), 'Second paragraph text')
            //     .to.contain("")
            // expect($features_para.eq(2), 'Third paragraph text')
            //     .to.contain("")            
            // expect($features_para.eq(3), 'Fourth paragraph text')
            //     .to.contain("")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("We honor fallen veterans by serving their families with the hope of lessoning the heavy burden of loosing a loved one.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("We help families of fallen veterans by providing a solar system for their homes at no cost.")            
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Our goal is to share renewable power across the globe and make energy more affordable one family at a time.")            
            expect($features_para.eq(7), 'Eigth paragraph text')
                .to.contain("Contribute to Light.")            
            // expect($features_para.eq(8), 'Ninth paragraph text')
            //     .to.contain("")            
            // expect($features_para.eq(9), 'Tenth paragraph text')
            //     .to.contain("")
        })

        cy.get('[class="subject"]').should(($subject) => {
            expect($subject.eq(0), 'First subject text')
                .to.contain("FAMILIES SERVED")
            expect($subject.eq(1), 'Second subject text')
                .to.contain("DOLLARS TO BUY ONE SOLAR SYSTEM")
            expect($subject.eq(2), 'Third subject text')
                .to.contain("PERSON IS ALL IT TAKES TO INFLUENCE CHANGE")
        })

        cy.get('[class="nectar-button large regular has-icon regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("GIVE NOW")
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW") 
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW") 
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")      
        }) 
    })

    it('Expecting/Asserting button clicks are working and accurate', () => {
        cy.get('[class="nectar-button large regular has-icon regular-button"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', "/light-give/")
        cy.get('h3').should(($h3) => {
            expect($h3, 'H3 First Title')
                .to.contain('Support Light')
        })
        cy.go('back')
        cy.get('[class="nectar-button large regular has-icon regular-button"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', "/light-give/")
        cy.get('h3').should(($h3) => {
            expect($h3, 'H3 First Title')
                .to.contain('Support Light')
        })
        cy.go('back')
        cy.get('[class="nectar-button large regular has-icon regular-button"]')
            .eq(2)
            .click()
        cy.url()
            .should('include', '/light-give/')
        cy.get('h3').should(($h3) => {
            expect($h3, 'H3 First Title')
                .to.contain('Support Light')
        })
        cy.go('back')
        cy.get('[class="nectar-button large regular has-icon regular-button"]')
            .eq(3)
            .click()
        cy.url()
            .should('include', '/light-give/')
        cy.get('h3').should(($h3) => {
            expect($h3, 'H3 First Title')
                .to.contain('Support Light')
        })
    })

    it('Expecting/Asserting card clicks are working and accurate', () => {
        cy.get('[class="box-link"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', "/light-25/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', "/light-50/")
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(2)
            .click()
        cy.url()
            .should('include', '/light-100/')
        cy.go('back')
        cy.get('[class="box-link"]')
            .eq(3)
            .click()
        cy.url()
            .should('include', '/light-500/')
    })
})