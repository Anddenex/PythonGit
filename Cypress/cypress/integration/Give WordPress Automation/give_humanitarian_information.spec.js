/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/humanitarian-information/")
        cy.url()
            .should("include", "/humanitarian-information/")
        cy.get('h1').should(($h1) => {
            expect($h1, 'H1 Title').to.contain('Humanitarian')
            // expect($h1.eq(0), 'H1 Title').to.have.attr('style', "text-align: center")
          })    
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h2').should(($h2) => {
            expect($h2.eq(0), 'H3 First Title').to.contain('3')
            expect($h2.eq(1), 'H3 Second Title').to.contain('2')
            expect($h2.eq(2), 'H3 Second Title').to.contain('1')
            expect($h2.eq(3), 'H3 Second Title').to.contain('HOW WE SERVE')
            expect($h2.eq(4), 'H3 Second Title').to.contain('AWARDED SCHOLARSHIPS')
            expect($h2.eq(5), 'H3 Second Title').to.contain('Are you ready to')
        }) 

        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('MISSION')
            expect($h3.eq(1), 'H3 Second Title').to.contain('OBJECTIVES')
            expect($h3.eq(2), 'H3 Second Title').to.contain('GOAL')

        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("We create meaningful cultural and service experiences for humanitarian participants, execute impactful and sustainable change for communities in need at home and around the world, and grant service scholarships for deserving families to ROAM with purpose.")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("Sponsoring:")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Service")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Nominate a Scholarship Family")
            expect($node_title.eq(4), 'Fifth title text')
                .to.contain("Give")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("Here at ROAM, we are committed to creating lasting and positive change in both our expedition participants and those whom we serve throughout the world. We may not change the world, but we believe we can change the world of an individual with one smile, one project, and one expedition at a time. ")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("Create meaningful cultural and service experiences for humanitarian participants, execute impactful and sustainable change for communities in need at home and around the world, and to grant service scholarships for deserving families to ROAM with purpose.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("1. Serve those in need both abroad and at home.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("Our goal is not a one-time service project, but an experience that inspires a life of involvement in humanitarian work and social impact. Each itinerary has been carefully selected to give back to those in need, have a ton of fun, and ROAM our fantastic planet with a purpose.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("We value service and believe we should serve those in need both abroad and at home.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("All families should have the opportunity to travel with purpose which is why we grant scholarships to deserving families and individuals so they can go on their dream service trip.")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("With your help we can offer deserving families and individuals the chance of a lifetime to serve with purpose.")
            expect($features_para.eq(7), 'Seventh paragraph text')
                .to.contain("“In 2010, the McDonalds lost their sweet Mia, a heart transplant recipient, while on her Make-a-Wish trip to Disneyworld. They have continued to share her love through their #loveformia campaign where they show acts of service particularly to those needs of young patients and their families.")
            expect($features_para.eq(8), 'Seventh paragraph text')
                .to.contain("“When I was 17 (43 now) I found comfort in numbing out with the help of drugs. My addiction lasted 17 years. Throughout those years I suffered in a lot of ways, including very toxic relationships. When I was 33 I went to a facility to get help. I battled many traumas and successfully fought for my life. I am now a single mom to two awesome kids and manage multiple homes for recovering addicts. This scholarship from ROAM Humanitarian was the perfect way to celebrate a hard fought ten years of sobriety.")
            expect($features_para.eq(9), 'Seventh paragraph text')
                .to.contain("I don’t even know how to describe what this experience to Peru with ROAM Humanitarian meant to me. A trip like this was only in my wildest dreams and ROAM Humanitarian made my dreams come true. From service, to conquering my fears, to extreme fun, they packed it all in and I will forever be grateful for this experience they made possible for me to be a part of!” ")
            expect($features_para.eq(10), 'Seventh paragraph text')
                .to.contain("Contribute to Humanitarian.")
        }) 

        cy.get('[class="subject"]').should(($subject) => {
            expect($subject.eq(0), 'H3 First Title').to.contain('COUNTRIES SERVED')
            expect($subject.eq(1), 'H3 Second Title').to.contain('FAMILY SCHOLARSHIPS GIVEN')
            expect($subject.eq(2), 'H3 Second Title').to.contain('PERSON IS ALL IT TAKES TO INFLUENCE CHANGE')
        }) 

        cy.get('[class="nectar-button large regular has-icon regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("GIVE NOW")
            expect($button.eq(1), 'Second button text')
                .to.contain("GIVE NOW")
            expect($button.eq(2), 'Second button text')
                .to.contain("GIVE NOW")
            expect($button.eq(3), 'Second button text')
                .to.contain("GIVE NOW")
        }) 
    })
    // // The buttons are currently directing to a different site which gives the Cypress error for cross application, unable to confirm, but looking further into it.
    // it('Expecting/Asserting for all button clicks that are active', () => {
    //     cy.get('[class="nectar-button large regular has-icon regular-button"]')
    //         .eq(0)
    //         .click()
    //     cy.url().should('include', "https://roamhumanitarian.org/donate")
    //     cy.go('back')
    //     cy.get('[class="nectar-button large regular has-icon regular-button"]')
    //         .eq(1)
    //         .click()
    //     cy.url().should('include', "https://roamhumanitarian.org/donate")
    //     cy.go('back')
    //     cy.get('[class="nectar-button large regular has-icon regular-button"]')
    //         .eq(2)
    //         .click()
    //     cy.url().should('include', "https://roamhumanitarian.org/donate")
    //     cy.go('back')
    //     cy.get('[class="nectar-button large regular has-icon regular-button"]')
    //         .eq(3)
    //         .click()
    //     cy.url().should('include', "https://roamhumanitarian.org/donate")
    //     cy.go('back')
    // })
})