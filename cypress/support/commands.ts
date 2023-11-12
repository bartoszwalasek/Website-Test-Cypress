export {};

interface logOption {
  log: boolean;
}
declare global {
  namespace Cypress {
    interface Chainable {
      openUrlAndCheckTitle(page: string, title: string): Chainable<void>;
      findAndTypeWithoutAssert(
        selector: string,
        text: string,
        options?: logOption
      ): Chainable<void>;
      findTypeAndAssertAttribute(
        selector: string,
        text: string,
        attribute: string,
        options?: logOption
      ): Chainable<void>;
      findSelectAndAssertValue(
        selector: string,
        select: string,
        value: string
      ): Chainable<void>;
      findAndClick(selector: string): Chainable<void>;
      findAndCheck(selector: string): Chainable<void>;
      findSelectorTextAndClick(selector: string, text: string): Chainable<void>;
      findSelectorAndAssert(
        selector: string,
        assert: string,
        value: string | boolean
      ): Chainable<void>;
    }
  }
}

Cypress.Commands.add("openUrlAndCheckTitle", (page, title) => {
  cy.visit(page);
  cy.title().should("eq", title);
});

Cypress.Commands.add(
  "findAndTypeWithoutAssert",
  (selector, text, options = { log: true }) => {
    cy.get(selector).type(text, options);
  }
);

Cypress.Commands.add(
  "findTypeAndAssertAttribute",
  (selector, text, attribute, options = { log: true }) => {
    cy.get(selector).type(text, options).should("have.attr", attribute);
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

Cypress.Commands.add("findSelectorTextAndClick", (selector, text) => {
  cy.get(selector).contains(text).click();
});

Cypress.Commands.add("findSelectorAndAssert", (selector, assert, value) => {
  cy.get(selector).should(assert, value);
});
