<template>
    <div>
        <h1>
            create task
        </h1>
        <q-input class="input-task" filled bottom-slots v-model="listName" label="Add new Task" >
          <template v-slot:append>
            <q-btn
              unelevated label="Créer" color="primary" v-close-popup
              @click="TaskStore.handleCreateTaskbyList(listName, list._id)"/>
          </template>
        </q-input>
        {{ allTasks }}

        <q-card>
          <q-card-section>
            <div class="text-h6" align="center">Créer une nouvelle liste</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="taskName" label="Nom de la tâche" placeholder="Ex: Courses" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input filled v-model="description" label="Description de la tâche" placeholder="Ex: Ceci est une description" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="Annuler" color="primary" v-close-popup />
            <q-btn
              unelevated label="Créer" color="primary" v-close-popup
              @click="ListStore.handleCreateList(listName)"/>
          </q-card-actions>
        </q-card>
    </div>
</template>
<script>

import { useTaskStore } from 'src/stores/task-store'

// eslint-disable-next-line no-unused-vars
const TaskStore = useTaskStore()

</script>
