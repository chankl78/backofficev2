import { axiosInstance, locale } from 'boot/axios'
// import { i18n } from 'boot/i18n'
import { Notify } from 'quasar'

export async function loginAction ({ commit, dispatch, getters }, payload) {
  const rep = await axiosInstance.post('api/login', { ...{ locale: locale }, ...payload })
    .then(async response => {
      // eslint-disable-next-line prefer-const
      let token = response.data
      commit('loginMutation', { ...token, ...payload })
      dispatch('authAction')
    }); return rep
}

export async function registerAction ({ commit, dispatch }, payload) {
  // eslint-disable-next-line prefer-const
  let url = payload.api === 'register' ? 'api/register' : 'api/users'
  const data = await axiosInstance.post(url, { ...{ locale: locale }, ...payload })
    .then(response => {
      if (payload.api === 'register') dispatch('loginAction', payload)
      Notify.create({
        color: 'positive',
        position: 'top',
        message: response.data,
        icon: 'check'
      })
    }); return data
}
