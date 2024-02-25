<template>
  <div class="patients-container">
    <h1>Patients</h1>
    <div class="grid-container">
      <!-- Iterate over patientData to fill your grid -->
      <PatientCard
        v-for="patient in patientData"
        :key="patient.id"
        :name="patient.name"
        :condition="patient.condition"
        :gender="patient.gender"
        :age="patient.age"
        :photoUrl="patient.photoUrl"
      />
    </div>
  </div>
</template>

<script>
import PatientCard from '../components/PatientCard.vue';

export default {
  components: {
    PatientCard,
  },
  data() {
    return {
      // Placeholder patient data
      patientData: [
        { id: 1, name: "John Doe", condition: "Diabetes Type II", gender: "Male", age: 45, photoUrl: "https://avatar.iran.liara.run/public/boy?username=johndoe" },
        { id: 2, name: "Jane Smith", condition: "Hypertension", gender: "Female", age: 52, photoUrl: "https://avatar.iran.liara.run/public/girl?username=janesmith" },
        { id: 3, name: "Emily Johnson", condition: "Asthma", gender: "Female", age: 28, photoUrl: "https://avatar.iran.liara.run/public/girl?username=emilyjohnson" },
        { id: 4, name: "Michael Brown", condition: "Heart Disease", gender: "Male", age: 60, photoUrl: "https://avatar.iran.liara.run/public/boy?username=michaelbrown" },
        { id: 5, name: "Sarah Davis", condition: "Chronic Kidney Disease", gender: "Female", age: 47, photoUrl: "https://avatar.iran.liara.run/public/girl?username=sarahdavis" },
        { id: 6, name: "William Wilson", condition: "Arthritis", gender: "Male", age: 50, photoUrl: "https://avatar.iran.liara.run/public/boy?username=wilsonwilliam" },
      ]
    };
  }
};
</script>

<style>
.patients-container {
  padding: 20px;
}

.patients-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
