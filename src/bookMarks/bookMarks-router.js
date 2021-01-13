const express = require('express')
const uuid = require('uuid/v4')
const { isWebUri } = require('valid-url')
const logger = require('../logger')
const store = require('../store')

const bookMarksRouter = express.Router()
const bodyParser = express.json()

bookMarksRouter
  .route('/bookMarks')
  .get((req, res) => {
    res.json(store.bookMarks)
  })
  .post(bodyParser, (req, res) => {
    for (const field of ['title', 'url', 'rating']) {
      if (!req.body[field]) {
        logger.error(`${field} is required`)
        return res.status(400).send(`'${field}' is required`)
      }
    }
    const { title, url, description, rating } = req.body

    if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
      logger.error(`Invalid rating '${rating}' supplied`)
      return res.status(400).send(`'rating' must be a number between 0 and 5`)
    }

    if (!isWebUri(url)) {
      logger.error(`Invalid url '${url}' supplied`)
      return res.status(400).send(`'url' must be a valid URL`)
    }

    const bookMark = { id: uuid(), title, url, description, rating }

    store.bookMarks.push(bookMark)

    logger.info(`Bookmark with id ${bookMark.id} created`)
    res
      .status(201)
      .location(`http://localhost:8000/bookMarks/${bookMark.id}`)
      .json(bookMark)
  })

bookMarksRouter
  .route('/bookMarks/:bookMark_id')
  .get((req, res) => {
    const { bookMark_id } = req.params

    const bookMark = store.bookMarks.find(c => c.id == bookMark_id)

    if (!bookMark) {
      logger.error(`Bookmark with id ${bookMark_id} not found.`)
      return res
        .status(404)
        .send('Bookmark Not Found')
    }

    res.json(bookMark)
  })
  .delete((req, res) => {
    const { bookMark_id } = req.params

    const bookMarkIndex = store.bookMarks.findIndex(b => b.id === bookMark_id)

    if (bookMarkIndex === -1) {
      logger.error(`Bookmark with id ${bookMark_id} not found.`)
      return res
        .status(404)
        .send('Bookmark Not Found')
    }

    store.bookMarks.splice(bookMarkIndex, 1)

    logger.info(`Bookmark with id ${bookMark_id} deleted.`)
    res
      .status(204)
      .end()
  })

module.exports = bookMarksRouter
