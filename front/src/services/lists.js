import { api } from 'boot/axios'

export function getAllList () {
  return api.get('/lists')
}

export function createNewList (titleList) {
  return api.post('/lists', { title: titleList, description: 'list description' })
}

export function getListById (id) {
  return api.get(`/lists/${id}`)
}
