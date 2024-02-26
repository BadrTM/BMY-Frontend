<template>
  <div id="PatientMain">
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
        <!-- Chat messages display -->
        <div class="p-4">
          <div class="overflow-auto h-64">
            <div v-for="(message, index) in messages" :key="index" class="text-left p-2">
  <div :class="['inline-block rounded px-4 py-2 shadow', message.isCurrentUser ? 'bg-blue-300' : 'bg-gray-200']">{{ message.text }}</div>
</div>
          </div>
          <!-- Message input and send button -->
          <div class="flex mt-4">
            <input v-model="newMessage" @keyup.enter="sendMessage" type="text" class="w-full p-2 border rounded focus:outline-none focus:shadow-outline" placeholder="Type a message...">
            <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import io from 'socket.io-client';
import EcgMonitor from '../components/EcgChart.vue';
import RespMonitor from '../components/RespChart.vue';

export default {
  name: 'PatientMain',
  components: {
    EcgMonitor,
    RespMonitor
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
  mounted() {
    this.connectToSocket();
  },
  methods: {
    connectToSocket() {
      this.socket = io('http://192.168.0.14:8080');

      this.socket.on('connect', () => {
        console.log('Connected to the server');
      });

      this.socket.on('chat message', (msg) => {
  const isCurrentUser = msg.senderId === this.socket.id;
  const messageWithSenderInfo = { ...msg, isCurrentUser: isCurrentUser };
  this.messages.push(messageWithSenderInfo);

      });

 
    },
    sendMessage() {
  if (this.newMessage.trim() !== '') {
    // Emit the message to the server with the sender's socket ID
    this.socket.emit('chat message', { text: this.newMessage, senderId: this.socket.id });
    this.newMessage = ''; // Clear the input box after sending
  }
},
  },
  
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
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
