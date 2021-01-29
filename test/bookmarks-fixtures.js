makeBookmarksArray = () => {
  return [
    {
      id: uuidv4(),
      title: 'Google',
      url: 'https://www.google.com',
      description: 'google',
      rating: 5
    },

    {
      id: uuidv4(),
      title: 'YouTube',
      url: 'https://www.youtube.com',
      description: 'youtube',
      rating: 4
    },

    {
      id: uuidv4(),
      title: 'Amazon',
      url: 'https://www.amazon.com',
      description: 'amazon',
      rating: 3
    },

    {
      id: uuidv4(),
      title: 'Target',
      url: 'https://www.target.com',
      description: 'target',
      rating: 2
    },

    {
      id: uuidv4(),
      title: 'Walmart',
      url: 'https://www.walmart.com',
      description: 'walmart',
      rating: 1
    }
  ]
}

makeMaliciousBookmark = () => {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  }
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousBookmark,
    expectedBookmark,
  }
}


module.exports = {
  makeBookmarksArray,
}