export {};
declare global {
  namespace Cypress {
    interface Chainable {
      findTypeAndAssertRequired(
        selector: string,
        text: string
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add("findTypeAndAssertRequired", (selector, text) => {
  cy.get(selector).type(text).should("have.attr", "required");
});
