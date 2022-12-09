const routes = [
  /* {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  }, */
  {
    path: '/tuto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'v2', component: () => import('pages/TutoPage.vue') },
      {
        path: 'v3', component: () => import('pages/TutoPageVue3.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/components/home/homePage.vue') }
    ]
  },
  {
    path: '/task',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/actionTask/listTask.vue') },
      { path: ':id', component: () => import('components/actionTask/vueTask.vue') },
      { path: 'createTask', component: () => import('components/actionTask/createTask.vue') }
      /* { path: 'updateTask', component: () => import('components/actionTask/updateTask.vue') } */
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
