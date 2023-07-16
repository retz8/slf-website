export default {
  title: 'Lanternfly Traps',
  name: 'lfTraps',
  type: 'document',
  fields: [
    {
      title: 'Paragraphs',
      name: 'paragraphs',
      type: 'array',
      of: [
        {
          title: 'Text',
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      title: 'Thumbnails',
      name: 'thumbnails',
      type: 'array',
      of: [
        {
          title: 'Thumbnail',
          name: 'thumbnail',
          type: 'image',
        },
      ],
    },
    {
      title: 'Video Tutorial',
      name: 'videoTutorial',
      type: 'document',
      fields: [
        {
          title: 'Section Title',
          name: 'sectionTitle',
          type: 'string',
        },
        {
          title: 'Video URL',
          name: 'videoUrl',
          type: 'url',
        },
      ],
    },
  ],
}
