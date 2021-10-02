export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6158eec99d2393e393c9974c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-79j2rcg5',
                  apiId: '93da9a41-2401-4025-b99c-ce084cddb933'
                },
                {
                  buildHookId: '6158eec8c949c3043ccf6d2e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ocawazsi',
                  apiId: '9a4381b9-9770-4509-b731-3a0e3a7fe6eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melissamcewen/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ocawazsi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
