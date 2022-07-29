/// <reference types="cypress" />

describe('Login', () => {
  it('Login Page Accessible', () => {
    cy.visit('login');

    // Assert URL
    cy.url().should('include', 'giveblockchain');

    // Login to APP
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.get("div[class='v-avatar']").click();
    cy.get("[class='v-card__title'] ").should(($balanceTitle) => {
      console.log($balanceTitle.text());
      expect($balanceTitle.text()).to.contain('Balances');
    });
    cy.get("[class='v-responsive__content']").eq(0).click();
    cy.get('[class="v-card__title pb-2"]').contains('BTC');
    cy.get("[data-cy='nav-inventory']").click();
    cy.get("[class='v-responsive__content']").eq(1).click();
    cy.get('[class="v-card__title pb-2"]').contains('ETH');
    cy.get("[data-cy='nav-inventory']").click();
    cy.get("[class='v-responsive__content']").eq(2).click();
    cy.get('[class="v-card__title pb-2"]').contains('GALA');
    cy.get("[data-cy='nav-inventory']").click();
    cy.get("[data-cy='nav-inventory']").click();
    cy.get("[class='v-responsive__content']").eq(3).click();
    cy.get('[class="v-card__title pb-2"]').contains('GREEN');
    cy.get("[data-cy='nav-inventory']").click();
    cy.get("[class='v-responsive__content']").eq(4).click();
    cy.get("[data-cy='nav-inventory']").click();
  });
});
