/* 测试 */
const test = {
  getUserInfo: '/api/userInfo', // 获取用户信息
  getArticleListByPage: '/api/getArticleListByPage', // 分页获取文章列表
  getArticleById: '/api/getArticleById', // 获取文章详情
  delArticleByIds: '/api/doAction', // 批量删除文章
  pubArticleByIds: '/api/doAction', // 批量发布文章
  unpubArticleByIds: '/api/doAction', // 批量下架文章
  modifiyArticleById: '/api/doAction', // 修改文章
  getAllDictionaryList: '/api/getAllDictionaryList', // 获取全部字典目录列表
  getDictionaryListByPage: '/api/getDictionaryListByPage', // 分页获取字典目录列表
  delDictionaryByIds: '/api/doAction', // 批量删除字典目录
  setValidDictionaryByIds: '/api/doAction', // 批量设置字典目录状态（有效）
  setInvalidDictionaryByIds: '/api/doAction', // 批量设置字典目录状态（无效）
  modifiyDictionaryById: '/api/doAction', // 修改字典目录
  getDictionaryContentListByPage: '/api/getDictionaryContentListByPage', // 分页获取字典内容列表
  delDictionaryContentByIds: '/api/doAction', // 批量删除字典内容
  setValidDictionaryContentByIds: '/api/doAction', // 批量设置字典内容状态（有效）
  setInvalidDictionaryContentByIds: '/api/doAction', // 批量设置字典内容状态（无效）
  modifiyDictionaryContentById: '/api/doAction' // 修改字典内容
};
export default test;
