// General Info Schema
// Whole text is divided into different paragraphs
// Introduction is separated to apply special styling
// Intrdouction doesn't have Section Title
// If there's no section title => normal paragraph
// If there's section title => first paragraph of section

export default {
  title: 'General Info',
  name: 'generalInfo',
  type: 'document',
  fields: [
    {
      title: 'Introduction',
      name: 'introduction',
      type: 'array',
      of: [
        {
          title: 'Intro Paragraph',
          name: 'introParagraph',
          type: 'document',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'text',
            },
            {
              title: 'Thumbnail',
              name: 'thumbnail',
              type: 'image',
            },
          ],
        },
      ],
    },
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
              title: 'Thumbnail',
              name: 'thumbnail',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
