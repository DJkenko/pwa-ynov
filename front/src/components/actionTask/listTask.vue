<template>
    <div class="q-pa-xl">
        <div>
            <h4>Task</h4>
            <q-card-section v-for="(task, index) in allTasks" :key="index">
                <q-card dark bordered class=".q-card-task my-card">
                    <q-card-section>
                        <div class="text-h6">{{ task.title }}</div>
                        <div class="text-subtitle2">{{ task.description }}</div>
                    </q-card-section>
                </q-card>
            </q-card-section>
        </div>
    </div>
</template>
<style scoped>
.q-card-task{
    width: 100%;
    height: 2em;
    background-color: rgb(216, 216, 216);
}
</style>

<script setup>
import { ref } from 'vue'
import { getAllTasks } from 'src/services/tasks.js'

const allTasks = ref([]);

(async () => {
  const { data: task } = await getAllTasks()
  allTasks.value = task
})()

</script>
