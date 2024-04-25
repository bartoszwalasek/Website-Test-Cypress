export interface User {
  name: string;
  email: string;
  password: string;
  gender: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}