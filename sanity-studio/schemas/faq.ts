// schemas for FAQ page
// question - answer
// form: some answers include form that should be linked outside

export default {
  title: 'FAQ',
  name: 'faq',
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'string',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'string',
    },
  ],
}
