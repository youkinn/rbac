import Vue from 'vue';
import active from './active';

const directives = {
  active: active
};

Object.keys(directives).forEach(key => {
  console.log(directives[key]);
  Vue.directive(key, directives[key]);
});
