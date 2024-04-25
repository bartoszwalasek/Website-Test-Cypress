

export class BasePage {
  url = '';
  title = ''

  constructor() {}

  goToAndCheckTitle(){
    cy.openUrlAndCheckTitle(this.url, this.title);
  }
}
