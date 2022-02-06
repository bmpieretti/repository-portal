before(() => {
  cy.visit('http://localhost:3000');
});

describe('Make sure site loads', () => {
  it('Main page loads', () => {
    cy.get('[data-testid=repo-dashboard-container]');
  });
});
