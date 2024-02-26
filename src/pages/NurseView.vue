<template>
	<div>
		<h1 class="font-bold text-6xl">Nurse Dashboard</h1>
		<NurseChart ref="ecgChartRef"/>
    <RespChart class="pt-8"/>
		<ProfileData class="pt-8" />
		<PatientInteract class="pt-2"/>
    <table class="table mt-3 text-xl">
        <thead>
          <tr>
            <th ><p class="text-xl font-bold">Date</p></th>
            <th ><p class="text-xl font-bold">Measurement</p></th>
            <th ><p class="text-xl font-bold">Value</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in sortedMedicalRecords" :key="index">
            <td>{{ record.date }}</td>
            <td>{{ record.measurement }}</td>
            <td>{{ record.value }}</td>
          </tr>
        </tbody>
      </table>
	</div>
</template>

<script>
import NurseChart from '../components/NurseChart.vue';
import ProfileData from '../components/ProfileData.vue';
import PatientInteract from '../components/PatientInteract.vue';
import RespChart from '../components/RespChart.vue';

import { ref } from 'vue';

export default {
  name: 'NurseView',
  components: {
    NurseChart,
    ProfileData,
    PatientInteract,
    RespChart
  },
  data() {
    return {
      medicalRecords: [
        { date: '2024-02-25', measurement: 'Height', value: '190 cm' },
        { date: '2024-02-24', measurement: 'Blood Pressure', value: '120/80 mmHg' },
        { date: '2024-02-24', measurement: 'Weight', value: '80 KG' },
      ],
      messages: [],
      newMessage: '',
      socket: null,
    };
  },
  computed: {
    sortedMedicalRecords() {
      return this.medicalRecords.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  setup() {
    const ecgChartRef = ref(null);

    const setFlatline = () => {
      if (ecgChartRef.value) {
        ecgChartRef.value.setFlatline();
      }
    };

    provide('setFlatline', setFlatline);

    return {
      ecgChartRef
    };
  }
}
</script>