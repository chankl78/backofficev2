/* eslint-disable quote-props */
<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        :class="$q.dark.isActive ? 'bg-official' : 'bg-grey-3'"
        align="justify"
        narrow-indicator
      >
        <q-tab name="forget" label="Forget" />
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>
      <q-separator />
      <q-tab-panels
        v-model="tab"
        animated
        :class="$q.dark.isActive ? 'text-white' : 'text-black'"
        active-color="primary"
        indicator-color="primary"
        align="center"
      >
        <q-tab-panel name="forget">
          <forget />
        </q-tab-panel>

        <q-tab-panel name="login">
          <login />
        </q-tab-panel>

        <q-tab-panel name="register">
          <register />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    // eslint-disable-next-line quote-props
    'register': require('components/Auth/Register.vue').default,
    // eslint-disable-next-line quote-props
    'login': require('components/Auth/Login.vue').default,
    // eslint-disable-next-line quote-props
    'forget': require('components/Auth/Forget.vue').default
  }
}
</script>
<style>
  .auth-tabs {
    max-width: 500px;
    margin: 0 auto;
    }
</style>
