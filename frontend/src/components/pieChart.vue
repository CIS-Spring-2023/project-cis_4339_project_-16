<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return {
      zipLabels: ["zipcode", "count"],
      zipChartData: [
        { zipcode: 77040, count: 10 },
        { zipcode: 77433, count: 15 },
        { zipcode: 77003, count: 20 },
        { zipcode: 77204, count: 3 },
      ],
    };
    // props: {
    // zipLabel: {
    // type: Array,
    // },
    // zipChartData: {
    //type: Array,
  },
  async mounted() {
    console.log(this.zipChartData);
    const backgroundColor = this.zipChartData.map(() => this.getColor());
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, "1)")
    );
    await new Chart(this.$refs.pieChart, {
      type: "pie",
      data: {
        labels: this.zipLabels,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [
              { zipcode: 77040, count: 10 },
              { zipcode: 77433, count: 15 },
              { zipcode: 77003, count: 20 },
              { zipcode: 77204, count: 3 },
            ],
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
        responsive: true,
        maintainAspectRatio: true,
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
