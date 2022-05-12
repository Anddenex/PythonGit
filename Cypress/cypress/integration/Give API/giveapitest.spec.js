/// <reference types="cypress" />

describe('API testing', () => {
    
    it('Get -- read', () => {
        cy.request('GET', 'https://giveblockchain.io/').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })
})
