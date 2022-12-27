<template>
  <v-container class="sectionProject">
    <v-row
      v-for="item in contentProject"
      :key="item"
      align="start"
      justify="center"
    >
      <v-col cols="10" lg="10">
        <v-row align="center" justify="start">
          <h3 class="titleProject">{{ item.title }}</h3>
          <p class="textProject">
            {{ item.text }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    contentProject: {
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.sectionProject {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0px;
}

.imgProject {
  border-radius: 10px;
}

.titleProject {
  font-size: 36px;
  font-family: 'Open Sans', sans-serif;
  color: #3ab63e;
  padding-bottom: 30px;
}

.textProject {
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  color: #3c424f;
}

@media (max-width: 767px) {
  .titleProject {
    font-size: 26px;
  }
}
</style>
