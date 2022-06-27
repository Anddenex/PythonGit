const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    email: 'aexon@nerdsunite.me',
    password: 'NerdUnitedIsThe#1Nerd!',
    wallet: 'Sm!leTestingFlyfisher*1',
    prod_give_phrase: 'pudding, nut, into, draw, give, boost, lens, token, orphan, scout, error, enjoy',
    stage_give_phrase: 'parrot, steak, buyer, slot, zebra, very, dance, neglect, broccoli, prevent, envelope, snow',
    stage_green_phrase: 'lamp, initial, river, eternal, average, fiber, waste, spoon, garbage, tennis, uncle, gallery',
    newemail: 'aexonnerdsunited.test1@gmail.com',
    newpassword: 'PieceofPie1#More',
    galvanemail: 'aexonnerdsunited@gmail.com',
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
