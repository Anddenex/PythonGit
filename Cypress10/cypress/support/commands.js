// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import CypressCommands from '../e2e/App_Page_Objects/Cypress_Command';

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) => {
  CypressCommands.openApp();
  cy.url().should('include', 'giveblockchain');
  CypressCommands.getUserEmail().type(email);
  CypressCommands.getUserPassword().type(password);
  CypressCommands.getAppLoginButton().click();
  CypressCommands.getAppTitle.eq(1).should('have.text', 'Current Prices');
});

Cypress.Commands.add('wplogin', (email, password) => {
  CypressCommands.openWP();
  cy.url().should('include', 'giveblockchain');
  CypressCommands.getUserEmail().type(email);
  CypressCommands.getUserPassword().type(password);
  CypressCommands.getSubmitButton().click();
  cy.url().should('include', '/dashboard/');
});

Cypress.Commands.add('app_prices_search', (product) => {
  CypressCommands.getCryptoProduct().type(product);
  CypressCommands.getProductText().eq(0).should('have.text', product);
  CypressCommands.getCryptoProduct().clear();
});

Cypress.Commands.add('prices_search', (product) => {
  cy.get('#input-124').type(product);
  cy.get('tbody > tr > :nth-child(2)').eq(0).should('have.text', product);
  cy.get('#input-124').clear();
});

Cypress.Commands.add('prices_search_mobile', (product) => {
  CypressCommands.getCryptoProduct().type(product);
  CypressCommands.getProductText()
    .eq(0)
    .should('have.text', `Currency, ${product}`);
  CypressCommands.getCryptoProduct().clear();
});

Cypress.Commands.add('prices_search_mobile', (product) => {
  cy.get('#input-124').type(product);
  cy.get('tbody > tr > :nth-child(2)')
    .eq(0)
    .should('have.text', `Currency, ${product}`);
  cy.get('#input-124').clear();
});

Cypress.Commands.add('prices_coin', (product) => {
  CypressCommands.getCoinProduct().type(product);
  CypressCommands.getProductText().eq(0).should('have.text', product).click();
});

Cypress.Commands.add('prices_coin', (product) => {
  cy.get('[class="v-text-field__slot"]').type(product);
  cy.get('tbody > tr > :nth-child(2)')
    .eq(0)
    .should('have.text', product)
    .click();
});

Cypress.Commands.add('prices_coin_mobile', (product) => {
  CypressCommands.getCoinProduct().type(product);
  CypressCommands.getProductText()
    .eq(0)
    .should('have.text', `Currency, ${product}`)
    .click();
});

Cypress.Commands.add('prices_coin_mobile', (product) => {
  cy.get('[class="v-text-field__slot"]').type(product);
  cy.get('tbody > tr > :nth-child(2)')
    .eq(0)
    .should('have.text', `Currency, ${product}`)
    .click();
});

Cypress.Commands.add('login_coin_test', (email, password) => {
  cy.get('#email').type(email);
  cy.get("[type='password']").type(password);
  cy.get("button[type='submit']").click();
  cy.get('[class="v-card__title"]').eq(1).should('have.text', 'Current Prices');
});

Cypress.Commands.add(
  'create_account',
  (firstName, lastName, email, newPassword, confirmPassword) => {
    cy.visit('https://giveblockchain.io/lets-give/');
    cy.get('h5').should('have.text', 'Join The Movement');
    cy.get('#user_firstName1')
      .click()
      .type(firstName)
      .should('have.value', firstName);
    cy.get('#user_lastName1')
      .click()
      .type(lastName)
      .should('have.value', lastName);
    cy.get('#user_email1').click().type(email).should('have.value', email);
    cy.get('#mepr_user_password1')
      .click()
      .type(newPassword)
      .should('have.value', newPassword);
    cy.get('#mepr_user_password_confirm1')
      .click()
      .type(confirmPassword)
      .should('have.value', confirmPassword);
    cy.get('.mepr_password > div.mp-hide-pw > .button > .dashicons').click();
    cy.get(
      '.mepr_password_confirm > div.mp-hide-pw > .button > .dashicons'
    ).click();
    cy.get('#mepr_agree_to_privacy_policy1')
      .click()
      .check({ force: true })
      .should('be.checked');
    cy.get('.mepr-submit').contains('Sign Up');
  }
);

// Cypress.Commands.add('recoverPassPhrase', (recoveryValue) => {
//   let rValue = document.getElementsByTagName('value')[0].innerHTML;

//   cy.get('#input-124').type(product);
//   cy.get('tbody > tr > :nth-child(2)')
//     .eq(0)
//     .should('have.text', `Currency, ${product}`);
//   cy.get('#input-124').clear();
// });

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
