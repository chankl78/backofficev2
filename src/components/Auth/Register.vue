/* eslint-disable */
<template>
  <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner rounded class="bg-green col text-body1">
        <q-avatar>
          <q-img
              src="icons/icon-256x256.png"
              contain
              no-default-spinner
              transition="rotate"
            />
        </q-avatar>
        <br />
        SSASoft BackOffice Registration Page
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        filled
        class="col"
        v-model="formData.name"
        :val="$v.formData.name"
        @input="$v.formData.name.$touch"
        @blur="$v.formData.name.$touch"
        :rules="[
            val => $v.formData.name.required || 'Your Name is required',
            val => $v.formData.name.minLength || 'Your name length must be at least 4 characters'
        ]"
        name="name"
        ref="name"
        type="name"
        label="Your Name"
        placeholder="Please enter your name"
        lazy-rules
        hide-bottom-space
      />
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
    <div class="row q-mb-md">
      <q-input
        filled
        class="col"
        v-model="formData.passwordconfirmation"
        :val="$v.formData.passwordconfirmation"
        @input="$v.formData.passwordconfirmation.$touch"
        @blur="$v.formData.passwordconfirmation.$touch"
        :rules="[
            val => $v.formData.passwordconfirmation.required || 'Please confirm your password',
            val => val == this.formData.password || 'Passwords must match!'
        ]"
        name="passwordconfirmation"
        ref="passwordconfirmation"
        type="password"
        label="Confirm Password"
        placeholder="Please repeat your password"
        lazy-rules
        hide-bottom-space
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
      color="green"
      :loading="loader"
      :label="$t('register')"
      type="submit" />
    </div>
  </form>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      formData: {
        loader: false,
        name: '',
        email: '',
        password: '',
        passwordconfirmation: ''
      }
    }
  },
  validations: {
    formData: {
      name: { required, minLength: minLength(4) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      passwordconfirmation: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    submitForm () {
      this.loader = true
      this.$refs.name.validate()
      this.$refs.email.validate()
      this.$refs.password.validate()
      this.$refs.passwordconfirmation.validate()
      if (!this.$refs.name.hasError && !this.$refs.email.hasError && !this.$refs.password.hasError && !this.$refs.passwordconfirmation.hasError) {
        console.log('register the user')
      } else {
        console.log('failed register the user')
      }
    }
  }
}
</script>
