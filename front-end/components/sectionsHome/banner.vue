<template>
  <v-container fluid class="SectionBanner" :style="style">
    <v-row align="center" justify="center" class="imgBanner">
      <h2 class="titleBanner">{{ title }}</h2>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: () => [],
    },

    style: {
      type: String,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.SectionBanner {
  padding: 0px;
  background-image: url('/imagens/quemSomos.png');
  background-size: cover;
  height: 500px;
  width: 100%;
}

.imgBanner {
  background-color: rgba(0, 0, 0, 0.6);
  height: 500px;
  margin: 0px;
}

.titleBanner {
  color: white;
  font-size: 50px;
  border-bottom-color: #3ab63e;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

@media (min-width: 768px) and (max-width: 1280px) {
  .titleBanner {
    font-size: 30px;
  }

  .imgBanner {
    height: 300px;
  }

  .SectionBanner {
    height: 300px;
  }
}

@media (max-width: 767px) {
  .titleBanner {
    font-size: 25px;
  }

  .imgBanner {
    height: 200px;
  }

  .SectionBanner {
    height: 200px;
  }
}
</style>
