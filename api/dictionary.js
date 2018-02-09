import axios from '~/plugins/libs/axios';
import NODE_ENV from '../config/index';
import { apiType, apiTypeArr } from '../config/api/index';

/**
 * 获取全部字典目录列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getAllDictionaryList (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getAllDictionaryList,
    method: 'get',
    params
  });
}

/**
 * 分页字典目录列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getDictionaryListByPage (params) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].getDictionaryListByPage,
    method: 'get',
    params
  });
}

/**
 * 修改字典目录
 *
 * @export
 * @param {any} data
 * @returns
 */
export function modifiyDictionaryById (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].modifiyDictionaryById,
    method: 'post',
    data
  });
}

/**
 * 批量删除字典目录
 *
 * @export
 * @param {any} data
 * @returns
 */
export function delDictionaryByIds (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].delDictionaryByIds,
    method: 'post',
    data
  });
}

/**
 * 批量设置字典目录状态（有效化）
 *
 * @export
 * @param {any} data
 * @returns
 */
export function setValidDictionaryByIds (data) {
  return axios({
    url: NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].setValidDictionaryByIds,
    method: 'post',
    data
  });
}

/**
 * 批量设置字典目录状态（无效化）
 *
 * @export
 * @param {any} data
 * @returns
 */
export function setInvalidDictionaryByIds (data) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].setInvalidDictionaryByIds,
    method: 'post',
    data
  });
}
