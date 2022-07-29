/// <reference types="cypress" />

describe('Coin Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.get('[type="button"]').eq(2).click();
    cy.wait(1000);
  });

  it('ACT coin page assertion', () => {
    cy.get('#input-146').type('ACT');
    cy.get('tbody > tr > :nth-child(2)')
      .eq(2)
      .should('have.text', 'ACT')
      .click();
    cy.url().should('include', '/prices/ACT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'ACT'
    );
  });

  it('Decent coin page assertion', () => {
    cy.get('#input-146').type('Decent');
    cy.get('tbody > tr > :nth-child(2)')
      .eq(1)
      .should('have.text', 'Decent')
      .click();
    cy.url().should('include', '/prices/DCT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Decent'
    );
  });

  it('Bread token coin page assertion', () => {
    cy.prices_coin('Bread token');
    cy.url().should('include', '/prices/BRD');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Bread token'
    );
  });

  it('Kin coin page assertion', () => {
    cy.prices_coin('Kin');
    cy.url().should('include', '/prices/KIN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Kin'
    );
  });

  it('Wings DAO coin page assertion', () => {
    cy.prices_coin('Wings DAO');
    cy.url().should('include', '/prices/WINGS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Wings DAO'
    );
  });

  it('Quantstamp coin page assertion', () => {
    cy.prices_coin('Quantstamp');
    cy.url().should('include', '/prices/QSP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Quantstamp'
    );
  });

  it('Wagerr coin page assertion', () => {
    cy.prices_coin('Wagerr');
    cy.url().should('include', '/prices/WGR');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Wagerr'
    );
  });

  it('Storm coin page assertion', () => {
    cy.prices_coin('Storm');
    cy.url().should('include', '/prices/STORM');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Storm'
    );
  });

  it('Loopring coin page assertion', () => {
    cy.prices_coin('Loopring');
    cy.url().should('include', '/prices/LRC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Loopring'
    );
  });

  it('ViaCoin coin page assertion', () => {
    cy.prices_coin('ViaCoin');
    cy.url().should('include', '/prices/VIA');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'ViaCoin'
    );
  });

  it('XTRABYTES coin page assertion', () => {
    cy.prices_coin('XTRABYTES');
    cy.url().should('include', '/prices/XBY');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'XTRABYTES'
    );
  });

  it('Cofound.it coin page assertion', () => {
    cy.prices_coin('Cofound.it');
    cy.url().should('include', '/prices/CFI');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Cofound.it'
    );
  });

  it('MobileGo coin page assertion', () => {
    cy.prices_coin('MobileGo');
    cy.url().should('include', '/prices/MGO');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'MobileGo'
    );
  });

  it('SuperNET coin page assertion', () => {
    cy.prices_coin('SuperNET');
    cy.url().should('include', '/prices/UNITY');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SuperNET'
    );
  });

  it('Delphy coin page assertion', () => {
    cy.prices_coin('Delphy');
    cy.url().should('include', '/prices/DPY');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Delphy'
    );
  });

  it('Humaniq coin page assertion', () => {
    cy.prices_coin('Humaniq');
    cy.url().should('include', '/prices/HMQ');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Humaniq'
    );
  });

  it('FirstBlood coin page assertion', () => {
    cy.prices_coin('FirstBlood');
    cy.url().should('include', '/prices/1ST');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'FirstBlood'
    );
  });

  it('ATMChain coin page assertion', () => {
    cy.prices_coin('ATMChain');
    cy.url().should('include', '/prices/ATM');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'ATMChain'
    );
  });

  it('Pura coin page assertion', () => {
    cy.prices_coin('Pura');
    cy.url().should('include', '/prices/PURA');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Pura'
    );
  });

  it('Neblio coin page assertion', () => {
    cy.prices_coin('Neblio');
    cy.url().should('include', '/prices/NEBL');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Neblio'
    );
  });

  it('iEx.ec coin page assertion', () => {
    cy.prices_coin('iEx.ec');
    cy.url().should('include', '/prices/RLC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'iEx.ec'
    );
  });

  it('Ambrosus coin page assertion', () => {
    cy.prices_coin('Ambrosus');
    cy.url().should('include', '/prices/AMB');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Ambrosus'
    );
  });

  it('LBRY Credits coin page assertion', () => {
    cy.prices_coin('LBRY Credits');
    cy.url().should('include', '/prices/LBC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'LBRY Credits'
    );
  });

  it('Tael coin page assertion', () => {
    cy.prices_coin('Tael');
    cy.url().should('include', '/prices/WABI');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Tael'
    );
  });

  it('EthLend coin page assertion', () => {
    cy.prices_coin('EthLend');
    cy.url().should('include', '/prices/LEND');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'EthLend'
    );
  });

  it('Experience Points coin page assertion', () => {
    cy.prices_coin('Experience Points');
    cy.url().should('include', '/prices/XP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Experience Points'
    );
  });

  it('SaluS coin page assertion', () => {
    cy.prices_coin('SaluS');
    cy.url().should('include', '/prices/SLS');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SaluS'
    );
  });

  it('CounterParty coin page assertion', () => {
    cy.prices_coin('CounterParty');
    cy.url().should('include', '/prices/XCP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'CounterParty'
    );
  });

  it('Eidoo coin page assertion', () => {
    cy.prices_coin('Eidoo');
    cy.url().should('include', '/prices/EDO');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Eidoo'
    );
  });

  it('Viberate coin page assertion', () => {
    cy.prices_coin('Viberate');
    cy.url().should('include', '/prices/VIB');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Viberate'
    );
  });
});
