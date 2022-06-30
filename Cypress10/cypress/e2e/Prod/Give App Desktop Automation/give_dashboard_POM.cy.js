/// <reference types="cypress" />
import appGive from "../../App_Page_Objects/WP_Dashboard.js"
import recurrentElements from "../../App_Page_Objects/Ubiquitous_Elements"

describe('Login', () => {
    beforeEach(() => {
        appGive.open();
        appGive.getuserEmail().type(Cypress.env('email'));
        appGive.getuserPassword().type(Cypress.env('password'));
        appGive.getsubmitButton().click();
        cy.url()
            .should("include", "/dashboard/")   
    })

    it('Document Test - Title Properties', () => {
        cy.document().should(doc => {
            const titleText = doc.title
            expect(titleText).to.eql('Dashboard - Give')
            expect(titleText).to.not.eql('Give')
        })
    })

    it('Expecting/Asserting all text on page', () => {
        recurrentElements.getH3().should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain("Notice")
        }) 

        recurrentElements.getH6().should(($h6) => {
            expect($h6.eq(0), 'First title text')
                .to.contain("MY BALANCE")
            expect($h6.eq(1), 'Second title text')
                .to.contain("MY LICENSES")
            expect($h6.eq(2), 'Third title text')
                .to.contain("MY VAULT")
            expect($h6.eq(3), 'Fourth title text')
                .to.contain("SHARE GIVE")
            expect($h6.eq(4), 'Fifth title text')
                .to.contain("NODE (COMING SOON)")
            expect($h6.eq(5), 'Sixth title text')
                .to.contain("SMART NODE (COMING SOON)")
            expect($h6.eq(6), 'Seventh title text')
                .to.contain("DOWNLOAD NODE SOFTWARE")
            expect($h6.eq(7), 'Eigth title text')
                .to.contain("LET’S GIVE (UNDERGOING IMPROVEMENTS )")
            expect($h6.eq(8), 'Ninth title text')
                .to.contain("DOWNLOAD NODE SOFTWARE NOW")
            expect($h6.eq(9), 'tenth title text')
                .to.contain("SETUP VPS (COMING SOON)")    
        }) 

        recurrentElements.getparagraphText().should(($para) => {
            expect($para.eq(0), 'First paragraph text')
                .to.contain("Your Node and Smart Node licenses will be available in your app in 30-180 days from purchase.")
            expect($para.eq(1), 'Second paragraph text')
                .to.contain("Download Give Node Software. Works with Give Node and Give Smart Node Licences.")            
            expect($para.eq(2), 'Third paragraph text')
                .to.contain("You must fill out the Terms and Conditions before installing any software.")                    
        }) 
    })
    it('Expecting/Asserting for all button clicks that are active', () => {
        appGive.getcardLink()
            .eq(0)
            .click()
        cy.url().should('include', "app.giveblockchain.io/inventory/")
        appGive.getappPageTitle().should(($balances_title) =>  {
            expect($balances_title.eq(0), 'First title text')
                .to.contain("Balances")
        })
        cy.go('back')
        appGive.getcardLink()
            .eq(1)
            .click()
        cy.url().should('include', "app.giveblockchain.io/nodes/")
        appGive.getnodePageTitle().should(($node_title) =>  {
            expect($node_title.eq(0), 'First title text')
                .to.contain("give Node Info")
        })
        cy.go('back')
        appGive.getcardLink()
            .eq(2)
            .click()
        cy.url().should('include', "app.giveblockchain.io/vault/")
        appGive.getappPageTitle()
            .should('have.text', "Vault Items")
        cy.go('back')
        appGive.getcardLink()
            .eq(3)
            .click()
        cy.url().should('include', "app.giveblockchain.io/social/")
        appGive.getsharePageTitle().should(($share_title) =>  {
            expect($share_title.eq(0), 'First title text')
                .to.contain("Share with your Friends!")
        })
        cy.go('back')
        appGive.getcardLink()
            .eq(4)
            .click()
        cy.url().should('include', "giveblockchain.io/dashboard/#download")
    })
})