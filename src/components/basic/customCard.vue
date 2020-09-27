<template>
  <q-card
    v-bind="$attrs"
    class="playfair-font"
  >
    <q-parallax
      :src="item.img"
      :height="200"
    />

    <q-card-section>
      <div class="text-h6 text-bold">{{ item.title }}</div>
      <div style="font-size: 1.3em">
        <q-icon
          :name="getIcon(item.subject).icon"
          :color="getIcon(item.subject).color"
        />
        {{ $t(item.subject) }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ item.description }}
    </q-card-section>

    <q-card-section class="row justify-end">
      <q-btn
        label="Ler mais"
        color="primary"
        @click="setDialog(item)"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getIcon (subject) {
      return this.$store.getters['Blog/getIcon'](subject)
    },
    setDialog (post) {
      this.$store.dispatch('Blog/setDialog', post)
    }
  }
}
</script>
