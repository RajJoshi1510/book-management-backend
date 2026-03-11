import express from 'express'
import { addBook, addBookForm, bookManagement, editBook, editBookForm, getAllBooks, deleteBook } from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/manage-books', bookManagement);

router.post('/add', addBook);
router.get('/add', addBookForm);

router.get('/edit/:id', editBookForm);
router.post('/edit/:id', editBook);

router.get('/delete/:id', deleteBook);

export default router;