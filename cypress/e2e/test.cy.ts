import { user } from "../support/classes/User";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.visit("/");
    cy.title().should("eq", "Automation Exercise");
    cy.findInMenuAndClick(" Signup / Login");
    cy.findAndAssertText("#form", "New User Signup!");
    cy.findAndAssertText("#form", "Login to your account");
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', `${user.name}`);
    cy.findAndTypeWithoutAssert('[data-qa="signup-email"]', `${user.email}`);
    cy.findAndClick('[data-qa="signup-button"]');
    cy.findAndAssertText(".login-form", "Enter Account Information");
    cy.findAndAssertText(".login-form", "Address Information");
    cy.findAndCheck("#id_gender1");
    cy.get('[data-qa="name"]')
      .should("have.value", `${user.name}`)
      .should("have.attr", "required");
    cy.get('[data-qa="email"]')
      .should("have.value", `${user.email}`)
      .should("be.disabled")
      .should("have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="password"]', `${user.password}`);
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
    cy.findTypeAndAssertRequired('[data-qa="first_name"]', `${user.firstName}`);
    cy.findTypeAndAssertRequired('[data-qa="last_name"]', `${user.lastName}`);
    cy.get('[data-qa="company"]').should("not.have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="address"]', `${user.address}`);
    cy.get('[data-qa="address2"]').should("not.have.attr", "required");
    cy.findSelectAndAssertValue(
      '[data-qa="country"]',
      `${user.country}`,
      "Canada"
    );
    cy.findTypeAndAssertRequired('[data-qa="state"]', `${user.state}`);
    cy.findTypeAndAssertRequired('[data-qa="city"]', `${user.city}`);
    cy.findTypeAndAssertRequired('[data-qa="zipcode"]', `${user.zipcode}`);
    cy.findTypeAndAssertRequired(
      '[data-qa="mobile_number"]',
      `${user.mobileNumber}`
    );
    cy.findAndClick('[data-qa="create-account"]');
    cy.findAndAssertText('[data-qa="account-created"]', "Account Created");
    cy.findAndClick('[data-qa="continue-button"]');
    cy.findAndAssertText(".shop-menu > .nav", `Logged in as ${user.name}`);
    cy.findInMenuAndClick(" Logout");
    cy.findAndAssertText("#form", "New User Signup!");
    cy.findAndAssertText("#form", "Login to your account");
  });

  it("Login User with the correct email and password", () => {
    cy.findAndTypeWithoutAssert('[data-qa="login-email"]', `${user.email}`);
    cy.findAndTypeWithoutAssert(
      '[data-qa="login-password"]',
      `${user.password}`
    );
    cy.findAndClick('[data-qa="login-button"]');
    cy.findAndAssertText(".shop-menu > .nav", `Logged in as ${user.name}`);
    cy.findInMenuAndClick(" Delete Account");
    cy.findAndAssertText('[data-qa="account-deleted"]', "Account Deleted");
    cy.findAndClick('[data-qa="continue-button"]');
  });
});
