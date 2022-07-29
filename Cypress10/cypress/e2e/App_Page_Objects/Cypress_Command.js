class CypressCommands {
  openWP() {
    return cy.visit('https://giveblockchain.io/login/');
  }

  getUserEmail() {
    return cy.get('#user_login');
  }

  getUserPassword() {
    return cy.get('#user_pass');
  }

  getSubmitButton() {
    return cy.get('#wp-submit');
  }

  openApp() {
    return cy.visit('login');
  }

  getAppLoginButton() {
    return cy.get("button[type='submit']");
  }

  getAppTitle() {
    return cy.get('[class="v-card__title"]');
  }

  getCryptoProduct() {
    return cy.get('#input-124');
  }

  getProductText() {
    return cy.get('tbody > tr > :nth-child(2)');
  }

  getCoinProduct() {
    return cy.get('[class="v-text-field__slot"]');
  }
}

export default new CypressCommands();
