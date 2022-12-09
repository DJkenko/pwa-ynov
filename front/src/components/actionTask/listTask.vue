<template>
    <div class="q-pa-xl">
        <div>
            <h3>{{ lists.title }}</h3>

                <q-card-section v-for="(task, index) in allTasks" :key="index">
                    <q-card bordered class=".q-card-task my-card" @click="router.push(`vue/${task._id}`)">
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
import { getListById } from 'src/services/lists.js'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter() // Permet de d'accéder aux méthodes de redirection router.push, router.go, router.replace etc...
const route = useRoute()

const allTasks = ref([])
const lists = ref();

(async () => {
  const { data: task } = await getListById(route.params.id)
  lists.value = task
})();

(async () => {
  const { data: task } = await getAllTasks()
  allTasks.value = task
})()

</script>
