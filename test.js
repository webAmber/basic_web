const fetch = require('node-fetch');
// fetch('http://localhost/basic/web/index.php?r=book/index')
//     .then(res => res.json())
//     .then(json => console.log(json[0].booksname));

const { URLSearchParams } = require('url');

const params = new URLSearchParams();
// const body = {
//     "Library[booksname]":"",
//     "Library[author]":"测试作者"
// }

params.append('Book[booksname]', "测试数据");
params.append('Book[author]', "测试作者");
params.append('Book[press]', "测试出版社");
params.append('Book[publicationdate]', "2018-12-05");
params.append('Book[lenddate]', "2018-11-04");
params.append('Book[returndate]', "2018-11-11");
params.append('Book[lendername]', "毛美丽");
params.append('Book[lenderid]', "12");

fetch('http://localhost/basic/web/index.php?r=book/create',{
      method: 'POST',
      // body:  JSON.stringify(body),
      // headers: {
      //   'Content-Type': 'application/x-form-urlencoded'
      // },
      body: params
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err) => {
      console.log(`🍊🍌🍎🍐🍊🍇${err}`);
    });
