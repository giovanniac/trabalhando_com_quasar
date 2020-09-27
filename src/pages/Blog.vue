<template>
  <q-page>
    <q-card flat>
      <q-card-section>

        <div class="row q-mb-md items-center justify-start">
          <div class="col-12 col-md-4">
            <custom-selector
              label="Assuntos"
              :model="model"
              store-namespace="Blog"
              selector-name="subjects"
              :show-append-icon="true"
              :show-prepend-icon="true"
            />
          </div>
        </div>

        <div class="row q-col-gutter-sm">
          <div
            v-for="item in filteredPosts"
            :key="item.title"
            class="col-12 col-md-4"
          >
            <custom-card :item='item' />
          </div>
        </div>

      </q-card-section>
    </q-card>
    <dialog-card />
  </q-page>
</template>

<script>
import CustomSelector from '../components/basic/customSelector'
import CustomCard from '../components/basic/customCard'
import DialogCard from '../components/basic/dialogCard'
export default {
  name: 'PageIndex',
  components: {
    CustomSelector,
    CustomCard,
    DialogCard
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec odio dolor.',
      model: { subjectsSelector: '' }
    }
  },
  computed: {
    getPosts () {
      return this.$store.getters['Blog/getPosts']
    },
    filteredPosts () {
      return this.model.subjectsSelector !== '' ? this.getPosts.filter(post => post.subject === this.model.subjectsSelector) : this.getPosts
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
