import { ContactUsForm } from "../models/contact-form.model";
import { BasePage } from "./base.page";

export class ContactUsPage extends BasePage {
  url = "/contact_us";

  userName = '[data-qa="name"]';
  userEmail = '[data-qa="email"]';
  subject = '[data-qa="subject"]';
  message = '[data-qa="message"]';
  uploadFile = '[name="upload_file"]';
  submitButton = '[data-qa="submit-button"]';
  submitConfirmation = ".contact-form > .alert-success";

  constructor() {
    super();
  }
  
  submitForm(contactUsForm: ContactUsForm) {
    cy.findAndTypeWithoutAssert(this.userName, contactUsForm.name);
    cy.findAndTypeWithoutAssert(this.userEmail, contactUsForm.email);
    cy.findAndTypeWithoutAssert(this.subject, contactUsForm.subject);
    cy.findAndTypeWithoutAssert(this.message, contactUsForm.message);
    cy.uploadFile(this.uploadFile, contactUsForm.filePath);
    cy.findAndClick(this.submitButton);
  }
}
