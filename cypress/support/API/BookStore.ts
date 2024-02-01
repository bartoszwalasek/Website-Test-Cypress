import { user } from "./User";
import { Book } from "../types";

export class BookStore {
  books: Book[];

  getAllBooks() {
    cy.request({
      method: "GET",
      url: "https://demoqa.com/BookStore/v1/Books",
    }).then((response) => {
      this.books = response.body.books;
      expect(response.status).to.eq(200);
      expect(response.body.books).not.length(0);
    });
  }

  findBookByTitle(title: string): string {
    const desiredBook: Book = this.books.find(
      (book: Book) => book.title === title
    );
    return desiredBook.isbn;
  }

  addBookToUser(title: string) {
    const bookIsbn: string = this.findBookByTitle(title);
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: {
        userId: user.id,
        collectionOfIsbns: [
          {
            isbn: bookIsbn,
          },
        ],
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.books[0].isbn).to.eq(bookIsbn);
    });
  }

  deleteBook(title: string) {
    const bookIsbn: string = this.findBookByTitle(title);
    cy.request({
      method: "DELETE",
      url: "https://demoqa.com/BookStore/v1/Book",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: {
        isbn: bookIsbn,
        userId: user.id,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  }
}

export const bookStore = new BookStore();
