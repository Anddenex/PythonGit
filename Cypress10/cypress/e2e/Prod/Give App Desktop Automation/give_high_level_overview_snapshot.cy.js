/// <reference types="cypress" />

describe('Login', () => {
  it('Login Page Accessible', () => {
    cy.visit('login');
    cy.url().should('include', 'giveblockchain');
  });

  it('Login Form Elements', () => {
    cy.get('h3.brandPrimary--text').should(($h3) => {
      console.log($h3.text());
      expect($h3.text()).to.eq('Login');
    });

    cy.get('h3.brandPrimary--text').should('have.text', 'Login');

    cy.get('#email').click();
    cy.get("[type='password']").click();
    cy.get('.v-messages__message.message-transition-enter-to').should(
      ($invalidemail) => {
        console.log($invalidemail.text());
        expect($invalidemail.text()).to.eq('Valid email required');
      }
    );
    cy.get('#email').click();
    cy.get(
      'body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    ).should(($invalidpw) => {
      console.log($invalidpw.text());
      expect($invalidpw.text()).to.eq('Invalid password');
    });

    // Accessing button title Sign In and asserting it is accurate
    cy.get("button[type='submit'] span[class='v-btn__content']").should(
      ($buttontext) => {
        console.log($buttontext.text());
        expect($buttontext.text()).to.contain('Sign In');
      }
    );

    // Accessing the Forgot Password text and asserting it is accurate
    cy.get('span.flexButton').should(($forgot) => {
      console.log($forgot.text());
      expect($forgot.text()).to.contain('Forgot password?');
    });

    // Accessing the Need an account text and asserting it is accurate
    cy.get('p:nth-child(1)').should(($needaccount) => {
      console.log($needaccount.text());
      expect($needaccount.text()).to.contain('Need an account?');
    });

    // Accessing the Sign Up text and asserting it is accurate
    cy.get("a[class='brandPrimary--text']").should(($signup) => {
      console.log($signup.text());
      expect($signup.text()).to.contain('Sign Up');
    });
  });

  it('Nav Menu Content Assertions', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.url().should('include', 'app.giveblockchain.io');
    cy.get('[class="v-btn__content"]').should(($navmenu) => {
      expect($navmenu.eq(0), 'Dashboard Menu Item').to.contain('Dashboard');
      expect($navmenu.eq(1), 'Summary Menu Item').to.contain('summary');
      expect($navmenu.eq(2), 'Inventory Menu Item').to.contain('Inventory');
      expect($navmenu.eq(3), 'Nodes Menu Item').to.contain('Nodes');
      expect($navmenu.eq(4), 'Vault Menu Item').to.contain('Vault');
    });
    cy.get(
      '[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]'
    ).should(($navmenu) => {
      expect($navmenu.eq(0), 'Inventory Menu Item').to.have.attr(
        'href',
        '/inventory'
      );
      expect($navmenu.eq(1), 'Nodes Menu Item').to.have.attr('href', '/nodes');
      expect($navmenu.eq(2), 'Vault Menu Item').to.have.attr('href', '/vault');
    });
    cy.get('[data-cy="nav-summary"]').should('have.attr', 'href', '/');
  });

  it('Nav Menu Click and Page Assertion', () => {
    // Login to the App
    cy.login(Cypress.env('email'), Cypress.env('password'));

    // Checking the Inventory Nav
    cy.get("[data-cy='nav-Inventory']").click();
    cy.get('[class="v-card__title"]').should(($navinvent) => {
      expect($navinvent, 'The Inventory page title contains: ').to.contain(
        'Balances'
      );
    });

    // Checking the Nodes Nav
    cy.get("[data-cy='nav-nodes']").click();
    cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
      expect($navnodes.eq(0), 'The Nodes page title contains: ').to.contain(
        'give Node Info'
      );
    });

    cy.get("[data-cy='nav-vault']").click();
    cy.get('.v-card__title').should(($navvault) => {
      expect($navvault, 'The Vault page title contains: ').to.contain(
        'Vault Items'
      );
    });

    // Checking the Dashboard Nav
    cy.get(
      '.v-toolbar__items > [href="https://giveblockchain.io/dashboard"] > .v-btn__content'
    ).click();
    cy.get('h3').should('have.text', 'Notice');
  });
});
