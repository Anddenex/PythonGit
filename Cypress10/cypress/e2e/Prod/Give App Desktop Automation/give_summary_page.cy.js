/// <reference types="cypress" />

describe('/', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Summary page to confirm "all" text: ', () => {
    // cy.visit("/");
    cy.get('.v-card__title.pa-0.font-weight-medium.title').should(($title) => {
      expect($title, 'Balance Title: ').to.contain(
        'Hi, Andrew! Your balance is:'
      );
    });
    cy.get('.v-card__text.pa-0.money').should(($balanceAmount) => {
      expect($balanceAmount, 'Balance Amount: ').to.contain('$0.00');
    });
    cy.get('[class="v-card__title"]').should(($rewards) => {
      expect($rewards.eq(0), 'Reward Title: ').to.contain(
        'Next. Level. Rewards.'
      );
      expect($rewards.eq(1), 'Reward Title: ').to.contain('Current Prices');
    });
    cy.get('[class="v-btn__content"]').should(($buttonText) => {
      expect($buttonText, 'Button Title: ').to.contain('Get SMART NODE');
    });
  });

  it('Current Prices Section text and clicks ', () => {
    // cy.visit("/");
    cy.wait(500);

    cy.get('[class="v-avatar mr-2"]').eq(0).click();
    cy.url().should('include', 'prices/BTC');
    cy.get('[data-cy="nav-summary"]').click();

    // Confirms Ethereum
    cy.get('[class="v-avatar mr-2"]').eq(1).click();
    cy.url().should('include', 'prices/ETH');
    cy.get('[data-cy="nav-summary"]').click();

    // Confirms XRP
    cy.get('[class="v-avatar mr-2"]').eq(2).click();
    cy.url().should('include', 'prices/XRP');
    cy.get('[data-cy="nav-summary"]').click();

    // Confirms XRP
    cy.get('[class="v-avatar mr-2"]').eq(3).click();
    cy.url().should('include', 'prices/LTC');
    cy.get('[data-cy="nav-summary"]').click();
  });

  it('Confirm Buttons direct to correct page:  ', () => {
    cy.get(
      '[class="v-icon notranslate right-arrow material-icons theme--light"]'
    ).click();
    cy.url().should('include', '/inventory');
    cy.get('[data-cy="nav-summary"]').click();

    // Confirms View All Button
    cy.get(
      "button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']"
    ).click();
    cy.url().should('include', '/prices');
  });
});
