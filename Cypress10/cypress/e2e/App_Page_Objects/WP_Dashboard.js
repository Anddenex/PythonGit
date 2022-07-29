class AppGive {
  open() {
    cy.visit('https://giveblockchain.io/login/');
  }

  // This section is for Login functions
  getUserEmail() {
    return cy.get('#user_login');
  }

  getUserPassword() {
    return cy.get('#user_pass');
  }

  getSubmitButton() {
    return cy.get('#wp-submit');
  }

  getCardLink() {
    return cy.get('[class="column-link"]');
  }

  getAppPageTitle() {
    return cy.get('[class="v-card__title"]');
  }

  getNodePageTitle() {
    return cy.get('[class="v-card__title text-capitalize"]');
  }

  getSharePageTitle() {
    return cy.get('[class="v-card__title text-h6 text-sm-h5"]');
  }
}

export default new AppGive();
