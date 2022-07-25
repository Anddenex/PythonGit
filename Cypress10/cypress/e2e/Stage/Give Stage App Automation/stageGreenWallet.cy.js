/// <reference types="cypress" />

describe("New Core Practice", function () {
  it("login and wallet creation", function () {
    //login
    cy.visit("https://stage0.setpowerfree.com");
    cy.get('[class="wpb_text_column wpb_content_element "]').eq(3).click();
    cy.get('[id="email"]').type("aexon+Green@nerdunited.com");
    cy.get('[id="password"]').type("Nerd-ThisIsTheWay*1-United");
    //wallet creation and select finish later
    cy.get('[class="button solid log-in-form__submit-button"]').click();
    cy.get('[class="wallet-setup__button"]')
      .should("be.visible")
      .should("have.text", "Set Up Wallet")
      .click();
    cy.get('[class="inputWrapper"]').eq(0).type("Nerd-ThisIsTheWay*1-United");
    cy.get('[class="icons"]').eq(0).click();
    cy.get('[class="inputWrapper"]').eq(1).type("Nerd-ThisIsTheWay*1-United");
    cy.get('[class="icons"]').eq(1).click();
    cy.get('[class="button outlined finishLaterButton"]').click();
    //continue and complete wallet creation
    cy.get('[class="wallet-setup__button"]')
      .should("be.visible")
      .should("have.text", "Set Up Wallet")
      .click();
    cy.get('[class="inputWrapper"]').eq(0).type("Nerd-ThisIsTheWay*1-United");
    cy.get('[class="icons"]').eq(0).click();
    cy.get('[class="inputWrapper"]').eq(1).type("Nerd-ThisIsTheWay*1-United");
    cy.get('[class="icons"]').eq(1).click();
    cy.get('[class="button solid createPasscodeButton"]').click();
    //secure recovery phrase
    cy.get('[class="input"]').eq(0).invoke("attr", "value").as("value1");
    cy.get('[class="input"]').eq(1).invoke("attr", "value").as("value2");
    cy.get('[class="input"]').eq(2).invoke("attr", "value").as("value3");
    cy.get('[class="input"]').eq(3).invoke("attr", "value").as("value4");
    cy.get('[class="input"]').eq(4).invoke("attr", "value").as("value5");
    cy.get('[class="input"]').eq(5).invoke("attr", "value").as("value6");
    cy.get('[class="input"]').eq(6).invoke("attr", "value").as("value7");
    cy.get('[class="input"]').eq(7).invoke("attr", "value").as("value8");
    cy.get('[class="input"]').eq(8).invoke("attr", "value").as("value9");
    cy.get('[class="input"]').eq(9).invoke("attr", "value").as("value10");
    cy.get('[class="input"]').eq(10).invoke("attr", "value").as("value11");
    cy.get('[class="input"]').eq(11).invoke("attr", "value").as("value12");
    cy.window().then((win) => {
      cy.stub(win, "prompt").as("prompt");
      //cy.stub(win, 'alert').as('alert')
    });
    cy.get('[class="button solid copy__button"]').click();
    cy.get("@prompt").should(
      "have.been.calledOnceWith",
      "Copy to clipboard: ⌘+C, Enter"
    );
    cy.get('[type="submit"]').click();
    cy.get('[class="button"]').contains("Yes, I'm Sure").click();

    cy.get("@value1").then((response) => {
      cy.get('[class="input"]').eq(0).type(response);
    });
    cy.get("@value2").then((response) => {
      cy.get('[class="input"]').eq(1).type(response);
    });
    cy.get("@value3").then((response) => {
      cy.get('[class="input"]').eq(2).type(response);
    });
    cy.get("@value4").then((response) => {
      cy.get('[class="input"]').eq(3).type(response);
    });
    cy.get("@value5").then((response) => {
      cy.get('[class="input"]').eq(4).type(response);
    });
    cy.get("@value6").then((response) => {
      cy.get('[class="input"]').eq(5).type(response);
    });
    cy.get("@value7").then((response) => {
      cy.get('[class="input"]').eq(6).type(response);
    });
    cy.get("@value8").then((response) => {
      cy.get('[class="input"]').eq(7).type(response);
    });
    cy.get("@value9").then((response) => {
      cy.get('[class="input"]').eq(8).type(response);
    });
    cy.get("@value10").then((response) => {
      cy.get('[class="input"]').eq(9).type(response);
    });
    cy.get("@value11").then((response) => {
      cy.get('[class="input"]').eq(10).type(response);
    });
    cy.get("@value12").then((response) => {
      cy.get('[class="input"]').eq(11).type(response);
    });
  });
});
