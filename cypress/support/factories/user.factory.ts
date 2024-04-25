import { User } from "../models/users.model";
import { faker } from "@faker-js/faker/locale/en";

export function createMaleUser(): User {
  const country = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore",
  ];

  const registerUser: User = {
    name: "",
    email: "",
    password: faker.internet.password(),
    gender: "Mr",
    dateOfBirth: {
      day: faker.datatype.number({ min: 1, max: 28 }).toString(),
      month: faker.date.month(),
      year: faker.datatype.number({ min: 1960, max: 2000 }).toString(),
    },
    firstName: faker.person.firstName("male"),
    lastName: faker.person.lastName("male"),
    address: faker.address.streetAddress(),
    country: country[Math.floor(Math.random() * country.length)],
    state: faker.address.state(),
    city: faker.address.cityName(),
    zipcode: faker.address.zipCode(),
    mobileNumber: faker.phone.number(),
  };

  registerUser.email = faker.internet.email({
    firstName: registerUser.firstName,
    lastName: registerUser.lastName,
  });

  registerUser.name = faker.internet.userName({
    firstName: registerUser.firstName,
    lastName: registerUser.lastName,
  });

  return registerUser;
}
