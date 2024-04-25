import { MainMenuComponent } from "../components/main-menu.component";
import { User } from "../models/users.model";
import { BasePage } from "./base.page";

export class SignupPage extends BasePage {
  url = "/signup";

  userName = '[data-qa="name"]';
  userEmail = '[data-qa="email"]';
  password = '[data-qa="password"]';
  dateOfBirth = {
    day: '[data-qa="days"]',
    month: '[data-qa="months"]',
    year: '[data-qa="years"]',
  };
  newsletter = "#newsletter";
  offers = "#optin";
  firstName = '[data-qa="first_name"]';
  lastName = '[data-qa="last_name"]';
  company = '[data-qa="company"]';
  address = '[data-qa="address"]';
  address2 = '[data-qa="address2"]';
  country = '[data-qa="country"]';
  state = '[data-qa="state"]';
  city = '[data-qa="city"]';
  zipcode = '[data-qa="zipcode"]';
  mobileNumber = '[data-qa="mobile_number"]';
  createAccountButton = '[data-qa="create-account"]';
  accoutCreatedText: '[data-qa="account-created"]';
  continueButton: '[data-qa="continue-button"]';

  mainMenu = new MainMenuComponent();

  constructor() {
    super();
  }

  submitForm(registerUser: User) {
    cy.findAndCheck(`[value=${registerUser.gender}]`);
    cy.findSelectorAndAssert(this.userName, "have.value", registerUser.name);
    cy.findSelectorAndAssert(this.userName, "have.attr", "required");
    cy.findSelectorAndAssert(this.userEmail, "have.value", registerUser.email);
    cy.findSelectorAndAssert(this.userEmail, "have.attr", "required");
    cy.findSelectorAndAssert(this.userEmail, "be.disabled", true);
    cy.findTypeAndAssertAttribute(
      this.password,
      registerUser.password,
      "required",
      {
        log: false,
      }
    );
    cy.findAndSelect(this.dateOfBirth.day, registerUser.dateOfBirth.day);
    cy.findAndSelect(this.dateOfBirth.month, registerUser.dateOfBirth.month);
    cy.findAndSelect(this.dateOfBirth.year, registerUser.dateOfBirth.year);
    cy.findAndCheck(this.newsletter);
    cy.findAndCheck(this.offers);
    cy.findTypeAndAssertAttribute(
      this.firstName,
      registerUser.firstName,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      this.lastName,
      registerUser.lastName,
      "required"
    );
    cy.findSelectorAndAssert(this.company, "not.have.attr", "required");
    cy.findTypeAndAssertAttribute(
      this.address,
      registerUser.address,
      "required"
    );
    cy.findSelectorAndAssert(this.address2, "not.have.attr", "required");
    cy.findAndSelect(this.country, registerUser.country);
    cy.findTypeAndAssertAttribute(this.state, registerUser.state, "required");
    cy.findTypeAndAssertAttribute(this.city, registerUser.city, "required");
    cy.findTypeAndAssertAttribute(
      this.zipcode,
      registerUser.zipcode,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      this.mobileNumber,
      registerUser.mobileNumber,
      "required"
    );
    cy.findAndClick(this.createAccountButton);
  }
}
