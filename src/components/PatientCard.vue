<template>
  <div class="patient-card">
    <div class="profile-picture" :style="{ backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover' }"></div>
    <div class="patient-info">
      <div class="info-row">Patient Name: {{ name }}</div>
      <div class="info-row">Condition: {{ condition }}</div>
    </div>
    <div class="patient-data">
      <div class="gender">{{ gender }}</div>
      <div class="age">Age: {{ age }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientCard',
  props: {
    name: {
      type: String,
      required: true
    },
    condition: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: [String, Number],
      required: true
    },
	photoUrl: {
		type: String,
		required: true,
		default: "https://avatar.iran.liara/public"
	}
  },
  data() {
		return {

		}
	}
}
</script>

<style scoped>
.patient-card {
  width: 100%;
  height: 250px; /* Adjust based on your needs */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  background-color: rgb(236, 236, 236);
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc; /* Placeholder for profile picture */
  position: absolute;
  left: calc(50% - 50px); /* Center the circle */
}

.patient-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px; /* Adjust based on the size of the profile picture */
}

.info-row {
  margin: 5px 0;
}

.patient-data {
  display: flex;
  justify-content: space-between;
}

.gender, .age {
  font-weight: bold;
}
</style>
