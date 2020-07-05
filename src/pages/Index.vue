<template>
  <q-page class="flex flex-center">
    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
      :duration="500"
    >
    <img
      alt="SSASoft BackOffice logo"
      src="~assets/backoffice.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
