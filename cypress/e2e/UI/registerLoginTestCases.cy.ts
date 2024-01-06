import testUser from "../../fixtures/testUser.json";
import { navigateTo } from "../../support/pageObjects/navigationPage";
import { register } from "../../support/pageObjects/registerUserPage";
import { user } from "../../support/pageObjects/userPage";
import { login } from "../../support/pageObjects/loginUserPage";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.signupLoginPage();
  });

  it("Register a new User", () => {
    register.provideCorrectData(testUser.name, testUser.email);
    register.submitForm(
      testUser.gender,
      testUser.name,
      testUser.email,
      testUser.password,
      testUser.dateOfBirth.day,
      testUser.dateOfBirth.month,
      testUser.dateOfBirth.year,
      testUser.firstName,
      testUser.lastName,
      testUser.address,
      testUser.country,
      testUser.state,
      testUser.city,
      testUser.zipcode,
      testUser.mobileNumber
    );
    user.logout();
  });

  it("Register User with existing email", () => {
    register.provideIncorrectData(testUser.name, testUser.email);
  });

  it("Login User with the incorrect email and password", () => {
    login.provideIncorrectData(
      `incorrect_${testUser.email}`,
      `incorrect_${testUser.password}`
    );
  });

  it("Login User with the correct email and password", () => {
    login.provideCorrectData(testUser.email, testUser.password, testUser.name);
    user.deleteAccount();
  });
});
