<template>
  <v-container fluid class="home">
    <bannerHome
      title="Temperatura"
      style="background-image: url('/imagens/temperatura.JPG');"
    />
  </v-container>
</template>

<script>
import bannerHome from '../components/sectionsHome/banner.vue'

export default {
  components: { bannerHome },
}
</script>

<style scoped>
.home {
  background-color: rgba(245, 228, 50, 0.2);
  padding: 0px;
}
</style>
