<template>
  <v-container fluid class="aboutProject">
    <bannerHome
      title="SOBRE O PROJETO"
      style-banner="background-image: url('/imagens/climo.jpg');"
    />
    <aboutProject />
    <teamProject />
    <institutionsProject />
  </v-container>
</template>

<script>
import bannerHome from '../components/sectionsHome/banner.vue'
import aboutProject from '../components/sectionsAboutProject/aboutProject.vue'
import teamProject from '../components/sectionsAboutProject/team.vue'
import institutionsProject from '../components/sectionsAboutProject/institutions.vue'

export default {
  components: { bannerHome, aboutProject, teamProject, institutionsProject },
  data() {
    return {}
  },
}
</script>

<style scoped>
.aboutProject {
  padding: 0px;
}
</style>
