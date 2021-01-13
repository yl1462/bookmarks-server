const uuid = require('uuid/v4')

const bookMarks = [
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'google',
    rating: 5 },

  { id: uuid(),
    title: 'YouTube',
    url: 'https://www.youtube.com',
    description: 'youtube',
    rating: 4 },

  { id: uuid(),
    title: 'Amazon',
    url: 'https://www.amazon.com',
    description: 'amazon',
    rating: 3 },

  { id: uuid(),
    title: 'Target',
    url: 'https://www.target.com',
    description: 'target',
    rating: 2 },

  { id: uuid(),
    title: 'Walmart',
    url: 'https://www.walmart.com',
    description: 'walmart',
    rating: 1 }
]

module.exports = { bookMarks }
