import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}

export function createTaskbyList (titleTask, listTaskId) {
  return api.post('/tasks', {
    title: titleTask,
    description: 'ceci est une description de task',
    list: listTaskId
  })
}

export function changeStatus (task) {
  return api.put(`/tasks/${task._id}`, {
    done: !task.done
  })
}

export function deleteTask (taskId) {
  return api.delete(`/tasks/${taskId}`)
}
