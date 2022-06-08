// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
    cy.url().should("include", "/dashboard/")  
})

Cypress.Commands.add('prices_search', (product) => {
    cy.get("#input-124").type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0).should('have.text', product);
    cy.get("#input-124").clear();
})

Cypress.Commands.add('prices_search_mobile', (product) => {
    cy.get("#input-124").type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0).should('have.text', "Currency"+product);
    cy.get("#input-124").clear();
})

Cypress.Commands.add('prices_coin', (product) => {
    cy.get('[class="v-text-field__slot"]').type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0)
        .should('have.text', product)
        .click();
})

Cypress.Commands.add('prices_coin_mobile', (product) => {
    cy.get('[class="v-text-field__slot"]').type(product);
    cy.get('tbody > tr > :nth-child(2)').eq(0)
        .should('have.text', "Currency"+product)
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

Cypress.Commands.add('create_account', (first_name, last_name, email, newpassword, confirm_password) => {  
    cy.visit("https://giveblockchain.io/lets-give/");
    cy.get("h5")
        .should('have.text', "Join The Movement");
        cy.get("#user_first_name1")
        .click()
        .type(first_name)
        .should('have.value', first_name);
    cy.get("#user_last_name1")
        .click()
        .type(last_name)
        .should('have.value', last_name);
    cy.get("#user_email1")
        .click()
        .type(email)
        .should('have.value', email);
    cy.get("#mepr_user_password1")
        .click()
        .type(newpassword)
        .should('have.value', newpassword);
    cy.get("#mepr_user_password_confirm1")
        .click()
        .type(confirm_password)
        .should('have.value', confirm_password);
    cy.get(".mepr_password > div.mp-hide-pw > .button > .dashicons")
        .click()
    cy.get(".mepr_password_confirm > div.mp-hide-pw > .button > .dashicons")
        .click();
    cy.get("#mepr_agree_to_privacy_policy1")
        .click()
        .check({ force: true })
        .should('be.checked');
    cy.get(".mepr-submit")
        .contains("Sign Up");
})

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