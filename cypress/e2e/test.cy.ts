import { user } from "../support/classes/User";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Signup / Login");
    cy.findSelectorAndAssert("#form", "contain.text", "New User Signup!");
    cy.findSelectorAndAssert("#form", "contain.text", "Login to your account");
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', `${user.name}`);
    cy.findAndTypeWithoutAssert('[data-qa="signup-email"]', `${user.email}`);
    cy.findAndClick('[data-qa="signup-button"]');
    cy.findSelectorAndAssert(
      ".login-form",
      "contain.text",
      "Enter Account Information"
    );
    cy.findSelectorAndAssert(
      ".login-form",
      "contain.text",
      "Address Information"
    );
    cy.findAndCheck(`[value=${user.gender}]`);
    cy.findSelectorAndAssert('[data-qa="name"]', "have.value", `${user.name}`);
    cy.findSelectorAndAssert('[data-qa="name"]', "have.attr", "required");
    cy.findSelectorAndAssert(
      '[data-qa="email"]',
      "have.value",
      `${user.email}`
    );
    cy.findSelectorAndAssert('[data-qa="email"]', "have.attr", "required");
    cy.findSelectorAndAssert('[data-qa="email"]', "be.disabled", true);
    cy.findTypeAndAssertAttribute(
      '[data-qa="password"]',
      `${user.password}`,
      "required"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="days"]',
      `${user.dateOfBirth.day}`,
      "15"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="months"]',
      `${user.dateOfBirth.month}`,
      "3"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="years"]',
      `${user.dateOfBirth.year}`,
      "1980"
    );
    cy.findAndCheck("#newsletter");
    cy.findAndCheck("#optin");
    cy.findTypeAndAssertAttribute(
      '[data-qa="first_name"]',
      `${user.firstName}`,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="last_name"]',
      `${user.lastName}`,
      "required"
    );
    cy.findSelectorAndAssert(
      '[data-qa="company"]',
      "not.have.attr",
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="address"]',
      `${user.address}`,
      "required"
    );
    cy.findSelectorAndAssert(
      '[data-qa="address2"]',
      "not.have.attr",
      "required"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="country"]',
      `${user.country}`,
      "Canada"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="state"]',
      `${user.state}`,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="city"]',
      `${user.city}`,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="zipcode"]',
      `${user.zipcode}`,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="mobile_number"]',
      `${user.mobileNumber}`,
      "required"
    );
    cy.findAndClick('[data-qa="create-account"]');
    cy.findSelectorAndAssert(
      '[data-qa="account-created"]',
      "contain.text",
      "Account Created"
    );
    cy.findAndClick('[data-qa="continue-button"]');
    cy.findSelectorAndAssert(
      ".shop-menu > .nav",
      "contain.text",
      `Logged in as ${user.name}`
    );
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Logout");
    cy.findSelectorAndAssert("#form", "contain.text", "New User Signup!");
    cy.findSelectorAndAssert("#form", "contain.text", "Login to your account");
  });

  it("Login User with the correct email and password", () => {
    cy.findAndTypeWithoutAssert('[data-qa="login-email"]', `${user.email}`);
    cy.findAndTypeWithoutAssert(
      '[data-qa="login-password"]',
      `${user.password}`
    );
    cy.findAndClick('[data-qa="login-button"]');
    cy.findSelectorAndAssert(
      ".shop-menu > .nav",
      "contain.text",
      `Logged in as ${user.name}`
    );
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Delete Account");
    cy.findSelectorAndAssert(
      '[data-qa="account-deleted"]',
      "contain.text",
      "Account Deleted"
    );
    cy.findAndClick('[data-qa="continue-button"]');
  });
});
