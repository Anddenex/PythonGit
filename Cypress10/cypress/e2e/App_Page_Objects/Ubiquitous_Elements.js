class RecurrentElements {
  // This section is header and text functions
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

  getParagraphText() {
    return cy.get('p');
  }
}

export default new RecurrentElements();
