import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { createNewList, getAllList, getListById } from 'src/services/lists'
import { createTaskbyList } from 'src/services/tasks'

export const useListStore = defineStore('list', {
  state: () => ({
    lists: []
  }),
  actions: {
    async loadAllList () {
      try {
        console.log('Loading all lists...')
        const { data } = await getAllList()
        this.lists = data
      } catch (error) {
        Notify.create({
          message: 'Error whilst loading lists',
          type: 'negative'
        })
      }
    },

    async handleCreateList (listTitle) {
      try {
        console.log('Creating new list...')
        await createNewList(listTitle)
        this.loadAllList()
      } catch (error) {
        throw new Error(error)
      }
    },

    async handleGetListById (listId) {
      try {
        console.log('Creating new list...')
        await getListById(listId)
        this.loadAllList()
      } catch (error) {
        throw new Error(error)
      }
    },

    async handleCreateTaskbyList (listTitle, listId) {
      try {
        console.log('Creating new list...')
        await createTaskbyList(listTitle, listId)
        this.loadAllList()
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
