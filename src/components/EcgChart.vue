<template>
  <div class="chart-container bg-gradient-to-b from-black via-gray-500 via-50% to-black rounded-lg rounded-b-none border-b-2 border-white">
    <canvas ref="ecgCanvas"></canvas>
  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js';

export default {
  setup() {
    const ecgCanvas = ref(null);

    const generateECGData = () => {
      let data = [];
      let bpmValues = [];
      // Use a moderate spike interval for clearer animation
      const spikeInterval = 60; // Adjusted for more frequent spikes

      const bpm = Math.floor(Math.random() * 40) + 60;

      for (let i = 0; i < 300; i++) {
        let value = 0;
        if (i % spikeInterval === 0) {
          const bpm = Math.floor(Math.random() * 40) + 60;
          // Adjust the spike height formula for visible but reasonable spikes
          const height = (bpm - 60) / 40 * 25 + 10; // Fine-tuned for visibility
          value += height;
        } else if (i % spikeInterval === 1) value -= 15;
        else if (i % spikeInterval === 2) value += 10;
        data.push(value);
      }
      bpmValues.push(bpm);
      return { data, bpmValues };
    };

    const animate = (ecgChart, bpmValues) => {
      const data = ecgChart.data.datasets[0].data;
      data.push(data.shift());

      const lastIndex = data.length - 1;
      ecgChart.data.datasets[1].data = [{ x: lastIndex, y: data[lastIndex] }];

      const currentBPM = bpmValues.shift();
      bpmValues.push(currentBPM);

      ecgChart.options.plugins.title.text = `BPM: ${currentBPM}`;
      ecgChart.update('none');

      requestAnimationFrame(() => animate(ecgChart, bpmValues));
    };

    onMounted(() => {
      const { data, bpmValues } = generateECGData();
      const ctx = ecgCanvas.value.getContext('2d');
      const ecgChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 300 }, (_, i) => i.toString()),
          datasets: [
            {
              label: 'ECG Simulation',
              data,
              borderColor: 'rgb(0, 255, 0)',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.1,
            },
            {
              label: 'Dot',
              data: [{ x: 299, y: data[299] }],
              borderColor: 'rgb(255, 0, 0)',
              backgroundColor: 'rgb(255, 0, 0)',
              pointRadius: 5,
              pointHoverRadius: 5,
              showLine: false,
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
            title: {
              display: true,
              text: `BPM: ${bpmValues[0]}`, // Initial BPM value
              color: 'green', // Set text color to green
              font: {
                size: 24, // Increase font size for visibility
              },
              position: 'top',
              align: 'end',
            }
          },
          maintainAspectRatio: false,
          responsive: true,
        }
        
      });

      
// Function to update the chart for animation
const animate = () => {
        const data = ecgChart.data.datasets[0].data;
        const dotData = ecgChart.data.datasets[1].data;

        // Shift the ECG line
        data.push(data.shift());

        // Move the dot along with the last spike
        const lastPointY = data[data.length - 1];
        dotData[0] = {x: data.length - 1, y: lastPointY}; // Update the dot's position to the last point

        ecgChart.update('none'); // Update without animation
        requestAnimationFrame(animate); // Continue the loop
      };

  // Start the animation
  requestAnimationFrame(animate);

  // Update BPM every second
  setInterval(() => {
    const newBPM = Math.floor(Math.random() * 40) + 60; // Generate new BPM
    ecgChart.options.plugins.title.text = `BPM: ${newBPM}`; // Update BPM text
    ecgChart.update(); // Reflect changes in the chart
  }, 1000);
});



    return { ecgCanvas };
  },
};
</script>
  
  
<style scoped>
.chart-container {
  width: 100%;
  height: 200px;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>