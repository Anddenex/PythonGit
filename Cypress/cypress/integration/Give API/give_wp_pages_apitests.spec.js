/// <reference types="cypress" />

describe('API testing', () => {
    Cypress.config('baseUrl', "https://giveblockchain.io/")
    it('Get -- read -- giveblockchain.io', () => {
        cy.request('GET', '/').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.headers.connection).to.have.string("keep-alive")
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-information', () => {
        cy.request('GET', '/give-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /mission-information', () => {
        cy.request('GET', '/mission-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /about-us', () => {
        cy.request('GET', '/about-us').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /dashboard', () => {
        cy.request('GET', '/dashboard').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give', () => {
        cy.request('GET', '/give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-100', () => {
        cy.request('GET', '/give-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-25', () => {
        cy.request('GET', '/give-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-50', () => {
        cy.request('GET', '/give-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-500', () => {
        cy.request('GET', '/give-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-app', () => {
        cy.request('GET', '/give-app').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-app-information', () => {
        cy.request('GET', '/give-app-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-node-info', () => {
        cy.request('GET', '/give-node-info').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-node-information', () => {
        cy.request('GET', '/give-node-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /offer-smart-node', () => {
        cy.request('GET', '/offer-smart-node').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-to-give', () => {
        cy.request('GET', '/give-to-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-send-payment', () => {
        cy.request('GET', '/give-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /give-thank-you', () => {
        cy.request('GET', '/give-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers', () => {
        cy.request('GET', '/givers').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-arjan-erkel', () => {
        cy.request('GET', '/give-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-arjan-erkel-25', () => {
        cy.request('GET', '/givers-arjan-erkel-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-arjan-erkel-50', () => {
        cy.request('GET', '/givers-arjan-erkel-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-arjan-erkel-100', () => {
        cy.request('GET', '/givers-arjan-erkel-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-arjan-erkel-500', () => {
        cy.request('GET', '/givers-arjan-erkel-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-evelien-holsken', () => {
        cy.request('GET', '/givers-evelien-holsken').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-evelien-holsken-25', () => {
        cy.request('GET', '/givers-evelien-holsken-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-evelien-holsken-50', () => {
        cy.request('GET', '/givers-evelien-holsken-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-evelien-holsken-100', () => {
        cy.request('GET', '/givers-evelien-holsken-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-evelien-holsken-500', () => {
        cy.request('GET', '/givers-evelien-holsken-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-john-renouard', () => {
        cy.request('GET', '/givers-john-renouard').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-john-renouard-25', () => {
        cy.request('GET', '/givers-john-renouard-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-john-renouard-50', () => {
        cy.request('GET', '/givers-john-renouard-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-john-renouard-100', () => {
        cy.request('GET', '/givers-john-renouard-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-john-renouard-500', () => {
        cy.request('GET', '/givers-john-renouard-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-justin-lindsay-bowen', () => {
        cy.request('GET', '/givers-justin-lindsay-bowen').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-justin-lindsay-bowen-25', () => {
        cy.request('GET', '/givers-justin-lindsay-bowen-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-justin-lindsay-bowen-50', () => {
        cy.request('GET', '/givers-justin-lindsay-bowen-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-justin-lindsay-bowen-100', () => {
        cy.request('GET', '/givers-justin-lindsay-bowen-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-justin-lindsay-bowen-500', () => {
        cy.request('GET', '/givers-justin-lindsay-bowen-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-give', () => {
        cy.request('GET', '/givers-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-information', () => {
        cy.request('GET', '/givers-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-send-payment', () => {
        cy.request('GET', '/givers-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /givers-thank-you', () => {
        cy.request('GET', '/givers-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian', () => {
        cy.request('GET', '/humanitarian').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-25', () => {
        cy.request('GET', '/humanitarian-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-50', () => {
        cy.request('GET', '/humanitarian-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-100', () => {
        cy.request('GET', '/humanitarian-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-500', () => {
        cy.request('GET', '/humanitarian-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-give', () => {
        cy.request('GET', '/humanitarian-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-information', () => {
        cy.request('GET', '/humanitarian-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-send-payment', () => {
        cy.request('GET', '/humanitarian-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /humanitarian-thank-you', () => {
        cy.request('GET', '/humanitarian-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /lets-give', () => {
        cy.request('GET', '/lets-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light', () => {
        cy.request('GET', '/light').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-25', () => {
        cy.request('GET', '/light-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-50', () => {
        cy.request('GET', '/light-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-100', () => {
        cy.request('GET', '/light-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-500', () => {
        cy.request('GET', '/light-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-funnel', () => {
        cy.request('GET', '/light-funnel').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-give', () => {
        cy.request('GET', '/light-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-thank-you', () => {
        cy.request('GET', '/light-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /light-send-payment', () => {
        cy.request('GET', '/light-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /login', () => {
        cy.request('GET', '/login').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /logout', () => {
        cy.request('GET', '/logout').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /mission', () => {
        cy.request('GET', '/mission').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /node-acknowledgments', () => {
        cy.request('GET', '/node-acknowledgments').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /offer-node', () => {
        cy.request('GET', '/offer-node').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /register-node', () => {
        cy.request('GET', '/register-node').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /node-send-payment', () => {
        cy.request('GET', '/node-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /privacy-policy', () => {
        cy.request('GET', '/privacy-policy').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save', () => {
        cy.request('GET', '/save').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-25', () => {
        cy.request('GET', '/save-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-50', () => {
        cy.request('GET', '/save-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-100', () => {
        cy.request('GET', '/save-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-500', () => {
        cy.request('GET', '/save-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-send-payment', () => {
        cy.request('GET', '/save-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-funnel', () => {
        cy.request('GET', '/save-funnel').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-give', () => {
        cy.request('GET', '/save-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-information', () => {
        cy.request('GET', '/save-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /save-thank-you', () => {
        cy.request('GET', '/save-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /sign-up', () => {
        cy.request('GET', '/sign-up').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /site-map', () => {
        cy.request('GET', '/site-map').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /register-smart-node', () => {
        cy.request('GET', '/register-smart-node').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /smart-node-acknowledgements', () => {
        cy.request('GET', '/smart-node-acknowledgements').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /smart-node-order-processing', () => {
        cy.request('GET', '/smart-node-order-processing').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /software-download', () => {
        cy.request('GET', '/software-download').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /software-terms', () => {
        cy.request('GET', '/software-terms').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /stories', () => {
        cy.request('GET', '/stories').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /style-sheet', () => {
        cy.request('GET', '/style-sheet').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /submit-a-proposal', () => {
        cy.request('GET', '/submit-a-proposal').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /supporter', () => {
        cy.request('GET', '/supporter').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /supporter-test', () => {
        cy.request('GET', '/supporter-test').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /terms-of-use', () => {
        cy.request('GET', '/terms-of-use').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /test-page', () => {
        cy.request('GET', '/test-page').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water', () => {
        cy.request('GET', '/water').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-25', () => {
        cy.request('GET', '/water-25').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-50', () => {
        cy.request('GET', '/water-50').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-100', () => {
        cy.request('GET', '/water-100').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-500', () => {
        cy.request('GET', '/water-500').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-send-payment', () => {
        cy.request('GET', '/water-send-payment').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-funnel', () => {
        cy.request('GET', '/water-funnel').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-give', () => {
        cy.request('GET', '/water-give').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-information', () => {
        cy.request('GET', '/water-information').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /water-thank-you', () => {
        cy.request('GET', '/water-thank-you').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /love', () => {
        cy.request('GET', '/love').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })
})
