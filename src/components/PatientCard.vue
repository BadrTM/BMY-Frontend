<template>
  <div class="patient-card" :class="{ 'critical-condition': isCritical }" @click="navigate">
    <div class="profile-picture" :style="{ backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover' }"></div>
    <div class="patient-info">
      <div class="info-row">Patient Name: {{ name }}</div>
      <div class="info-row">Condition: {{ condition }}</div>
    </div>
    <div class="patient-data">
      <div class="gender">{{ gender }}</div>
      <div class="age">Age: {{ age }}</div>
    </div>
    <div v-if="isCritical" class="critical-overlay">
      <svg class="warning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg> CRITICAL
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
      default: "https://avatar.iran.liara.run/public"
    },
    isCritical: {
      type: Boolean,
      required: false,
      default: false
    }
  }, methods: { 
    navigate() {
      const queryParams = new URLSearchParams({
        name: this.name,
        condition: this.condition,
        gender: this.gender,
        age: this.age,
        photoUrl: this.photoUrl,
        isCritical: this.isCritical
      }).toString();

      if (this.isCritical) {
        // Emit an event for critical condition before navigating
        this.$emit('critical-clicked', {
          name: this.name,
          condition: this.condition,
          gender: this.gender,
          age: this.age,
          photoUrl: this.photoUrl,
          isCritical: this.isCritical
        });
      }

      // Navigate for both critical and non-critical cards
      window.location.href = `/#/nurse-view?${queryParams}`; // Adjust the URL as needed
    }
  }
}
</script>

<style scoped>
@keyframes flash {
  0%, 100% { background-color: transparent; }
  50% { background-color: red; }
}

.patient-card {
  width: 100%;
  height: 250px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  background-color: rgb(236, 236, 236);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.patient-card:hover {
  transform: translateY(-15px); /* Move the card up slightly on hover */
  box-shadow: 0 6px 12px rgba(0,0,0,0.2); /* Slightly deeper shadow on hover */
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  left: calc(50% - 50px);
}

.patient-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
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

.critical-condition {
  border: 2px solid red;
  animation: flash 1s infinite;
}

.critical-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  font-size: 24px;
  animation: flash 1s infinite;
  border-radius: 5%;
}
</style>
