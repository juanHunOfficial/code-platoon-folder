describe('RequestButton Component', () => {
  it('This should contain the correct button text.', () => {
    cy.visit('http://localhost:5173')
    cy.get("button").should("contain", "Get My Pokemon!");
  })
})