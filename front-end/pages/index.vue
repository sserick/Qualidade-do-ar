<template>
  <v-container fluid class="home">
    <bannerHome
      title="Climoscópio"
      style="background-image: url('/imagens/climo.jpg');"
    />
    <aboutUsHome :imagens-about-us="ImgQuemSomos" />
    <informsHome :content-project="informacoesHome" />
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
      informacoesHome: [
        {
          title: 'Sensores',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          title: 'Aquisição de Dados',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          title: 'Transmissão de Dados',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
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
  background-color: rgba(245, 228, 50, 0.2);
  padding: 0px;
}
</style>
