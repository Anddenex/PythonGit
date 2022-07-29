/// <reference types="cypress" />

describe('Coin Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.get('[type="button"]').eq(2).click();
    cy.wait(1000);
  });

  it('The Hempcoin coin page assertion', () => {
    cy.prices_coin('The Hempcoin');
    cy.url().should('include', '/prices/THC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'The Hempcoin'
    );
  });

  it('CyberMiles coin page assertion', () => {
    cy.prices_coin('CyberMiles');
    cy.url().should('include', '/prices/CMT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'CyberMiles'
    );
  });

  it('Cindicator coin page assertion', () => {
    cy.prices_coin('Cindicator');
    cy.url().should('include', '/prices/CND');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Cindicator'
    );
  });

  it('SibCoin coin page assertion', () => {
    cy.prices_coin('SibCoin');
    cy.url().should('include', '/prices/SIB');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'SibCoin'
    );
  });

  it('ZClassic coin page assertion', () => {
    cy.prices_coin('ZClassic');
    cy.url().should('include', '/prices/ZCL');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'ZClassic'
    );
  });

  it('Pillar coin page assertion', () => {
    cy.prices_coin('Pillar');
    cy.url().should('include', '/prices/PLR');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Pillar'
    );
  });

  it('Pepe Cash coin page assertion', () => {
    cy.prices_coin('Pepe Cash');
    cy.url().should('include', '/prices/PEPECASH');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Pepe Cash'
    );
  });

  it('Melon coin page assertion', () => {
    cy.prices_coin('Melon');
    cy.url().should('include', '/prices/MLN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Melon'
    );
  });

  it('FeatherCoin coin page assertion', () => {
    cy.prices_coin('FeatherCoin');
    cy.url().should('include', '/prices/FTC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'FeatherCoin'
    );
  });

  it('WhiteCoin coin page assertion', () => {
    cy.prices_coin('WhiteCoin');
    cy.url().should('include', '/prices/XWC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'WhiteCoin'
    );
  });

  it('BlackCoin coin page assertion', () => {
    cy.prices_coin('BlackCoin');
    cy.url().should('include', '/prices/BLK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'BlackCoin'
    );
  });

  it('PotCoin coin page assertion', () => {
    cy.prices_coin('PotCoin');
    cy.url().should('include', '/prices/POT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'PotCoin'
    );
  });

  it('Shift coin page assertion', () => {
    cy.prices_coin('Shift');
    cy.url().should('include', '/prices/SHIFT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Shift'
    );
  });

  it('district0x coin page assertion', () => {
    cy.prices_coin('district0x');
    cy.url().should('include', '/prices/DNT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'district0x'
    );
  });

  it('Guppy coin page assertion', () => {
    cy.prices_coin('Guppy');
    cy.url().should('include', '/prices/GUP');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Guppy'
    );
  });

  it('Gulden coin page assertion', () => {
    cy.prices_coin('Gulden');
    cy.url().should('include', '/prices/NLG');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Gulden'
    );
  });

  it('Yoyow coin page assertion', () => {
    cy.prices_coin('Yoyow');
    cy.url().should('include', '/prices/YOYOW');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Yoyow'
    );
  });

  it('IoT Chain coin page assertion', () => {
    cy.prices_coin('IoT Chain');
    cy.url().should('include', '/prices/ITC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'IoT Chain'
    );
  });

  it('Cobinhood coin page assertion', () => {
    cy.prices_coin('Cobinhood');
    cy.url().should('include', '/prices/COB');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Cobinhood'
    );
  });

  it('Po.et coin page assertion', () => {
    cy.prices_coin('Po.et');
    cy.url().should('include', '/prices/POE');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Po.et'
    );
  });

  it('Modum coin page assertion', () => {
    cy.prices_coin('Modum');
    cy.url().should('include', '/prices/MOD');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Modum'
    );
  });

  it('Open Trading Network coin page assertion', () => {
    cy.prices_coin('Open Trading Network');
    cy.url().should('include', '/prices/OTN');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Open Trading Network'
    );
  });

  it('Mercury coin page assertion', () => {
    cy.prices_coin('Mercury');
    cy.url().should('include', '/prices/MER');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Mercury'
    );
  });

  it('Lykke coin page assertion', () => {
    cy.get('#input-146').type('Lykke');
    cy.get('tbody > tr > :nth-child(2)')
      .eq(0)
      .should('have.text', 'Lykke')
      .click();
    cy.url().should('include', '/prices/LKK');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Lykke'
    );
  });

  it('Monetha coin page assertion', () => {
    cy.prices_coin('Monetha');
    cy.url().should('include', '/prices/MTH');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Monetha'
    );
  });

  it('Tierion coin page assertion', () => {
    cy.prices_coin('Tierion');
    cy.url().should('include', '/prices/TNT');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Tierion'
    );
  });

  it('Namecoin coin page assertion', () => {
    cy.prices_coin('Namecoin');
    cy.url().should('include', '/prices/NMC');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'Namecoin'
    );
  });

  it('AirSwap coin page assertion', () => {
    cy.prices_coin('AirSwap');
    cy.url().should('include', '/prices/AST');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'AirSwap'
    );
  });

  it('FairCoin coin page assertion', () => {
    cy.prices_coin('FairCoin');
    cy.url().should('include', '/prices/FAIR');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'FairCoin'
    );
  });

  it('BLOCKv coin page assertion', () => {
    cy.prices_coin('BLOCKv');
    cy.url().should('include', '/prices/VEE');
    cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
      'have.text',
      'BLOCKv'
    );
  });
});
