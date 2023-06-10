// schemas for FAQ page
// question - answer
// form: some answers include form that should be linked outside

export default {
    title: 'Member',
    name: 'member',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Activity Period',
        name: 'period',
        type: 'string',
      },
      {
        title: 'Roles',
        name: 'roles',
        type: 'array',
        of: [{ type: "string" }]
      },
      {
        title: "Introduction",
        name: "introduction",
        type: "string",
      }
    ],
  }
  