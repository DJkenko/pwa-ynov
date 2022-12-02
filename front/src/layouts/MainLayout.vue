<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-toolbar-title class="title">
          Dashboard
        </q-toolbar-title>

        <q-avatar
          v-for="size in ['xl']"
          :key="size"
          :size="size"
          color="purple"
          text-color="white"
          icon="person"
    />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="app-footer q-py-sm">
      <div class="flex justify-between">
        <q-btn
          icon="sort"
          flat
          text-color="grey-6"
          @click="() =>emit('toggleDrawer')"
        />
        <q-btn
          icon="add"
          round
          unelaveted
          text-color="white"
          color="purple"
          @click="newListCard = true"
        />
        <q-btn
          icon="person"
          flat
          text-color="grey-6"
          @click="() =>emit('toggleDrawer')"
        />
      </div>

    </q-footer>
    <q-dialog v-model="newListCard">
        <q-card>
          <q-card-section>
            <div class="text-h6" align="center">Créer une nouvelle liste</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input filled v-model="listName" label="Nom de la liste" placeholder="Ex: Courses" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="Annuler" color="primary" v-close-popup />
            <q-btn
              unelevated label="Créer" color="primary" v-close-popup
              @click="ListStore.handleCreateList(listName)"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
  </q-layout>
</template>
<style scoped>
.title{
  color: black;
}
.app-header{
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -2px 10px rgba(0,0,0,1);
}
.app-footer{
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -2px 10px rgba(0,0,0,1);
}
</style>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useListStore } from 'src/stores/list-store'
import { useTaskStore } from 'src/stores/task-store'

const ListStore = useListStore()
const TaskStore = useTaskStore()
ListStore.loadAllList()
TaskStore.loadAllTask()

const newListCard = ref(false)

/* const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
] */

/* export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}) */
</script>
