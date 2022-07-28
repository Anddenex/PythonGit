class RegisterSmartNode {
  app_Login() {
    cy.wplogin(Cypress.env('email'), Cypress.env('password'));
  }

  getpriceCellLabel() {
    return cy.get('[class="mepr_price_cell_label"]');
  }

  getNodePrice() {
    return cy.get('[class="mepr_price_cell"]');
  }

  getLabelHeaders() {
    return cy.get('[class="mp-form-label"]');
  }

  getTermsText() {
    return cy.get('[class="mepr-checkbox-field mepr-form-input"]');
  }

  getTermsCheckbox() {
    return cy.get('#mepr_agree_to_tos1');
  }

  getPrivacyCheckbox() {
    return cy.get('#mepr_agree_to_privacy_policy1');
  }

  getSmartNodeButton() {
    return cy.get('[class="mepr-submit"]');
  }

  getIndicatorSteps() {
    return cy.get('[class="wpforms-page-indicator-steps"]');
  }

  getFormsLabel() {
    return cy.get('[class="wpforms-field-label"]');
  }

  getFormDescription() {
    return cy.get('[class="wpforms-field-description"]');
  }

  getNextButton() {
    return cy.get('[class="wpforms-page-button wpforms-page-next"]');
  }

  getTypeEmail() {
    return cy.get('[class="wpforms-field-large wpforms-field-required"]');
  }

  getInlineLabels() {
    return cy.get('[class="wpforms-field-label-inline"]');
  }

  getCheckBoxClick() {
    return cy.get('[type="checkbox"]');
  }

  getInitials() {
    return cy.get('[type="text"]');
  }

  getWriteSignature() {
    return cy.get('[class="wpforms-signature-canvas loaded"]');
  }

  getSignatureClear() {
    return cy.get('[class="wpforms-signature-clear"]');
  }

  getTypeSubmit() {
    return cy.get('[type="submit"]');
  }
}

export default new RegisterSmartNode();
