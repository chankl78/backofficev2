
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/login', name: 'auth', component: () => import('pages/Auth/Auth.vue') },
      { path: '/settings', component: () => import('pages/Settings/Settings.vue') },
      { path: '/settingsuseraccount', component: () => import('pages/Settings/UserAccount.vue') }
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
