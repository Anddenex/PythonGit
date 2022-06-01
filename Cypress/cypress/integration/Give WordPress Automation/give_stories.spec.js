/// <reference types="cypress" />

describe('Sign up and Log In Page', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/stories/")
        cy.url()
            .should("include", "/stories/")
    })

    it('Expecting/Asserting the Meta Category "All" text and cards links', () => {
        cy.get('h1').should(($h1) => {
            expect($h1.eq(0), 'h1 First Title')
                .to.contain("Give Stories")
        }) 

        cy.get('.active')
            .should('have.text', "All")
            .should('have.attr', "data-total-count", "11")
        cy.get('[data-filter="give"]')
            .should('have.text', "Give")
            .should('have.attr', "data-total-count", "1")
        cy.get('[data-filter="humanitarian"]')
            .should('have.text', "Humanitarian")
            .should('have.attr', "data-total-count", "4")
        cy.get('[data-filter="save"]')
            .should('have.text', "Save")
            .should('have.attr', "data-total-count", "6")
        cy.get('[data-filter="water"]')
            .should('have.text', "Water")
            .should('have.attr', "data-total-count", "2")

        cy.get('.load-more').click()

        cy.get('[class="meta-category"]').should(($meta) => {
            expect($meta.eq(0), 'Meta Category First Title')
                .to.contain("Give")
            expect($meta.eq(1), 'Meta Category Second Title')
                .to.contain("Save")
            expect($meta.eq(2), 'Meta Category Third Title')
                .to.contain("Save")
            expect($meta.eq(3), 'Meta Category Fourth Title')
                .to.contain("Save")
            expect($meta.eq(4), 'Meta Category Fifth Title')
                .to.contain("Save")
            expect($meta.eq(5), 'Meta Category Sixth Title')
                .to.contain("Humanitarian")
            expect($meta.eq(6), 'Meta Category Seventh Title')
                .to.contain("Water")
            expect($meta.eq(7), 'Meta Category Eigth Title')
                .to.contain("Save")
            expect($meta.eq(8), 'Meta Category Ninth Title')
                .to.contain("Humanitarian")
            expect($meta.eq(9), 'Meta Category Tenth Title')
                .to.contain("Save")
            expect($meta.eq(10), 'Meta Category Eleventh Title')
                .to.contain("Humanitarian")
        }) 

        cy.get('[class="nectar-post-grid-link"]').should(($grid_label) => {
            expect($grid_label.eq(0), 'Grid_label First Title')
                .to.have.attr('aria-label', "Operation Copper Lion")
            expect($grid_label.eq(1), 'Grid_label Second Title')
                .to.have.attr('aria-label', "Ukrainian Children")
            expect($grid_label.eq(2), 'Grid_label Third Title')
                .to.have.attr('aria-label', "Samia")
            expect($grid_label.eq(3), 'Grid_label Fourth Title')
                .to.have.attr('aria-label', "Avani")
            expect($grid_label.eq(4), 'Grid_label Fifth Title')
                .to.have.attr('aria-label', "Ina")
            expect($grid_label.eq(5), 'Grid_label Sixth Title')
                .to.have.attr('aria-label', "Impact Mission Trip Update")
            expect($grid_label.eq(6), 'Grid_label Seventh Title')
                .to.have.attr('aria-label', "Hope for Girls Center")
            expect($grid_label.eq(7), 'Grid_label Eigth Title')
                .to.have.attr('aria-label', "Maya")
            expect($grid_label.eq(8), 'Grid_label Ninth Title')
                .to.have.attr('aria-label', "Wendy")
            expect($grid_label.eq(9), 'Grid_label Tenth Title')
                .to.have.attr('aria-label', "Suma")
            expect($grid_label.eq(10), 'Grid_label Eleventh Title')
                .to.have.attr('aria-label', "John & Mimi")
        }) 
    })

    it('Expecting/Asserting the Meta Category "Give" text and cards links', () => {

        cy.get('[data-filter="give"]')
            .should('have.text', "Give")
            .should('have.attr', "data-total-count", "1")
            .click()

        cy.get('[class="meta-category"]').should(($meta) => {
            expect($meta.eq(0), 'Meta Category First Title')
                .to.contain("Give")
        }) 

        cy.get('[class="nectar-post-grid-link"]').should(($grid_label) => {
            expect($grid_label.eq(0), 'Grid_label First Title')
                .to.have.attr('aria-label', "Operation Copper Lion")
        }) 

        cy.get('[class="nectar-post-grid-link"]').eq(0).click()
        cy.url().should('include', '/operation-copper-lion/')
        cy.get('h1').should('have.text', 'Operation Copper Lion')
    })

    it('Expecting/Asserting the Meta Category "Humanitarian" text and cards links', () => {

        cy.get('[data-filter="humanitarian"]')
            .should('have.text', "Humanitarian")
            .should('have.attr', "data-total-count", "4")
            .click()

        cy.get('[class="meta-category"]').should(($meta) => {
            expect($meta.eq(0), 'Meta Category Sixth Title')
                .to.contain("Humanitarian")
            expect($meta.eq(1), 'Meta Category Seventh Title')
                .to.contain("Water")
            expect($meta.eq(2), 'Meta Category Ninth Title')
                .to.contain("Humanitarian")
            expect($meta.eq(3), 'Meta Category Eleventh Title')
                .to.contain("Humanitarian")
        }) 

        cy.get('[class="nectar-post-grid-link"]').should(($grid_label) => {
            expect($grid_label.eq(0), 'Grid_label Sixth Title')
                .to.have.attr('aria-label', "Impact Mission Trip Update")
            expect($grid_label.eq(1), 'Grid_label Seventh Title')
                .to.have.attr('aria-label', "Hope for Girls Center")
            expect($grid_label.eq(2), 'Grid_label Ninth Title')
                .to.have.attr('aria-label', "Wendy")
            expect($grid_label.eq(3), 'Grid_label Eleventh Title')
                .to.have.attr('aria-label', "John & Mimi")
        }) 

        cy.get('[class="nectar-post-grid-link"]').eq(0).click()
        cy.url().should('include', '/impact-mission-trip-update/')
        cy.get('h1').should('have.text', 'Impact Mission Trip Update')
        cy.go('back')
        cy.get('[data-filter="humanitarian"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-link"]').eq(1).click()
        cy.url().should('include', '/hope-for-girls-center/')
        cy.get('h1').should('have.text', 'Hope for Girls Center')
        cy.go('back')
        cy.get('[data-filter="humanitarian"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-link"]').eq(2).click()
        cy.url().should('include', '/wendy/')
        cy.get('h1').should('have.text', 'Wendy')
        cy.go('back')
        cy.get('[data-filter="humanitarian"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-link"]').eq(3).click()
        cy.url().should('include', '/john-mimi/')
        cy.get('h1').should('have.text', 'John & Mimi')
    })

    it('Expecting/Asserting the Meta Category "Save" text and cards links', () => {

        cy.get('[data-filter="save"]')
            .should('have.text', "Save")
            .should('have.attr', "data-total-count", "6")
            .click()

        cy.get('[class="meta-category"]').should(($meta) => {
            expect($meta.eq(0), 'Meta Category First Title')
                .to.contain("Save")
            expect($meta.eq(1), 'Meta Category Second Title')
                .to.contain("Save")
            expect($meta.eq(2), 'Meta Category Third Title')
                .to.contain("Save")
            expect($meta.eq(3), 'Meta Category Fourth Title')
                .to.contain("Save")
            expect($meta.eq(4), 'Meta Category Fifth Title')
                .to.contain("Save")
            expect($meta.eq(5), 'Meta Category Sixth Title')
                .to.contain("Save")
        }) 

        cy.get('[class="nectar-post-grid-link"]').should(($grid_label) => {
            expect($grid_label.eq(0), 'Grid_label Sixth Title')
                .to.have.attr('aria-label', "Ukrainian Children")
            expect($grid_label.eq(1), 'Grid_label Seventh Title')
                .to.have.attr('aria-label', "Samia")
            expect($grid_label.eq(2), 'Grid_label Ninth Title')
                .to.have.attr('aria-label', "Avani")
            expect($grid_label.eq(3), 'Grid_label Tenth Title')
                .to.have.attr('aria-label', "Ina")
            expect($grid_label.eq(4), 'Grid_label Eleventh Title')
                .to.have.attr('aria-label', "Maya")
            expect($grid_label.eq(5), 'Grid_label Twelth Title')
                .to.have.attr('aria-label', "Suma")
        }) 

        cy.get('[class="nectar-post-grid-item"]').eq(0).click()
        cy.url().should('include', '/ukrainian-children/')
        cy.get('h1').should('have.text', 'Ukrainian Children')
        cy.go('back')
        cy.get('[data-filter="save"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(1).click()
        cy.url().should('include', '/samia/')
        cy.get('h1').should('have.text', 'Samia')
        cy.go('back')
        cy.get('[data-filter="save"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(2).click()
        cy.url().should('include', '/avani/')
        cy.get('h1').should('have.text', 'Avani')
        cy.go('back')
        cy.get('[data-filter="save"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(3).click()
        cy.url().should('include', '/ina/')
        cy.get('h1').should('have.text', 'Ina')
        cy.go('back')
        cy.get('[data-filter="save"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(4).click()
        cy.url().should('include', '/maya/')
        cy.get('h1').should('have.text', 'Maya')
        cy.go('back')
        cy.get('[data-filter="save"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(5).click()
        cy.url().should('include', '/suma/')
        cy.get('h1').should('have.text', 'Suma')
    })

    it('Expecting/Asserting the Meta Category "Water" text and cards links', () => {

        cy.get('[data-filter="water"]')
            .should('have.text', "Water")
            .should('have.attr', "data-total-count", "2")
            .click()

        cy.get('[class="meta-category"]').should(($meta) => {
            expect($meta.eq(0), 'Meta Category First Title')
                .to.contain("Water")
            expect($meta.eq(1), 'Meta Category Second Title')
                .to.contain("Water")
        }) 

        cy.get('[class="nectar-post-grid-link"]').should(($grid_label) => {
            expect($grid_label.eq(0), 'Grid_label First Title')
                .to.have.attr('aria-label', "Impact Mission Trip Update")
            expect($grid_label.eq(1), 'Grid_label Second Title')
                .to.have.attr('aria-label', "Hope for Girls Center")
        }) 

        cy.get('[class="nectar-post-grid-item"]').eq(0).click()
        cy.url().should('include', '/impact-mission-trip-update/')
        cy.get('h1').should('have.text', 'Impact Mission Trip Update')
        cy.go('back')
        cy.get('[data-filter="water"]').click()
        cy.wait(1000)

        cy.get('[class="nectar-post-grid-item"]').eq(1).click()
        cy.url().should('include', 'hope-for-girls-center/')
        cy.get('h1').should('have.text', 'Hope for Girls Center')
        cy.go('back')
        cy.get('[data-filter="water"]').click()
        cy.wait(1000)
    })
})