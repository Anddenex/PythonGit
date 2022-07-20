/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/login/");
        cy.get("#user_login")
            .type(Cypress.env('email'))
            .should('have.value', Cypress.env('email'));
        cy.get("#user_pass")
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'));
        cy.get("#wp-submit")
            .click();
        cy.get("div[class='vc_col-sm-3 wpb_column column_container vc_column_container col child_column centered-text padding-4-percent inherit_tablet inherit_phone instance-3 one-fourths clear-both'] div[class='wpb_wrapper'] div[class='wpb_wrapper']")
            .contains("MY BALANCE");
        cy.get("a[href='https://app.giveblockchain.io/inventory']").click();
        cy.get("[data-cy='nav-summary']")
            .click();
    })

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search_mobile('Dash')
        cy.prices_search_mobile('Gala')
        cy.prices_search_mobile('Ethereum')
        cy.prices_search_mobile('Ethereum Classic')
        cy.prices_search_mobile('Populous')
        cy.prices_search_mobile('Waves')
        cy.prices_search_mobile('Factom')
        cy.prices_search_mobile('Ubiq')
        cy.prices_search_mobile('Swarm City Token')
        cy.prices_search_mobile('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPhone-x-portrait', () => {
        cy.viewport('iphone-x', 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search_mobile('Dash')
        cy.prices_search_mobile('Gala')
        cy.prices_search_mobile('Ethereum')
        cy.prices_search_mobile('Ethereum Classic')
        cy.prices_search_mobile('Populous')
        cy.prices_search_mobile('Waves')
        cy.prices_search_mobile('Factom')
        cy.prices_search_mobile('Ubiq')
        cy.prices_search_mobile('Swarm City Token')
        cy.prices_search_mobile('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPad-mini-landscape', () => {
        cy.viewport('ipad-mini', 'landscape')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPad-2-landscape', () => {
        cy.viewport('ipad-2', 'landscape')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - SamsungS10-portrait', () => {
        cy.viewport('samsung-s10', 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search_mobile('Dash')
        cy.prices_search_mobile('Gala')
        cy.prices_search_mobile('Ethereum')
        cy.prices_search_mobile('Ethereum Classic')
        cy.prices_search_mobile('Populous')
        cy.prices_search_mobile('Waves')
        cy.prices_search_mobile('Factom')
        cy.prices_search_mobile('Ubiq')
        cy.prices_search_mobile('Swarm City Token')
        cy.prices_search_mobile('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - Samsung-Note9-portrait', () => {
        cy.viewport('samsung-note9', 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPhone12-portrait', () => {
        cy.viewport(390,844, 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search_mobile('Dash')
        cy.prices_search_mobile('Gala')
        cy.prices_search_mobile('Ethereum')
        cy.prices_search_mobile('Ethereum Classic')
        cy.prices_search_mobile('Populous')
        cy.prices_search_mobile('Waves')
        cy.prices_search_mobile('Factom')
        cy.prices_search_mobile('Ubiq')
        cy.prices_search_mobile('Swarm City Token')
        cy.prices_search_mobile('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPhone12-Mini-portrait', () => {
        cy.viewport(390,780, 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search_mobile('Dash')
        cy.prices_search_mobile('Gala')
        cy.prices_search_mobile('Ethereum')
        cy.prices_search_mobile('Ethereum Classic')
        cy.prices_search_mobile('Populous')
        cy.prices_search_mobile('Waves')
        cy.prices_search_mobile('Factom')
        cy.prices_search_mobile('Ubiq')
        cy.prices_search_mobile('Swarm City Token')
        cy.prices_search_mobile('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPad-Pro-landscape', () => {
        cy.viewport(1366,1024, 'landscape')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })

    it('Document Test - iPad-Pro-portrait', () => {
        cy.viewport(1024,1366, 'portrait')
        cy.get(".elevation-0 > a > .v-btn > .v-btn__content")
            .click();
        cy.prices_search('Dash')
        cy.prices_search('Gala')
        cy.prices_search('Ethereum')
        cy.prices_search('Ethereum Classic')
        cy.prices_search('Populous')
        cy.prices_search('Waves')
        cy.prices_search('Factom')
        cy.prices_search('Ubiq')
        cy.prices_search('Swarm City Token')
        cy.prices_search('Elastic')
        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(3)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "50");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(4)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "100");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(2)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "25");

        cy.get('.v-data-footer__select > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
            .click();
        cy.get("[class='v-list-item__content']")
            .eq(1)
            .click();
        cy.get(".v-select__selection")
            .should('have.text', "10");

        cy.get("[class='v-icon notranslate mdi mdi-chevron-right theme--light']")
            .click()
            .click()
            .click();
        cy.get("[class='v-icon notranslate mdi mdi-chevron-left theme--light']")
            .click()
            .click();
    })
})