/// <reference types="cypress" />

describe('Login', () => {

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - iPhone-x-portrait', () => {
        cy.viewport('iphone-x', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - iPad-mini-landscape', () => {
        cy.viewport('ipad-mini', 'landscape')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
    })

    it('Document Test - iPad-2-landscape', () => {
        cy.viewport('ipad-2', 'landscape')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
    })

    it('Document Test - SamsungS10-portrait', () => {
        cy.viewport('samsung-s10', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - Samsung-Note9-portrait', () => {
        cy.viewport('samsung-note9', 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - iPhone12-portrait', () => {
        cy.viewport(390,844, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - iPhone12-Mini-portrait', () => {
        cy.viewport(390,780, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-Inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-Inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-Inventory']")
            .click();
    })

    it('Document Test - iPad-Pro-landscape', () => {
        cy.viewport(1366,1024, 'landscape')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
    })

    it('Document Test - iPad-Pro-portrait', () => {
        cy.viewport(1024,1366, 'portrait')
        cy.visit('login');

        // Assert URL
        cy.url()
            .should("include", "giveblockchain");

        // Login to APP
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.get("div[class='v-avatar']")
            .click();
        cy.get("[class='v-card__title'] ")
            .should($balance_title => {
                console.log($balance_title.text());
                expect($balance_title.text()).to.contain("Balances");
            })
        cy.get("[class='v-responsive__content']")
            .eq(0)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("BTC");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(1)
            .click();
            cy.get('[class="v-card__title pb-2"]')
            .contains("ETH");
        cy.get("[data-cy='nav-inventory']")
            .click()  
        cy.get("[class='v-responsive__content']")
            .eq(2)
            .click();           
        cy.get('[class="v-card__title pb-2"]')
            .contains("GALA");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(3)
            .click();
        cy.get('[class="v-card__title pb-2"]')
            .contains("GREEN");
        cy.get("[data-cy='nav-inventory']")
            .click();
        cy.get("[class='v-responsive__content']")
            .eq(4)
            .click();
        cy.get("[data-cy='nav-inventory']")
            .click();
    })
})