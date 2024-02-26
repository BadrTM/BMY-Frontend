<template>
    <div class="chart-container">
      <canvas ref="respCanvas"></canvas>
      <div class="resp-text" ref="respText">RESP: {{ respValue }}</div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { Chart } from 'chart.js';
  
  export default {
    setup() {
      const respCanvas = ref(null);
      const respValue = ref(0);
      let animationFrameId;
      let flatLine = Array.from({ length: 300 }, () => 0); // Initialize flat line data
      let respChart; // Declare respChart outside onMounted
  
      const generateCurve = (respValue) => {
        const data = [];
        const amplitude = respValue / 2; // Amplitude based on RESP value
        const frequency = Math.random() * 0.1 + 0.05; // Random frequency
        for (let i = 0; i < 300; i++) {
          const value = amplitude * Math.sin(frequency * i); // Generate curve-like shape
          data.push(value);
        }
        return data;
      };
  
      const generateFlatLine = () => {
        return Array.from({ length: 300 }, () => 0); // Generate a flat line
      };
  
      const updateChart = () => {
        respValue.value = Math.floor(Math.random() * 40) + 10; // Generate new RESP value (range: 10-50)
        const curve = generateCurve(respValue.value); // Generate curve based on RESP value
        let offset = 0;
  
        animationFrameId = requestAnimationFrame(function draw() {
          offset = (offset + 1) % 300; // Update offset for animation
          const newData = curve.slice(offset).concat(curve.slice(0, offset));
          const newFlatLine = generateFlatLine(); // Generate new flat line
          for (let i = 0; i < 300; i++) {
            newData[i] += newFlatLine[i]; // Overlay curve on top of flat line
          }
          respChart.data.datasets[0].data = newData; // Update chart data
          
          respChart.update(); // Update the chart
          animationFrameId = requestAnimationFrame(draw);
        });
      };
  
      onMounted(() => {
        const ctx = respCanvas.value.getContext('2d');
        respChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 300 }, (_, i) => i.toString()),
            datasets: [
              {
                label: 'Respiration Rate',
                data: flatLine, // Initialize with a flat line
                borderColor: 'rgb(255, 255, 0)', // Yellow color
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.1,
              }
            ],
          },
          options: {
            animation: false,
            scales: {
              x: { display: false },
              y: { display: false },
            },
            plugins: {
              legend: { display: false },
              title: { display: false },
            },
            maintainAspectRatio: false,
            responsive: true,
          }
        });
  
        // Start updating chart
        updateChart();
      });
  
      onUnmounted(() => {
        cancelAnimationFrame(animationFrameId);
      });
  
      return { respCanvas, respValue };
    },
  };
  </script>
  
  
  <style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 200px;
  }
  
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  
  .resp-text {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  color: white; /* Updated color to white */
  font-weight: bold; /* Added font-weight bold */
  margin-top: 10px; /* Added margin-top to create space between chart and text */
}
  </style>
  