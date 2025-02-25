import { gqlQuery, injectWeb3 } from '../util';

let circleId;

context('Coordinape', () => {
  before(() => {
    const providerPort = Cypress.env('HARDHAT_GANACHE_PORT');
    Cypress.on('window:before:load', injectWeb3(providerPort));
    return gqlQuery({
      circles: [{ where: { name: { _eq: 'Garden' } } }, { id: true }],
    }).then(q => {
      circleId = q.circles[0].id;
    });
  });
  it("can update user's address and restore it to previous value", () => {
    const oldAddress = '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc';
    const newAddress =
      '0x51508887c3fef0b4390091c5a4b2b91562881526'.toLowerCase();

    cy.visit(`/circles/${circleId}/members`);
    cy.login();

    // Assert that the old address is there and correct
    assertAddr(oldAddress);

    // Click on edit user
    cy.contains('Kasey', { timeout: 120000 })
      .parents('tr')
      .within(() => {
        cy.get('td').last().get('button:first').click();
      });

    // enter the new address
    cy.get('[value=' + oldAddress + ']')
      .clear()
      .click()
      .type(newAddress);

    cy.contains('Save').click();

    // Assert that the new address is there and correct now
    assertAddr(newAddress);

    // RESTORE THE OLD ADDRESS FOR IDEMPOTENCE

    // Click on edit user
    cy.contains('Kasey', { timeout: 120000 })
      .parents('tr')
      .within(() => {
        cy.get('td').last().get('button:first').click();
      });

    // enter the old address
    cy.get('[value=' + newAddress + ']')
      .clear()
      .click()
      .type(oldAddress);

    cy.contains('Save').click();

    // Assert that the old address is there and correct
    assertAddr(oldAddress);
  });

  it("can set user's fixed payment amount", () => {
    cy.visit(`/circles/${circleId}/members`);
    cy.login();

    cy.contains('Kasey', { timeout: 120000 }).should('be.visible');

    // Click on edit user
    cy.contains('Kasey', { timeout: 120000 })
      .parents('tr')
      .within(() => {
        cy.get('td').last().get('button:first').click();
      });

    // enter the fixed payment amount
    cy.contains('Edit Kasey')
      .parent()
      .within(() => {
        cy.contains('Fixed Payment Amount')
          .parent()
          .within(() => {
            // there seem to be a default 0 in a number input so we add one less 0
            cy.get('input').clear().type('1200').blur();
          });
      });

    cy.contains('Save').click();
    cy.reload(true);
    cy.contains('Kasey', { timeout: 120000 }).should('be.visible');
    // Verify new value in contributors table
    cy.contains('Kasey', { timeout: 120000 })
      .parents('tr')
      .within(() => {
        cy.get('td').eq(7).should('have.text', '12000');
      });
  });
});

const assertAddr = (addr: string) => {
  cy.contains('Kasey', { timeout: 120000 })
    .parents('tr')
    .within(() => {
      cy.get('td').eq(1).contains(addr.substr(0, 6), { timeout: 45000 });
    });
};
