import Vue from 'vue'
import imgCdn from './imgCdn'
import timeFlier from './timeFlier'

const filters = {
  imgCdn,
  timeFlier
}

// 注册filters到Vue
for (let key in filters) {
  Vue.filter(key, filters[key])
}
