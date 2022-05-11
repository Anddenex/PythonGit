/// <reference types="cypress" />

describe('Sidebar Tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.wait(500)   
      })

    // it('Login and Confirm Sidebar Share', () => {
    //     // WordPress log in logs you into the Dashboard rather than Summary or Balances
    //     // This sections covers the chevron clicks making sure they open correctly
    //     cy.get("#menu-icon")
    //         .click();
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(0)
    //         .click();
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(1)
    //         .click();
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(2)
    //         .click();
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(3)
    //         .click();
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(4)
    //         .click();
    //     // This section covers the Share link and page content
    //     cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
    //         .eq(0)
    //         .click();
    //     cy.get("[class='v-list-item__title']")
    //         .eq(0)
    //         .should('have.text', "Share Page")
    //         .click();
    //     cy.get('[class="v-card__title text-h6 text-sm-h5"]')
    //         .contains("Share with your Friends!")
    //     cy.get('[class="v-card__text text-center"]')
    //         .contains("Share with friends and family. Click the share button below.")
    //     cy.get('[class="mx-auto text-center"]')
    //         //.contains("Share Give")
    //         .click()        
    // })

    it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
        cy.get("#menu-icon")
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
            .eq(1)
            .click();
        cy.get("[class='v-list-item__title']")
            .eq(0)
            .contains("Profile")
            .click()
        cy.get('h1')
            .contains("edit_profile")
        cy.get('[class="ui-heading"]')
            .contains("Edit Profile")
        cy.get('[class="field-label"]')
            .eq(0)
            .should('have.text', "First Name")
        cy.get('[class="field-label"]')
            .eq(1)
            .should('have.text', "Last Name")

        cy.get('[class="field-label"]')
            .eq(2)
            .should('have.text', "Enter Email Address")

        cy.get('[class="phone-label"]')
            .eq(0)
            .should('have.text', "Enter Phone Number")

        cy.get('[class="ui-input"]')
            .eq(0)
            .click()
            .clear()
            .type("Change")

        cy.get('[class="ui-input"]')
            .eq(1)
            .click()
            .clear()
            .type("Name")

        cy.get('[class="button-title"]')
            .click()

        cy.get('[class="ui-input"]')
            .eq(0)
            .click()
            .clear()
            .type("Andrew")

        cy.get('[class="ui-input"]')
            .eq(1)
            .click()
            .clear()
            .type("Exon")
        
        cy.get('[class="button-title"]')
            .click()

        cy.get(".v-toolbar__content > .v-btn > .v-btn__content > .v-icon")
            .click()

    })
        
    it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
        cy.get("#menu-icon")
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
            .eq(1)
            .click();
        cy.get("[class='v-list-item__title']")
            .eq(1)
            .contains("Advanced Settings")
            .click()
        cy.get('h1')
            .contains("Advanced Settings")
        cy.get('[class="v-card__title heading"]')
            .contains("Reveal Private Key")
        cy.get('p')
            .contains("Using this tool, you will be able to download and save your private key which is connected to your Ethereum address BE VERY CAREFUL WITH THIS KEY as it can grant the holder total control over your Ethereum address.")

        cy.get('[class="v-text-field__slot"]')
            .click()
            .type(Cypress.env('wallet'))
        cy.get('#pkey')
            .should('have.class', "v-btn v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default")
        cy.get('[class="v-icon notranslate material-icons theme--dark"]')
            .click()
        cy.get("[class='v-list-item__title']")
            .eq(1)
            .contains("Advanced Settings")
    })

    it('Login and Confirm Security Tab: 2FA, Account Password, Encryption Password', () => {
        cy.get("#menu-icon")
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
            .eq(2)
            .click();
        cy.get("[class='v-list-item__title']")
            .eq(0)
            .contains("2-Factor Auth (2FA)")
            .click()
        cy.get('h1')
            .contains("2-Factor Auth (2FA)")
        cy.get('.v-stepper__header')
            .contains("Take the following steps to enable two-factor authentication and add greater security to your wallet")
        cy.get('.v-stepper__step--active > .v-stepper__label')
            .contains("Download Authenticator App")
        cy.get(':nth-child(3) > .v-stepper__wrapper > p')
            .contains("Install an authenticator app on your mobile device. Recommended options:")
        cy.get(":nth-child(4) > .v-stepper__label")
            .contains("Add wallet to authenticator app")
        cy.get(":nth-child(6) > .v-stepper__label")
            .contains("Verify provided code")
        cy.get(".v-toolbar__content > .v-btn > .v-btn__content > .v-icon")
            .click()
        cy.get("[class='v-list-item__title']")
            .eq(1)
            .contains("Account Password")
            .click()
        cy.get('h1')
            .contains("Account Password")
        cy.get(".heading")
            .contains("Fill out the fields below to change your account password.")
        cy.get('#input-223')
            .click()
            .type(Cypress.env('wallet'))
        cy.get('#input-225')
            .click()
            .type(Cypress.env('wallet'))
        cy.get(".mr-2 > .v-btn__content")
            .should('have.text', "Cancel")
        cy.get(".base > .v-btn__content")
            .contains("Submit")
        cy.get(".v-toolbar__content > .v-btn > .v-btn__content > .v-icon")
            .click()
        cy.get("[class='v-list-item__title']")
            .eq(2)
            .contains("Encryption Password")
            .click()
        // cy.get('[class="dialog-title text-capitalize centered"]')
        //     .contains("Encryption Password")
        cy.get(".rounded-corners > .v-card__title")
            .contains("Change Your Encryption Password")
        cy.get("#input-234")
            //.contains("App Backup Phrase")
            .type(Cypress.env('phrase'))
        cy.get("#input-239")
            .click()
            .type(Cypress.env('wallet'))
        cy.get('#input-241')
            .click()
            .type(Cypress.env('wallet'))
        cy.get('.mr-2 > .v-btn__content')
            .should('have.text', "Cancel")
        cy.get(".base > .v-btn__content")
            .contains("Save")
        cy.get('.v-toolbar__content > .v-btn > .v-btn__content > .v-icon')
            .click()
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
                .eq(3)
                .click();  
    })

    it('Login and Confirm Nodes Tab: Information, Purchase', () => {
        cy.get("#menu-icon")
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
            .eq(3)
            .click();
        cy.get("[class='v-list-item__title']")
            .eq(0)
            .contains("Information")
        cy.get("[class='v-list-item__title']")
            .eq(1)
            .contains("Purchase")   
    })

    it('Login and Confirm Support Tab: FAQ, Term, Privacy', () => {
        cy.get("#menu-icon")
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-down theme--light']")
            .eq(4)
            .click();
        cy.get("[class='v-list-item__title']")
            .eq(0)
            .contains("Frequently Asked Questions")
        cy.get("[class='v-list-item__title']")
            .eq(1)
            .contains("Terms & Conditions")
        cy.get("[class='v-list-item__title']")
            .eq(2)
            .contains("Privacy Policy")
    })
})