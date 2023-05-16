// module.exports = {
//     label: 'Brand New Post ✨',
//     hide_body: false,
//     fields: [
//       {
//         type: 'text',
//         name: 'title',
//         label: 'title',
//         config: {
//           required: true,
//           min: 10,
//           max: 67
//         },
//         description: "Enter the Article's title."
//       },
//       {
//         type: 'datetime',
//         name: 'date',
//         label: 'date',
//         config: {
//           date_format: '',
//           time_format: '',
//           required: true
//         },
//         default: 'now'
//       },
//       {
//         name: 'author',
//         type: 'select',
//         default: 'BABC',
//         config: {
//           required: true,
//           options: [
//             'M.I.Titus',
//             'BABC',
//             'P.Gitau',
//             'B.Wamaitha'
//           ],
//           source: {
//             type: 'simple',
//             section: '',
//             file: '',
//             path: ''
//           }
//         },
//         label: 'Author',
//         description: 'Insert authors name'
//       },
//       {
//         type: 'text',
//         name: 'description',
//         label: 'description',
//         config: {
//           required: true,
//           min: 40,
//           max: 160
//         },
//         description: 'Enter a short description of the new post. Clue: Enter a summary'
//       },
//       {
//         name: 'categories',
//         type: 'select',
//         default: 'Emerging Issues & Trends',
//         config: {
//           required: true,
//           options: [
//             'Artificial Intelligence & Machine Learning',
//             'App Updates',
//             'Computer Science',
//             'Blockchain & Web3',
//             'Device Reviews',
//             'Emerging Issues & Trends'
//           ],
//           source: {
//             type: 'simple',
//             section: '',
//             file: '',
//             path: ''
//           }
//         },
//         label: 'Categories',
//         description: 'Add a category to ease user site navigation'
//       },
//       {
//         type: 'field_group',
//         name: 'cover',
//         label: 'cover',
//         fields: [
//           {
//             type: 'file',
//             name: 'image',
//             label: 'image',
//             description: 'All images should have an alt; this should be the same as the title of the post'
//           },
//           {
//             type: 'text',
//             name: 'alt',
//             label: 'alt',
//             description: 'All images should have an alt; this should be the same as the title of the post',
//             default: 'bunnie abc'
//           },
//           {
//             type: 'text',
//             name: 'caption',
//             label: 'caption',
//             description: 'Describe the source of the photo eg. (image sourced from source.unsplash.com/random)'
//           }
//         ],
//         description: 'This section is mandatory to enhance the User Experience ~ CTO'
//       },
      
//       {
//             type: 'list',
//             name: 'tags',
//             label: 'tags',
//             config: {
//               use_select: false,
//               min: 2,
//               max: 5
//             },
//             description: 'Add the most relevant tags to help us manage how content is displayed.'
//           }
//         ],
//         validate: function(config) {
//           if (config.title.length < 10) {
//             return 'The title must have at least 10 characters.';
//           }
//           if (config.title.length > 67) {
//             return 'The title can have at most 67 characters.';
//           }
//           if (config.description.length < 40) {
//             return 'The description must have at least 40 characters.';
//           }
//           if (config.description.length > 160) {
//             return 'The description can have at most 160 characters.';
//           }
//           if (config.tags.length < 2) {
//             return 'Please add at least 2 tags.';
//           }
//           if (config.tags.length > 5) {
//             return 'Please add at most 5 tags.';
//           }
//           return null; // Return null if validation is successful
//         }
//       };