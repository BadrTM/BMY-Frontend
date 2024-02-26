<template>
	<div>
		<h1 class="font-bold text-6xl">Nurse Dashboard</h1>
		<NurseChart />
		<ProfileData class="pt-8" />
		<PatientInteract class="pt-2"/>
	</div>
</template>

<script>
import NurseChart from '../components/NurseChart.vue';
import ProfileData from '../components/ProfileData.vue';
import PatientInteract from '../components/PatientInteract.vue';

export default {
  name: 'NurseView',
  components: {
    NurseChart,
	ProfileData,
	PatientInteract
  }
}
</script>