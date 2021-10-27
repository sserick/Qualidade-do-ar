<template>
  <v-container fluid class="sectionMonitoring">
    <v-row align="center" justify="center" class="rowTitleMonitoring">
      <h3 class="titleMonitoring">{{ title }}</h3>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="6">
            <v-card class="chart-card">
              <v-container class="chart-container">
                <bar-chart :data="barChartDataTemperature" />
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="chart-card">
              <v-container class="chart-container">
                <bar-chart
                  :data="barChartDataCarbonDioxide"
                  :options="barChartOptions"
                />
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="6">
            <v-card class="chart-card">
              <v-container class="chart-container">
                <bar-chart
                  :data="barChartDataMoisture"
                  :options="barChartOptions"
                />
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="chart-card">
              <v-container class="chart-container">
                <bar-chart
                  :data="barChartDataPressure"
                  :options="barChartOptions"
                />
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import barChart from '../Charts/BarChart'

export default {
  components: {
    barChart,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: () => {
        return {}
      },
    },
    barChartDataTemperature: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
    barChartDataCarbonDioxide: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
    barChartDataMoisture: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
    barChartDataPressure: {
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
.sectionMonitoring {
  padding: 0;
}

.rowTitleMonitoring {
  background-color: #3ab63e;
}
.titleMonitoring {
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  font-size: 25px;
}
.imgGreen {
  height: 150px;
  width: 150px;
  background-image: url('/imagens/frascoGreen.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.chart-container {
  position: relative;
  margin: auto;
  height: 68vh;
  width: 68vh;
}

.chart-card {
  height: 70vh;
  width: 75vh;
}
</style>
