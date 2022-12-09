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
          <q-card-section>
              <q-select standout v-model="model" :options="allList" label="List Attribution" />
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

import { useTaskStore } from 'src/stores/task-store'
import { useListStore } from 'src/stores/list-store'

const ListStore = useListStore()

// eslint-disable-next-line no-undef, no-unused-vars
const allList = computed(() => ListStore.lists)

// eslint-disable-next-line no-unused-vars
const TaskStore = useTaskStore()

</script>
