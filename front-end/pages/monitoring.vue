<template>
  <v-container fluid class="home">
    <bannerHome
      title="MONITORAMENTO"
      style-banner="background-image: url('/imagens/carbono.JPG');"
    />
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-toolbar color="#800000" dark
            >Climoscópio: Laboratório Central</v-toolbar
          >
          <v-card-text>
            <div class="text pa-6">Verifique o sensor de temperatura</div>
            <div class="text-h3 text-center">40°C</div>
            <div class="text pa-6">26/10/2021 - 18:00</div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="dialog = false" color="#006600">Solução</v-btn>
            <v-btn text @click="dialog = false" color="#800000">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div v-for="(item, i) in barChartData" :key="i">
      <monitoringGadgets
        :title="item.title"
        :barChartDataCarbonDioxide="item.barChartDataCarbonDioxide"
        :barChartDataTemperature="item.barChartDataTemperature"
        :barChartDataMoisture="item.barChartDataMoisture"
        :barChartDataPressure="item.barChartDataPressure"
      />
    </div>
  </v-container>
</template>

<script>
import bannerHome from '../components/sectionsHome/banner.vue'
import monitoringGadgets from '../components/sectionsMonitoring/monitoringGadget.vue'

export default {
  components: { bannerHome, monitoringGadgets },
  data() {
    return {
      dialog: true,
      barChartData: [
        {
          title: 'Climoscópio: Laboratório Central',
          barChartDataTemperature: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Temperatura',
                backgroundColor: '#6959CD',
                data: [
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  60,
                  50,
                  40,
                  30,
                  20,
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                ],
              },
            ],
          },
          barChartDataCarbonDioxide: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Dióxido de Carbono - CO2',
                backgroundColor: '#008B8B',
                data: [
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  60,
                  50,
                  40,
                  30,
                  20,
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                ],
              },
            ],
          },
          barChartDataMoisture: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Umidade',
                backgroundColor: '#3CB371',
                data: [
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  60,
                  50,
                  40,
                  30,
                  20,
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                ],
              },
            ],
          },
          barChartDataPressure: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Pressão',
                backgroundColor: '#CD853F',
                data: [
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  60,
                  50,
                  40,
                  30,
                  20,
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                ],
              },
            ],
          },
        },
        {
          title: 'Climoscópio: Laboratório de Algas',
          barChartDataTemperature: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Temperatura',
                backgroundColor: '#6959CD',
                data: [
                  5,
                  10,
                  15,
                  20,
                  25,
                  30,
                  35,
                  40,
                  35,
                  30,
                  25,
                  20,
                  15,
                  10,
                  5,
                  10,
                  15,
                  20,
                  25,
                ],
              },
            ],
          },
          barChartDataCarbonDioxide: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Dióxido de Carbono - CO2',
                backgroundColor: '#008B8B',
                data: [
                  5,
                  10,
                  15,
                  20,
                  25,
                  30,
                  35,
                  40,
                  35,
                  30,
                  25,
                  20,
                  15,
                  10,
                  5,
                  10,
                  15,
                  20,
                  25,
                ],
              },
            ],
          },
          barChartDataMoisture: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Umidade',
                backgroundColor: '#3CB371',
                data: [
                  5,
                  10,
                  15,
                  20,
                  25,
                  30,
                  35,
                  40,
                  35,
                  30,
                  25,
                  20,
                  15,
                  10,
                  5,
                  10,
                  15,
                  20,
                  25,
                ],
              },
            ],
          },
          barChartDataPressure: {
            labels: [
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
              '23:00',
              '24:00',
            ],
            datasets: [
              {
                label: 'Pressão',
                backgroundColor: '#CD853F',
                data: [
                  5,
                  10,
                  15,
                  20,
                  25,
                  30,
                  35,
                  40,
                  35,
                  30,
                  25,
                  20,
                  15,
                  10,
                  5,
                  10,
                  15,
                  20,
                  25,
                ],
              },
            ],
          },
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
