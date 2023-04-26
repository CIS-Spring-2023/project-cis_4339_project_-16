<!-- eslint-disable prettier/prettier -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
//define props (label and chartData)
export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  async mounted() { //uses the data to load the chart's values
    const backgroundColor = Object.keys(this.chartData).map(() => this.getColor())//getcolor generates an rgb color for the chart
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, '1)')
    )//using async to render the chart asynchronously
    await new Chart(this.$refs.zipChart, {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: this.chartData // Update this line
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    })
  },
  methods: {
    getColor(index) { //getcolor to load colors into the chart
      let channel = () => Math.random() * 255
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`
    }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="zipChart"></canvas>
  </div>
</template>