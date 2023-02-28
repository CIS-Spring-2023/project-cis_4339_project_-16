<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  props: {
    pieLabels: {
      type: Array,
    },
    pieChartData: {
      type: Array,
    },
  },
  mounted() {
    new Chart(this.$refs.pieChart, {
      type: "pie",
      data: {
        labels: this.label,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: ["maroon", "violet", "red", "grey", "yellow"],
            borderColor: "black",
            data: this.pieChartData,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
</script>

<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="pieChart"></canvas>
  </div>
</template>
