<template>
  <div class="q-pa-xl">
    <h5>Bonjour, Tom Dupont ! 👋</h5>
  </div>

  <div>
    <q-card-section v-for="(list, index) in allList" :key="index">
      <q-expansion-item class="shadow-1 overflow-hidden" style="border-radius: 10px" v-bind:label="list.title"
      header-class="bg-grey text-white">
      <q-icon name="close" @click="router.push(`task/${list._id}`)" class="cursor-pointer" />
        <q-card class="q-card-task">
          <ul v-for="(task, index) in allTasks" :key="index">
            <div class="div-task" v-if="isTaskInList(task.list, list._id)">
              <input type="checkbox" v-model="task.done" v-bind:name="task._id" v-bind:id="task.name"
                @click="changeStatus(task)">
              <label v-bind:for="task._id">{{ task.title }}</label>
            <q-icon name="close" @click="TaskStore.handleDeleteTaskbyList(task._id)" class="cursor-pointer" />
            </div>
          </ul>
        </q-card>
        <q-input class="input-task" filled bottom-slots v-model="listName" label="Add new Task" >
          <template v-slot:append>
            <q-btn
              unelevated label="Créer" color="primary" v-close-popup
              @click="TaskStore.handleCreateTaskbyList(listName, list._id)"/>
          </template>
        </q-input>
      </q-expansion-item>
    </q-card-section>
  </div>
</template>

<style scoped>
.input-task{
  margin-right: 1rem;
}
.cursor-pointer{
  text-align: left;
}
label {
  margin-left: 1rem;
}
</style>

<script setup>
import { computed } from 'vue'
/* import { getAllList } from 'src/services/lists.js' */
import { changeStatus } from 'src/services/tasks.js'
import { useListStore } from 'src/stores/list-store'
import { useTaskStore } from 'src/stores/task-store'
import { useRouter } from 'vue-router'

const router = useRouter()

const ListStore = useListStore()
const TaskStore = useTaskStore()

const allList = computed(() => ListStore.lists)

const allTasks = computed(() => TaskStore.Task)

/* (async () => {
  const { data: list } = await getAllList()
  allList.value = list
})() */

function isTaskInList (taskListId, listId) {
  // eslint-disable-next-line eqeqeq
  return (taskListId == listId)
}

</script>
