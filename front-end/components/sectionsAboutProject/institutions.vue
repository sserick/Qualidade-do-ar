<template>
  <v-container fluid class="institutions">
    <v-row justify="center" align="center" class="sectioninstitutions">
      <v-col cols="8" lg="8" xl="8" class="SectioninstitutionsText">
        <v-row justify="center" align="center">
          <h4 class="subTitleinstitutions">Instituições</h4>
        </v-row>
      </v-col>
      <v-col cols="8" lg="8" xl="8" class="SectioninstitutionsText">
        <v-row justify="center" align="center">
          <v-col cols="4">
            <v-row justify="center" align="center">
              <img height="250" width="250" src="/imagens/cpt.jpg" />
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row justify="center" align="center">
              <img height="250" width="250" src="/imagens/NPDEAS.png" />
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row justify="center" align="center">
              <img height="250" width="250" src="/imagens/ufpr.jpeg" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.institutions {
  padding: 0px;
}

.sectioninstitutions {
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 0px;
}

.subTitleinstitutions {
  text-align: center;
  font-size: 36px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3ab63e;
}

.titleinstitutions {
  text-align: center;
  font-size: 16px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3c424f;
}

@media (max-width: 767px) {
  .SectioninstitutionsText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .SectioninstitutionsText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }
}
</style>
