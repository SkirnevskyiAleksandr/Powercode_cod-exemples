# cod-exemples

21. заставка экрана, если пользователь долго бездействует(асинхронный код)[video](https://www.youtube.com/watch?v=ZTEtrIH6IeE&t=4s)
22. есть два файла: [video](https://www.youtube.com/watch?v=PcvGoqrZQgQ&t=1s)

    > users - список всех пользователей, у каждого юзера есть:("id";"name";"username";"email";"address";"phone";"website";"company")  
    > posts - список всех имеющихся постов, в каждом посте есть:
    > ("userId"; "id"; "title"; "body")

    > 1 создать список всех юзеров, с отображением name; email; phone;  
    > 2 в этом списке под каждым юзером сделать ссылку только на посты этого юзера(users.id===posts.userId);  
    > 3 так же сделть ссылку на все посты, отобразить только posts.body and posts.title;  
    > 4 на странице со всеми постами сделать возможность фильтрования постов содержащих введеное значение;

23 request loader [video](https://www.youtube.com/watch?v=11joYTiuMlA&t=1s)

> (we can see how many our file`s baits are downloaded at this moment)

28 взаимодействие с сервером

> инициализируем проект(npm init),подключаем пакеты express; body-parser; multer;
> создаем GET запрос на сервере
> создаем POST запрос на сервере
> создаем POST запрос с отправкой файла(имя файлу дается по умолчанию)
> создаем POST запрос и сами указываем имя и место загрузки
> [video](https://www.youtube.com/watch?v=b2kE0DX11fc&t=1s)
