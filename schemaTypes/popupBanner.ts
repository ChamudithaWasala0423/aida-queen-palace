import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'popupBanner',
  title: 'Popup Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Banner Active',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to activate or deactivate the popup banner',
    }),
    defineField({
      name: 'switchText',
      title: 'Switch Text',
      type: 'string',
      description: 'Text to display when the banner is active/inactive',
    }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book Now',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'uri',
      title: 'Button URI',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
  ],
})
