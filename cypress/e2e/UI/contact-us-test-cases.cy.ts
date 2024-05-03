import { createContactUsForm } from "../../support/factories/contact-us-form.factory";
import { ContactUsPage } from "../../support/pageObjects/contact-us.page";
import { MainPage } from "../../support/pageObjects/main.page";

describe("Contact us page test cases", () => {
  it("Submit contact us form with valid data", () => {
    //Arrange
    const mainPage = new MainPage();
    const contactUsPage = new ContactUsPage();

    const contactUsForm = createContactUsForm();
    const expectedSuccessText =
      "Success! Your details have been submitted successfully.";

    mainPage.goToAndCheckTitle();
    mainPage.mainMenu.goToContactUsPage();

    //Act
    contactUsPage.submitForm(contactUsForm);

    //Assert
    cy.findSelectorAndAssert(
      contactUsPage.submitConfirmation,
      "contain.text",
      expectedSuccessText
    );
  });
});
