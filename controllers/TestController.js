class TestController {
  constructor() {

  }
  actionIndex() {
      return (ctx, next) => {
         ctx.body = 'hello test'
      }
  }
  actionData() {
      return (ctx, next) => {
         ctx.body = {
            result: "data"
         }
      }
  }
}

module.exports = TestController;
