// schema for Schedule Page
// start: string - (either month or date)
// end: string - (either month or date)
// text: schedule itself

export default {
  title: 'Schedule',
  name: 'schedule',
  type: 'document',
  fields: [
    {
      title: 'Start Month/Date',
      name: 'start',
      type: 'string',
    },
    {
      title: 'End Month/Date',
      name: 'end',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
  ],
}
