<template>
  <q-card v-bind="$attrs">
    <q-parallax
      :src="item.img"
      :height="200"
    />

    <q-card-section>
      <div class="text-h6">{{ item.title }}</div>
      <div class="text-subtitle1">
        <q-icon
          :name="getIcon(item.subject)"
          style="color: blue; font-size: 1.5em"
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
    }
  }
}
</script>
