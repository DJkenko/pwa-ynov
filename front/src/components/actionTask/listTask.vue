<template>
    <div class="q-pa-xl">

        <!-- <div v-for="(list, index) in allList" :key="index">
            <h4>{{ list.title }}</h4>
            <p>{{ list.description }}</p>
            <ul v-for="(task, index) in allTasks" :key="index">
                <li v-if="isTaskInList(task.list, list._id)">{{ task.title }}</li>
            </ul>
        </div>
        <div v-for="(list, index) in allList" :key="index" class="q-pa-md" style="max-width: 350px">
            <h4>{{ list.title }}</h4>

        </div> -->
        <div>
            <h4>Task</h4>
            <q-card-section v-for="(task, index) in allTasks" :key="index">
                <q-card class="q-card-task">{{ task.title }}</q-card>
            </q-card-section>
        </div>

    </div>
</template>
<style scoped>
.q-card-task{
    width: 100%;
    height: 4em;
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

/* function isTaskInList (taskListId, listId) {
  // eslint-disable-next-line eqeqeq
  return (taskListId == listId)
} */

</script>
