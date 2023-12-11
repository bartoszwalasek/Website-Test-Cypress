export const mainPage = {
  nav: ".shop-menu > .nav",
};

export const loginSignupPage = {
  form: "#form",
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',
  loginEmail: '[data-qa="login-email"]',
  loginPassword: '[data-qa="login-password"]',
  loginButton: '[data-qa="login-button"]',
};

export const signup = {
  mainForm: ".login-form",
  password: '[data-qa="password"]',
  dateOfBirth: {
    day: '[data-qa="days"]',
    month: '[data-qa="months"]',
    year: '[data-qa="years"]',
  },
  newsletter: "#newsletter",
  offers: "#optin",
  firstName: '[data-qa="first_name"]',
  lastName: '[data-qa="last_name"]',
  company: '[data-qa="company"]',
  address: '[data-qa="address"]',
  address2: '[data-qa="address2"]',
  country: '[data-qa="country"]',
  state: '[data-qa="state"]',
  city: '[data-qa="city"]',
  zipcode: '[data-qa="zipcode"]',
  mobileNumber: '[data-qa="mobile_number"]',
  createAccountButton: '[data-qa="create-account"]',
};

export const general = {
  accoutCreated: '[data-qa="account-created"]',
  accoutDeleted: '[data-qa="account-deleted"]',
  continueButton: '[data-qa="continue-button"]',
  userName: '[data-qa="name"]',
  userEmail: '[data-qa="email"]',
  image: "img",
};

export const contact = {
  formTitle: ".contact-form > .title",
  subject: '[data-qa="subject"]',
  message: '[data-qa="message"]',
  uploadFile: '[name="upload_file"]',
  submitButton: '[data-qa="submit-button"]',
  homeButton: "#form-section > .btn",
  submitConfirmation: ".contact-form > .alert-success",
};

export const products = {
  ProductsHeader: ".features_items > .title",
  productInfo: ".productinfo",
  productWrapper: ".product-image-wrapper",
  viewProduct: "View Product",
  searchProductInput: "#search_product",
  searchProductButton: "#submit_search",
};

export const product = {
  productInformation: ".product-information",
};
