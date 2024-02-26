<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="rounded-lg border-4 border-black bg-slate-200 h-80">
            <div class="grid grid-rows-3 h-full w-full px-2 pt-2 gap-2 pb-2">
                <div class="px-2 w-full border-4 border-red-500 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/ambulance--v1.png" />
                        <div class="text-lg font-bold text-black">
                            Call an Ambulance to the Patient's Home Address
                        </div>
                    </div>
                </div>
                <div class="px-2 w-full border-4 border-green-400 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/medical-doctor.png" />
                        <div class="text-lg font-bold text-black">
                            Schedule a Doctor's Visit to the Patient's Home
                        </div>
                    </div>
                </div>
                <div class="px-2 w-full border-4 border-green-400 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/remind.png" />
                        <div class="text-lg font-bold text-black">
                            Send Medication Reminder to Patient
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Chat functionality integrated here -->
        <div class="rounded-lg border-4 border-black bg-slate-200 overflow-hidden">
            <div class="p-4 flex flex-col justify-between h-full">
                <div class="overflow-auto h-64">
                    <div v-for="(message, index) in messages" :key="index" class="text-left p-2">
                        <div class="inline-block bg-gray-200 rounded px-4 py-2 shadow">{{ message }}</div>
                    </div>
                </div>
                <div class="flex mt-4">
                    <input v-model="newMessage" @keyup.enter="sendMessage" type="text"
                        class="w-full p-2 border rounded focus:outline-none focus:shadow-outline"
                        placeholder="Type a message...">
                    <button @click="sendMessage"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import io from 'socket.io-client';
export default {
    name: 'ProfileData',
    data() {
        return {
            user: {
                id: 1,
                name: "John Doe",
                condition: "Diabetes Type II",
                age: 35,
                gender: "Male"
            },
            alerts: [
                {
                    id: 1,
                    content: "Alert 1",
                    clicked: false
                },
                {
                    id: 2,
                    content: "Alert 2",
                    clicked: true
                },
                {
                    id: 3,
                    content: "Alert 3",
                    clicked: false
                }
            ],
            // Chat related data
      messages: [],
      newMessage: '',
      socket: null,
        };
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
        this.messages.push(msg);
      });
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.socket.emit('chat message', this.newMessage);
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

                