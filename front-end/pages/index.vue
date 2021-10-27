<template>
  <v-container fluid class="home">
    <bannerHome
      title="QUALIDADE DO AR LABORATORIAL"
      style-banner="background-image: url('/imagens/climo.jpg');"
    />
    <aboutUsHome :imagens-about-us="ImgQuemSomos" />
    <informsHome />
  </v-container>
</template>

<script>
import bannerHome from '../components/sectionsHome/banner.vue'
import aboutUsHome from '../components/sectionsHome/aboutUs.vue'
import informsHome from '../components/sectionsHome/informs.vue'

export default {
  components: { bannerHome, aboutUsHome, informsHome },
  data() {
    return {
      ImgQuemSomos: [
        {
          link: '/',
          src: '../imagens/climo.jpg',
        },
        {
          link: '/',
          src: '../imagens/historico.jpg',
        },
        {
          link: '/',
          src: '../imagens/carbono.JPG',
        },
      ],
    }
  },
}
</script>

<style scoped>
.home {
  padding: 0px;
}
</style>
