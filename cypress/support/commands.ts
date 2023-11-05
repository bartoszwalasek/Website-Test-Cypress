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
      findAndCheck(selector: string): Chainable<void>;
      findAndAssertText(selector: string, text: string): Chainable<void>;
      findInMenuAndClick(text: string): Chainable<void>;
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

Cypress.Commands.add("findAndCheck", (selector) => {
  cy.get(selector).check();
});

Cypress.Commands.add("findAndAssertText", (selector, text) => {
  cy.get(selector).should("contain.text", text);
});

Cypress.Commands.add("findInMenuAndClick", (text) => {
  cy.get(".shop-menu > .nav").contains(text).click();
});
