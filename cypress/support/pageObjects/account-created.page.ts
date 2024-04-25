import { MainMenuComponent } from "../components/main-menu.component";

export class AccountCreatedPage {
  url = "/account_created";

  accountCreatedText = '[data-qa="account-created"]';
  continueButton = '[data-qa="continue-button"]';

  mainMenu = new MainMenuComponent();

  constructor() {}
}
