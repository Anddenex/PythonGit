/// <reference types="cypress" />

describe('New Core Practice', function () {
    it('login and wallet creation', function () {
        //login
        cy.visit('https://stage0.setpowerfree.com')
        cy.get('[class="wpb_text_column wpb_content_element "]').eq(3).click()
        cy.get('[class="button link log-in-form__create-button"]').click()
        cy.get('#fullName').type('Andrew Exon')
        cy.get('#email').type('aexon+Green@nerdunited.com')
        cy.get('#password').type('Nerd-ThisIsTheWay*1-United')
        cy.get('#confirmPassword').type('Nerd-ThisIsTheWay*1-United')
        cy.get('#adult').click()
        cy.get('#optInNewsletter').click()
    })
})