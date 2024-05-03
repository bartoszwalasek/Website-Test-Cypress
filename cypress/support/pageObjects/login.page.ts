import { MainMenuComponent } from "../components/main-menu.component";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  url = "/login";
  title = "Automation Exercise - Signup / Login";

  loginEmail = '[data-qa="login-email"]';
  loginPassword = '[data-qa="login-password"]';
  loginButton = '[data-qa="login-button"]';
  loginError = ".login-form > form > p";

  signupName = '[data-qa="signup-name"]';
  signupEmail = '[data-qa="signup-email"]';
  signupButton = '[data-qa="signup-button"]';
  signupError = ".signup-form > form > p";

  mainMenu = new MainMenuComponent();

  constructor() {
    super();
  }

  login(email: string, password: string) {
    cy.findAndTypeWithoutAssert(this.loginEmail, email);
    cy.findAndTypeWithoutAssert(this.loginPassword, password, { log: false });
    cy.findAndClick(this.loginButton);
  }

  signup(name: string, email: string) {
    cy.findAndTypeWithoutAssert(this.signupName, name);
    cy.findAndTypeWithoutAssert(this.signupEmail, email);
    cy.findAndClick(this.signupButton);
  }
}
