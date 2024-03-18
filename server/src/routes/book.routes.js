import { Router } from "express";
import {
  handleCreateBook,
  handleFindingBook,
  handleFindingByAuthor,
} from "../controllers/book.controllers";

const bookRoutes = Router();

bookRoutes
  // /api/books
  .route("/")
  // Post /api/books - Creates new book
  .post(handleCreateBook)
  //Get /api/books - Gets all books
  .get(handleFindingBook);

bookRoutes
  // /api/books/author/:author
  .route("/author/:author")
  // Get /api/books/author/:author - find books by author
  .get(handleFindingByAuthor);
export default bookRoutes;
