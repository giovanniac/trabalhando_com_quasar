import Posts from './posts'
const state = () => ({
  icons: [
    { name: 'vue', icon: 'fab fa-vuejs', color: 'green' },
    { name: 'js', icon: 'fab fa-js-square', color: 'yellow' },
    { name: 'css', icon: 'fab fa-css3', color: 'red' },
    { name: 'html', icon: 'fab fa-html5', color: 'red' }
  ],
  selectors: {
    subjects: [
      { subject: '', label: 'Todos', icon: 'fas fa-asterisk', color: 'black' },
      { subject: 'vue', label: 'VueJS', icon: 'fab fa-vuejs', color: 'green' },
      { subject: 'js', label: 'Javascript', icon: 'fab fa-js-square', color: 'yellow' },
      { subject: 'css', label: 'CSS3', icon: 'fab fa-css3', color: 'red' },
      { subject: 'html', label: 'HTML5', icon: 'fab fa-html5', color: 'red' }
    ]
  },
  ...Posts
})

const getters = {
  getIcon: (state) => (subjectName) => {
    return subjectName !== '' ? state.icons.filter(icon => icon.name === subjectName)[0] : { icon: 'fas fa-asterisk', color: 'black' }
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
