import testUser from "../fixtures/testUser.json";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Signup / Login");
    cy.findSelectorAndAssert("#form", "contain.text", "New User Signup!");
    cy.findSelectorAndAssert("#form", "contain.text", "Login to your account");
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', testUser.name);
    cy.findAndTypeWithoutAssert('[data-qa="signup-email"]', testUser.email);
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
    cy.findAndCheck(`[value=${testUser.gender}]`);
    cy.findSelectorAndAssert('[data-qa="name"]', "have.value", testUser.name);
    cy.findSelectorAndAssert('[data-qa="name"]', "have.attr", "required");
    cy.findSelectorAndAssert('[data-qa="email"]', "have.value", testUser.email);
    cy.findSelectorAndAssert('[data-qa="email"]', "have.attr", "required");
    cy.findSelectorAndAssert('[data-qa="email"]', "be.disabled", true);
    cy.findTypeAndAssertAttribute(
      '[data-qa="password"]',
      testUser.password,
      "required"
    );
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
    cy.findTypeAndAssertAttribute(
      '[data-qa="first_name"]',
      testUser.firstName,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="last_name"]',
      testUser.lastName,
      "required"
    );
    cy.findSelectorAndAssert(
      '[data-qa="company"]',
      "not.have.attr",
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="address"]',
      testUser.address,
      "required"
    );
    cy.findSelectorAndAssert(
      '[data-qa="address2"]',
      "not.have.attr",
      "required"
    );
    cy.findSelectAndAssertValue(
      '[data-qa="country"]',
      testUser.country,
      "Canada"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="state"]',
      testUser.state,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="state"]',
      testUser.city,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="state"]',
      testUser.zipcode,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      '[data-qa="state"]',
      testUser.mobileNumber,
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
      `Logged in as ${testUser.name}`
    );
    cy.findSelectorTextAndClick(".shop-menu > .nav", " Logout");
    cy.findSelectorAndAssert("#form", "contain.text", "New User Signup!");
    cy.findSelectorAndAssert("#form", "contain.text", "Login to your account");
  });

  it("Login User with the correct email and password", () => {
    cy.findAndTypeWithoutAssert('[data-qa="login-email"]', testUser.email);
    cy.findAndTypeWithoutAssert(
      '[data-qa="login-password"]',
      testUser.password
    );
    cy.findAndClick('[data-qa="login-button"]');
    cy.findSelectorAndAssert(
      ".shop-menu > .nav",
      "contain.text",
      `Logged in as ${testUser.name}`
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
