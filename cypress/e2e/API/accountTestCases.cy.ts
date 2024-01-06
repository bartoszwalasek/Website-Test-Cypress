import { user } from "../../support/API/User";

describe("Account API tests", () => {
  it("Create a new user", () => {
    user.createNewUser();
  });
  it("The user authorization", () => {
    user.authorization();
  });
  it("Get the user token", () => {
    user.getToken();
  });
  it("Verify user", () => {
    user.verifyUser();
  });
  it("Delete the user", () => {
    user.deleteUser();
  });
});
