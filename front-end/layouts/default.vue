<template>
  <v-app>
    <navbarIC />
    <nuxt></nuxt>
    <footerIC />
  </v-app>
</template>

<script>
import navbarIC from '../components/navbar.vue'
import footerIC from '../components/footer.vue'

export default {
  components: {
    navbarIC,
    footerIC,
  },
  data() {
    return {}
  },
}
</script>
