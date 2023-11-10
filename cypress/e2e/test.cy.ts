import testUser from "../fixtures/testUser.json";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Signup / Login");
    cy.findSelectorAndAssert("#form", "contain.text", "New User Signup!");
    cy.findSelectorAndAssert("#form", "contain.text", "Login to your account");
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', `${testUser.name}`);
    cy.findAndTypeWithoutAssert('[data-qa="signup-email"]', `${testUser.email}`);
    cy.findAndClick('[data-qa="signup-button"]');
    cy.findAndAssertText(".login-form", "Enter Account Information");
    cy.findAndAssertText(".login-form", "Address Information");
    cy.findAndCheck(`[value=${user.gender}]`);
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
      testUser.dateOfBirth.year,
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
      testUser.country,
      "Canada"
    );
    cy.findTypeAndAssertRequired('[data-qa="state"]', `${user.state}`);
    cy.findTypeAndAssertRequired('[data-qa="city"]', `${user.city}`);
    cy.findTypeAndAssertRequired('[data-qa="zipcode"]', `${user.zipcode}`);
    cy.findTypeAndAssertRequired(
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
    cy.findAndTypeWithoutAssert('[data-qa="login-email"]', `${testUser.email}`);
    cy.findAndTypeWithoutAssert(
      '[data-qa="login-password"]',
      `${testUser.password}`
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
