<script>
import { Chart, registerables } from "chart.js";
import {data} from "autoprefixer";
Chart.register(...registerables);

export default {
    props: {
      zipLabel: {
        type: Array,
      },
      zipChartData: {
        type: Array
      },
  },
  mounted() {
    console.log(this.zipChartData);
    const backgroundColor = this.zipChartData.map(() => this.getColor());
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, "1)")
    );
    new Chart(this.$refs.pieChart, {
      type: "pie",
      data: {
        labels: this.zipLabels,
        datasets: [
          {
            label: 'Does this work',
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: this.zipChartData,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },

      },
    });
  },
  methods: {
    getColor() {
      let channel = () => Math.random() * 255;
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`;
    },
  },
};
</script>

<template>
  <div class="shadow-lg rounded-lg">
    <canvas class="p-10" ref="pieChart"></canvas>
  </div>
</template>
