/* eslint-disable */
<template>
  <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner rounded class="bg-blue col text-body1">
        <q-avatar>
          <q-img
              src="icons/icon-256x256.png"
              contain
              no-default-spinner
              transition="rotate"
            />
        </q-avatar>
        <br />
        SSASoft BackOffice Login Page
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        filled
        class="col"
        v-model="formData.email"
        :val="$v.formData.email"
        @input="$v.formData.email.$touch"
        @blur="$v.formData.email.$touch"
        :rules="[
            val => $v.formData.email.required || 'Your Email is required',
            val => $v.formData.email.email || 'Invalid email format'
        ]"
        name="email"
        ref="email"
        type="email"
        label="Your Email"
        placeholder="Please enter your email"
        lazy-rules
        hide-bottom-space
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        filled
        class="col"
        v-model="formData.password"
        :val="$v.formData.password"
        @input="$v.formData.password.$touch"
        @blur="$v.formData.password.$touch"
        :rules="[
            val => $v.formData.password.required || 'Your Password is required',
            val => $v.formData.password.minLength || 'Your password length must be at least 8 characters'
        ]"
        name="password"
        ref="password"
        type="password"
        label="Password"
        placeholder="Please enter minimum 8 characters"
        lazy-rules
        hide-bottom-space
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
        color="blue"
        label="Login"
        type="submit" />
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
const qs = params => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

export default {
  data () {
    return {
      formData: {
        email: '',
        password: '',
        loader: false
      }
    }
  },
  validations: {
    formData: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    async login () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.loader = true
        this.$store.dispatch('auth/loginAction', {
          email: this.email,
          password: this.password,
          remember: this.remember,
          // id: this.$route.params.id,
          hash: this.$route.params.hash,
          // query: this.$route.query,
          query: qs(this.$route.query),
          api: 'login'
          // scope: ''
        })
          .then(() => {
            this.loader = false
          })
          .catch(error => {
            this.loader = false
            this.email_data = error.response.data.errors.email[0] || error.response.data.message
            this.password_data = error.response.data.errors.password[0] || error.response.data.message
          })
      } else {
        console.log('failed login the user')
      }
    }
  }
}
</script>
