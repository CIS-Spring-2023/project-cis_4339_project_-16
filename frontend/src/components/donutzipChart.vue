<!-- eslint-disable prettier/prettier -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  props: {
    ziplabels: {
      type: Array
    },
    zipchartData: {
      type: Array
    }
  },
  mounted() {
    this.createDonutChart();
  },
  methods: {
    createDonutChart() {
      // const backgroundColor = this.zipchartData.map(() => this.getColor())
      // const borderColor = backgroundColor.map((e) =>
      //  e.replace(/[\d\.]+\)$/g, '1)')
      // )

      new Chart(this.$refs.donutChart, {
        type: 'doughnut',
        data: {
          labels: this.ziplabels, // Updated this line
          datasets: [
            {
              borderWidth: 1,
              backgroundColor: ["maroon", "violet", "red", "grey", "yellow"],
              borderColor: "black",
              data: this.zipchartData // Updated this line
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
    getColor() {
      let channel = () => Math.random() * 255
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`
    }
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="donutChart"></canvas>
  </div>
</template>
