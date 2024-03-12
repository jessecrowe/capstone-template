import Book from "../models/book.model";

export async function createBook(title, author, summary, copies) {
  const newBook = await Book.create({ title, author, summary, copies });
  return newBook;
}

export async function findByAuthor(author){
  const booksByAuthor = await Book.find({author: author});
  return booksByAuthor;
}