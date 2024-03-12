import Book from "../models/book.model";
import { createBook, findByAuthor } from "../services/book.service";

export async function handleCreateBook(req, res){
    try {
        const { title, author, summary, copies } = req.body;

        const newBook = await createBook(
            title, 
            author, 
            summary, 
            copies
        );

        res.status(201).send(newBook);
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.err);
    }
}

export async function handleFindingBook (req, res) {
    const allBooks = await Book.find();
    return allBooks;
}

export async function handleFindingByAuthor(req, res){
    const {author} = req.params;
    const authorsBooks = await findByAuthor(author);
    res.status(200).json(authorsBooks);
}