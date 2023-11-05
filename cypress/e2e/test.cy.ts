describe("Register and login test cases", () => {
  it("Register a new user", () => {
    cy.visit("/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(".shop-menu > .nav").contains(" Signup / Login").click();
    cy.findAndAssertText("#form", "New User Signup!");
    cy.findAndTypeWithoutAssert('[data-qa="signup-name"]', "Test user");
    cy.findAndTypeWithoutAssert(
      '[data-qa="signup-email"]',
      "testuser@example.com"
    );
    cy.findAndClick('[data-qa="signup-button"]');
    cy.findAndAssertText(".login-form", "Enter Account Information");
    cy.findAndAssertText(".login-form", "Address Information");
    cy.findAndCheck("#id_gender1")
    cy.get('[data-qa="name"]')
      .should("have.value", "Test user")
      .should("have.attr", "required");
    cy.get('[data-qa="email"]')
      .should("have.value", "testuser@example.com")
      .should("be.disabled")
      .should("have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="password"]', "P@ssword1!");
    cy.findSelectAndAssertValue('[data-qa="days"]', "15", "15");
    cy.findSelectAndAssertValue('[data-qa="months"]', "March", "3");
    cy.findSelectAndAssertValue('[data-qa="years"]', "1980", "1980");
    cy.findAndCheck("#newsletter")
    cy.findAndCheck("#optin")
    cy.findTypeAndAssertRequired('[data-qa="first_name"]', "First Test Name");
    cy.findTypeAndAssertRequired('[data-qa="last_name"]', "Last Test Name");
    cy.get('[data-qa="company"]').should("not.have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="address"]', "Test address");
    cy.get('[data-qa="address2"]').should("not.have.attr", "required");
    cy.findSelectAndAssertValue('[data-qa="country"]', "Canada", "Canada");
    cy.findTypeAndAssertRequired('[data-qa="state"]', "Test State");
    cy.findTypeAndAssertRequired('[data-qa="city"]', "Test City");
    cy.findTypeAndAssertRequired('[data-qa="zipcode"]', "00000");
    cy.findTypeAndAssertRequired('[data-qa="mobile_number"]', "987654321");
    cy.findAndClick('[data-qa="create-account"]');
    cy.findAndAssertText('[data-qa="account-created"]', "Account Created");
    cy.findAndClick('[data-qa="continue-button"]');
    cy.findAndAssertText(".shop-menu > .nav", "Logged in as Test user");
    cy.get(".shop-menu > .nav").contains(" Delete Account").click();
    cy.findAndAssertText('[data-qa="account-deleted"]', "Account Deleted");
    cy.findAndClick('[data-qa="continue-button"]');
  });
});
