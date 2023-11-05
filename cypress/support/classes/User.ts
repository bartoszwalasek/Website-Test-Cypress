interface DateOfBirth {
    day: string;
    month: string;
    year: string;
  }

export class User {
  name: string;
  email: string;
  password: string;
  dateOfBirth: DateOfBirth;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;

  constructor() {
    this.name = "Test User";
    this.email = "testuser@example.com";
    this.password = "P@ssword1!";
    this.dateOfBirth = {
      day: "15",
      month: "March",
      year: "1980",
    };
    this.firstName = "First Test Name";
    this.lastName = "Last Test Name";
    this.address = "Test address";
    this.country = "Canada";
    this.state = "Test State";
    this.city = "Test City";
    this.zipcode = "00000";
    this.mobileNumber = "987654321";
  }
}

export const user = new User();
