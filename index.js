import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// database connection
connectDB();

// setup ejs
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));


// import routes
import booksRoutes from './routes/booksRoutes.js';

app.use('/', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});
