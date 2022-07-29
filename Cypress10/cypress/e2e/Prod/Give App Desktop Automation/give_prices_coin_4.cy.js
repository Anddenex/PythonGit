/// <reference types="cypress" />

describe('Coin Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.get('[type="button"]').eq(2).click();
    cy.wait(1000);
  });

  it('Ripio coin page assertion', () => {
    cy.prices_coin('Ripio');
    cy.url().should('include', '/prices/RCN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Ripio'
    );
  });

  it('BlockNet coin page assertion', () => {
    cy.prices_coin('BlockNet');
    cy.url().should('include', '/prices/BLOCK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'BlockNet'
    );
  });

  it('ChainLink coin page assertion', () => {
    cy.prices_coin('ChainLink');
    cy.url().should('include', '/prices/LINK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'ChainLink'
    );
  });

  it('Nexus coin page assertion', () => {
    cy.prices_coin('Nexus');
    cy.url().should('include', '/prices/NXS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Nexus'
    );
  });

  it('Rise coin page assertion', () => {
    cy.prices_coin('Rise');
    cy.url().should('include', '/prices/RISE');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Rise'
    );
  });

  it('Particl coin page assertion', () => {
    cy.prices_coin('Particl');
    cy.url().should('include', '/prices/PART');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Particl'
    );
  });

  it('Dentacoin coin page assertion', () => {
    cy.prices_coin('Dentacoin');
    cy.url().should('include', '/prices/DCN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Dentacoin'
    );
  });

  it('Ubiq coin page assertion', () => {
    cy.prices_coin('Ubiq');
    cy.url().should('include', '/prices/UBQ');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Ubiq'
    );
  });

  it('SmartCash coin page assertion', () => {
    cy.prices_coin('SmartCash');
    cy.url().should('include', '/prices/SMART');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SmartCash'
    );
  });

  it('Storj coin page assertion', () => {
    cy.prices_coin('Storj');
    cy.url().should('include', '/prices/STORJ');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Storj'
    );
  });

  it('PayPie coin page assertion', () => {
    cy.prices_coin('PayPie');
    cy.url().should('include', '/prices/PPP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'PayPie'
    );
  });

  it('Metal coin page assertion', () => {
    cy.prices_coin('Metal');
    cy.url().should('include', '/prices/MTL');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Metal'
    );
  });

  it('Centra coin page assertion', () => {
    cy.get('#input-146').type('Centra');
    cy.get('tbody > tr > :nth-child(2)')
      .eq(1)
      .should('have.text', 'Centra')
      .click();
    cy.url().should('include', '/prices/CTR');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Centra'
    );
  });

  it('Time New Bank coin page assertion', () => {
    cy.prices_coin('Time New Bank');
    cy.url().should('include', '/prices/TNB');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Time New Bank'
    );
  });

  it('Streamr DATAcoin coin page assertion', () => {
    cy.prices_coin('Streamr DATAcoin');
    cy.url().should('include', '/prices/DATA');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Streamr DATAcoin'
    );
  });

  it('Agoras Token coin page assertion', () => {
    cy.prices_coin('Agoras Token');
    cy.url().should('include', '/prices/AGRS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Agoras Token'
    );
  });

  it('Horizen coin page assertion', () => {
    cy.prices_coin('Horizen');
    cy.url().should('include', '/prices/ZEN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Horizen'
    );
  });

  it('CloakCoin coin page assertion', () => {
    cy.prices_coin('CloakCoin');
    cy.url().should('include', '/prices/CLOAK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'CloakCoin'
    );
  });

  it('Metaverse coin page assertion', () => {
    cy.prices_coin('Metaverse');
    cy.url().should('include', '/prices/ETP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Metaverse'
    );
  });

  it('Asch coin page assertion', () => {
    cy.prices_coin('Asch');
    cy.url().should('include', '/prices/XAS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Asch'
    );
  });

  it('PeerCoin coin page assertion', () => {
    cy.prices_coin('PeerCoin');
    cy.url().should('include', '/prices/PPC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'PeerCoin'
    );
  });

  it('SONM coin page assertion', () => {
    cy.prices_coin('SONM');
    cy.url().should('include', '/prices/SNM');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SONM'
    );
  });

  it('Enjin Coin coin page assertion', () => {
    cy.prices_coin('Enjin Coin');
    cy.url().should('include', '/prices/ENJ');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Enjin Coin'
    );
  });

  it('Emercoin coin page assertion', () => {
    cy.prices_coin('Emercoin');
    cy.url().should('include', '/prices/EMC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Emercoin'
    );
  });

  it('Ink coin page assertion', () => {
    cy.get('#input-146').type('Ink');
    cy.get('tbody > tr > :nth-child(2)')
      .eq(1)
      .should('have.text', 'Ink')
      .click();
    cy.url().should('include', '/prices/INK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Ink'
    );
  });

  it('SingularDTV coin page assertion', () => {
    cy.prices_coin('SingularDTV');
    cy.url().should('include', '/prices/SNGLS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SingularDTV'
    );
  });

  it('Aragon coin page assertion', () => {
    cy.prices_coin('Aragon');
    cy.url().should('include', '/prices/ANT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Aragon'
    );
  });

  it('Trigger coin page assertion', () => {
    cy.prices_coin('Trigger');
    cy.url().should('include', '/prices/TRIG');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Trigger'
    );
  });

  it('Groestlcoin coin page assertion', () => {
    cy.get('#input-146').type('Groestlcoin');
    cy.get('tbody > tr > :nth-child(2)').eq(0).contains('Groestlcoin').click();
    cy.url().should('include', '/prices/GRS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').contains(
      'Groestlcoin'
    );
  });

  it('Quantum Resistant Ledger coin page assertion', () => {
    cy.prices_coin('Quantum Resistant Ledger');
    cy.url().should('include', '/prices/QRL');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Quantum Resistant Ledger'
    );
  });
});
