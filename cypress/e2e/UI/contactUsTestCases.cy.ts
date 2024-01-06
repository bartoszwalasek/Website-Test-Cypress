import { navigateTo } from "../../support/pageObjects/navigationPage";
import { contactUsPage } from "../../support/pageObjects/contactUsPage";

describe("Contact us test cases", () => {
  it("Submit contact us form", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.contactUsPage();
    contactUsPage.submitForm();
  });
});
