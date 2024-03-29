/// <reference types="cypress" />
// When a customer is logged in
describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-node-info/")
        cy.url()
            .should("include", "/give-node-info/")   
    })

    it('Expecting/Asserting all text on page', () => {
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('Give Node')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Give Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Any Device")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Blockchain")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Earn Give Rewards")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("Give is a decentralized community of individuals and businesses who are committed to supporting the Give Blockchain. Community members own and operate Give Node software and contribute to the stability of the network.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("Give Node is compatible with any MacOS, Windows, or Linux device. Give Node can also be installed and operated on a virtual private server of your choosing.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Give Node offers a powerful interface allowing you to monitor its performance daily.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("Give Node supports the Give Blockchain by independently confirming transactions using advanced cryptography.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Give Node operators earn Give rewards, a Bitcoin like reward for supporting the Give Blockchain")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Decentralized Node Network")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Give Nodes may be purchased around the world.* Give is a global decentralized network of Give Node software operators. Give Node performs complex cryptographic computations to verify and confirm transactions on the Give Blockchain.")
            expect($features_para.eq(7), 'Seventh paragraph text')
                .to.contain("*Currently, Give Blockchain node software cannot be owned or operated in the following countries; Afghanistan, Balkans, Belarus, Burma, Cote D’Ivoire (Ivory Coast), Cuba, Democratic Republic of Congo, Iran, Iraq, Liberia, North Korea, Sudan, Syria, and Zimbabwe. Countries not listed MAY participate in building the Give Blockchain. Map is for illustrative purposes only.")
            expect($features_para.eq(8), 'Seventh paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give Blockchain and earn Give Rewards.")
            expect($features_para.eq(9), 'Seventh paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(10), 'Seventh paragraph text')
                .to.contain("Earn more Give Rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button jumbo see-through-3 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 
    })

    it('Expecting/Asserting for all button clicks that are active', () => {
        cy.get('[class="nectar-button jumbo see-through-3 "]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button jumbo see-through-3 "]')
            .eq(1)
            .click()
    })
})