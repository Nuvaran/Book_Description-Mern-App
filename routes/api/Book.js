const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(error => res.status(404).json({ nobooksfound: 'No Books Found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(error => res.status(404).json({ nobooksfound: 'No Books Found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated Successfully' }))
        .catch(error => res.status(400).json({ error: 'Unable to Update the Database' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' }));
  });

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book Entry Deleted Successfully' }))
        .catch(error => res.status(404).json({ error: 'No Such a Book' }));
});

module.exports = router;