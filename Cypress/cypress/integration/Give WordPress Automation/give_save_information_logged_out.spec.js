/// <reference types="cypress" />
// When a customer is logged out

describe('Login', () => {
    beforeEach(() => {
        cy.wordpresslogin(Cypress.env('email'), Cypress.env('password'));
        cy.visit("https://giveblockchain.io/save-information/")
        cy.url()
            .should("include", "/save-information/")
    })

    it('Expecting/Asserting all text on the page', () => {
        cy.get('h1').should(($h1) => {
            expect($h1.eq(0), 'h1 First Title')
                .to.contain("Save")
        }) 

        cy.get('h2').should(($h2) => {
            // expect($h2.eq(0), 'h2 Second Title')
            //     .to.contain('6,010')
            // expect($h2.eq(1), 'h2 Third Title')
            //     .to.contain('9')
            // expect($h2.eq(2), 'h2 Fourth Title')
            //     .to.contain('1')
            expect($h2.eq(3), 'h2 Fifth Title')
                .to.contain('EXPERTISE AREAS')
            expect($h2.eq(4), 'h2 Fifth Title')
                .to.contain('Are you ready to')
        })

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title')
                .to.contain('MISSION')
            expect($h3.eq(1), 'H3 Second Title')
                .to.contain('OBJECTIVES')
            expect($h3.eq(2), 'H3 Third Title')
                .to.contain('WHAT CAN WE DO?')
        }) 

        cy.get('h4').should(($h4) => {
            expect($h4.eq(0), 'h4 First title text')
                .to.contain("The global Give community is working with some of the world's top nonprofit foundations and charities to fight against human trafficking. We invite you to join us in our pursuit toward ending this evil scourge and human suffering.")
            expect($h4.eq(1), 'h4 Second title text')
                .to.contain("Sponsoring:")
            expect($h4.eq(2), 'h4 Third title text')
                .to.contain("Rescue")
            expect($h4.eq(3), 'h4 Fourth title text')
                .to.contain("Access to Justice")
            expect($h4.eq(4), 'h4 Fifth title text')
                .to.contain("Aftercare")
            expect($h4.eq(5), 'h4 Sixth title text')
                .to.contain("Special Programs")
        })

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("Free a Girl rescues minor girls from situations of sexual exploitation. We empower the victims and make every effort to ensure that their exploiters are brought to justice. Through campaigning and lobbying we influence policies and we educate survivors at our School for Justice program to change the system from within.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("Worldwide, more than 2 million children are victims of sexual exploitation. Globally, 150 billion dollars is earned from the criminal industry of human trafficking. Our mission is to rescue all children from situations of sexual exploitation, combat child sexual exploitation, and provide access to justice.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Our two main objectives are combating sexual exploitation of children and raising awareness of the existence of child sexual exploitation and the urgency to combat it. Every child has the right to grow up in a safe environment. All children around the world must be protected against every form of exploitation.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("With your generous gift, we can fund specific needs:")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("For $ 5, we can provide a rescued girl with a water bottle, clothes and medical supplies;")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("We support undercover and online investigation, collecting evidence, and rescue raids in cooperation with the local police in the program countries.")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("We help create awareness about survivors’ rights and assist in the legal process as well as boost mental resilience and strength of the victims.")
            expect($features_para.eq(7), 'Eigth paragraph text')
                .to.contain("We ensure that the victims end up in a safe situation. They are also given acute medical care and psychological assistance to process their traumas, and to prevent them from becoming victims again.")
            expect($features_para.eq(8), 'Ninth paragraph text')
                .to.contain("Through The School of Justice, Smart Rescue, and Awareness Campaigns we are able to support and aid in rescuing victims as well as raise awareness of child sexual exploitation.")
            expect($features_para.eq(9), 'Tenth paragraph text')
                .to.contain("Contribute to Save.")
        })

        cy.get('[class="subject"]').should(($subject) => {
            expect($subject.eq(0), 'First subject text')
                .to.contain("GIRLS RESCUED")
            expect($subject.eq(1), 'Second subject text')
                .to.contain("COUNTRIES SERVED")
            expect($subject.eq(2), 'Third subject text')
                .to.contain("PERSON IS ALL IT TAKES TO INFLUENCE CHANGE")
        })

        cy.get('[class="nectar-button large regular has-icon regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://www.freeagirlusa.org/donate/')
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW") 
                .to.have.attr('href', 'https://www.freeagirlusa.org/donate/')
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://www.freeagirlusa.org/donate/') 
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")
                .to.have.attr('href', 'https://www.freeagirlusa.org/donate/')      
        }) 
    })
})