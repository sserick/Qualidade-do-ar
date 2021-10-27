<template>
  <v-container fluid class="aboutProject">
    <v-row justify="center" align="center" class="sectionaboutProject">
      <v-col cols="8" lg="8" xl="8" class="SectionaboutProjectText">
        <v-row justify="center" align="center">
          <h4 class="subTitleaboutProject">Equipe</h4>
        </v-row>
      </v-col>
      <v-col cols="8" lg="8" xl="8" class="SectionaboutProjectText">
        <v-row justify="center" align="center">
          <v-col cols="4" class="cardImg">
            <v-card class="mx-auto" max-width="344">
              <v-img src="../imagens/erick.jpeg" height="200px"></v-img>

              <v-card-title>
                Erick da Silva Santos
              </v-card-title>

              <v-card-subtitle>
                Graduando de Ciência da Computação na Universidade Federal do
                Paraná
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="black lighten-2" text>
                  Saiba Mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="showOne = !showOne">
                  <v-icon>{{
                    showOne ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showOne">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="344">
              <v-img src="../imagens/andre.jpeg" height="200px"></v-img>

              <v-card-title>
                André Bellin Mariano
              </v-card-title>

              <v-card-subtitle>
                Doutor em Ciências – Bioquímica, Departamento de Bioquímica e
                Biologia Molecular
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="black lighten-2" text>
                  Saiba Mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="showTwo = !showTwo">
                  <v-icon>{{
                    showTwo ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showTwo">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
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
    return {
      showOne: false,
      showTwo: false,
      showTree: false,
    }
  },
}
</script>

<style scoped>
.aboutProject {
  background-color: rgba(58, 182, 62, 0.2);
  padding: 0px;
}

.sectionaboutProject {
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 0px;
}

.subTitleaboutProject {
  text-align: center;
  font-size: 36px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3ab63e;
}

.titleaboutProject {
  text-align: center;
  font-size: 16px;
  padding-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  color: #3c424f;
}

@media (max-width: 767px) {
  .SectionaboutProjectText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .SectionaboutProjectText {
    border-left: solid 1px #c0c0c0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 00px 0px #c0c0c0;
  }
}
</style>
