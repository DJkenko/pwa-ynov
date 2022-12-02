import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { getAllTasks, createTaskbyList, deleteTask } from 'src/services/tasks'

export const useTaskStore = defineStore('task', {
  state: () => ({
    Task: []
  }),
  actions: {
    async loadAllTask () {
      try {
        console.log('Loading all lists...')
        const { data } = await getAllTasks()
        this.Task = data
      } catch (error) {
        Notify.create({
          message: 'Error whilst loading lists',
          type: 'negative'
        })
      }
    },

    async handleCreateTaskbyList (taskTitle, listId) {
      try {
        console.log('Creating new list...')
        await createTaskbyList(taskTitle, listId)
        this.loadAllTask()
      } catch (error) {
        throw new Error(error)
      }
    },

    async handleDeleteTaskbyList (taskId) {
      try {
        console.log('Creating new list...')
        await deleteTask(taskId)
        this.loadAllTask()
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
