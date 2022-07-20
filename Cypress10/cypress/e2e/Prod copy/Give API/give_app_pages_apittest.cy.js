/// <reference types="cypress" />

describe('API testing', () => {
    it('Get -- read -- giveblockchain.io', () => {
        cy.request('GET', '/').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.headers.connection).to.have.string("keep-alive")
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /inventory', () => {
        cy.request('GET', '/inventory').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /nodes', () => {
        cy.request('GET', '/nodes').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /vault', () => {
        cy.request('GET', '/vault').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /prices', () => {
        cy.request('GET', '/prices').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /social', () => {
        cy.request('GET', '/social').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Get -- read -- /social', () => {
        cy.request('GET', '/social').should((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })
})