<template>
  <q-select
    v-model="model[mountSelectorName]"
    v-bind="$attrs"
    :options="getSelectorOptions"
    option-value="subject"
    option-label="label"
    map-options
    emit-value
    outlined
  >
    <template
      v-slot:prepend
      v-if="showPrependIcon"
    >
      <q-icon :name="getIcon(model[mountSelectorName]).icon" />
    </template>
    <template
      v-slot:option="scope"
      v-if="showAppendIcon"
    >
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar>
          <q-icon
            :name="scope.opt.icon"
            :color="scope.opt.color ? scope.opt.color : 'black'"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label
            class="text-bold"
            v-html="scope.opt.label"
          />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  name: 'CustomSelector',
  props: {
    model: {
      type: Object,
      required: true
    },
    storeNamespace: {
      type: String,
      required: true
    },
    selectorName: {
      type: String,
      required: true
    },
    showPrependIcon: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    },
    showAppendIcon: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    }
  },
  methods: {
    getIcon (subject) {
      return this.$store.getters[`${this.storeNamespace}/getIcon`](subject)
    }
  },
  computed: {
    getSelectorOptions () {
      return this.$store.getters[`${this.storeNamespace}/getSelectorOptions`](this.selectorName)
    },
    mountSelectorName () {
      return this.selectorName + 'Selector'
    }
  }
}
</script>

<style>
</style>
