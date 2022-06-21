/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://giveblockchain.io/give-app/")
        cy.url()
            .should("include", "/give-app/")   
    })

    it('Document Test - iPhone-8-portrait', () => {
        cy.viewport('iphone-8', 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPhone-x-portrait', () => {
        cy.viewport('iphone-x', 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPad-mini-landscape', () => {
        cy.viewport('ipad-mini', 'landscape')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPad-2-landscape', () => {
        cy.viewport('ipad-2', 'landscape')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - SamsungS10-portrait', () => {
        cy.viewport('samsung-s10', 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - Samsung-Note9-portrait', () => {
        cy.viewport('samsung-note9', 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPhone12-portrait', () => {
        cy.viewport(390,844, 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPhone12-Mini-portrait', () => {
        cy.viewport(390,780, 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPad-Pro-landscape', () => {
        cy.viewport(1366,1024, 'landscape')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })

    it('Document Test - iPad-Pro-portrait', () => {
        cy.viewport(1024,1366, 'portrait')
        cy.get('h3').should(($h3) => {
            expect($h3.eq(0), 'H3 First Title').to.contain('The Give App')
            expect($h3.eq(1), 'H3 Second Title').to.contain('Donate Computing Power')

        }) 
        cy.get('[class="nectar-button large regular accent-color  regular-button"]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("Get The Give App Free")
            expect($button.eq(1), 'Second button text')
                .to.contain("Get The Give App Free")
        }) 
        
        cy.get('h4').should(($node_title) => {
            expect($node_title.eq(0), 'First title text')
                .to.contain("Give Node")
            expect($node_title.eq(1), 'Second title text')
                .to.contain("$25")
            expect($node_title.eq(2), 'Third title text')
                .to.contain("Smart Node")
            expect($node_title.eq(3), 'Fourth title text')
                .to.contain("Log in to see live price.")
        }) 

        cy.get('h5').should(($features_title) => {
            expect($features_title.eq(0), 'First title text')
                .to.contain("Mobile App")
            expect($features_title.eq(1), 'Second title text')
                .to.contain("Intuitive Interface")
            expect($features_title.eq(2), 'Third title text')
                .to.contain("Give Vault")
            expect($features_title.eq(3), 'Fourth title text')
                .to.contain("Decentralized App")
        }) 

        cy.get('p').should(($features_para) => {
            expect($features_para.eq(0), 'First paragraph text')
                .to.contain("The Give App runs on any iOS or Android mobile device. You can also access your Give App from your desktop, laptop, or tablet.")
            expect($features_para.eq(1), 'Second paragraph text')
                .to.contain("The Give App makes it easy to store and manage your digital rewards.")
            expect($features_para.eq(2), 'Third paragraph text')
                .to.contain("Earned rewards are deposited and secured in the Give Vault. You control when to send them from the Vault to your account.")
            expect($features_para.eq(3), 'Fourth paragraph text')
                .to.contain("The Give App lets you manage your digital rewards with confidence. The Give App is non-custodial meaning you — and only you hold the private keys for ultimate protection.")
            expect($features_para.eq(4), 'Fifth paragraph text')
                .to.contain("Donate computing power, energy and connectivity to help support the Give blockchain and earn Give rewards.")
            expect($features_para.eq(5), 'Sixth paragraph text')
                .to.contain("Give Blockchain Software")
            expect($features_para.eq(6), 'Seventh paragraph text')
                .to.contain("Earn more Give rewards with Smart Node")
        }) 

        cy.get('[class="nectar-button large see-through-2 "]').should(($button) => {
            expect($button.eq(0), 'First button text')
                .to.contain("COMING SOON")
            expect($button.eq(1), 'Second button text')
                .to.contain("COMING SOON")
        }) 

        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(0)
            .click()
        cy.get('[class="nectar-button large regular accent-color  regular-button"]')
            .eq(1)
            .click()
    })
})