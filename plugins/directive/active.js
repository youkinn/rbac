export default {
  inserted: function (ele) {
    if (ele.getElementsByClassName('nuxt-link-exact-active').length > 0) {
      ele.parentElement.style.display = 'block';
    }
  }
};
