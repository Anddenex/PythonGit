// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (email, password) => {
    cy.visit('login');
    cy.url().should("include", "giveblockchain");   
    cy.get("#email").type(email);
    cy.get("[type='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.get('[class="v-card__title"]')
        .eq(1)
        .should('have.text', "Current Prices")
})

Cypress.Commands.add('wordpresslogin', (email, password) => {
    cy.visit('https://giveblockchain.io/login');
    cy.url().should("include", "giveblockchain");   
    cy.get("#user_login").type(email);
    cy.get("#user_pass").type(password);
    cy.get("#wp-submit").click();
})

Cypress.Commands.add('prices_search', (product) => {
    cy.get("#input-124").type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0).should('have.text', product);
    cy.get("#input-124").clear();
})

Cypress.Commands.add('prices_coin', (product) => {
    cy.get('[class="v-text-field__slot"]').type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0)
        .should('have.text', product)
        .click();
})

Cypress.Commands.add('login_coin_test', (email, password) => {  
    cy.get("#email").type(email);
    cy.get("[type='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.get('[class="v-card__title"]')
        .eq(1)
        .should('have.text', "Current Prices")
})



// })
// Cypress.Commands.addAll({
//   login(email, pw) {},
//   visit(orig, url, options) {},
// })
// Cypress.Commands.overwrite('visit', (orig, url, options) => {})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
