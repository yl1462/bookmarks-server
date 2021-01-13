const { v4: uuidv4 } = require('uuid');

const bookMarks = [
  { id: uuidv4(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'google',
    rating: 5 },

  { id: uuidv4(),
    title: 'YouTube',
    url: 'https://www.youtube.com',
    description: 'youtube',
    rating: 4 },

  { id: uuidv4(),
    title: 'Amazon',
    url: 'https://www.amazon.com',
    description: 'amazon',
    rating: 3 },

  { id: uuidv4(),
    title: 'Target',
    url: 'https://www.target.com',
    description: 'target',
    rating: 2 },

  { id: uuidv4(),
    title: 'Walmart',
    url: 'https://www.walmart.com',
    description: 'walmart',
    rating: 1 }
]

module.exports = { bookMarks }
