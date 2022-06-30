class cypressCommands {

    openWP() {
        return cy.visit("https://giveblockchain.io/login/");
    }
    
    getuserEmail() {
        return cy.get("#user_login");
    }

    getuserPassword() {
        return cy.get("#user_pass");
    }

    getsubmitButton() {
        return cy.get("#wp-submit");
    }

    openApp() {
        return cy.visit('login');
    }

    getAppLoginButton() {
        return cy.get("button[type='submit']");
    }

    getAppTitle() {
        return cy.get('[class="v-card__title"]')
    }
}

export default new cypressCommands() 