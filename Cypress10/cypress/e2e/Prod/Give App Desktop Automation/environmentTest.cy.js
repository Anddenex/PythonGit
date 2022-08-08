/// <reference types="cypress" />

describe('/', () => {
  beforeEach(() => {
    it('Example of Baseurl', () => {
      const url = Cypress.config().baseUrl;
      cy.visit(url);
    });
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Summary page to confirm "all" text: ', () => {});
});
