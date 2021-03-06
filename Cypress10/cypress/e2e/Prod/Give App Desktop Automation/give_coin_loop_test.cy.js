/// <reference types="cypress" />

describe('First 30 Coins Loop Assertion...', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.get('[type="button"]').eq(2).click();
    cy.wait(1000);
  });

  it('First List of Coins Assertions....', () => {
    const coinNames = [
      'Bitcoin',
      'Ethereum',
      'XRP',
      'Bitcoin Cash',
      'Litecoin',
      'Cardano',
      'Gala',
      'IOTA',
      'Dash',
      'NEM',
      'Monero',
      'EOS',
      'Bitcoin Gold',
      'NEO',
      'QTUM',
      'Stellar',
      'Ethereum Classic',
      'Lisk',
      'TRON',
      'Verge',
      'ICON Project',
      'ZCash',
      'Ardor',
      'OmiseGo',
      'Bitshares',
      'Tether',
      'Populous',
      'Waves',
      'Nxt',
      'ByteCoin',
      'Dogecoin',
      'Komodo',
    ];
    for (let j = 0; j < coinNames.length; j++) {
      const name = coinNames[j];
      cy.log('Current Coin being tested', name);
      cy.prices_coin(name);
      cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
        'have.text',
        name
      );
      cy.get('[type="button"]').click();
      // cy.go('back')
    }
  });

  it('Second List of Coins Assertions....', () => {
    const coinNames = [
      'Binance Coin',
      'Salt Lending',
      'Siacoin',
      'Augur',
      'Steem',
      'Golem Network Token',
      'ARK',
      'Veritaseum',
      'Private Instant Verified Transaction',
      'MonaCoin',
      'Decred',
      'DigiByte',
      'Vechain',
      'Status Network Token',
      'MaidSafe Coin',
      'SysCoin',
      'Electroneum',
      'Obyte',
      'TenX',
      'Basic Attention Token',
      'Bytom',
      'Factom',
      'Santiment',
      'BitcoinDark',
      'Aeternity',
      'Reddcoin',
    ];
    for (let j = 0; j < coinNames.length; j++) {
      const name = coinNames[j];
      cy.log('Current Coin being tested', name);
      cy.prices_coin(name);
      cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
        'have.text',
        name
      );
      cy.go('back');
    }
  });

  it('Third List of Coins Assertions....', () => {
    const coinNames = [
      'Quoine Liquid',
      'Digix DAO',
      '0x',
      'Kyber Network',
      'Power Ledger',
      'Civic',
      'Aion',
      'Vertcoin',
      'Waltonchain',
      'Dent',
      'Gas',
      'Gamecredits',
      'aelf',
      'NavCoin',
      'Substratum Network',
      'FunFair',
      'Skycoin',
      'Iconomi',
      'Gnosis',
      'Cryptonex',
      'Dragonchain',
      'Enigma',
      'Kucoin',
      'Request Network',
      'Crypto.com',
      'Bancor Network Token',
      'RadonPay',
      'Ethos',
      'Einsteinium',
      'BitBay',
      'Edgeless',
      'Decentraland',
      'AdEx',
      'Ripio',
      'BlockNet',
      'ChainLink',
      'Nexus',
      'Rise',
      'Particl',
      'Dentacoin',
      'Ubiq',
    ];
    for (let j = 0; j < coinNames.length; j++) {
      const name = coinNames[j];
      cy.log('Current Coin being tested', name);
      cy.prices_coin(name);
      cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
        'have.text',
        name
      );
      cy.go('back');
    }
  });

  it('Fourth List of Coins Assertions....', () => {
    const coinNames = [
      'SmartCash',
      'Storj',
      'PayPie',
      'Metal',
      'Time New Bank',
      'Streamr DATAcoin',
      'DigitalNote',
      'Agoras Token',
      'Horizen',
      'CloakCoin',
      'Metaverse',
      'Asch',
      'PeerCoin',
      'SONM',
      'Enjin Coin',
      'Emercoin',
      'SingularDTV',
      'Aragon',
      'Trigger',
      'Groestlcoin',
      'Quantum Resistant Ledger',
      'Bread token',
      'Kin',
      'Wings DAO',
      'Quantstamp',
      'Wagerr',
      'Storm',
      'Loopring',
      'ViaCoin',
      'XTRABYTES',
      'Cofound.it',
      'MobileGo',
      'SuperNET',
      'Delphy',
      'Humaniq',
      'FirstBlood',
      'ATMChain',
      'Pura',
      'Neblio',
      'iEx.ec',
      'Ambrosus',
      'LBRY Credits',
      'Tael',
      'EthLend',
      'Experience Points',
      'SaluS',
      'CounterParty',
      'Eidoo',
      'Viberate',
      'The Hempcoin',
      'CyberMiles',
      'Cindicator',
      'SibCoin',
      'ZClassic',
      'Pillar',
      'Pepe Cash',
      'Melon',
      'FeatherCoin',
      'WhiteCoin',
      'BlackCoin',
      'PotCoin',
      'Shifdistrict0xt',
      'Guppy',
      'Gulden',
      'Yoyow',
      'IoT Chain',
      'Cobinhood',
      'Po.et',
      'Modum',
    ];
    for (let j = 0; j < coinNames.length; j++) {
      const name = coinNames[j];
      cy.log('Current Coin being tested', name);
      cy.prices_coin(name);
      cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
        'have.text',
        name
      );
      cy.go('back');
    }
  });

  it('Fifth List of Coins Assertions....', () => {
    const coinNames = [
      'Open Trading Network',
      'Mercury',
      'Monetha',
      'Tierion',
      'Namecoin',
      'AirSwap',
      'FairCoin',
      'BLOCKv',
      'Ionomy',
      'EmberCoin',
      'Blox',
      'AEON',
      'IOCoin',
      'MinexCoin',
      'TrustCoin',
      'Crown Coin',
      'bitCNY',
      'Token as a Service',
      'Elastic',
      'MonetaryUnit',
      'Expanse',
      'HyperSpace',
      'Simple Token',
      'Swarm City Token',
      'Nuls',
    ];
    for (let j = 0; j < coinNames.length; j++) {
      const name = coinNames[j];
      cy.log('Current Coin being tested', name);
      cy.prices_coin(name);
      cy.get('.offset-3 > .container > .row > :nth-child(2)').should(
        'have.text',
        name
      );
      cy.go('back');
    }
  });
});
