const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    email: 'aexon@nerdsunite.me',
    password: 'NerdUniteIsThe#1Nerd!',
    wallet: 'Sm!leTestingFlyfisher*1',
    phrase: 'pudding, nut, into, draw, give, boost, lens, token, orphan, scout, error, enjoy',
    newemail: 'aexonnerdsunited.test1@gmail.com',
    newpassword: 'PieceofPie1#More',
    greenemail: 'aexonnerdsunited@gmail.com',
    first_name: 'Andrew',
    last_name: 'Exon',
    confirm_password: 'PieceofPie1#More'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://app.giveblockchain.io/",
    login: "https://app.giveblockchain.io/login"
  },
});
