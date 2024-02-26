<template>
  <div class="patients-container">
    <h1>Patients</h1>
    <div class="grid-container">
      <PatientCard v-for="(patient, index) in patientData" :key="patient.id" :name="patient.name"
        :condition="patient.condition" :gender="patient.gender" :age="patient.age" :photoUrl="patient.photoUrl"
        :isCritical="index < 2" @critical-clicked="handleCriticalClicked" />
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
      patientData: [{
        'id': 1,
        'name': 'John Doe',
        'condition': 'Diabetes Type II',
        'gender': 'Male',
        'age': 45,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=johndoe'
      },
      {
        'id': 2,
        'name': 'Jane Smith',
        'condition': 'Hypertension',
        'gender': 'Female',
        'age': 52,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=janesmith'
      },
      {
        'id': 3,
        'name': 'Emily Johnson',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 28,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=emilyjohnson'
      },
      {
        'id': 4,
        'name': 'Michael Brown',
        'condition': 'Heart Disease',
        'gender': 'Male',
        'age': 60,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=michaelbrown'
      },
      {
        'id': 5,
        'name': 'Sarah Davis',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Female',
        'age': 47,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=sarahdavis'
      },
      {
        'id': 6,
        'name': 'William Wilson',
        'condition': 'Arthritis',
        'gender': 'Male',
        'age': 50,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=wilsonwilliam'
      },
      {
        'id': 7,
        'name': 'Stephanie Diaz',
        'condition': 'Diabetes Type II',
        'gender': 'Male',
        'age': 45,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=stephaniediaz'
      },
      {
        'id': 8,
        'name': 'Diane Smith',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Female',
        'age': 47,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=dianesmith'
      },
      {
        'id': 9,
        'name': 'Cynthia West',
        'condition': 'Arthritis',
        'gender': 'Female',
        'age': 56,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=cynthiawest'
      },
      {
        'id': 10,
        'name': 'Jonathan Patterson',
        'condition': 'Heart Disease',
        'gender': 'Female',
        'age': 50,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=jonathanpatterson'
      },
      {
        'id': 11,
        'name': 'Ryan Jones',
        'condition': 'Arthritis',
        'gender': 'Female',
        'age': 48,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=ryanjones'
      },
      {
        'id': 12,
        'name': 'Tony Black',
        'condition': 'Arthritis',
        'gender': 'Male',
        'age': 53,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=tonyblack'
      },
      {
        'id': 13,
        'name': 'Virginia Henderson',
        'condition': 'Heart Disease',
        'gender': 'Male',
        'age': 65,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=virginiahenderson'
      },
      {
        'id': 14,
        'name': 'Laura Watkins',
        'condition': 'Heart Disease',
        'gender': 'Male',
        'age': 60,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=laurawatkins'
      },
      {
        'id': 15,
        'name': 'Mary Ramsey',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Male',
        'age': 42,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=maryramsey'
      },
      {
        'id': 16,
        'name': 'Michael Henderson MD',
        'condition': 'Diabetes Type II',
        'gender': 'Female',
        'age': 46,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=michaelhendersonmd'
      },
      {
        'id': 17,
        'name': 'Amanda Calderon',
        'condition': 'Hypertension',
        'gender': 'Female',
        'age': 53,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=amandacalderon'
      },
      {
        'id': 18,
        'name': 'Nichole Hardin',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Female',
        'age': 40,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=nicholehardin'
      },
      {
        'id': 19,
        'name': 'Jessica Thompson',
        'condition': 'Diabetes Type II',
        'gender': 'Male',
        'age': 57,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=jessicathompson'
      },
      {
        'id': 20,
        'name': 'Brian Patel',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 56,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=brianpatel'
      },
      {
        'id': 21,
        'name': 'Angela Jennings',
        'condition': 'Hypertension',
        'gender': 'Female',
        'age': 36,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=angelajennings'
      },
      {
        'id': 22,
        'name': 'Samantha Gallagher',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 51,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=samanthagallagher'
      },
      {
        'id': 23,
        'name': 'Jeffrey Powell',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 47,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=jeffreypowell'
      },
      {
        'id': 24,
        'name': 'Julie Bridges',
        'condition': 'Hypertension',
        'gender': 'Female',
        'age': 51,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=juliebridges'
      },
      {
        'id': 25,
        'name': 'Janice Nelson',
        'condition': 'Diabetes Type II',
        'gender': 'Female',
        'age': 37,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=janicenelson'
      },
      {
        'id': 26,
        'name': 'Kayla Salinas',
        'condition': 'Heart Disease',
        'gender': 'Female',
        'age': 41,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=kaylasalinas'
      },
      {
        'id': 27,
        'name': 'Pamela Cline',
        'condition': 'Hypertension',
        'gender': 'Male',
        'age': 56,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=pamelacline'
      },
      {
        'id': 28,
        'name': 'Alexis Hardy',
        'condition': 'Asthma',
        'gender': 'Male',
        'age': 57,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=alexishardy'
      },
      {
        'id': 29,
        'name': 'Andrea Davis',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Male',
        'age': 64,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=andreadavis'
      },
      {
        'id': 30,
        'name': 'David Harvey',
        'condition': 'Asthma',
        'gender': 'Male',
        'age': 52,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=davidharvey'
      },
      {
        'id': 31,
        'name': 'Cheyenne Clark',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 47,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=cheyenneclark'
      },
      {
        'id': 32,
        'name': 'Thomas Lane',
        'condition': 'Diabetes Type II',
        'gender': 'Female',
        'age': 54,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=thomaslane'
      },
      {
        'id': 33,
        'name': 'Laura Welch',
        'condition': 'Diabetes Type II',
        'gender': 'Male',
        'age': 58,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=laurawelch'
      },
      {
        'id': 34,
        'name': 'Eric Sampson',
        'condition': 'Chronic Kidney Disease',
        'gender': 'Female',
        'age': 40,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=ericsampson'
      },
      {
        'id': 35,
        'name': 'Yvonne Martin',
        'condition': 'Asthma',
        'gender': 'Female',
        'age': 49,
        'photoUrl': 'https://avatar.iran.liara.run/public/girl?username=yvonnemartin'
      },
      {
        'id': 36,
        'name': 'Mr. John Thompson',
        'condition': 'Hypertension',
        'gender': 'Male',
        'age': 51,
        'photoUrl': 'https://avatar.iran.liara.run/public/boy?username=mr.johnthompson'
      }]
    };
  },
  methods: {
    handleCriticalClicked(patientInfo) {
      if (this.$refs.ecgChartRef) {
        this.$refs.ecgChartRef.setFlatline();
      }
    }
  }
};
</script>

<style>.patients-container {
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
}</style>
