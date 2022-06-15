/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit('login');
        cy.url().should("include", "giveblockchain");
    })

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")

    })

    it('Document Test - iPhone-x-portrait', () => {
        cy.viewport('iphone-x', 'portrait')
        // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")
    })

    it('Document Test - iPad-mini-landscape', () => {
        cy.viewport('ipad-mini', 'landscape')
        // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent, 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[data-cy="nav-nodes"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[data-cy="nav-vault"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('.v-toolbar__items > [href="https://giveblockchain.io/dashboard"] > .v-btn__content')
            .click();
        cy.get('h3').should('have.text', "Notice")
    })

    it('Document Test - iPad-2-landscape', () => {
        cy.viewport('ipad-2', 'landscape')
        // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent, 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[data-cy="nav-nodes"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[data-cy="nav-vault"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('.v-toolbar__items > [href="https://giveblockchain.io/dashboard"] > .v-btn__content')
            .click();
        cy.get('h3').should('have.text', "Notice")

    })

    it('Document Test - SamsungS10-portrait', () => {
        cy.viewport('samsung-s10', 'portrait')
    // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")
    })

    it('Document Test - Samsung-Note9-portrait', () => {
        cy.viewport('samsung-note9', 'portrait')
    // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")
    })

    it('Document Test - iPhone12-portrait', () => {
        cy.viewport(390,844, 'portrait')
    // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")
    })

    it('Document Test - iPhone12-Mini-portrait', () => {
        cy.viewport(390,780, 'portrait')
    // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-Inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent.eq(0), 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[class="v-icon notranslate theme--dark"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[class="v-icon notranslate mdi mdi-lock theme--dark"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('[class="v-icon notranslate mdi mdi-account-supervisor theme--dark"]')
            .click();
        cy.get('h3')
            .should('have.text', "Notice")
    })

    it('Document Test - iPad-Pro-landscape', () => {
        cy.viewport(1366,1024, 'landscape')
    // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent, 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[data-cy="nav-nodes"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[data-cy="nav-vault"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('.v-toolbar__items > [href="https://giveblockchain.io/dashboard"] > .v-btn__content')
            .click();
        cy.get('h3').should('have.text', "Notice")
    })

    it('Document Test - iPad-Pro-portrait', () => {
        cy.viewport(1024,1366, 'portrait')
        // Accessing the title "$h3" -- $h3 is a variable name which could be anything (i.e. $h1, $h2, #heading, etc...)
        cy.get("h3.brandPrimary--text").should($h3 => {
            console.log($h3.text());
            expect($h3.text()).to.eq("Login")
        })

    // You can also assert the text with the following test case
        cy.get("h3.brandPrimary--text").should("have.text", "Login");

        cy.get("#email").click();
        cy.get("[type='password']").click();
        cy.get(".v-messages__message.message-transition-enter-to").should($invalidemail => {
            console.log($invalidemail.text());
            expect($invalidemail.text()).to.eq("Valid email required");
        })
        cy.get("#email").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").should($invalidpw => {
            console.log($invalidpw.text());
            expect($invalidpw.text()).to.eq("Invalid password");
        })

    // Accessing button title Sign In and asserting it is accurate
        cy.get("button[type='submit'] span[class='v-btn__content']").should($buttontext => {
            console.log($buttontext.text());
            expect($buttontext.text()).to.contain("Sign In");
        })

    // Accessing the Forgot Password text and asserting it is accurate
        cy.get("span.flexButton").should($forgot => {
            console.log($forgot.text());
            expect($forgot.text()).to.contain("Forgot password?");
        })

    // Accessing the Need an account text and asserting it is accurate
        cy.get("p:nth-child(1)").should($needaccount => {
            console.log($needaccount.text());
            expect($needaccount.text()).to.contain("Need an account?");
        })

    // Accessing the Sign Up text and asserting it is accurate
        cy.get("a[class='brandPrimary--text']").should($signup => {
            console.log($signup.text());
            expect($signup.text()).to.contain("Sign Up");
        })

        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', "app.giveblockchain.io")
        cy.get('[class="v-btn__content"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Dashboard Menu Item')
                .to.contain("Dashboard")
            expect($navmenu.eq(1), 'Summary Menu Item')
                .to.contain('summary')
            expect($navmenu.eq(2), 'Inventory Menu Item')
                .to.contain('Inventory')
            expect($navmenu.eq(3), 'Nodes Menu Item')
                .to.contain('Nodes')
            expect($navmenu.eq(4), 'Vault Menu Item')
                .to.contain('Vault')
            })  
        cy.get('[class="v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--router v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text"]').should(($navmenu) => {
            expect($navmenu.eq(0), 'Inventory Menu Item')
                .to.have.attr('href', '/inventory')
            expect($navmenu.eq(1), 'Nodes Menu Item')
                .to.have.attr('href', '/nodes')
            expect($navmenu.eq(2), 'Vault Menu Item')
                .to.have.attr('href', '/vault')
            })    
        cy.get('[data-cy="nav-summary"]')
            .should('have.attr', 'href', '/')

        cy.get("[data-cy='nav-inventory']").click();
        cy.get('.v-card__title > span').should(($navinvent) => {
            expect($navinvent, 'The Inventory page title contains: ')
                .to.contain('Balances', { force: true })
        })   
    
        // Checking the Nodes Nav
        cy.get('[data-cy="nav-nodes"]').click();
        cy.get('[class="v-card__title text-capitalize"]').should(($navnodes) => {
            expect($navnodes.eq(0), "The Nodes page title contains: ")
                .to.contain("give Node Info")
        })

        cy.get('[data-cy="nav-vault"]')
            .click()
        cy.get('.v-card__title').should(($navvault) => {
            expect($navvault, "The Vault page title contains: ")
                .to.contain("Vault Items")
        })

        // Checking the Dashboard Nav
        cy.get('.v-toolbar__items > [href="https://giveblockchain.io/dashboard"] > .v-btn__content')
            .click();
        cy.get('h3').should('have.text', "Notice")
    })
})