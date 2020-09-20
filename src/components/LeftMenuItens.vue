<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="redirectTo(pathToRedirect)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'LeftMenuItens',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    pathToRedirect: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    redirectTo (pathToRedirect) {
      if (this.$router.history.current.fullPath !== pathToRedirect) { this.$router.push({ path: pathToRedirect }) }
    }
  }
}
</script>
