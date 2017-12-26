import axios from '~/plugins/libs/axios'
import NODE_ENV from '../config/index'
import { apiType, apiTypeArr } from '../config/api/index'

export function getUserInfo (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getUserInfo,
    method: 'get',
    params
  })
}
