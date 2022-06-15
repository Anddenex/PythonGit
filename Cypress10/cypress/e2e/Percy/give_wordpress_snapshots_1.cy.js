/// <reference types="cypress" />
// When a customer is logged out
describe('Login', () => {

    // it('Expecting/Asserting text for button accurate', () => {
    //     cy.viewport(1536,960)
    //     cy.visit('https://giveblockchain.io/give-information/')
    //     cy.get('h1').should('be.visible')
    //     cy.get('[class="nectar-button jumbo regular regular-button"]')
    //         .should('have.length.gte', 2)
    //     cy.get('[class="cell is-selected"]').should('be.visible').and('have.length.gte', 3)
    //     cy.get('[class="divider-wrap height_tablet_80vh "]').should('be.visible')
    //     cy.percySnapshot();
    // })

    // it('Expecting/Asserting text for button accurate', () => {
    //     cy.viewport(1536,960)
    //     cy.login(Cypress.env('email'), Cypress.env('password'));
    //     cy.get('[data-cy="nav-summary"]').click()
    //     cy.get('[class="v-card__title"]').should('be.visible').and('have.length.gte', 2)
    //     cy.get('[type="button"]').should('be.visible').and('have.length.gte', 1)
    //     cy.get('[class="v-responsive__content"]').should('be.visible').and('have.length.gte', 4)
    //     cy.get('[class="v-image__image v-image__image--cover"]').should('be.visible')
    //     cy.percySnapshot();
    // })

    it('Expecting/Asserting text for button accurate', () => {
        cy.viewport(1536,960)
        cy.visit('https://giveblockchain.io/mission-information/')
        cy.get('h4').should('be.visible').and('have.length.gte', 10)
        cy.get('p').should('be.visible').and('have.length.gte', 20)
    })
})