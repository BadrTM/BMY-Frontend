<template>
  <div id="PatienMain">
    <div class="text-center mt-15" style="font-size: 24px; color: white; font-weight: bold;">
      John Smith's Status
    </div>

    <table class="table mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Measurement</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <!-- Add rows dynamically here based on your medical records data -->
        <tr v-for="(record, index) in sortedMedicalRecords" :key="index">
          <td>{{ record.date }}</td>
          <td>{{ record.measurement }}</td>
          <td>{{ record.value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-start-1">
        <EcgMonitor />
        <RespMonitor />
      </div>
      <div class="rounded-lg border-4 border-black bg-slate-200">
        <div class="flex flex-row-reverse">
          <div>
            <Nav />
            <Chat />
          </div>
          <!-- Text Box -->
          <div class="flex items-end content-end justify-end">
            asdads
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import EcgMonitor from '../components/EcgChart.vue';
import RespMonitor from '../components/RespChart.vue';
import Chat from '../components/Chat.vue';
import Nav from '../components/Nav.vue';

export default {
  name: 'PatienMain',
  components: {
    EcgMonitor,
    RespMonitor,
    Chat,
    Nav
  },
  data() {
    return {
      medicalRecords: [
        // Sample medical records data
        { date: '2024-02-25', measurement: 'Height', value: '190 cm' },
        { date: '2024-02-24', measurement: 'Blood Pressure', value: '120/80 mmHg' },
        { date: '2024-02-24', measurement: 'Weight', value: '80 KG' },
        // Add more records as needed
      ]
    };
  },
  computed: {
    sortedMedicalRecords() {
      return this.medicalRecords.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
