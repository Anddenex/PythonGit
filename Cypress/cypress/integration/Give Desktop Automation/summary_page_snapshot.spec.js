/// <reference types="cypress" />

describe('Login', () => {
    it('Summry Page Snapshot', () => {
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");
        
        //Log into the Summary page
        cy.login(Cypress.env('email'), Cypress.env('password'));

        cy.wait(10000);

        cy.eyesOpen({
            appName: "Summary", 
            testName: "Summary page snapshot layout check",
            //browser: { width: 1269, height: 718, name: "firefox"}, Should render a FF image
            //browser: { width: 1269, height: 718, name: "chrome"}, Should render a chrome image
            //You can specify other browsers that are compatible with Cypress
     
        });

        cy.eyesCheckWindow("Summary Page");
        cy.eyesClose();

      })
})