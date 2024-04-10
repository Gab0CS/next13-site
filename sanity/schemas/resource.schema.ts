import { title } from "process";

const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  field: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    
  ]
}
