<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="playfair-font">
          Giovanni's Portfolio
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1 playfair-font"
    >
      <q-list>
        <left-menu-itens
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="dark-nord-background" />

    </q-page-container>
  </q-layout>
</template>

<script>
import LeftMenuItens from 'components/LeftMenuItens.vue'

const linksData = [
  {
    title: 'Blog',
    caption: 'Posts sobre assuntos ligados a tecnologia',
    icon: 'fas fa-poll-h',
    pathToRedirect: '/blog'
  },
  {
    title: 'Sobre Mim',
    caption: 'Contatos, habilidades, etc...',
    icon: 'fas fa-address-card',
    pathToRedirect: '/about'
  },
  {
    title: 'Hobbies',
    caption: 'O que gosto de fazer além de programar',
    icon: 'fas fa-compact-disc',
    pathToRedirect: '/hobbies'
  }
]

export default {
  name: 'MainLayout',
  components: { LeftMenuItens },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
