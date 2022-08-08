/// <reference types="cypress" />

describe('Login', () => {
  it('Login and Confirm Page Loaded', () => {
    cy.visit('https://develop.d2h11jw6bhpbg2.amplifyapp.com/login');
    cy.get('#email').click();
    cy.get('#password').click();
    cy.get('[class="invalidText"]').should('be.visible');
    cy.get('[class="invalidText"]').should(
      'have.text',
      'This is a required field'
    );
    cy.get('[class="invalidText"]').should(
      'have.text',
      'This is a required field'
    );
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('password'));
    cy.get('#rememberMe').should('not.be.checked');
    cy.get('#rememberMe').check();
    cy.get('#rememberMe').click();
    cy.get('#rememberMe').should('be.checked');
    cy.get('[class="button solid log-in-form__submit-button"]')
      .should('have.attr', 'type', 'submit')
      .should('have.text', 'Log In')
      .click();
  });
});
