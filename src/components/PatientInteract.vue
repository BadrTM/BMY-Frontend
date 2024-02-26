<template>
    <div class="grid grid-cols-2 gap-2">
        <div class="rounded-lg border-4 border-black bg-slate-200 h-80">
            <div class="grid grid-rows-3 h-full w-full px-2 pt-2 gap-2 pb-2">
                <div class="px-2 w-full border-4 border-red-500 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/ambulance--v1.png"/>
                        <div class="text-lg font-bold text-black">
                            Call an Ambulance to the Patient's Home Address
                        </div>
                    </div>
                </div>
                <div class="px-2 w-full border-4 border-green-400 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/medical-doctor.png"/>
                        <div class="text-lg font-bold text-black">
                            Schedule a Doctor's Visit to the Patient's Home
                        </div>
                    </div>
                </div>
                <div class="px-2 w-full border-4 border-green-400 rounded-lg">
                    <div class="flex h-full items-center gap-8">
                        <img class="ml-3" width="50" height="50" src="https://img.icons8.com/ios/50/remind.png"/>
                        <div class="text-lg font-bold text-black">
                            Send Medication Reminder to Patient
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded-lg border-4 border-black bg-slate-200">
            <div class="grid grid-rows-5 h-full">
                <div class="row-span-4 mx-3 my-1 text-black">
                    <div class="flex flex-col h-full justify-end">
                        <p class="text-inherit">Patient:</p>
                        <p class="text-inherit">Nurse:</p>
                        <p class="text-inherit">Patient:</p>
                        <p class="text-inherit">Nurse:</p>
                        <p class="text-inherit font-bold text-gray-500">Start a new session by sending a message </p>
                    </div>
                </div>
                <!-- Text Box -->
                <div class="row-span-1 border-2 border-black m-2 rounded-xl bg-neutral-100">
                    <div class="flex h-full items-center ml-2">
                        <div class="text-gray-500 text-base">
                            Type Your Message Here...
                        </div>
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
            ]
        };
    }
};
</script>
                