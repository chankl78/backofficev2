/* eslint-disable no-undef */
import { Notify } from 'quasar'
import axios from 'axios'

// eslint-disable-next-line prefer-const
let env = process.env
// eslint-disable-next-line prefer-const
let url = env.DEV ? env.DEV_URL : env.LOCAL_PROD ? env.DEV_URL : env.API_URL

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({ baseURL: url })

export default async ({ router, store, Vue }) => {
  // Request interceptor
  axiosInstance.interceptors.request.use(request => {
    // eslint-disable-next-line dot-notation
    const token = store.getters['tokenGetter']
    // eslint-disable-next-line dot-notation
    if (token) request.headers.common['Authorization'] = `Bearer ${token}`

    return request
  })

  // Response interceptor
  axiosInstance.interceptors.response.use(response => response, error => {
    const { status } = error.response

    if (status >= 500) {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Error ' + status,
        icon: 'report_problem'
      })
    }

    // eslint-disable-next-line dot-notation
    if (status === 401 && store.getters['authGetter']) {
      store.dispatch('logoutAction').then(() => {
        router.push({ path: '/login' }).then(() => {
          Notify.create({
            color: 'negative',
            position: 'top',
            message: 'Error',
            icon: 'report_problem'
          })
        })
      })
    } return Promise.reject(error)
  })

  // for use inside Vue files through this.$axios
  Vue.prototype.$axios = axiosInstance

  // Verify Email - Boolean or Binary
  // eslint-disable-next-line prefer-const
  let verifyEmail = env.PROD ? env.MUST_VERIFY_EMAIL : false

  // Users Analytics
  // eslint-disable-next-line prefer-const
  // let auth = []; let ip = ''; let format = 'json' // json, jsonp, xml, csv, yaml
  // let { data } = await axios.get(`http://ip-api.com/${format}/${ip}`) let rep = data
  // let { data } = await axios.get(`https://ipapi.co/${ip}/${format}/`); let rep = data

  // Authentication
  router.beforeEach(async (to, from, next) => {
    // eslint-disable-next-line dot-notation
    if (store.getters['tokenGetter']) { // Authenticated Router
      auth = await store.dispatch('authAction').catch(() => {
        store.commit('logoutMutation')
      }) // Auth Check
      // eslint-disable-next-line prefer-const
      let verify = !auth.email_verified_at & verifyEmail
        ? to.meta.verify || { path: '/email/verify' }
        : !to.meta.verify || { path: '/' }; next(verify)
      if (auth[0].ip !== data.ip) store.dispatch('updateAction', { ...data, ...{ id: auth.id } })
    } else { // Unauthenticated Route
      next(!to.meta.auth & !to.meta.verify || { path: '/login' })
      if (rep) store.dispatch('updateAction', { ...rep, ...{ id: 'store' } }); rep = null
    } // TagBoot: AnalyticModule
  })
}

export { axiosInstance, url }
