class SidebarMenu {
  getapplogin() {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  }

  getProfileButton() {
    return cy.get('#menu-icon');
  }

  getsidebar_nav() {
    return cy.get(
      "[class='v-icon notranslate mdi mdi-chevron-down theme--light']"
    );
  }

  getsubmenu_nav() {
    return cy.get("[class='v-list-item__title']");
  }

  getshare_text() {
    return cy.get('[class="v-card__text text-center"]');
  }

  getShareButton() {
    return cy.get('[class="v-btn__content"]');
  }

  getsidebarProfileHeading() {
    return cy.get('[class="ui-heading"]');
  }

  getsidebarFormLabel() {
    return cy.get('[class="field-label"]');
  }

  getsidebarPhoneLabel() {
    return cy.get('[class="phone-label"]');
  }

  getsidebarNameLabel() {
    return cy.get('[class="ui-input"]');
  }

  getsidebarButtonTitle() {
    return cy.get('[class="button-title"]');
  }

  getsidebardButtonClick() {
    return cy.get('.v-toolbar__content > .v-btn > .v-btn__content > .v-icon');
  }

  getAdvancedSettingsTitle() {
    return cy.get('[class="v-card__title heading"]');
  }

  getWalletPhrase() {
    return cy.get('[class="v-text-field__slot"]');
  }

  getPKey() {
    return cy.get('#pkey');
  }

  getVIcon() {
    return cy.get('[class="v-icon notranslate material-icons theme--dark"]');
  }

  getTwoFactorTitle() {
    return cy.get('.v-stepper__header');
  }

  getSubHeader() {
    return cy.get('.v-stepper__step--active > .v-stepper__label');
  }

  getInstallText() {
    return cy.get(':nth-child(3) > .v-stepper__wrapper > p');
  }

  getSubheader2() {
    return cy.get(':nth-child(4) > .v-stepper__label');
  }

  getSubHeader3() {
    return cy.get(':nth-child(6) > .v-stepper__label');
  }

  getTwoFactorButton() {
    return cy.get('.v-toolbar__content > .v-btn > .v-btn__content > .v-icon');
  }

  getPasswordHeading() {
    return cy.get('.heading');
  }

  getWalletPassword() {
    return cy.get('#input-223');
  }

  getWalletConfirmPassword() {
    return cy.get('#input-225');
  }

  getCancelButton() {
    return cy.get('.mr-2 > .v-btn__content');
  }

  getSubmitButton() {
    return cy.get('.base > .v-btn__content');
  }

  getBackButton() {
    return cy.get('.v-toolbar__content > .v-btn > .v-btn__content > .v-icon');
  }

  getEncryptionHeading() {
    return cy.get('.rounded-corners > .v-card__title');
  }

  getEncryptionPhrase() {
    return cy.get('#input-234');
  }

  getEncryptionPassword() {
    return cy.get('#input-239');
  }

  getEncryptionConfirmPW() {
    return cy.get('#input-241');
  }
}

export default new SidebarMenu();
