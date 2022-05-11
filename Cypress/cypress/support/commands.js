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
    cy.get("div[class='mb-4 mr-4 v-card v-sheet v-sheet--outlined theme--light'] div[class='v-card__title']").should($c_prices => {
    console.log($c_prices.text());
    expect($c_prices.text()).to.eq("Current Prices");
    })
})

// Cypress.Commands.add('login_verification', (email, password) => {
//     cy.visit('login');
//     cy.url().should("include", "giveblockchain");
//     cy.get("#email").type(email);
//     cy.get("[type='password']").type(password);
//     cy.get("button[type='submit']").click();
//     cy.get("div[class='mb-4 mr-4 v-card v-sheet v-sheet--outlined theme--light'] div[class='v-card__title']").should($c_prices => {
//         console.log($c_prices.text());
//         expect($c_prices.text()).to.eq("Current Prices");
//     })

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
