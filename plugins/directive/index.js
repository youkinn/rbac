import Vue from 'vue'

const directives = {
}

Object.keys(directives).forEach((key) => {
  console.log(directives[key])
  Vue.directive(key, directives[key])
})
