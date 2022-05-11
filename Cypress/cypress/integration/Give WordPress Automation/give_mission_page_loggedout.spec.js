/// <reference types="cypress" />
// When a customer is logged out
// Updates

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/mission-information/")
        cy.url()
            .should("include", ".io/mission-information/")
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.get('h1')
            .should('have.text', "We Can Make a Change")
        cy.get('h5 > :nth-child(1) > span')
            .contains("The Give Blockchain is a global community")
            .should('have.text', "The Give Blockchain is a global community ")
        cy.get('h5 > :nth-child(2) > span')
            .contains("doing good around the world.")
            .should('have.text', "doing good around the world.")

        // Login and Sign up Section tests
        cy.get('h4')
            .eq(0)
            .should('have.text', "Login to make purchases and give.")
            .should('have.attr', 'style', "text-align: center;")
        cy.get('[class="nectar-button jumbo see-through accent-color"]').should(($necton) => {
            expect($necton.eq(0), 'Login button')
                .to.contain('Login')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; visibility: visible; color: rgb(255, 255, 255); border-color: rgba(255, 255, 255, 0.75);")
                .to.have.attr('href', "/login/")
                .to.have.attr('data-hover-text-color-override', "#fff")
            expect($necton.eq(1), 'Sign Up Free button')
                .to.contain('Sign Up Free')
                .to.have.attr('style', "margin-right: 10px; margin-left: 10px; visibility: visible; color: rgb(255, 255, 255); border-color: rgba(255, 255, 255, 0.75);")
                .to.have.attr('href', "/lets-give/")
                // .to.have.attr('data-color-override', "#ffffff")
                .to.have.attr('data-hover-text-color-override', "#fff")
            })
        // Login link check
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .eq(0)
            .click()
        cy.url()
            .should('include', "/login/")
        cy.get('h5')
            .should('have.text', "Login to access your account:")   
        cy.visit("https://giveblockchain.io/mission-information/")

        // Sign Up Free link check
        cy.get('[class="nectar-button jumbo see-through accent-color"]')
            .eq(1)
            .click()
        cy.url()
            .should('include', "/lets-give/")
        cy.get('h5')
            .should('have.text', "Join The Movement")   
    })

    it('Expecting/Asserting text for button accurate', () => {
        cy.get('h2')
            .eq(0)
            .should('have.text', "Our Core Values")
            .should('have.attr', 'style', 'font-size: 48px;line-height: 57px;text-align: center')
            .should('have.class', "vc_custom_heading")
        cy.get('h4').should(($h4) => {
            expect($h4.eq(1), 'Fire Core Value Feature Courage')
                .to.have.contain("Courage")
            expect($h4.eq(2), 'Fire Core Value Feature Collaboration')
                .to.have.contain("Collaboration")
            expect($h4.eq(3), 'Fire Core Value Feature Inclusiveness')
                .to.have.contain("Inclusiveness")
            expect($h4.eq(4), 'Fire Core Value Feature Values')
                .to.have.contain("Values")
            expect($h4.eq(5), 'Fire Core Value Feature Integrity')
                .to.have.contain("Integrity")
            expect($h4.eq(6), 'Fire Core Value Feature Compassion')
                .to.have.contain("Compassion")
        })
        The core values features the selectors change everytime, so I can use those. The moment the site is refreshed the selector changes.
        Will have to look at another way.

        cy.wait(2000)
        cy.get('#fws_62759d4f856e2 > .row_col_wrap_12_inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .vc_custom_heading')
            .contains("We will always have the courage and the strength required to take on difficult challenges to champion for people who are in the most need. We unite with good people who are unafraid and unabashed in their commitment to contribute.") 
        cy.get('#fws_62759d4f856e2 > .row_col_wrap_12_inner > :nth-child(2) > .vc_column-inner > :nth-child(1) > .vc_custom_heading')
            .contains('We are a community. We collaborate with each other to achieve our mission. We are individuals, companies, families and faith-based groups who set aside petty differences and disparate beliefs to focus our efforts on supporting and achieving our common goals.')
        cy.get('#fws_62759d4f856e2 > .row_col_wrap_12_inner > :nth-child(3) > .vc_column-inner > :nth-child(1) > .vc_custom_heading')
            .contains('Those in our community come from all walks of life. Everyone involved comes from a wide variety of backgrounds, not just because it’s the right thing to do, but because it makes our community stronger. We believe greatness exists in everyone.')
        cy.get('#fws_62759d4f8628b > .row_col_wrap_12_inner > :nth-child(1) > .vc_column-inner > :nth-child(1) > .vc_custom_heading')
            .contains('Our core values act as guiding principles to dictate behavior as we set goals. Our values serve as an unwavering guide in making strategic decisions in technology investments and guide us in the direction where we can make the largest impact.')
        cy.get('')
            .contains('Give is unique. Give provides a platform and the technology to enable good people to do good things. 100% of all donations contributed by community members on the Give platform are delivered to the cause. We do not take administration fees.')
        cy.get('')
            .contains('At the heart of every decision is our unwavering commitment to deliver compassionate service for all nations, communities, neighborhoods, and people we serve. We strive to create a brighter future by supporting causes to end suffering and create opportunities globally.')      
    })

    it('Expecting/Asserting 50/50 section', () => {
        cy.get('[class="wpb_text_column wpb_content_element "]').should(($title) => {
            expect($title.eq(4), '50/50 first title')
                .to.have.contain("Our Mission")
            expect($title.eq(5), '50/50 first title first paragraph')
                .to.have.contain("Combine the power of the decentralized blockchain with the power of love and kindness to give to the Earth with compassion.")
            expect($title.eq(6), '50/50 first title second paragraph')
                .to.have.contain("Our Give community contributes talent and donates resources to support important projects achieve their highest potential.")
            expect($title.eq(7), '50/50 second title')
                .to.have.contain("Our Vision")
            expect($title.eq(8), '50/50 second title first paragraph')
                .to.have.contain("To realize the full potential of the blockchain through participation in important charitable work impacting the lives of millions to create a new era of hope and prosperity.")
            expect($title.eq(10), 'Global movement paragraph')
                .to.have.contain("Even if you are unable to make a donation, we invite you to become a part of the Give Blockchain. Register now to learn how you can be a part of this important mission.")
            expect($title.eq(11), 'Support the cause title')
                .to.have.contain("Do you have a cause we should support?")
            expect($title.eq(12), 'Support the cause title paragraph')
                .to.have.contain("We invite all to submit a proposal for global causes where the Give community can make an impact.")
        })
    })
})