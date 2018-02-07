import axios from '~/plugins/libs/axios';
import NODE_ENV from '../config/index';
import { apiType, apiTypeArr } from '../config/api/index';

export function getArticleListByPage (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getArticleListByPage,
    method: 'get',
    params
  });
}

export function getArticleById (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getArticleById,
    method: 'get',
    params
  });
}
