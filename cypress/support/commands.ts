export {};
declare global {
  namespace Cypress {
    interface Chainable {
      findAndTypeWithoutAssert(selector: string, text: string): Chainable<void>;
      findTypeAndAssertRequired(
        selector: string,
        text: string
      ): Chainable<void>;
      findSelectAndAssertValue(
        selector: string,
        select: string,
        value: string
      ): Chainable<void>;
      findAndClick(selector: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("findAndTypeWithoutAssert", (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add("findTypeAndAssertRequired", (selector, text) => {
  cy.get(selector).type(text).should("have.attr", "required");
});

Cypress.Commands.add("findSelectAndAssertValue", (selector, select, value) => {
  cy.get(selector).select(select).should("have.value", value);
});

Cypress.Commands.add("findAndClick", (selector) => {
  cy.get(selector).click();
});
