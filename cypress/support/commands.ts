export {};
declare global {
  namespace Cypress {
    interface Chainable {
      openUrlAndCheckTitle(page: string, title: string): Chainable<void>;
      findAndTypeWithoutAssert(selector: string, text: string): Chainable<void>;
      findTypeAndAssertAttribute(
        selector: string,
        text: string,
        attribute: string
      ): Chainable<void>;
      findSelectAndAssertValue(
        selector: string,
        select: string,
        value: string
      ): Chainable<void>;
      findAndClick(selector: string): Chainable<void>;
      findAndCheck(selector: string): Chainable<void>;
      findAndAssertText(selector: string, text: string): Chainable<void>;
      findSelectorTextAndClick(selector: string, text: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("openUrlAndCheckTitle", (page, title) => {
  cy.visit(page);
  cy.title().should("eq", title);
});

Cypress.Commands.add("findAndTypeWithoutAssert", (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add(
  "findTypeAndAssertAttribute",
  (selector, text, attribute) => {
    cy.get(selector).type(text).should("have.attr", attribute);
  }
);

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

Cypress.Commands.add("findSelectorTextAndClick", (selector, text) => {
  cy.get(selector).contains(text).click();
});
