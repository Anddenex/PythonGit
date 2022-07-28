/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://giveblockchain.io/login/');
    cy.get('#user_login').type(Cypress.env('email'));
    cy.get('#user_pass').type(Cypress.env('password'));
    cy.get('#wp-submit').click();
    cy.url().should('include', '/dashboard/');
  });

  it('Document Test - Title Properties', () => {
    cy.document().should((doc) => {
      const titleText = doc.title;
      expect(titleText).to.eql('Dashboard - Give');
      expect(titleText).to.not.eql('Give');
    });
  });

  it('Expecting/Asserting all text on page', () => {
    cy.document().should((doc) => {
      const titleText = doc.title;
      expect(titleText).to.eql('Dashboard - Give');
      expect(titleText).to.not.eql('Give');
    });
    cy.get('h3').should(($h3) => {
      expect($h3.eq(0), 'H3 First Title').to.contain('Notice');
    });

    cy.get('h6').should(($h6) => {
      expect($h6.eq(0), 'First title text').to.contain('MY BALANCE');
      expect($h6.eq(1), 'Second title text').to.contain('MY LICENSES');
      expect($h6.eq(2), 'Third title text').to.contain('MY VAULT');
      expect($h6.eq(3), 'Fourth title text').to.contain('SHARE GIVE');
      expect($h6.eq(4), 'Fifth title text').to.contain('NODE (COMING SOON)');
      expect($h6.eq(5), 'Sixth title text').to.contain(
        'SMART NODE (COMING SOON)'
      );
      expect($h6.eq(6), 'Seventh title text').to.contain(
        'DOWNLOAD NODE SOFTWARE'
      );
      expect($h6.eq(7), 'Eigth title text').to.contain(
        'LET’S GIVE (UNDERGOING IMPROVEMENTS )'
      );
      expect($h6.eq(8), 'Ninth title text').to.contain(
        'DOWNLOAD NODE SOFTWARE NOW'
      );
      expect($h6.eq(9), 'tenth title text').to.contain(
        'SETUP VPS (COMING SOON)'
      );
    });

    cy.get('p').should(($para) => {
      expect($para.eq(0), 'First paragraph text').to.contain(
        'Your Node and Smart Node licenses will be available in your app in 30-180 days from purchase.'
      );
      expect($para.eq(1), 'Second paragraph text').to.contain(
        'Download Give Node Software. Works with Give Node and Give Smart Node Licences.'
      );
      expect($para.eq(2), 'Third paragraph text').to.contain(
        'You must fill out the Terms and Conditions before installing any software.'
      );
    });
  });
  it('Expecting/Asserting for all button clicks that are active', () => {
    cy.get('[class="column-link"]').eq(0).click();
    cy.url().should('include', 'app.giveblockchain.io/inventory/');
    cy.get('[class="v-card__title"]').should(($balancesTitle) => {
      expect($balancesTitle.eq(0), 'First title text').to.contain('Balances');
    });
    cy.go('back');
    cy.get('[class="column-link"]').eq(1).click();
    cy.url().should('include', 'app.giveblockchain.io/nodes/');
    cy.get('[class="v-card__title text-capitalize"]').should(($nodeTitle) => {
      expect($nodeTitle.eq(0), 'First title text').to.contain('give Node Info');
    });
    cy.go('back');
    cy.get('[class="column-link"]').eq(2).click();
    cy.url().should('include', 'app.giveblockchain.io/vault/');
    cy.get('[class="v-card__title"]').should('have.text', 'Vault Items');
    cy.go('back');
    cy.get('[class="column-link"]').eq(3).click();
    cy.url().should('include', 'app.giveblockchain.io/social/');
    cy.get('[class="v-card__title text-h6 text-sm-h5"]').should(
      ($shareTitle) => {
        expect($shareTitle.eq(0), 'First title text').to.contain(
          'Share with your Friends!'
        );
      }
    );
    cy.go('back');
    cy.get('[class="column-link"]').eq(4).click();
    cy.url().should('include', 'giveblockchain.io/dashboard/#download');
  });
});
