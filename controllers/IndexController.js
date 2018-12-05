const Index = require("../models/Index");
const { URLSearchParams } = require('url');
class IndexController {
  constructor() {

  }
  actionIndex() {
      return async (ctx, next) => {
         const index = new Index();
         const result = await index.getData();
         console.log("整个node系统是否通了",result);
         ctx.body = await ctx.render("index",{
           data: result.data
         });
         // Header由第一次ctx.body设置的
         // 输出的内容以最后一次为准
      }
  }
  actionCreate() {
      return async (ctx, next) => {
        ctx.body = await ctx.render("create");
      }
  }
  actionSaveData() {
      return async (ctx, next) => {
         // ctx.body = {
         //    result: "data"
         // }
         // 取到前端发过来的数据 调用值
         const index = new Index();
         const params = new URLSearchParams();
         params.append('Book[booksname]', "测试数据");
         params.append('Book[author]', "测试作者");
         params.append('Book[press]', "测试出版社");
         params.append('Book[publicationdate]', "2018-12-05");
         params.append('Book[lenddate]', "2018-11-04");
         params.append('Book[returndate]', "2018-11-11");
         params.append('Book[lendername]', "毛美丽");
         params.append('Book[lenderid]', "12");
         const result = await index.getSaveData({
            params
         });
         ctx.body = result;
      }
  }
}

module.exports = IndexController;
