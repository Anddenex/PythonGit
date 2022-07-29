/// <reference types="cypress" />
import SidebarMenu from '../../App_Page_Objects/Sidebar_Menu';
import RecurrentElements from '../../App_Page_Objects/Ubiquitous_Elements';
import AppGive from '../../App_Page_Objects/WP_Dashboard';

describe('Sidebar Tests', () => {
  beforeEach(() => {
    SidebarMenu.getapplogin();
    cy.wait(500);
  });

  it('Login and Confirm Sidebar Share', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(0).click();
    SidebarMenu.getSidebarNav().eq(1).click();
    SidebarMenu.getSidebarNav().eq(2).click();
    SidebarMenu.getSidebarNav().eq(3).click();
    SidebarMenu.getSidebarNav().eq(4).click();
    SidebarMenu.getSidebarNav().eq(0).click();
    SidebarMenu.getSubmenuNav().eq(0).should('have.text', 'Share Page').click();
    AppGive.getSharePageTitle().contains('Share with your Friends!');
    SidebarMenu.getShareText().contains(
      'Share with friends and family. Click the share button below.'
    );
    SidebarMenu.getShareButton().contains('Share give').click();
  });

  it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(1).click();
    SidebarMenu.getSubmenuNav().eq(0).contains('Profile').click();
    RecurrentElements.getH1().contains('edit_profile');
    SidebarMenu.getsidebarProfileHeading().contains('Edit Profile');
    SidebarMenu.getsidebarFormLabel().eq(0).should('have.text', 'First Name');
    SidebarMenu.getsidebarFormLabel().eq(1).should('have.text', 'Last Name');
    SidebarMenu.getsidebarFormLabel()
      .eq(2)
      .should('have.text', 'Enter Email Address');
    SidebarMenu.getsidebarPhoneLabel()
      .eq(0)
      .should('have.text', 'Enter Phone Number');
    SidebarMenu.getsidebarNameLabel().eq(0).click().clear().type('Change');
    SidebarMenu.getsidebarNameLabel().eq(1).click().clear().type('Name');

    cy.get('[class="button-title"]').click();

    SidebarMenu.getsidebarNameLabel().eq(0).click().clear().type('Andrew');
    SidebarMenu.getsidebarNameLabel().eq(1).click().clear().type('Exon');
    SidebarMenu.getsidebarButtonTitle().click();
    SidebarMenu.getsidebardButtonClick().click();
  });

  it('Login and Confirm Account Tab: Profile and Advanced Settings', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(1).click();
    SidebarMenu.getSubmenuNav().eq(1).contains('Advanced Settings').click();
    RecurrentElements.getH1().contains('Advanced Settings');
    SidebarMenu.getAdvancedSettingsTitle().contains('Reveal Private Key');
    RecurrentElements.getparagraphText().contains(
      'Using this tool, you will be able to download and save your private key which is connected to your Ethereum address BE VERY CAREFUL WITH THIS KEY as it can grant the holder total control over your Ethereum address.'
    );

    SidebarMenu.getWalletPhrase().click().type(Cypress.env('wallet'));
    SidebarMenu.getPKey().should(
      'have.class',
      'v-btn v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default'
    );
    SidebarMenu.getVIcon().click();
    SidebarMenu.getSubmenuNav().eq(1).contains('Advanced Settings');
  });

  it('Login and Confirm Security Tab: 2FA, Account Password, Encryption Password', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(2).click();
    SidebarMenu.getSubmenuNav().eq(0).contains('2-Factor Auth (2FA)').click();
    RecurrentElements.getH1().contains('2-Factor Auth (2FA)');
    SidebarMenu.getTwoFactorTitle().contains(
      'Take the following steps to enable two-factor authentication and add greater security to your wallet'
    );
    SidebarMenu.getSubHeader().contains('Download Authenticator App');
    SidebarMenu.getInstallText().contains(
      'Install an authenticator app on your mobile device. Recommended options:'
    );
    SidebarMenu.getSubheader2().contains('Add wallet to authenticator app');
    SidebarMenu.getSubHeader3().contains('Verify provided code');
    SidebarMenu.getTwoFactorButton().click();
    SidebarMenu.getSubmenuNav().eq(1).contains('Account Password').click();
    RecurrentElements.getH1().contains('Account Password');
    SidebarMenu.getPasswordHeading().contains(
      'Fill out the fields below to change your account password.'
    );
    SidebarMenu.getWalletPassword().click().type(Cypress.env('wallet'));
    SidebarMenu.getWalletConfirmPassword().click().type(Cypress.env('wallet'));
    SidebarMenu.getCancelButton().should('have.text', 'Cancel');
    SidebarMenu.getSubmitButton().contains('Submit');
    SidebarMenu.getBackButton().click();
    SidebarMenu.getSubmenuNav().eq(2).contains('Encryption Password').click();
    SidebarMenu.getEncryptionHeading().contains(
      'Change Your Encryption Password'
    );
    SidebarMenu.getEncryptionPhrase().type(Cypress.env('prod_give_phrase'));
    SidebarMenu.getEncryptionPassword().click().type(Cypress.env('wallet'));
    SidebarMenu.getEncryptionConfirmPW().click().type(Cypress.env('wallet'));
    SidebarMenu.getCancelButton().should('have.text', 'Cancel');
    SidebarMenu.getSubmitButton().contains('Save');
    SidebarMenu.getBackButton().click();
    SidebarMenu.getSidebarNav().eq(3).click();
  });

  it('Login and Confirm Nodes Tab: Information, Purchase', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(3).click();
    SidebarMenu.getSubmenuNav().eq(0).contains('Information');
    SidebarMenu.getSubmenuNav().eq(1).contains('Purchase');
  });

  it('Login and Confirm Support Tab: FAQ, Term, Privacy', () => {
    SidebarMenu.getProfileButton().click();
    SidebarMenu.getSidebarNav().eq(4).click();
    SidebarMenu.getSubmenuNav().eq(0).contains('Frequently Asked Questions');
    SidebarMenu.getSubmenuNav().eq(1).contains('Terms & Conditions');
    SidebarMenu.getSubmenuNav().eq(2).contains('Privacy Policy');
  });
});
