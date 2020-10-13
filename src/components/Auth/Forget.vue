/* eslint-disable */
<template>
  <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner rounded class="bg-red col text-body1">
        <q-avatar>
          <q-img
              src="icons/icon-256x256.png"
              contain
              no-default-spinner
              transition="rotate"
            />
        </q-avatar>
        <br />
        SSASoft BackOffice Forget Password Page
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
    <div class="row">
      <q-space />
      <q-btn
        color="red"
        label="Reset Password"
        type="submit" />
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      formData: {
        email: ''
      }
    }
  },
  validations: {
    formData: {
      email: { required, email }
    }
  },
  methods: {
    submitForm () {
      this.$refs.email.validate()
      if (!this.$refs.email.hasError) {
        console.log('Forget Password the user')
      } else {
        console.log('failed Forget Password the user')
      }
    }
  }
}
</script>
