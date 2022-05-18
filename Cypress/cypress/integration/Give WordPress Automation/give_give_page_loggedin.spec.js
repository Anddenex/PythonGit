/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give/")
        cy.url()
            .should("include", "/give/")
        cy.get('h1').should(($h1) => {
            expect($h1, 'H1 Title').to.contain('Give')
            expect($h1, 'H1 Title').to.have.attr('style', "text-align: center")
          })    
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.get('h5')
            .contains("The Give Blockchain is a global community of philanthropists and concerned citizens who share one unifying vision: a community that empowers and provides support to many important causes around the world.")
            .should('have.attr', 'style', "text-align: center;")
    })

    it('Confirming/Asserting the three sponsor cards', () => {
        cy.get('[class="cell is-selected"]').should(($cell) => {
            expect($cell.eq(0), 'Givers Sponsor')
                .to.have.attr('style', "position: absolute; left: 0%; height: 400px;")
            expect($cell.eq(1), 'Save Sponsor')
                .to.have.attr('style', "position: absolute; left: 34.46%; height: 400px;")
            expect($cell.eq(2), 'Water Sponsor')
                .to.have.attr('style', "position: absolute; left: 68.92%; height: 400px;")
            })   
        
        cy.get('[class="nectar-fancy-box using-img "]').should(($necfancy) => {
            expect($necfancy.eq(0), 'Givers Sponsor')
                .to.have.attr('style', "min-height: 400px")
                .to.have.attr('data-color', "extra-color-3")
                .to.have.contain("Givers")
            expect($necfancy.eq(1), 'Save Sponsor')
                .to.have.attr('style', "min-height: 400px")
                .to.have.attr('data-color', "extra-color-3")
                .to.have.contain("Save")
            expect($necfancy.eq(2), 'Water Sponsor')
                .to.have.attr('style', "min-height: 400px")
                .to.have.attr('data-color', "extra-color-3")
                .to.have.contain("Water")
            expect($necfancy.eq(3), 'Humanitarian Sponsor')
                .to.have.attr('style', "min-height: 400px")
                .to.have.attr('data-color', "extra-color-3")
                .to.have.contain("Humanitarian")
            })
        
        cy.get('[class="box-link"]').should(($boxlink) => {
            expect($boxlink.eq(0), 'Givers Sponsor')
                .to.have.attr('href', "/givers/")
            expect($boxlink.eq(1), 'Save Sponsor')
                .to.have.attr('href', "/save/")
            expect($boxlink.eq(2), 'Water Sponsor')
                .to.have.attr('href', "/water/")
            expect($boxlink.eq(3), 'Humanitarian Sponsor')
                .to.have.attr('href', "/humanitarian/")           
            })

        cy.get('[class="hover-content"]').should(($hover) => {
            expect($hover.eq(0).trigger('mouseover'), 'Givers Sponsor')
                .to.have.contain("LEARN MORE")
            expect($hover.eq(1).trigger('mouseover'), 'Save Sponsor')
                .to.have.contain("LEARN MORE")
            expect($hover.eq(2).trigger('mouseover'), 'Water Sponsor')
                .to.have.contain("LEARN MORE")
            expect($hover.eq(3).trigger('mouseover'), 'Humanitarian Sponsor')
                .to.have.contain("LEARN MORE")          
            })
    })

    it("Confirming/Asserting Can't Decide...", () => {
        cy.get('h2')
            .eq(0)
            .should('have.text', "Can’t decide who to give to?")
        cy.get('h4')
            .eq(0)
            .should('have.text', "Let us decide for you!")
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .should('have.text', "Give to Give")
            .should('have.attr', 'href', "/give-to-give/")
            .should('have.attr', 'style', "visibility: visible; color: rgb(255, 255, 255); border-color: rgba(255, 255, 255, 0.75);")
            .click()
        cy.get('h3')
            .eq(0)
            .should('have.text', "Support Give")
        cy.url().should('include', ".io/give-to-give/")
    })

    it('Confirming/Asserting the Support. Contribute. Give. section', () => {
        cy.get('h6')
            .should('have.text', "Support. Contribute. Give.")
        cy.get('[class="nectar-split-heading markup-generated"]')
            .should('have.text', "Together We Can Have a Greater Impact ")
        cy.get('[class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column padding-2-percent inherit_tablet inherit_phone "]')
            .contains("Become a part of the global movement.")
        cy.get('.nectar-carousel > .nectar-flickity > .next')
            .click()
        cy.get('[class="wpb_text_column wpb_content_element "]')
            .contains("Receive digital rewards with Give.")
        cy.get('.nectar-carousel > .nectar-flickity > .next')
            .click()
        cy.get('[class="wpb_text_column wpb_content_element "]')
            .contains("Learn more about our mission and values.")
        cy.get('[class="link_text"]')
            .eq(2)
            .should('have.attr', 'href', '/mission/')
        cy.get('.nectar-carousel > .nectar-flickity > .previous')
            .click()
        cy.get('[class="wpb_text_column wpb_content_element "]')
            .contains("Receive digital rewards with Give.")
        cy.get('[class="link_text"]')
            .eq(1)
            .should('have.attr', 'href', '/lets-give/')
        cy.get('.nectar-carousel > .nectar-flickity > .previous')
            .click()
        cy.get('[class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column padding-2-percent inherit_tablet inherit_phone "]')
            .contains("Become a part of the global movement.")
        cy.get('[class="link_text"]')
            .eq(0)
            .should('have.attr', 'href', '/give-node-information/')
    })

    it('Confirming/Asserting the last section and links', () => {
        cy.get('[class="wpb_text_column wpb_content_element  vc_custom_1643137756118"]')
            .contains("Do you have a cause we should support?")
        cy.get('[class="wpb_text_column wpb_content_element  vc_custom_1643137774207"]')
            .contains("We invite all to submit a proposal for global causes where the Give community can make an impact.")
        cy.get('[class="link_text nectar_video_lightbox magnific-popup"]')
            .contains("Submit a Proposal")
        cy.get('[class="link_text nectar_video_lightbox magnific-popup"]')
            .should('have.attr', 'href', '/submit-a-proposal/')
    })

    it('Confirming/Asserting the Givers Card Link', () => {
        cy.get('[class="cell is-selected"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', '/givers/')
        cy.get('h1')
            .should('have.text', "Givers")
    })

    it('Confirming/Asserting the Save Card Link', () => {
        cy.get('[class="cell is-selected"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', '/save/')
        cy.get('h1')
            .should('have.text', "Save")
    })

    it('Confirming/Asserting the Save Card Link', () => {
        cy.get('[class="cell is-selected"]')
            .eq(2)
            .click()
        cy.url()
            .should('include', '/water/')
        cy.get('h1')
            .should('have.text', "Water")
    })

    it('Confirming/Asserting the Save Card Link', () => {
        cy.get('[class="cell ')
            .eq(0)
            .click()
        cy.url()
            .should('include', '/humanitarian/')
        cy.get('h1')
            .should('have.text', "Humanitarian")
    })

    it('Confirming/Asserting the Slider First Link', () => {
        cy.get('[class="link_text"]')
            .eq(0)
            .should('have.attr', 'href', '/give-node-information/')
            .click()
        cy.get('h3')
            .eq(0)
            .should('have.text', "Give Node")

    })

    it('Confirming/Asserting the Slider Second Link', () => {
        cy.get('[class="link_text"]')
            .eq(1)
            .should('have.attr', 'href', '/lets-give/')
            .click()
        cy.get('h5')
            .should('have.text', "Join The Movement")
    })

    it('Confirming/Asserting the Slider Third Link', () => {
        cy.get('[class="link_text"]')
            .eq(2)
            .should('have.attr', 'href', '/mission/')
            .click()
        cy.get('h1')
            .should('have.text', "We Can Make a Change")
    })

    it('Confirming/Asserting the Slider Third Link', () => {
        cy.get('[class="link_text nectar_video_lightbox magnific-popup"]')
            .should('have.attr', 'href', '/submit-a-proposal/')
            .click()
    })
})