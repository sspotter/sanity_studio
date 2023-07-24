export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'string' }]
    },
    {
      name: 'instructions',
      type: 'text',
      title: 'Instructions'
    },
    {
      name: 'prepTime',
      type: 'number',
      title: 'Preparation Time (minutes)'
    }
  ]
};
