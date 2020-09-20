import Posts from './posts'
const state = () => ({
  icons: {
    vue: 'fab fa-vuejs',
    js: 'fab fa-js-square',
    css: 'fab fa-css3',
    html: 'fab fa-html5'
  },
  selectors: {
    subjects: [
      { subject: '', label: 'Todos', icon: 'fas fa-asterisk' },
      { subject: 'vue', label: 'VueJS', icon: 'fab fa-vuejs' },
      { subject: 'js', label: 'Javascript', icon: 'fab fa-js-square' },
      { subject: 'css', label: 'CSS3', icon: 'fab fa-css3' },
      { subject: 'html', label: 'HTML5', icon: 'fab fa-html5' }
    ]
  },
  ...Posts
})

const getters = {
  getIcon: (state) => (subjectName) => {
    return subjectName !== '' ? state.icons[subjectName] : 'fas fa-asterisk'
  },
  getSelectorOptions: (state) => (selectorName) => {
    return state.selectors[selectorName]
  },
  getPosts: (state) => {
    return state.posts
  }
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
