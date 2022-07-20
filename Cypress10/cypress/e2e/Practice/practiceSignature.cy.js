/// <reference types="cypress" />
import registerSmartNode from "../App_Page_Objects/Register_Smart_Node"
import appGive from "../App_Page_Objects/WP_Dashboard"
import recurrentElements from "../App_Page_Objects/Ubiquitous_Elements"

describe('Login', () => {
    beforeEach(() => {
        registerSmartNode.app_Login(); 
    })

    it('Document Test - Title Properties', () => {
        cy.visit('https://giveblockchain.io/register-smart-node/')

        registerSmartNode.getTermsCheckbox().click()
        registerSmartNode.getPrivacyCheckbox().click()

        registerSmartNode.getSmartNodeButton().should(($termsCheckBox) => {
            expect($termsCheckBox).to.have.length(1)
            expect($termsCheckBox, 'Button text: ')
                .to.contain("Continue")
        })
        registerSmartNode.getSmartNodeButton().click()

        registerSmartNode.getTypeEmail()
            .type(Cypress.env('email'))

        registerSmartNode.getNextButton()
            .should('have.have.text', "Next")
            .click()

        registerSmartNode.getCheckBoxClick()
            .eq(0).click()
        registerSmartNode.getCheckBoxClick()
            .eq(1).click()
        registerSmartNode.getCheckBoxClick()
            .eq(2).click()
        registerSmartNode.getCheckBoxClick()
            .eq(3).click()
        registerSmartNode.getCheckBoxClick()
            .eq(4).click()
        registerSmartNode.getCheckBoxClick()
            .eq(5).click()
        registerSmartNode.getCheckBoxClick()
            .eq(6).click()
        registerSmartNode.getCheckBoxClick()
            .eq(7).click()
        registerSmartNode.getCheckBoxClick()
            .eq(8).click()
        registerSmartNode.getCheckBoxClick()
            .eq(9).click()
        registerSmartNode.getCheckBoxClick()
            .eq(10).click()

        registerSmartNode.getInitials().should(($initials) => {
            expect($initials).to.have.length(13)
        })

        registerSmartNode.getInitials()
            .eq(0).type("AE")
        registerSmartNode.getInitials()
            .eq(1).type("AE")
        registerSmartNode.getInitials()
            .eq(2).type("AE") 
        registerSmartNode.getInitials()
            .eq(3).type("AE")
        registerSmartNode.getInitials()
            .eq(4).type("AE")
        registerSmartNode.getInitials()
            .eq(5).type("AE")
        registerSmartNode.getInitials()
            .eq(6).type("AE")
        registerSmartNode.getInitials()
            .eq(7).type("AE")
        registerSmartNode.getInitials()
            .eq(8).type("AE")
        registerSmartNode.getInitials()
            .eq(9).type("AE")
        registerSmartNode.getInitials()
            .eq(10).type("AE")

        registerSmartNode.getWriteSignature()
            .eq(0)
            .click()
            .click('center')
            .click('topLeft')
            .click('bottomLeft')

        registerSmartNode.getWriteSignature()
            .eq(1)
            .click()
            .click('center')
            .click('topLeft')
            .click('bottomLeft')

        registerSmartNode.getSignatureClear().eq(0).click()
        registerSmartNode.getSignatureClear().eq(1).click()

        registerSmartNode.getWriteSignature()
            .eq(0)
            .click()
            .click('center')
            .click('topLeft')
            .click('bottomLeft')

        registerSmartNode.getWriteSignature()
            .eq(1)
            .click()
            .click('center')
            .click('topLeft')
            .click('bottomLeft')

        registerSmartNode.getWriteSignature()
            .eq(0)
            .click()
            .trigger('mousedown', 'center')
            .trigger('mousemove', 'topRight')        // from center to just inside top left
            .trigger('mouseup')
        
        // registerSmartNode.getTypeSubmit().click()

        // cy.url().should('include', "/smart-node-order-processing/")
        // cy.get('[class="active-tab"]')
        //     .should('be.visible')
        //     .contains('Ethereum')
    })
})