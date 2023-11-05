describe("Register and login test cases", () => {
  it("Register a new user", () => {
    cy.visit("/");
    cy.title().should("eq", "Automation Exercise");
    cy.get(".shop-menu > .nav").contains(" Signup / Login").click();
    cy.get("#form")
      .should("contain.text", "Login to your account")
      .should("contain.text", "New User Signup!");
    cy.get('[data-qa="signup-name"]').type("Test user");
    cy.get('[data-qa="signup-email"]').type("testuser@example.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get(".login-form")
      .should("contain.text", "Enter Account Information")
      .should("contain.text", "Address Information");
    cy.get("#id_gender1").check();
    cy.get('[data-qa="name"]')
      .should("have.value", "Test user")
      .should("have.attr", "required");
    cy.get('[data-qa="email"]')
      .should("have.value", "testuser@example.com")
      .should("be.disabled")
      .should("have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="password"]', "P@ssword1!");
    cy.get('[data-qa="days"]').select("15").should("have.value", "15");
    cy.get('[data-qa="months"]').select("March").should("have.value", "3");
    cy.get('[data-qa="years"]').select("1980").should("have.value", "1980");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.findTypeAndAssertRequired('[data-qa="first_name"]', "First Test Name");
    cy.findTypeAndAssertRequired('[data-qa="last_name"]', "Last Test Name");
    cy.get('[data-qa="company"]').should("not.have.attr", "required");
    cy.findTypeAndAssertRequired('[data-qa="address"]', "Test address");
    cy.get('[data-qa="address2"]').should("not.have.attr", "required");
    cy.get('[data-qa="country"]')
      .select("Canada")
      .should("have.value", "Canada");
    cy.findTypeAndAssertRequired('[data-qa="state"]', "Test State");
    cy.findTypeAndAssertRequired('[data-qa="city"]', "Test City");
    cy.findTypeAndAssertRequired('[data-qa="zipcode"]', "00000");
    cy.findTypeAndAssertRequired('[data-qa="mobile_number"]', "987654321");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should(
      "contain.text",
      "Account Created"
    );
    cy.get('[data-qa="continue-button"]').click();
    cy.get(".shop-menu > .nav").should(
      "contain.text",
      "Logged in as Test user"
    );
    cy.get(".shop-menu > .nav").contains(" Delete Account").click();
    cy.get('[data-qa="account-deleted"]').should(
      "contain.text",
      "Account Deleted"
    );
    cy.get('[data-qa="continue-button"]').click();
  });
});
