// console.log("🍎", Vue);
//
// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// })
//
// fetch('/index/data') // 返回一个Promise对象
//   .then((res) => {
//     return res.json()
//   })
//   .then((res) => {
//     console.log("后台得到的数据",res) // res是最终的结果
//   });

console.log($);


class Create {
  constructor() {
    this.elBtn = $('#js-btn');
  }
  fn(){
    this.elBtn.click(function(){
      alert(1);
    })
  }
}

export default Create;
