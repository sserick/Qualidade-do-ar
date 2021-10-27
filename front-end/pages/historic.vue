<template>
  <v-container fluid class="home">
    <bannerHome
      title="HISTÓRICO"
      style-banner="background-image: url('/imagens/historico.jpg');"
    />
    <dados-historyc />
  </v-container>
</template>

<script>
import bannerHome from '../components/sectionsHome/banner.vue'
import dadosHistoryc from '../components/sectionsHistory/dadosHistory.vue'

export default {
  components: { bannerHome, dadosHistoryc },
}
</script>

<style scoped>
.home {
  background-color: rgba(58, 182, 62, 0.05);
  padding: 0px;
}
</style>
