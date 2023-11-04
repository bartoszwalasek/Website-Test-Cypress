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
    cy.get('[data-qa="password"]')
      .type("P@ssword1!")
      .should("have.attr", "required");
    cy.get('[data-qa="days"]').select("15").should("have.value", "15");
    cy.get('[data-qa="months"]').select("March").should("have.value", "3");
    cy.get('[data-qa="years"]').select("1980").should("have.value", "1980");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get('[data-qa="first_name"]')
      .type("First Test Name")
      .should("have.attr", "required");
    cy.get('[data-qa="last_name"]')
      .type("Last Test Name")
      .should("have.attr", "required");
    cy.get('[data-qa="company"]').should("not.have.attr", "required");
    cy.get('[data-qa="address"]')
      .type("Test address")
      .should("have.attr", "required");
    cy.get('[data-qa="address2"]').should("not.have.attr", "required");
    cy.get('[data-qa="country"]')
      .select("Canada")
      .should("have.value", "Canada");
    cy.get('[data-qa="state"]')
      .type("Test State")
      .should("have.attr", "required");
    cy.get('[data-qa="state"]')
      .type("Test State")
      .should("have.attr", "required");
    cy.get('[data-qa="city"]')
      .type("Test City")
      .should("have.attr", "required");
    cy.get('[data-qa="zipcode"]').type("00000").should("have.attr", "required");
    cy.get('[data-qa="mobile_number"]')
      .type("987654321")
      .should("have.attr", "required");
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
