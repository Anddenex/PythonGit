/// <reference types="cypress" />
import RegisterSmartNode from '../../App_Page_Objects/Register_Smart_Node';
import AppGive from '../../App_Page_Objects/WP_Dashboard';
import RecurrentElements from '../../App_Page_Objects/Ubiquitous_Elements';

describe('Login', () => {
  beforeEach(() => {
    RegisterSmartNode.app_Login();
  });

  it('Document Test - Title Properties', () => {
    cy.visit('https://giveblockchain.io/register-smart-node/');
    RecurrentElements.getH5().should('have.text', 'Smart Node');
    RecurrentElements.getParagraphText().should(($ptext) => {
      expect($ptext).to.have.length(2);
      expect($ptext.first(), 'Confirming Paragraph Text: ').to.contain(
        'NOTE: Running Give Nodes will not be possible until the Give Blockchain goes live, which will be sometime in early 2022. All who have purchased nodes before this will be notified as soon as this happens.'
      );
    });
    RegisterSmartNode.getpriceCellLabel().should(($nodeText) => {
      expect($nodeText).to.have.length(2);
      expect($nodeText.eq(0), 'Text = Price:').to.contain('Price:');
      expect($nodeText.eq(1), 'Node Price $2,000: ').to.contain(
        'Select the number of node licenses you wish to purchase'
      );
    });
    RegisterSmartNode.getNodePrice().should(($nodePrice) => {
      expect($nodePrice).to.have.length(1);
      expect($nodePrice.first(), 'Node Price $2,000: ').to.contain('$2,000');
    });

    RegisterSmartNode.getLabelHeaders().should(($labelHeader) => {
      expect($labelHeader).to.have.length(4);
      expect($labelHeader.eq(0), 'First Name Label: ').to.contain(
        'First Name:*'
      );
      expect($labelHeader.eq(1), 'Last Name Label').to.contain('Last Name:*');
      expect($labelHeader.eq(2), 'Quantity Label: ').to.contain('Quantity:');
    });

    RegisterSmartNode.getTermsText().should(($termsCheckBox) => {
      expect($termsCheckBox).to.have.length(2);
      expect($termsCheckBox.eq(0), 'Terms of Service Text: ')
        .to.contain('Please read and accept our Terms Of Service')
        .to.contain('*');
      expect($termsCheckBox.eq(1), 'Privacy Policy Text: ')
        .to.contain('Please read and accept our Privacy Policy')
        .to.contain('*');
    });

    RegisterSmartNode.getTermsCheckbox().click();
    RegisterSmartNode.getPrivacyCheckbox().click();

    RegisterSmartNode.getSmartNodeButton().should(($termsCheckBox) => {
      expect($termsCheckBox).to.have.length(1);
      expect($termsCheckBox, 'Button text: ').to.contain('Continue');
    });
    RegisterSmartNode.getSmartNodeButton().click();

    AppGive.getH4().should('have.text', 'Disclosures');
    AppGive.getParagraphText()
      .first()
      .should(
        'have.text',
        'In order to activate and begin using your node software, you are required to complete the following acknowledgments and disclosures:'
      );
    RegisterSmartNode.getIndicatorSteps().should(($indicatorSteps) => {
      expect($indicatorSteps.eq(0), 'Indicator Step 1: ')
        .to.contain('Step')
        .to.contain('1')
        .to.contain('of 2');
    });
    RegisterSmartNode.getFormsLabel().should(($emailLabel) => {
      expect($emailLabel, 'Email Label: ').to.contain('Email').to.contain('*');
    });

    RegisterSmartNode.getFormDescription()
      .eq(0)
      .should(
        'have.text',
        'Please provide your email address. We will send you a signed copy of this agreement once complete.'
      );

    RegisterSmartNode.getTypeEmail().type(Cypress.env('email'));

    RegisterSmartNode.getNextButton().should('have.have.text', 'Next').click();

    RegisterSmartNode.getIndicatorSteps().should(($updatedIndicatorSteps) => {
      expect($updatedIndicatorSteps.eq(0), 'Indicator Step 2: ')
        .to.contain('Step')
        .to.contain('2')
        .to.contain('of 2');
    });

    RegisterSmartNode.getInlineLabels().should(($inlineText) => {
      expect($inlineText).to.have.length(11);
      expect($inlineText.eq(0), 'First inline text: ').to.contain(
        'I understand that I am in control of my blockchain node software and app. The app will not execute any action,  or series of actions, without my instructions.'
      );
      expect($inlineText.eq(1), 'First inline text: ').to.contain(
        'I understand that blockchain technologies are cutting edge and that there are numerous risks involved, including but not limited to market, technology, legislative and regulatory risks.'
      );
      expect($inlineText.eq(2), 'First inline text: ').to.contain(
        'I understand that there may be fees, including but not limited to maintenance, transaction, software license, or  network fees, to connect my software to the blockchain, and I am solely responsible for the payment of such  fees.'
      );
      expect($inlineText.eq(3), 'First inline text: ').to.contain(
        'I have had the opportunity to solicit all information material to my decision to purchase this node.  Additional  information may be requested at support@giveblockchain.io.'
      );
      expect($inlineText.eq(4), 'First inline text: ').to.contain(
        'I understand that the digital rewards earned by my node will not be distributed by the seller of the blockchain node software and am not relying on the seller for any additional action or efforts.'
      );
      expect($inlineText.eq(5), 'First inline text: ').to.contain(
        'I understand that the technology required to produce digital rewards may not yet be complete.  My blockchain node software may not earn rewards for an extended period of time, and, if the technology is never successfully developed, I may never earn rewards.'
      );
      expect($inlineText.eq(6), 'First inline text: ').to.contain(
        'I certify that no person acting or appearing to act on behalf of the seller of my blockchain node software has told  me that I will earn digital rewards that will have liquidity, value, or otherwise create a profit opportunity for me. If I was told anything different from the acknowledgements contain herein, I understand these acknowledgements control over any other representations.'
      );
      expect($inlineText.eq(7), 'First inline text: ').to.contain(
        'I understand my blockchain node software purchase is non-refundable and non-transferrable.'
      );
      expect($inlineText.eq(8), 'First inline text: ').to.contain(
        'I have read, understand, and agree to the Terms of Service.'
      );
      expect($inlineText.eq(9), 'First inline text: ').to.contain(
        'I have read, understand, and agree to the Privacy Policy.'
      );
      expect($inlineText.eq(10), 'First inline text: ').to.contain(
        'I understand that the delivery of the software and/or hardware could take up to 180 days.'
      );
    });

    RegisterSmartNode.getFormsLabel().should(($formlabels) => {
      expect($formlabels).to.have.length(14);
      expect($formlabels.eq(1), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(2), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(3), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(4), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(5), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(6), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(7), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(8), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(9), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(10), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(11), 'Label Initials: ')
        .to.contain('Initials')
        .to.contain('*');
      expect($formlabels.eq(12), 'Label Signature: ')
        .to.contain('Signature')
        .to.contain('*');
      expect($formlabels.eq(13), 'Label Signature: ')
        .to.contain('Signature')
        .to.contain('*');
    });

    RegisterSmartNode.getFormDescription().should(($formdescriptions) => {
      expect($formdescriptions).to.have.length(4);
      expect(
        $formdescriptions.eq(2),
        'First Signature Description: '
      ).to.contain(
        'I agree that my electronic signature appearing on this agreement is the same as my handwritten signature for the purpose of validity, enforceability, and admissibility.  I further agree that no certification or verification is necessary to validate my electronic signature and the lack of such certification or third party verification will not in any way affect the enforceability of my electronic signature or any resulting contract.'
      );
      expect($formdescriptions.eq(3), 'Second Signature Description: ')
        .to.contain(
          'IF ANY PERSON SUGGESTED YOU COULD MAKE A PROFIT FROM THE DIGITAL REWARDS EARNED BY THE BLOCKCHAIN NODE SOFTWARE YOU ARE PURCHASING, PLEASE STOP AND DO THE FOLLOWING: 1) Notify us immediately of the name of the person, their email, and what you were told AND'
        )
        .to.contain(
          '2) Only complete your purchase if you understand that the acknowledgements above may directly contradict such representations and the acknowledgements above control over such representations.'
        );
    });

    RegisterSmartNode.getCheckBoxClick().should(($checkBoxClick) => {
      expect($checkBoxClick).to.have.length(11);
    });

    RegisterSmartNode.getCheckBoxClick().eq(0).click();
    RegisterSmartNode.getCheckBoxClick().eq(1).click();
    RegisterSmartNode.getCheckBoxClick().eq(2).click();
    RegisterSmartNode.getCheckBoxClick().eq(3).click();
    RegisterSmartNode.getCheckBoxClick().eq(4).click();
    RegisterSmartNode.getCheckBoxClick().eq(5).click();
    RegisterSmartNode.getCheckBoxClick().eq(6).click();
    RegisterSmartNode.getCheckBoxClick().eq(7).click();
    RegisterSmartNode.getCheckBoxClick().eq(8).click();
    RegisterSmartNode.getCheckBoxClick().eq(9).click();
    RegisterSmartNode.getCheckBoxClick().eq(10).click();

    RegisterSmartNode.getInitials().should(($initials) => {
      expect($initials).to.have.length(13);
    });

    RegisterSmartNode.getInitials().eq(0).type('AE');
    RegisterSmartNode.getInitials().eq(1).type('AE');
    RegisterSmartNode.getInitials().eq(2).type('AE');
    RegisterSmartNode.getInitials().eq(3).type('AE');
    RegisterSmartNode.getInitials().eq(4).type('AE');
    RegisterSmartNode.getInitials().eq(5).type('AE');
    RegisterSmartNode.getInitials().eq(6).type('AE');
    RegisterSmartNode.getInitials().eq(7).type('AE');
    RegisterSmartNode.getInitials().eq(8).type('AE');
    RegisterSmartNode.getInitials().eq(9).type('AE');
    RegisterSmartNode.getInitials().eq(10).type('AE');

    RegisterSmartNode.getWriteSignature()
      .eq(0)
      .click()
      .click('center')
      .click('topLeft')
      .click('bottomLeft');

    RegisterSmartNode.getWriteSignature()
      .eq(1)
      .click()
      .click('center')
      .click('topLeft')
      .click('bottomLeft');

    RegisterSmartNode.getSignatureClear().eq(0).click();
    RegisterSmartNode.getSignatureClear().eq(1).click();

    RegisterSmartNode.getWriteSignature()
      .eq(0)
      .click()
      .click('center')
      .click('topLeft')
      .click('bottomLeft');

    RegisterSmartNode.getWriteSignature()
      .eq(1)
      .click()
      .click('center')
      .click('topLeft')
      .click('bottomLeft');

    RegisterSmartNode.getTypeSubmit().click();

    cy.url().should('include', '/smart-node-order-processing/');
    cy.get('[class="active-tab"]').should('be.visible').contains('Ethereum');
  });
});
