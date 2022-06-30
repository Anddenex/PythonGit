/// <reference types="cypress" />
import sidebarMenu from "../../App_Page_Objects/Sidebar_Menu"
import recurrentElements from "../../App_Page_Objects/Ubiquitous_Elements"

describe('Sidebar Tests', () => {
    beforeEach(() => {
        sidebarMenu.getapplogin();
        // cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.wait(500)   
      })

    it('Login and Confirm Sidebar Share', () => {
        // WordPress log in logs you into the Dashboard rather than Summary or Balances
        // This sections covers the chevron clicks making sure they open correctly
        sidebarMenu.getProfileButton()
            .click()    
        sidebarMenu.getsidebar_nav()
            .eq(0)
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(1)
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(2)
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(3)
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(4)
            .click();
        // This section covers the Share link and page content
        sidebarMenu.getsidebar_nav()
            .eq(0)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(0)
            .should('have.text', "Share Page")
            .click();
        appGive.getsharePageTitle()
            .contains("Share with your Friends!")
        sidebarMenu.getshare_text()
            .contains("Share with friends and family. Click the share button below.")
        sidebarMenu.getShareButton()
            .contains("Share give")
            .click()        
    })

    it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
        sidebarMenu.getProfileButton()
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(1)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(0)
            .contains("Profile")
            .click()
        appGive.getH1()
            .contains("edit_profile")
        sidebarMenu.getsidebarProfileHeading()
            .contains("Edit Profile")
        sidebarMenu.getsidebarFormLabel()
            .eq(0)
            .should('have.text', "First Name")

        sidebarMenu.getsidebarFormLabel()
            .eq(1)
            .should('have.text', "Last Name")

        sidebarMenu.getsidebarFormLabel()
            .eq(2)
            .should('have.text', "Enter Email Address")

        sidebarMenu.getsidebarPhoneLabel()
            .eq(0)
            .should('have.text', "Enter Phone Number")

        sidebarMenu.getsidebarNameLabel()
            .eq(0)
            .click()
            .clear()
            .type("Change")

        sidebarMenu.getsidebarNameLabel()
            .eq(1)
            .click()
            .clear()
            .type("Name")

        cy.get('[class="button-title"]')
            .click()

        sidebarMenu.getsidebarNameLabel()
            .eq(0)
            .click()
            .clear()
            .type("Andrew")

        sidebarMenu.getsidebarNameLabel()
            .eq(1)
            .click()
            .clear()
            .type("Exon")
        
        sidebarMenu.getsidebarButtonTitle()
            .click()

        sidebarMenu.getsidebardButtonClick()
            .click()

    })
        
    it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
        sidebarMenu.getProfileButton()
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(1)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(1)
            .contains("Advanced Settings")
            .click()
        recurrentElements.getH1()
            .contains("Advanced Settings")
        sidebarMenu.getAdvancedSettingsTitle()
            .contains("Reveal Private Key")
        recurrentElements.getparagraphText()
            .contains("Using this tool, you will be able to download and save your private key which is connected to your Ethereum address BE VERY CAREFUL WITH THIS KEY as it can grant the holder total control over your Ethereum address.")

        sidebarMenu.getWalletPhrase()
            .click()
            .type(Cypress.env('wallet'))
        sidebarMenu.getPKey()
            .should('have.class', "v-btn v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default")
        sidebarMenu.getVIcon()
            .click()
        sidebarMenu.getsubmenu_nav()
            .eq(1)
            .contains("Advanced Settings")
    })

    it('Login and Confirm Security Tab: 2FA, Account Password, Encryption Password', () => {
        sidebarMenu.getProfileButton()
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(2)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(0)
            .contains("2-Factor Auth (2FA)")
            .click()
        appGive.getH1()
            .contains("2-Factor Auth (2FA)")
        sidebarMenu.getTwoFactorTitle()
            .contains("Take the following steps to enable two-factor authentication and add greater security to your wallet")
        sidebarMenu.getSubHeader()
            .contains("Download Authenticator App")
        sidebarMenu.getInstallText()
            .contains("Install an authenticator app on your mobile device. Recommended options:")
        sidebarMenu.getSubheader2()
            .contains("Add wallet to authenticator app")
        sidebarMenu.getSubHeader3()
            .contains("Verify provided code")
        sidebarMenu.getTwoFactorButton()
            .click()
        sidebarMenu.getsubmenu_nav()
            .eq(1)
            .contains("Account Password")
            .click()
        recurrentElements.getH1()
            .contains("Account Password")
        sidebarMenu.getPasswordHeading()
            .contains("Fill out the fields below to change your account password.")
        sidebarMenu.getWalletPassword()
            .click()
            .type(Cypress.env('wallet'))
        sidebarMenu.getWalletConfirmPassword()
            .click()
            .type(Cypress.env('wallet'))
        sidebarMenu.getCancelButton()
            .should('have.text', "Cancel")
        sidebarMenu.getSubmitButton()
            .contains("Submit")
        sidebarMenu.getBackButton()
            .click()
        sidebarMenu.getsubmenu_nav()
            .eq(2)
            .contains("Encryption Password")
            .click()
        // cy.get('[class="dialog-title text-capitalize centered"]')
        //     .contains("Encryption Password")
        sidebarMenu.getEncryptionHeading()
            .contains("Change Your Encryption Password")
        sidebarMenu.getEncryptionPhrase()
            //.contains("App Backup Phrase")
            .type(Cypress.env('prod_give_phrase'))
        sidebarMenu.getEncryptionPassword()
            .click()
            .type(Cypress.env('wallet'))
        sidebarMenu.getEncryptionConfirmPW()
            .click()
            .type(Cypress.env('wallet'))
        sidebarMenu.getCancelButton()
            .should('have.text', "Cancel")
        sidebarMenu.getSubmitButton()
            .contains("Save")
        sidebarMenu.getBackButton()
            .click()
        sidebarMenu.getsidebar_nav()
                .eq(3)
                .click();  
    })

    it('Login and Confirm Nodes Tab: Information, Purchase', () => {
        sidebarMenu.getProfileButton()
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(3)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(0)
            .contains("Information")
        sidebarMenu.getsubmenu_nav()
            .eq(1)
            .contains("Purchase")   
    })

    it('Login and Confirm Support Tab: FAQ, Term, Privacy', () => {
        sidebarMenu.getProfileButton()
            .click();
        sidebarMenu.getsidebar_nav()
            .eq(4)
            .click();
        sidebarMenu.getsubmenu_nav()
            .eq(0)
            .contains("Frequently Asked Questions")
        sidebarMenu.getsubmenu_nav()
            .eq(1)
            .contains("Terms & Conditions")
        sidebarMenu.getsubmenu_nav()
            .eq(2)
            .contains("Privacy Policy")
    })
})