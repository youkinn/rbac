export default ({ store, route, redirect }) => {
  if (!store.app.context.isClient) {
    return 1
  }
  route.meta.map((meta) => {
    if (meta.data && typeof meta.data.module !== 'undefined') {
      document.body.className = 'p-mod-' + meta.data.module
    } else {
      document.body.className = ''
    }
    return 1
  })
}
