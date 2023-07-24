export default {
    name: 'movie',
    type: 'document',
    title: 'Movie',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'director',
        type: 'string',
        title: 'Director'
      },
      {
        name: 'releaseYear',
        type: 'number',
        title: 'Release Year'
      },
      {
        name: 'genre',
        type: 'string',
        title: 'Genre'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating'
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
      }
    ]
  };
  