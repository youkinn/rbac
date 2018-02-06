export default ({ store, route, redirect }) => {
  // Get authorizations for matched routes (with children routes too)
  route.meta.map((meta) => {
    if (meta.auth && typeof meta.auth.module !== 'undefined') {
      return meta.auth.authority
    }
    return 0
  })
}
