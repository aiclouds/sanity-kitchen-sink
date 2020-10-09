export default {
  widgets: [
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
                  buildHookId: '5f7feb24c1de0f7075b9395a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cdxfudd3',
                  apiId: '54588e74-8bc2-4beb-916d-ca1ecaa4255c'
                },
                {
                  buildHookId: '5f7feb24765382712da0cd0c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z7xgoqdk',
                  apiId: 'b2d19681-89de-4fb7-af59-131d8bafdd68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aiclouds/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z7xgoqdk.netlify.app', category: 'apps'}
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
