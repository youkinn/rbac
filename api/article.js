import axios from '~/plugins/libs/axios';
import NODE_ENV from '../config/index';
import { apiType, apiTypeArr } from '../config/api/index';

/**
 * 分页获取文章列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getArticleListByPage (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getArticleListByPage,
    method: 'get',
    params
  });
}

/**
 * 获取指定文章
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getArticleById (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getArticleById,
    method: 'get',
    params
  });
}

/**
 * 修改文章
 *
 * @export
 * @param {any} data
 * @returns
 */
export function modifiyArticleById (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].modifiyArticleById,
    method: 'post',
    data
  });
}

/**
 * 批量删除文章
 *
 * @export
 * @param {any} data
 * @returns
 */
export function delArticleByIds (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].delArticleByIds,
    method: 'post',
    data
  });
}

/**
 * 批量发布文章
 *
 * @export
 * @param {any} data
 * @returns
 */
export function pubArticleByIds (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].pubArticleByIds,
    method: 'post',
    data
  });
}

/**
 * 批量取消发布文章
 *
 * @export
 * @param {any} data
 * @returns
 */
export function unpubArticleByIds (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].unpubArticleByIds,
    method: 'post',
    data
  });
}
