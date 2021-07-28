<template>
  <v-row justify="center" align="center" class="sectionQuemSomos">
    <v-col cols="10" lg="4" xl="4">
      <v-row justify="center" align="center">
        <v-carousel
          class="CarrouselQuemSomos"
          cycle
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item, i) in imagensAboutUs"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-col>
    <v-col cols="10" lg="4" xl="4" class="SectionQuemSomosText">
      <h5 class="titleQuemSomos">Climoscópio</h5>
      <h4 class="subTitleQuemSomos">Sobre o Projeto</h4>
      <p class="textQuemSomos">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    imagensAboutUs: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.CarrouselQuemSomos {
  width: 520px;
}

.sectionQuemSomos {
  padding-top: 70px;
  padding-bottom: 70px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 0px;
}

.SectionQuemSomosText {
  border-right: solid 1px #c0c0c0;
  border-bottom: solid 1px #c0c0c0;
  box-shadow: 5px 5px 5px 0px #c0c0c0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
}

.titleQuemSomos {
  text-align: center;
  font-size: 16px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3c424f;
}

.subTitleQuemSomos {
  text-align: center;
  font-size: 36px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3ab63e;
}

.textQuemSomos {
  text-align: center;
  font-size: 14px;
  padding-bottom: 20px;
  color: #3c424f;
}

@media (max-width: 767px) {
  .SectionQuemSomosText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }

  .CarrouselQuemSomos {
    width: 320px;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .SectionQuemSomosText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }

  .CarrouselQuemSomos {
    width: 720px;
  }
}
</style>
