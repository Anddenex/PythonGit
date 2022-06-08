/// <reference types="cypress" />

describe('Login', () => {

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPhone-x-portrait', () => {
        cy.viewport('iphone-x', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPad-mini-landscape', () => {
        cy.viewport('ipad-mini', 'landscape')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPad-2-landscape', () => {
        cy.viewport('ipad-2', 'landscape')

    })

    it('Document Test - SamsungS10-portrait', () => {
        cy.viewport('samsung-s10', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - Samsung-Note9-portrait', () => {
        cy.viewport('samsung-note9', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPhone12-portrait', () => {
        cy.viewport(390,844, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPhone12-Mini-portrait', () => {
        cy.viewport(390,780, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPad-Pro-landscape', () => {
        cy.viewport(1366,1024, 'landscape')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })

    it('Document Test - iPad-Pro-portrait', () => {
        cy.viewport(1024,1366, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.visit("/");
        cy.get(".v-card__title.pa-0.font-weight-medium.title").contains("Hi, Andrew! Your balance is:");
        cy.get(".v-card__text.pa-0.money").contains("$0.00");
        cy.get("div[class='row'] div div[class='v-card__title']")
            .should('have.text', "Next. Level. Rewards.");
        cy.get("div[aria-label='Bitcoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/BTC");
        cy.visit('login');
        
        // Confirms Ethereum
        cy.get("div[aria-label='Ethereum'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/ETH");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='XRP'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/XRP");
        cy.visit('login');

        // Confirms XRP
        cy.get("div[aria-label='Litecoin'] div[class='v-responsive__content']").click();
        cy.url().should("include", "prices/LTC");
        cy.visit('login');

        // Confirms View All Button
        cy.get("button[class='v-btn v-btn--block v-btn--contained v-btn--is-elevated v-btn--has-bg theme--light v-size--default brandPrimary white--text'] span[class='v-btn__content']").click();
        cy.url().should("include", "/prices");
    })
})