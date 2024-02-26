<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="profile-info rounded-lg border-4 border-black bg-slate-200">
            <div class="profile-picture pr-4 m-4">
                <!-- User profile picture -->
                <div class="border-4 border-black rounded-full">
                    <img class="profile-image" :src="user.photoUrl" :alt="user.name + ' Profile Picture'">
                </div>
            </div>
            <div class="profile-details pt-14 ">
                <!-- User name, condition, gender, age, etc. -->
                <h2 class="text-gray-950 text-3xl font-bold">{{ user.name }}</h2>
                <p class="text-gray-950 text-xl font-semibold">Condition: {{ user.condition }}</p>
                <p class="text-gray-950 text-xl font-semibold">Gender: {{ user.gender }}</p>
                <p class="text-gray-950 text-xl font-semibold">Age: {{ user.age }}</p>
            </div>
        </div>

        <div class="latest-alerts rounded-lg border-4 border-black bg-slate-200">
            <p class="text-3xl text-black font-bold flex justify-center pt-3">ALERTS</p>
            <div class="grid grid-rows-3 h-full w-full px-2 pt-2">
                <div v-for="alert in alerts" :key="alert.id" class="alert-entry px-2 w-full border-4 border-black rounded-lg">
                    <div class="alert-dot" v-if="!alert.clicked"></div>
                    <div class="alert-content">
                        <!-- Alert details -->
                        {{ alert.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileData',
    data() {
        return {
            user: {
                id: 1,
                name: "John Doe",
                condition: "Diabetes Type II",
                gender: "Male",
                age: 45,
                photoUrl: "https://avatar.iran.liara.run/public/boy?username=johndoe"
            },
            alerts: [
                {
                    id: 1,
                    clicked: false,
                    content: "Patient has high blood pressure. Monitor blood pressure regularly."
                },
                {
                    id: 2,
                    clicked: false,
                    content: "Patient has diabetes. Ensure proper insulin dosage and monitor blood sugar levels."
                },
                {
                    id: 3,
                    clicked: false,
                    content: "Patient has a history of heart disease. Monitor heart rate and blood pressure closely."
                }
                // Add more alerts here
            ],
        };
    }, mounted() {
        this.parseUrlParams();
    },
    methods: {
    parseUrlParams() {
        // Accessing the query parameters directly from Vue Router's $route.query
        this.user.name = this.$route.query.name || "Default Name";
        this.user.condition = this.$route.query.condition;
        this.user.gender = this.$route.query.gender;
        this.user.age = this.$route.query.age;
        this.user.photoUrl = this.$route.query.photoUrl || 'https://avatar.iran.liara.run/public/default';
    }
}
};
</script>

<style>
.profile-info {
    display: flex;
    flex-direction: width;
}

.profile-picture {
    /* Styles for profile picture */
    width: 35%;
}

.profile-image {
    /* Styles for profile image */
}

.profile-details {
    /* Styles for profile details */
}

.latest-alerts {
    display: flex;
    flex-direction: column;
}

.alert-entry {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.alert-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    margin-right: 5px;
}

.alert-content {
    /* Styles for alert content */
}
</style>
