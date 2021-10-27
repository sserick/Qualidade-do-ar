<template>
  <v-row justify="center" align="center" class="sectionQuemSomos">
    <v-col cols="8" lg="8" xl="8" class="SectionQuemSomosText">
      <p class="textQuemSomos">
        Os sistemas de monitoramento climático e ambiental são fundamentais para
        a produção da biomassa, tanto no campo quanto para a indústria.
        Atualmente, os altos custos desses equipamentos inviabiliza uma coleta
        de dados de qualidade e, neste sentido, temos grandes áreas carentes
        deste tipo de análise. Outra característica consiste na falta de
        cobertura de sinal digital fazendo com que essas informações coletadas
        não estejam integradas a plataformas acessíveis. Desta forma, regiões
        desconectadas deixam de ter disponíveis dados importantes a respeito de
        microclimas e eventos climáticos emergenciais. Desta forma, o objetivo
        deste trabalho consiste no desenvolvimento de sistema de sensores para
        coleta remota e integrada de dados ambientais e meteorológicos para
        monitorar as condições de interesse para a cadeia da biomassa. O
        equipamento denominado Climoscópio, em desenvolvimento na UFPR pela
        Iniciativa Startup Experience, consiste em um dispositivo IoT (Internet
        of Things) junto a uma comunicação LoRa, para os locais sem acesso a
        internet, com foco em monitoramento ambiental. O dispositivo é acoplado
        a um sistema capaz de compartilhar dados e informações provenientes de
        diversos pontos. A comunicação entre os dispositivos ocorre em função do
        uso de sistema de radiofrequência LoRa com alcances de até 15 km em área
        rural e 5 km em áreas urbanas. O uso de sensores permite a coleta de
        dados de precipitação, velocidade e direção do vento, temperatura,
        umidade, umidade do solo pressão atmosférica, monóxido de carbono,
        ozônio, material particulado e COV’s (Compostos Orgânicos Voláteis), a
        escolha destes sensores deve levar em consideração o custo,
        disponibilidade e a necessidade de informações que permitem avaliar se
        as emissões de poluentes atmosféricos estão de acordo com o limite
        máximo estabelecido pelo SEMA (RESOLUÇÃO Nº 016/ 2014 - SEMA). Além
        disso, dados a respeito da concentração de monóxido de carbono e
        particulado são parâmetros de operação de fontes fixas de poluição como:
        caldeiras e fornos, que utilizam como fonte de energia a combustão de
        bagaço de cana-de-açúcar ou derivados da madeira. O uso destes sensores
        também permitem o uso como indicadores de incêndio em áreas rurais. Os
        dados históricos de material particulado (MP) de determinada região
        permitem avaliação do impacto sobre a saúde do trabalhador já que o MP
        está relacionado à movimentação do solo ou efeito de queimadas. O
        dispositivo tem a concepção de um design construtivo inspirado em
        árvores de forma a se adaptar ao ambiente harmonicamente. Onde os
        sensores de velocidade e direção do vento, temperatura, umidade e
        pluviosidade se localizarão em cima do dispositivo nos “ramos” enquanto
        os sensores de gases e MP ficam no “tronco”. O equipamento visa ter
        quatro versões: uma com intuito educativo com menos sensores e maior
        custo, uma versão simples com menor complexidade de software e
        consequentemente menor precisão, uma versão Profissional com todos os
        recursos e uma versão Profissional+ com todos os recursos e uma câmera
        permitindo fazer a gravação do ambiente onde está localizado o produto
        podendo efetuar um timelapse. O equipamento visa permitir ao produtor,
        com baixo custo e alta acessibilidade, aumentar a confiabilidade no uso
        de informações ambientais e fornecer importantes informações para
        estudos científicos podendo assim otimizar a produção e aumentar a
        qualidade de vida dos trabalhadores.
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
  font-family: 'Open Sans', sans-serif;
  margin-left: 0px;
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
  padding-bottom: 20px;
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
