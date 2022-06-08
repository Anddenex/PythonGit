/// <reference types="cypress" />
// When a customer is logged out

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/mission")
        cy.url()
            .should("include", "/mission")
    })

    it('Expecting/Asserting all text on the page', () => {
        cy.get('h1').should(($h1) => {
            expect($h1.eq(0), 'h1 First Title')
                .to.contain("We Can Make a Change")
        }) 

        cy.get('h2').should(($h2) => {
            expect($h2.eq(0), 'h2 First Title')
                .to.contain('Our Core Values')
            expect($h2.eq(1), 'h2 Second Title')
                .to.contain('Causes We Support')
        })

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain('Our Mission')
            expect($h3.eq(1), 'H3 Second Title')
                .to.contain('Our Vision')
            expect($h3.eq(2), 'H3 Third Title')
                .to.contain('Do you have a cause we should support?')
        }) 

        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'h4 First title text')
                .to.contain("Courage")
            expect($h4.eq(1), 'h4 Second title text')
                .to.contain("Collaboration")
            expect($h4.eq(2), 'h4 Third title text')
                .to.contain("Inclusiveness")
            expect($h4.eq(3), 'h4 Fourth title text')
                .to.contain("Values")
            expect($h4.eq(4), 'h4 Fifth title text')
                .to.contain("Integrity")
            expect($h4.eq(5), 'h4 Sixth title text')
                .to.contain("Compassion")
            expect($h4.eq(6), 'h4 Seventh title text')
                .to.contain("Become a part of the global movement.")
        })

        cy.get('h5').should(($h5) => {
            expect($h5.eq(0), 'First title text')
                .to.contain("The Give Blockchain is a global community doing good around the world.")
        }) 

        cy.get('h6').should(($h6) => {
            expect($h6.eq(0), 'First card title text')
                .to.contain("GIVERS")
            expect($h6.eq(1), 'Second card title text')
                .to.contain("SAVE")
            expect($h6.eq(2), 'Third card title text')
                .to.contain("WATER")
            expect($h6.eq(3), 'Fourth card title text')
                .to.contain("HUMANITARIAN")
        })

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("Give is more than a charity—Give is a global movement making an impact on the lives of millions around the world. Give continues to support important causes around the globe. Our work is never done as we dedicate our time, talent, and resources to create positive outcomes. Together as a community we can make a difference. We can create lasting positive change.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("We will always have the courage and the strength required to take on difficult challenges to champion for people who are in the most need. We unite with good people who are unafraid and unabashed in their commitment to contribute.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("We are a community. We collaborate with each other to achieve our mission. We are individuals, companies, families and faith-based groups who set aside petty differences and disparate beliefs to focus our efforts on supporting and achieving our common goals.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("Those in our community come from all walks of life. Everyone involved comes from a wide variety of backgrounds, not just because it’s the right thing to do, but because it makes our community stronger. We believe greatness exists in everyone.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Our core values act as guiding principles to dictate behavior as we set goals. Our values serve as an unwavering guide in making strategic decisions in technology investments and guide us in the direction where we can make the largest impact.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give is unique. Give provides a platform and the technology to enable good people to do good things. 100% of all donations contributed by community members on the Give platform are delivered to the cause. We do not take administration fees.")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("At the heart of every decision is our unwavering commitment to deliver compassionate service for all nations, communities, neighborhoods, and people we serve. We strive to create a brighter future by supporting causes to end suffering and create opportunities globally.")
            expect($features_para.eq(7), 'Eigth paragraph text')
                .to.contain("Combine the power of the decentralized blockchain with the power of love and kindness to give to the Earth with compassion.")
            expect($features_para.eq(8), 'Ninth paragraph text')
                .to.contain("Our Give community contributes talent and donates resources to support important projects achieve their highest potential.")
            expect($features_para.eq(9), 'Tenth paragraph text')
                .to.contain("To realize the full potential of the blockchain through participation in important charitable work impacting the lives of millions to create a new era of hope and prosperity.")
            expect($features_para.eq(10), 'Twelth paragraph text')
                .to.contain("Even if you are unable to make a donation, we invite you to become a part of the Give Blockchain. Register now to learn how you can be a part of this important mission.")
            expect($features_para.eq(11), 'Eleventh paragraph text')
                .to.contain("We invite all to submit a proposal for global causes where the Give community can make an impact.")
        })
        
        cy.get('[class="hover-content"]').should(($cards) => {
            expect($cards.eq(0).trigger('mouseover'), "Givers cards...")
                .to.have.contain('Our core mission provides a conduit for doing good around the globe by supporting the extraordinary individuals who give everything to their organizations and projects they have founded.')
            expect($cards.eq(1).trigger('mouseover'), "Save cards...")
                .to.have.contain("The global Give community is working with some of the world's top nonprofit foundations and charities to fight against human trafficking. We invite you to join us in our pursuit toward ending this evil scourge and human suffering.")
            expect($cards.eq(2).trigger('mouseover'), "Water cards...")
                .to.have.contain("More than 750,000,000 million people worldwide do not have access to clean drinking water. Our community has aligned with resourceful leaders and innovative charities who are committed to provide access to clean water around the world.")
            expect($cards.eq(3).trigger('mouseover'), "Humanitarian cards...")
                .to.have.contain("We create meaningful cultural and service experiences for humanitarian participants, execute impactful and sustainable change for communities in need at home and around the world, and grant service scholarships for deserving families to ROAM with purpose.")
        })

        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Make a Donation")
            expect($button.eq(1), 'Second button text')
                .to.contain("Register Now")    
        }) 

        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'Second button text')
                .to.contain("Submit a Proposal")
        })
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', "/all-give-products/")
        cy.go('back')
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', "/lets-give/")
        cy.go('back')
        cy.get('[class="nectar-button jumbo regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', '/submit-a-proposal/')
    })
})