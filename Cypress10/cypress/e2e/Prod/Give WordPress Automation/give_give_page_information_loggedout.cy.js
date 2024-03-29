/// <reference types="cypress" />
// When a customer is logged out
describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://giveblockchain.io/give-information/');
    cy.url().should('include', '/give-information/');
    // cy.percySnapshot()
    cy.get('h1').should(($h1) => {
      expect($h1, 'H1 Title').to.contain('Give');
      expect($h1, 'H1 Title').to.have.attr('style', 'text-align: center');
    });
  });

  it('Expecting/Asserting text for button accurate', () => {
    cy.get('h5')
      .contains(
        'The Give Blockchain is a global community of philanthropists and concerned citizens who share one unifying vision: a community that empowers and provides support to many important causes around the world.'
      )
      .should('have.attr', 'style', 'text-align: center;');
    cy.get('h4')
      .should('have.text', 'Login to make purchases and give.')
      .should('have.attr', 'style', 'text-align: center;');
    cy.get('[class="nectar-button jumbo regular regular-button"]').should(
      ($necton) => {
        // expect($necton).to.have.length(3)
        expect($necton.eq(0), 'Login button')
          .to.contain('Login')
          .to.have.attr(
            'style',
            'margin-right: 10px; margin-left: 10px; color: rgb(239, 61, 57); background-color: rgb(255, 255, 255); visibility: visible;'
          )
          .to.have.attr('href', '/login/')
          .to.have.attr('data-color-override', '#ffffff')
          .to.have.attr('data-hover-text-color-override', '#fff');
        expect($necton.eq(1), 'Sign Up Free button')
          .to.contain('Sign Up Free')
          .to.have.attr(
            'style',
            'margin-right: 10px; margin-left: 10px; color: rgb(239, 61, 57); background-color: rgb(255, 255, 255); visibility: visible;'
          )
          .to.have.attr('href', '/lets-give/')
          .to.have.attr('data-color-override', '#ffffff')
          .to.have.attr('data-hover-text-color-override', '#fff');
      }
    );
  });

  it('Confirming/Asserting the three sponsor cards', () => {
    cy.get('[class="nectar-fancy-box using-img "]').should(($necfancy) => {
      expect($necfancy.eq(0), 'Save Sponsor')
        .to.have.attr('style', 'min-height: 400px')
        .to.have.attr('data-color', 'extra-color-3');
      expect($necfancy.eq(1), 'Water Sponsor')
        .to.have.attr('style', 'min-height: 400px')
        .to.have.attr('data-color', 'extra-color-3');
      expect($necfancy.eq(2), 'Humanitarian Sponsor')
        .to.have.attr('style', 'min-height: 400px')
        .to.have.attr('data-color', 'extra-color-3');
    });

    cy.get('[class="box-link"]').should(($boxlink) => {
      expect($boxlink.eq(0), 'Save Sponsor').to.have.attr(
        'href',
        '/save-information/'
      );
      expect($boxlink.eq(1), 'Water Sponsor').to.have.attr(
        'href',
        '/water-information/'
      );
      expect($boxlink.eq(2), 'Humanitarian Sponsor').to.have.attr(
        'href',
        '/humanitarian-information/'
      );
    });
  });

  it('Confirming/Asserting the three milestones', () => {
    cy.get('[class="subject"]').should(($subject) => {
      expect($subject.eq(0), 'First Milestone')
        .to.have.attr('style', 'padding: 2%;')
        .to.have.contain('CAUSES WE SUPPORT');
      expect($subject.eq(1), 'Second Milestone')
        .to.have.attr('style', 'padding: 2%;')
        .to.have.contain('DONATED THROUGH GIVE');
      expect($subject.eq(2), 'Third Milestone')
        .to.have.attr('style', 'padding: 2%;')
        .to.have.contain('PERSON IS ALL IT TAKES TO INFLUENCE CHANGE');
    });
  });

  it('Confirming/Asserting the Support. Contribute. Give. section', () => {
    cy.get('h6').should('have.text', 'Support. Contribute. Give.');
    cy.get('[class="nectar-split-heading markup-generated"]').should(
      'have.text',
      'Together We Can Have a Greater Impact '
    );
    cy.get(
      '[class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column padding-2-percent inherit_tablet inherit_phone "]'
    ).contains('Become a part of the global movement.');
    cy.get('.nectar-carousel > .nectar-flickity > .next').click();
    cy.get('[class="wpb_text_column wpb_content_element "]').contains(
      'Receive digital rewards with Give.'
    );
    cy.get('.nectar-carousel > .nectar-flickity > .next').click();
    cy.get('[class="wpb_text_column wpb_content_element "]').contains(
      'Learn more about our mission and values.'
    );
    cy.get('[class="link_text"]')
      .eq(2)
      .should('have.attr', 'href', '/mission-information/');
    cy.get('.nectar-carousel > .nectar-flickity > .previous').click();
    cy.get('[class="wpb_text_column wpb_content_element "]').contains(
      'Receive digital rewards with Give.'
    );
    cy.get('[class="link_text"]')
      .eq(1)
      .should('have.attr', 'href', '/give-node-information/');
    cy.get('.nectar-carousel > .nectar-flickity > .previous').click();
    cy.get(
      '[class="vc_col-sm-6 wpb_column column_container vc_column_container col child_column padding-2-percent inherit_tablet inherit_phone "]'
    ).contains('Become a part of the global movement.');
    cy.get('[class="link_text"]')
      .eq(0)
      .should('have.attr', 'href', '/lets-give/');
  });

  it('Confirming/Asserting the last section and links', () => {
    cy.get(
      '[class="wpb_text_column wpb_content_element  vc_custom_1643137756118"]'
    ).contains('Do you have a cause we should support?');
    cy.get(
      '[class="wpb_text_column wpb_content_element  vc_custom_1643137774207"]'
    ).contains(
      'We invite all to submit a proposal for global causes where the Give community can make an impact.'
    );
    cy.get('[class="link_text nectar_video_lightbox magnific-popup"]').contains(
      'Submit a Proposal'
    );
    cy.get('[class="link_text nectar_video_lightbox magnific-popup"]').should(
      'have.attr',
      'href',
      '/submit-a-proposal/'
    );
    // Login link check
    cy.get('[class="nectar-button jumbo regular regular-button"]')
      .eq(0)
      .click();
    cy.url().should('include', '/login/');
    cy.get('h5').should('have.text', 'Login to access your account:');
    // Sign Up Free link check
    cy.visit('https://giveblockchain.io/give-information/');
    cy.get('[class="nectar-button jumbo regular regular-button"]')
      .eq(1)
      .click();
    cy.url().should('include', '/lets-give/');
    cy.get('h5').should('have.text', 'Join The Movement');
    // Save card link
    cy.visit('https://giveblockchain.io/give-information/');
    cy.get('[class="cell is-selected"]').eq(0).click();
    cy.url().should('include', '/save-information/');
    cy.get('h1').should('have.text', 'Save');
    // Water card link
    cy.visit('https://giveblockchain.io/give-information/');
    cy.get('[class="cell is-selected"]').eq(1).click();
    cy.url().should('include', '/water-information/');
    cy.get('h1').should('have.text', 'Water');
    // Humanitarian card link
    cy.visit('https://giveblockchain.io/give-information/');
    cy.get('[class="cell is-selected"]').eq(2).click();
    cy.url().should('include', '/humanitarian-information/');
    cy.get('h1').should('have.text', 'Humanitarian');
    cy.visit('https://giveblockchain.io/give-information/');

    // Slider first link
    cy.get('[class="link_text"]')
      .eq(0)
      .should('have.attr', 'href', '/lets-give/')
      .click();
    cy.get('h5').should('have.text', 'Join The Movement');
    cy.visit('https://giveblockchain.io/give-information/');

    // Slider Second link
    cy.get('[class="link_text"]')
      .eq(1)
      .should('have.attr', 'href', '/give-node-information/')
      .click();
    cy.get('h4').eq(0).should('have.text', 'Login to make purchases and give.');
    cy.visit('https://giveblockchain.io/give-information/');

    // Slider Third link
    cy.get('[class="link_text"]')
      .eq(2)
      .should('have.attr', 'href', '/mission-information/')
      .click();
    cy.get('h1').should('have.text', 'We Can Make a Change');
    cy.visit('https://giveblockchain.io/give-information/');

    // Slider Third link
    cy.get('[class="link_text nectar_video_lightbox magnific-popup"]')
      .should('have.attr', 'href', '/submit-a-proposal/')
      .click();
  });
});
