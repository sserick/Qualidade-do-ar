import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  // Overwriting base render method with actual data.
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
