export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      title: 'Eggs Removed',
      name: 'eggsRemoved',
      type: 'number',
    },
    {
      title: 'Eggs Removed by Years',
      name: 'eggsRemovedByYears',
      type: 'array',
      of: [
        {
          title: 'Egg - Year',
          name: 'eggYearPair',
          type: 'document',
          fields: [
            {
              title: 'Year',
              name: 'year',
              type: 'number',
            },
            {
              title: 'Eggs Removed',
              name: 'eggsRemoved',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      title: 'Main Egg Image',
      name: 'mainEggImage',
      type: 'image',
    },
    {
      title: 'About Us',
      name: 'aboutUs',
      type: 'text',
    },
    {
      title: 'Tutorials Images',
      name: 'tutorialsImages',
      type: 'document',
      fields: [
        {
          title: 'Egg Removal Image',
          name: 'eggRemovalImage',
          type: 'image',
        },
        {
          title: 'Trap Image',
          name: 'trapImage',
          type: 'image',
        },
      ],
    },
  ],
}
