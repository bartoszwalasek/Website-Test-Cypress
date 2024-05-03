import { MainMenuComponent } from "../components/main-menu.component";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
  url = "/";
  title = "Automation Exercise";

  mainMenu = new MainMenuComponent();

  constructor() {
    super();
  }
}
