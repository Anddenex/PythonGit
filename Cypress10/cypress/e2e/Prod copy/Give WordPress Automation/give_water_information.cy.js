/// <reference types="cypress" />
// When a customer is logged out

describe('Login', () => {
    beforeEach(() => {
        cy.wordpresslogin(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://giveblockchain.io/water-information/")
        cy.url()
            .should("include", "/water-information/")
    })

    it('Expecting/Asserting all text on the page', () => {
        cy.get('h1').should(($h1) => {
            expect($h1.eq(0), 'h1 First Title')
                .to.contain("Water")
        }) 

        cy.get('h2').should(($h2) => {
            // expect($h2.eq(0), 'h2 Second Title')
            //     .to.contain('6,500')
            // expect($h2.eq(1), 'h2 Third Title')
            //     .to.contain('36')
            // expect($h2.eq(2), 'h2 Fourth Title')
            //     .to.contain('1')
            expect($h2.eq(3), 'h2 Fifth Title')
                .to.contain('WATER SCARCITY')
            expect($h2.eq(4), 'h2 Fifth Title')
                .to.contain('Are you ready to')
        })

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain('MISSION')
            expect($h3.eq(1), 'H3 Second Title')
                .to.contain('OBJECTIVE')
            expect($h3.eq(2), 'H3 Third Title')
                .to.contain('WHY WATER?')
        }) 

        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'h4 First title text')
                .to.contain("More than 750 million people worldwide do not have access to clean drinking water. Our community has aligned with resourceful leaders and innovative charities who are committed to provide access to clean water around the world.")
            expect($h4.eq(1), 'h4 Second title text')
                .to.contain("Sponsoring:")
            expect($h4.eq(2), 'h4 Third title text')
                .to.contain("Illness")
            expect($h4.eq(3), 'h4 Fourth title text')
                .to.contain("Crops")
            expect($h4.eq(4), 'h4 Fifth title text')
                .to.contain("Women and Children")
            expect($h4.eq(5), 'h4 Sixth title text')
                .to.contain("Dangers")
        })

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("WHOlives exists to solve the scarce and contaminated water pandemic in the developing world through, innovative technology, cost-effective implementation models and sustainable and self-reliant approaches to well drilling and monitoring.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("We work every day to SOLVE scarce and contaminated water issues that plague over 1 billion people using our innovative technology “the Village Drill” and Our Sustainable and Self-Reliant implementation model that provides clean water, better health and safety, especially to women and girls, and economic opportunities to all people throughout the developing world.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("While many factors contribute to poverty, “water poverty” must be solved before any community can being considered “out of poverty”. There are no examples of villages, communities, or countries that have defeated poverty without first solving their scarce and contaminated water issues.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("Water is fundamental to health, economic growth, and gender equity—a fact that developed nations are largely unaware of. According to the United Nations, “Water is at the core of sustainable development and is critical for socio-economic development, healthy ecosystems and for human survival itself. It is vital for reducing the global burden of disease and improving the health, welfare and productivity of populations.”")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("52% of all hospital visits in developing nations are due to waterborne illnesses, so if you can fix the water issues you automatically SOLVE over half of their healthcare issues.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Food scarcity is directly related to water scarcity. An MIT study points out that with just an additional 10% of irrigation water over just rain water will produce 50% more crops!")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Women and children are disproportionately affected by water scarcity. Millions of women and girls on average will walk 3 miles a day to fetch dirty, contaminated water for their families.")
            expect($features_para.eq(7), 'Eigth paragraph text')
                .to.contain("Water is carried in 5-gallon containers weighing over 40 pounds. Common dangers women encounter on their trek to get daily water include physical injury, animal attacks, and even rape and child trafficking.")
            expect($features_para.eq(8), 'Ninth paragraph text')
                .to.contain("Contribute to Water.")
        })

        cy.get('[class="subject"]').should(($subject) => {
            expect($subject.eq(0), 'First subject text')
                .to.contain("WELLS DRILLED")
            expect($subject.eq(1), 'Second subject text')
                .to.contain("COUNTRIES SERVED")
            expect($subject.eq(2), 'Third subject text')
                .to.contain("PERSON IS ALL IT TAKES TO INFLUENCE CHANGE")
        })
    
        cy.get('[class="nectar-button large regular has-icon regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://wholives.org/donate/')
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW") 
                .to.have.attr('href', 'https://wholives.org/donate/')
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://wholives.org/donate/') 
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://wholives.org/donate/')      
        }) 
    })
})