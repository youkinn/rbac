import axios from '../plugins/libs/axios'

export default function ({server, req}) {
  if (server) {
    axios.defaults.headers.common.cookie = req.headers.cookie || '' // 不能为undefined
  }
}
