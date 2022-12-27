<template>
  <v-row justify="center" align="center" class="sectionQuemSomos">
    <v-col cols="8" lg="8" xl="8" class="SectionQuemSomosText">
      <h4 class="subTitleQuemSomos">Sobre o Projeto</h4>
      <p class="textQuemSomos">
        Dentro do laboratório de pesquisa e extensão chamado Núcleo de Pesquisa
        e Desenvolvimento de Energia Autossustentável (NPDEAS), localizado na
        Universidade Federal do Paraná (UFPR), foi desenvolvido no projeto
        Ciência Para Todos (CPT) dois protótipos para obter dados da qualidade
        do ar interno e externo, o Climoscópio e o BikeLab.
      </p>
      <p class="textQuemSomos">
        O climoscópio é um sistema de sensores que realiza através da
        comunicação sem fio, utilizando a tecnologia LoRa, a transmissão dos
        dados obtidos (temperatura, umidade relativa do ar e pressão
        atmosférica) para um dispositivo remoto que tem ligação com a rede e a
        nuvem da internet.
      </p>
      <p class="textQuemSomos">
        O Bike Lab é um projeto de pesquisa voltado para a ciclo mobilidade e
        para o monitoramento de condições climáticas através de um dispositivo
        embarcado que é acoplado a uma bicicleta. O objetivo é detectar ilhas de
        calor na cidade utilizando um sensor de umidade e temperatura.
      </p>
      <p class="textQuemSomos">
        Esses dados serão coletados por um Arduino Nano que os enviará por
        Bluetooth ao celular do usuário. O celular então os transmitirá para um
        servidor online adicionando uma marca temporal de quando foi tomada a
        medida. Para isso, foram utilizados vários sensores comandados por um
        Arduino que se encontram em um dispositivo embarcado acoplado a uma
        bicicleta. Esses dados podem ser coletados de diversas bicicletas e são
        enviados para um aplicativo, o qual os armazena em uma planilha online.
      </p>
    </v-col>
    <v-col cols="8" md="8" lg="8" xl="8" class="paddingBlog">
      <v-row justify="center" align="center">
        <v-btn
          class="mx-2 buttonBlog animationButtonBlog"
          outlined
          rounded
          large
          height="35"
          to="/aboutProject"
        >
          Saiba Mais
        </v-btn>
      </v-row>
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
  font-family: 'Open Sans', sans-serif;
  margin-left: 0px;
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
  text-align: justify;
  font-size: 16px;
  color: #3c424f;
}

.animationButtonBlog:hover {
  transform: translateX(0px) scale(1.2);
}

.buttonBlog {
  width: 150px;
  margin-top: 10px;
  color: white;
  background-color: #3ab63e;
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

  .paddingBlog {
    padding-left: 0px;
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

  .paddingBlog {
    padding-left: 0px;
  }
}
</style>
