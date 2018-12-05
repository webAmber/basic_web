/**
* @fileOverview 实现Index数据模型
* @author lijing@163.com
*/

const SafeRequest = require("../utils/SafeRequest");

/**
* Index 类获取后台有关于图书的相关数据类
* @class
*/
class Index {
  /**
  * @constructor
  * @param {string} app KOA2执行上下文环境
  */
  constructor(app){

  }

  /**
  * 获取后台的全部图书数据
  * @param {*} options 配置项
  * @example
  * return new Promise
  * getData(url,options)
  */

  getData(options){
    const safeRequest = new SafeRequest("book/index");
    return safeRequest.fetch({});
  }

  /**
  * 获取后台的全部图书数据
  * @param {*} options 配置项
  * @example
  * return new Promise
  * saveData(url,options)
  */

  getSaveData(options){
    const safeRequest = new SafeRequest("book/create");
    return safeRequest.fetch({
        method: 'POST',
        params: options.params
    });
  }

}

module.exports = Index;
