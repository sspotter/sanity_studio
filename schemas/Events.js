export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date'
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'attendees',
        type: 'array',
        title: 'Attendees',
        of: [{ type: 'string' }]
      }
    ]
  };
  