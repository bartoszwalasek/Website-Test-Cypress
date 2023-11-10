import testUser from "../fixtures/testUser.json";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.visit("/");
    cy.title().should("eq", "Automation Exercise");
    cy.findInMenuAndClick(" Signup / Login");
    cy.findAndAssertText("#form", "New User Signup!");
    cy.findAndAssertText("#form", "Login to your account");
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', `${testUser.name}`);
    cy.findAndTypeWithoutAssert('[data-qa="signup-email"]', `${testUser.email}`);
    cy.findAndClick('[data-qa="signup-button"]');
    cy.findAndAssertText(".login-form", "Enter Account Information");
    cy.findAndAssertText(".login-form", "Address Information");
    cy.findAndCheck(`[value=${testUser.gender}]`);
    cy.get('[data-qa="name"]')
      .should("have.value", `${testUser.name}`)
      .should("have.attr", "required");
    cy.get('[data-qa="email"]')
      .should("have.value", `${testUser.email}`)
      .should("be.disabled")
      .should("have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="password"]', `${testUser.password}`);
    cy.findSelectAndAssertValue(
      '[data-qa="days"]',
      `${testUser.dateOfBirth.day}`,
      "15"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="months"]',
      `${testUser.dateOfBirth.month}`,
      "3"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="years"]',
      `${testUser.dateOfBirth.year}`,
      "1980"
    );
    cy.findAndCheck("#newsletter");
    cy.findAndCheck("#optin");
    cy.findTypeAndAssertRequired('[data-qa="first_name"]', `${testUser.firstName}`);
    cy.findTypeAndAssertRequired('[data-qa="last_name"]', `${testUser.lastName}`);
    cy.get('[data-qa="company"]').should("not.have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="address"]', `${testUser.address}`);
    cy.get('[data-qa="address2"]').should("not.have.attr", "required");
    cy.findSelectAndAssertValue(
      '[data-qa="country"]',
      `${testUser.country}`,
      "Canada"
    );
    cy.findTypeAndAssertRequired('[data-qa="state"]', `${testUser.state}`);
    cy.findTypeAndAssertRequired('[data-qa="city"]', `${testUser.city}`);
    cy.findTypeAndAssertRequired('[data-qa="zipcode"]', `${testUser.zipcode}`);
    cy.findTypeAndAssertRequired(
      '[data-qa="mobile_number"]',
      `${testUser.mobileNumber}`
    );
    cy.findAndClick('[data-qa="create-account"]');
    cy.findAndAssertText('[data-qa="account-created"]', "Account Created");
    cy.findAndClick('[data-qa="continue-button"]');
    cy.findAndAssertText(".shop-menu > .nav", `Logged in as ${testUser.name}`);
    cy.findInMenuAndClick(" Logout");
    cy.findAndAssertText("#form", "New User Signup!");
    cy.findAndAssertText("#form", "Login to your account");
  });

  it("Login User with the correct email and password", () => {
    cy.findAndTypeWithoutAssert('[data-qa="login-email"]', `${testUser.email}`);
    cy.findAndTypeWithoutAssert(
      '[data-qa="login-password"]',
      `${testUser.password}`
    );
    cy.findAndClick('[data-qa="login-button"]');
    cy.findAndAssertText(".shop-menu > .nav", `Logged in as ${testUser.name}`);
    cy.findInMenuAndClick(" Delete Account");
    cy.findAndAssertText('[data-qa="account-deleted"]', "Account Deleted");
    cy.findAndClick('[data-qa="continue-button"]');
  });
});
