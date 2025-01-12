const Book = require('../models/bookModel');

// Get books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

// Create new book
const createBook = async (req, res) => {
    const { title, authors, genre, publisher, publicationYear, edition, language, price } = req.body;
  
    if (!title || !authors || !publisher || !genre || !publicationYear || !edition  || !price || !language) {
        return res.status(400).json({ error: "All fields are required" })
    }
    if (price <= 0) {
        return res.status(400).json({ error: "Price must be more than 0" })
    }
    if ( edition <= 0) {
        return res.status(400).json({ error: "Edition must be a positive" })
    }
    if (isNaN(publicationYear) || publicationYear < 1000 || publicationYear > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid Publication Year" })
    }

    try {
        const newBook = new Book({
            title,
            authors,
            genre,
            publisher,
            publicationYear,
            edition,
            language,
            price,
        });

        await newBook.save();
        res.status(201).json(newBook)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

// Update book
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, authors, genre, publisher, publicationYear, edition, language, price } = req.body;

    if (!title || !authors || !publisher || !genre || !publicationYear || !edition || !price || !language) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if (price <= 0) {
        return res.status(400).json({ error: "Price must be more than 0" });
    }
    if (edition <= 0) {
        return res.status(400).json({ error: "Edition must be a positive number" });
    }
    if (isNaN(publicationYear) || publicationYear < 1000 || publicationYear > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid Publication Year" });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, authors, genre, publisher, publicationYear, edition, language, price },
            { new: true } // Return the updated document
        );

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json(updatedBook);
    } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};


// Delete book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id); 

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book)
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Internal server error' })
    }
};

module.exports = { createBook,getBooks,updateBook,deleteBook,getBookById};