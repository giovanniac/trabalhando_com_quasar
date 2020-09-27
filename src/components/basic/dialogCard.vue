<template>
  <q-dialog v-model="getDialog.showDialog">
    <q-card class="playfair-font my-card">
      <q-parallax
        :src="getDialog.post.img ? getDialog.post.img : ''"
        :height="200"
      />
      <q-card-section>
        <div class="text-h6 text-bold">{{ getDialog.post.title ? getDialog.post.title : '' }}</div>
        <div style="font-size: 1.3em">
          <q-icon
            :name="getDialog.post.subject ? getIcon(getDialog.post.subject).icon : ''"
            :color="getDialog.post.subject ? getIcon(getDialog.post.subject).color : '' "
          />
          {{ getDialog.post.subject ? $t(getDialog.post.subject) : '' }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div>
          {{ getDialog.post.content ? getDialog.post.content : '' }}
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="Fechar"
          @click="setDialog({})"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogCard',
  computed: {
    getDialog () {
      return this.$store.getters['Blog/getDialog']
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

<style>
@media only screen and (max-width: 700px) {
  .my-card {
    min-width: 100%;
  }
}
@media only screen and (min-width: 701px) {
  .my-card {
    min-width: 50%;
  }
}
</style>
