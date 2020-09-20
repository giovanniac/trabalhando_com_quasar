
const routes = [
  {
    path: '/',
    redirect: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'hobbies', component: () => import('pages/Hobbies.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
