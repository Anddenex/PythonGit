class AppGive {
  open() {
    cy.visit('https://giveblockchain.io/login/');
  }

  // This section is for Login functions
  getuserEmail() {
    return cy.get('#user_login');
  }

  getuserPassword() {
    return cy.get('#user_pass');
  }

  getsubmitButton() {
    return cy.get('#wp-submit');
  }

  // This section covers HTML header and paragraph elements(i.e h1, h2, h3, etc..., p)
  getH1() {
    return cy.get('h1');
  }

  getH2() {
    return cy.get('h2');
  }

  getH3() {
    return cy.get('h3');
  }

  getH4() {
    return cy.get('h4');
  }

  getH5() {
    return cy.get('h5');
  }

  getH6() {
    return cy.get('h6');
  }

  getparagraphText() {
    return cy.get('p');
  }

  getcardLink() {
    return cy.get('[class="column-link"]');
  }

  getappPageTitle() {
    return cy.get('[class="v-card__title"]');
  }

  getnodePageTitle() {
    return cy.get('[class="v-card__title text-capitalize"]');
  }

  getsharePageTitle() {
    return cy.get('[class="v-card__title text-h6 text-sm-h5"]');
  }
}

export default new AppGive();
