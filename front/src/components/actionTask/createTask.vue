<template>
    <div>

        <q-card>
          <q-card-section>
            <div class="text-h6" align="center">Créer une nouvelle task</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="taskName" label="Nom de la tâche" placeholder="Ex: Courses" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input filled v-model="description" label="Description de la tâche" placeholder="Ex: Ceci est une description" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input filled v-model="listId" label="list Id" placeholder="Ex: 24243DRT646G67" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="Annuler" color="primary" v-close-popup />
            <q-btn
              unelevated label="Créer" color="primary" v-close-popup
              @click="ListStore.handleCreateTaskbyList(taskName, description, listId)"/>
          </q-card-actions>
        </q-card>
    </div>
</template>
<script>

import { computed } from 'vue'
import { useTaskStore } from 'src/stores/task-store'
import { useListStore } from 'src/stores/list-store'

const ListStore = useListStore()
let listTask = []

// eslint-disable-next-line no-undef
const allList = computed(() => ListStore.lists)

allList.value.map(element => {
  // eslint-disable-next-line no-return-assign
  return listTask += element
})

// eslint-disable-next-line no-unused-vars
const TaskStore = useTaskStore()

</script>
