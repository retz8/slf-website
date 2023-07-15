export default {
  title: 'Egg Removal',
  name: 'eggRemoval',
  type: 'document',
  fields: [
    {
      title: 'Paragraphs',
      name: 'paragraphs',
      type: 'array',
      of: [
        {
          title: 'Paragraph',
          name: 'paragraph',
          type: 'document',
          fields: [
            {
              // if there's no section title, normal paragraph
              title: 'Section Title',
              name: 'sectionTitle',
              type: 'string',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'text',
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
          ],
        },
      ],
    },
    {
      title: 'Other Resources',
      name: 'otherResources',
      type: 'array',
      of: [
        {
          title: 'Resource',
          name: 'resource',
          type: 'document',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
