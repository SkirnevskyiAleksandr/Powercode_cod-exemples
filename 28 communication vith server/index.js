
'use strict'
const express = require('express');
const { request, response } = express;
const multer = require('multer');                        //https://github.com/expressjs/multer/blob/master/doc/README-ru.md#multer---
// const uploader = multer({ dest: __dirname + '/public' }); uploader для обычного POST запроса

const app = express();                                    // initialisation "express"
const diskStoreConfig = multer.diskStorage({              // https://github.com/expressjs/multer/blob/master/doc/README-ru.md#diskstorage
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public')                 // cb - calback function
    },
    filename: function (req, file, cb) {
        const ext = (file.originalname || "").replace(/^[^\.]+/g, ""); //меняем часть названия файла на пустую строку
        const name = Math.random().toString(36).replace('0.', 'img-')
        cb(null, `${name}${ext}`);
    }
})
const uploader = multer({ storage: diskStoreConfig }); // uploader  для POST запроса с самостоятельным изминением имени загружаемого файла

app.get('/echo', (request, response) => {
    console.log(request.query)
    response.send('www')
})

/*body-parser - npm нужен для отправки POST запросов,
он добовляет поле BODY */
// app.post('/echo', (request, response) => {
//     console.log(request.query)
//     response.send('www')
// })

// app.post('/file', uploader.single('file'), (req, res) => {
//     res.json({})
// })
/*функция для отправки файла на сервер. В POSTMAN -body обязательно
  указывать что это файл и имя ключа тоже file.
  По умолчанию, файл будет загружен со случайным именем(оно задается, что бы хакеры
  если загрузят вредоносный файл, не смогли его вызвать)*/

app.post('/file', uploader.single('file'), (req, res) => {
    console.log(req.headers.host)
    res.json({ uri: `${req.headers.host}/${req.file.filename}` }) //возвращает адрес загружаемого файла
})
/*это POST-запрос с дополнительными настройками, что бы самим именовать файл
1)создаем обьект storage и настраиваем колбек функцию которая помогает определить место и имя для файла
2) так же используем случайное имя, что бы не возникло повторений*/

app.use(express.static(__dirname + '/public'))
/*указали серверу, что "public" является "статической"
 директорией и хранящиеся в ней файлы будут автоматически
отдаваться как есть и без "защиты"

'use'- "встраивает" в обработку маршрута, обработку статических файлов
(т.е. сервер сначала будет проверять, есть ли статический файл в папке static, если нет,
    пойдет дальше по цепочке)*/


app
app.listen(3000) // listening  server on 3000-port