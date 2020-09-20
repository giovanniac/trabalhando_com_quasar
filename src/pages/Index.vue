<template>
  <q-page>
    <q-card flat>
      <q-card-section>

        <div class="row q-pa-sm q-mb-md items-center justify-start">
          <div class="col-4">
            <q-select
              v-model="model.selector"
              label="Assunto"
              :options="[{ subject: '', label: 'Todos' }, { subject: 'vue', label: 'VueJS' }, { subject: 'js', label: 'Javascript' }, { subject: 'css', label: 'CSS3' }, { subject: 'html', label: 'HTML5' }]"
              option-value="subject"
              option-label="label"
              map-options
              emit-value
              outlined
            >
              <template v-slot:prepend>
                <q-icon :name="getIcon(model.selector)" />
              </template>
              <template v-slot:option="scope">
                <q-item
                  v-bind="scope.itemProps"
                  v-on="scope.itemEvents"
                >
                  <q-item-section avatar>
                    <q-icon :name="getIcon(scope.opt.subject)" />
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
          </div>
        </div>

        <div class="row q-col-gutter-md">
          <div
            v-for="item in filteredPosts"
            class="col-sm-4"
            :key="item.title"
          >
            <q-card>
              <q-parallax
                :src="item.img"
                :height="200"
              />

              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <div class="text-subtitle1">
                  <q-icon
                    :name="icons[item.subject]"
                    style="color: blue; font-size: 1.5em"
                  />
                  {{ $t(item.subject) }}
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ item.text }}
              </q-card-section>

              <q-card-section class="row justify-end">
                <q-btn
                  label="Ler mais"
                  color="primary"
                />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec odio dolor.',
      icons: { vue: 'fab fa-vuejs', js: 'fab fa-js-square', css: 'fab fa-css3', html: 'fab fa-html5' },
      model: { selector: '' }
    }
  },
  computed: {
    posts () {
      return [
        { title: 'Progamando com VUE', subject: 'vue', link: 'link', text: this.lorem, img: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1' },
        { title: 'Progamando com JS', subject: 'js', link: 'link', text: this.lorem, img: 'https://s30776.pcdn.co/wp-content/uploads/2020/04/AdobeStock_305233591.jpeg' },
        { title: 'Progamando com CSS', subject: 'css', link: 'link', text: this.lorem, img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*' },
        { title: 'Progamando com HTML', subject: 'html', link: 'link', text: this.lorem, img: 'https://static1.patasdacasa.com.br/articles/5/14/55/@/6702-cachorro-beagle-a-raca-pode-apresentar-articles_media_desktop-2.jpg' },
        { title: 'Testando VUE', subject: 'vue', link: 'link', text: this.lorem, img: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1' },
        { title: 'Testando JS', subject: 'js', link: 'link', text: this.lorem, img: 'https://s30776.pcdn.co/wp-content/uploads/2020/04/AdobeStock_305233591.jpeg' },
        { title: 'Testando CSS', subject: 'css', link: 'link', text: this.lorem, img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*' },
        { title: 'Testando HTML', subject: 'html', link: 'link', text: this.lorem, img: 'https://static1.patasdacasa.com.br/articles/5/14/55/@/6702-cachorro-beagle-a-raca-pode-apresentar-articles_media_desktop-2.jpg' },
        { title: 'Estudando o VUE', subject: 'vue', link: 'link', text: this.lorem, img: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1' },
        { title: 'Estudando o JS', subject: 'js', link: 'link', text: this.lorem, img: 'https://s30776.pcdn.co/wp-content/uploads/2020/04/AdobeStock_305233591.jpeg' },
        { title: 'Estudando o CSS', subject: 'css', link: 'link', text: this.lorem, img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*' },
        { title: 'Estudando o HTML', subject: 'html', link: 'link', text: this.lorem, img: 'https://static1.patasdacasa.com.br/articles/5/14/55/@/6702-cachorro-beagle-a-raca-pode-apresentar-articles_media_desktop-2.jpg' }
      ]
    },
    filteredPosts () {
      return this.model.selector !== '' ? this.posts.filter(post => post.subject === this.model.selector) : this.posts
    }
  },
  methods: {
    getIcon (subjectName) {
      return subjectName !== '' ? this.icons[subjectName] : 'fas fa-asterisk'
    }
  }
}
</script>
