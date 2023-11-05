export {};
declare global {
  namespace Cypress {
    interface Chainable {
      findTypeAndAssertRequired(
        selector: string,
        text: string
      ): Chainable<void>;
      findSelectAndAssertValue(
        selector: string,
        select: string,
        value: string
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add("findTypeAndAssertRequired", (selector, text) => {
  cy.get(selector).type(text).should("have.attr", "required");
});

Cypress.Commands.add("findSelectAndAssertValue", (selector, select, value) => {
  cy.get(selector).select(select).should("have.value", value);
});
