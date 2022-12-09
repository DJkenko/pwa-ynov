<template>
    <q-btn @click="router.go(-1)">◀️</q-btn>
    <div class="q-pa-xl">
        <p>Task</p>
        <h4>
            {{ task.title }}
        </h4>
        <p>Description</p>
        <p>
            {{ task.description }}
        </p>
        <p>Terminée !</p>
        <p v-if="(task.done == false)">
            {{ task.done == false ? 'non' : 'oui' }}
        </p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTasksById } from 'src/services/tasks.js'

const route = useRoute() // permet d'accéder au paramètre de la route actuelle route.query, route.params... etc
const router = useRouter() // Permet de d'accéder aux méthodes de redirection router.push, router.go, router.replace etc...
const params = route.params.id

// eslint-disable-next-line func-call-spacing
const task = ref();

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  const { data: taskElement } = await getTasksById(params)
  task.value = taskElement
})()
</script>
