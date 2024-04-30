const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/menu', component: () => import('pages/AddMenuItemPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/contact', component: () => import('pages/ContactPage.vue') },
      { path: '/cart', component: () => import('pages/CartPage.vue') },
      { path: '/info', component: () => import('pages/AppInfo.vue') },
      { path: '/payment', component: () => import('src/pages/paymentPage.vue') },
      { path: '/afterpayment', component: () => import('src/pages/afterPaymentPage.vue') },
      { path: '/faq', component: () => import('src/pages/FaqPage.vue') },

    ]
  }, {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/login/LoginPage.vue') },
      { path: '/signup', component: () => import('src/pages/login/SignUpPage.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
