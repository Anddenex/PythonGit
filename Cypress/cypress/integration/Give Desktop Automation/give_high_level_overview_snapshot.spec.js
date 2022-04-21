/// <reference types="cypress" />

describe('Login', () => {
    it('Login Page Accessible', () => {
        cy.visit('login');

        // Assert URL
        cy.url().should("include", "giveblockchain");

      })

    it('Login Form Elements', () => {
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

    // This placeholder text I am unable to find anything online to confirm how to confirm that the placeholder text is accurate except with the snapshots

        // cy.get("#email").should($placeholderemailtext => {
        //     console.log($placeholderemailtext.text());
        //     expect($placeholderemailtext.text()).to.eq("Email");
        // })

        // cy.get("[placeholder='[password]']").should($placeholderpasswordtext => {
        //     console.log($placeholderpasswordtext.text());
        //     expect($placeholderpasswordtext.text()).to.eq("Password");
        // })

    })

    it('Login Form Elements', () => {
    // Login to the App
        cy.login(Cypress.env('email'), Cypress.env('password'));
        cy.wait(5000);
        // Checking the Inventory Nav
        cy.get("[data-cy='nav-inventory']").click();
        cy.get("[class='v-card__title'] ").should($balance_title => {
            console.log($balance_title.text());
            expect($balance_title.text()).to.contain("Balances");
        })
        cy.wait(5000);

        // Checking the Nodes Nav
        cy.get("[data-cy='nav-nodes']").click();
        cy.get("a[data-cy='nav-nodes'] span[class='v-btn__content']").should($nodemenu => {
            console.log($nodemenu.text());
            expect($nodemenu.text()).to.contain("Nodes");
        })
        cy.wait(5000);

        cy.eyesOpen({
            appName: "Nodes", 
            testName: "Nodes page snapshot layout check",
            //browser: { width: 1269, height: 718, name: "firefox"}, Should render a FF image
            //browser: { width: 1269, height: 718, name: "chrome"}, Should render a chrome image
            //You can specify other browsers that are compatible with Cypress
     
        });

        cy.eyesCheckWindow("Nodes Page");
        cy.eyesClose();
        cy.wait(1000);

        // Checking the Vault Nav
        cy.get("[data-cy='nav-vault']").click();
        cy.get("a[data-cy='nav-vault'] span[class='v-btn__content']").should($vaultmenu => {
            console.log($vaultmenu.text());
            expect($vaultmenu.text()).to.contain("Vault");
        })
        cy.wait(5000);

        // Checking the Summary Nav
        cy.get("[data-cy='nav-summary']").click();
        cy.get("a[data-cy='nav-summary'] span[class='v-btn__content']").should($summarymenu => {
            console.log($summarymenu.text());
            expect($summarymenu.text()).to.contain("summary");
        })
        cy.wait(5000);
        cy.eyesOpen({
            appName: "Summary", 
            testName: "Summary page snapshot layout check",
            //browser: { width: 1269, height: 718, name: "firefox"}, Should render a FF image
            //browser: { width: 1269, height: 718, name: "chrome"}, Should render a chrome image
            //You can specify other browsers that are compatible with Cypress
     
        });

        cy.eyesCheckWindow("Summary Page");
        cy.eyesClose();
        cy.wait(1000);

        // Checking the Dashboard Nav
        cy.get("a[class='v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text'] span[class='v-btn__content']").should($dashboardmenu => {
            console.log($dashboardmenu.text());
            expect($dashboardmenu.text()).to.contain("Dashboard");
        })
        cy.get("a[class='v-btn v-btn--depressed v-btn--flat v-btn--has-bg v-btn--tile theme--light v-size--default topBar-Nav px-4 transparent black--text'] span[class='v-btn__content']").click();

        cy.wait(5000);
        cy.eyesOpen({
            appName: "Dashboard", 
            testName: "Dashboard page snapshot layout check",
            //browser: { width: 1269, height: 718, name: "firefox"}, Should render a FF image
            //browser: { width: 1269, height: 718, name: "chrome"}, Should render a chrome image
            //You can specify other browsers that are compatible with Cypress
     
        });

        cy.eyesCheckWindow("Dashboard Page");
        cy.eyesClose();
        cy.wait(1000);

    })
})