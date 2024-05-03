import { user } from "../../support/API/User";
import { bookStore } from "../../support/API/BookStore";

describe("Book Store API tests", () => {
  before("Create a new user", () => {
    user.createNewUser();
    user.getToken();
  });

  after("Delete the user", () => {
    user.deleteUser();
  });

  it("Get all books", () => {
    bookStore.getAllBooks();
  });

  it("Add the book to the user", () => {
    bookStore.addBookToUser("Speaking JavaScript");
  });

  it("Delete the user's book", () => {
    bookStore.deleteBook("Speaking JavaScript");
  });
});
