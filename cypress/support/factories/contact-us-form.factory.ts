import { ContactUsForm } from "../models/contact-us-form.model";
import { faker } from "@faker-js/faker/locale/en";

export function createContactUsForm() {
  const contactUsForm: ContactUsForm = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    subject: faker.lorem.sentence(),
    message: faker.lorem.paragraph(3),
    filePath: "cypress/fixtures/Cypress.png",
  };

  return contactUsForm;
}
