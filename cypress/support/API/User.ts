import testUser from "../../fixtures/testUser.json";

export class User {
  name: string = testUser.name;
  password: string = testUser.password;
  id: string;
  token: string;

  createNewUser() {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      body: {
        userName: this.name,
        password: this.password,
      },
    }).then((response) => {
      this.id = response.body.userID;
      expect(response.status).to.eq(201);
      expect(response.body.username).to.eq(this.name);
      expect(response.body.books).length(0)
    });
  }

  authorization() {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/Authorized",
      body: {
        userName: this.name,
        password: this.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }

  getToken() {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/GenerateToken",
      body: {
        userName: testUser.name,
        password: testUser.password,
      },
    }).then((response) => {
      this.token = response.body.token;
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("Success");
      expect(response.body.result).to.eq("User authorized successfully.")
    });
  }

  verifyUser() {
    cy.request({
      method: "GET",
      url: `https://demoqa.com/Account/v1/User/${this.id}`,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.userId).to.eq(this.id);
      expect(response.body.username).to.eq(this.name);
    });
  }

  deleteUser() {
    cy.request({
      method: "DELETE",
      url: `https://demoqa.com/Account/v1/User/${this.id}`,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  }
}

export const user = new User();
