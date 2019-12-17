export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df93d9e91911cc9fde2787e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1rgbveep',
                  apiId: '66c964fa-dc58-4e8f-b584-993527cdaafa'
                },
                {
                  buildHookId: '5df93d9eb0342dc9dd947ea1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5cikcn1i',
                  apiId: 'cd467b9a-c05f-411f-b04a-9526a8977731'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zdehkordi-gem/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5cikcn1i.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
