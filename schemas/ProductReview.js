export default {
    name: 'productReview',
    type: 'document',
    title: 'Product Review',
    fields: [
      {
        name: 'productName',
        type: 'string',
        title: 'Product Name'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating'
      },
      {
        name: 'reviewText',
        type: 'text',
        title: 'Review Text'
      },
      {
        name: 'attachment',
        type: 'file',
        title: 'Attachment',
      }
,      
      {
        name: 'reviewerName',
        type: 'string',
        title: 'Reviewer Name'
      },
      {
        name: 'reviewDate',
        type: 'date',
        title: 'Review Date'
      }
    ]
  };
  