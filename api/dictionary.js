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

/**
 * 分页字典内容列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getDictionaryContentListByPage (params) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS +
      apiTypeArr[apiType].getDictionaryContentListByPage,
    method: 'get',
    params
  });
}

/**
 * 修改字典内容
 *
 * @export
 * @param {any} data
 * @returns
 */
export function modifiyDictionaryContentById (data) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS +
      apiTypeArr[apiType].modifiyDictionaryContentById,
    method: 'post',
    data
  });
}

/**
 * 批量删除字典内容
 *
 * @export
 * @param {any} data
 * @returns
 */
export function delDictionaryContentByIds (data) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS + apiTypeArr[apiType].delDictionaryContentByIds,
    method: 'post',
    data
  });
}

/**
 * 批量设置字典内容状态（有效化）
 *
 * @export
 * @param {any} data
 * @returns
 */
export function setValidDictionaryContentByIds (data) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS +
      apiTypeArr[apiType].setValidDictionaryContentByIds,
    method: 'post',
    data
  });
}

/**
 * 批量设置字典内容状态（无效化）
 *
 * @export
 * @param {any} data
 * @returns
 */
export function setInvalidDictionaryContentByIds (data) {
  return axios({
    url:
      NODE_ENV.SERVER_ADDRESS +
      apiTypeArr[apiType].setInvalidDictionaryContentByIds,
    method: 'post',
    data
  });
}
