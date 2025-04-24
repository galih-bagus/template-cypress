export function visit(routes) {
   cy.visit(Cypress.env("baseUrl") + routes);
}
