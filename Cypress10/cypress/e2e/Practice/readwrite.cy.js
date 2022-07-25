/// <reference types="cypress" />

describe("New Core Practice", function () {
  it("Writing to a file...", function () {
    cy.writeFile(
      "cypress/fixtures/read_write_files/sample.txt",
      "Hello world!\n"
    );
    cy.writeFile("cypress/fixtures/read_write_files/sample.txt", "Thank you!", {
      flag: "a+",
    });
    cy.writeFile("cypress/fixtures/read_write_files/sample.json", {
      name: "Andrew",
      email: "aexon@nerdunited.com",
      password: "Nerd-ThisIsTheWay*1-United",
    });
  });
});
