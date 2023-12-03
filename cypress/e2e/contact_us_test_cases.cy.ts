import { mainPage, contact, general } from "../support/selectors";
import testUser from "../fixtures/testUser.json";
import { navigateTo } from "../support/pageObjects/navigationPage";

describe("Contact us test cases", () => {
  it("Submit contact us form", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.ContactUsPage();
    cy.findSelectorAndAssert(contact.formTitle, "contain.text", "Get In Touch");
    cy.findAndTypeWithoutAssert(general.userName, testUser.name);
    cy.findAndTypeWithoutAssert(general.userEmail, testUser.email);
    cy.findAndTypeWithoutAssert(contact.subject, "Test subject");
    cy.findAndTypeWithoutAssert(contact.message, "Test Message");
    cy.uploadFile(contact.uploadFile, "cypress/fixtures/Cypress.png");
    cy.findAndClick(contact.submitButton);
    cy.findSelectorAndAssert(
      contact.submitConfirmation,
      "contain.text",
      "Success! Your details have been submitted successfully."
    );
    cy.findAndClick(contact.homeButton);
  });
});
