# <%= name %>

> <%= description %>

## Системные требования
* Node >= 11.14.0

## Ссылки окружений
* dev - [https://nuxtjs.org](https://nuxtjs.org)
* stage - [https://nuxtjs.org](https://nuxtjs.org)
* live - [https://nuxtjs.org](https://nuxtjs.org)

## Веб авторизация
##### Dev
* Логин - `developers`
* Пароль - `developers`

##### Stage
* Логин - `developers`
* Пароль - `developers`

## Доступы для авторизации на проекте
* Логин - `developers`
* Пароль - `developers`

## Настройка окружения для локальной разработки
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
APP_PORT=3000
APP_NAME=<%= name %>
NODE_ENV=development
<%_ if (isAxios) { _%>
API_HOST=test-dev.convergentcmg.com
API_PORT=443
API_PREFIX=/api
<%_ } _%>
```

## Настройка окружения для dev
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
<%_ if (isModeUniversal) { _%>
APP_PORT=3000
APP_NAME=<%= name %>
<%_ } _%>
NODE_ENV=production
<%_ if (isAxios) { _%>
API_HOST=test-dev.convergentcmg.com
API_PORT=443
API_PREFIX=/api
<%_ } _%>
```

## Настройка окружения для stage
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
<%_ if (isModeUniversal) { _%>
APP_PORT=3000
APP_NAME=<%= name %>
<%_ } _%>
NODE_ENV=production
<%_ if (isAxios) { _%>
API_HOST=test-stage.convergentcmg.com
API_PORT=443
API_PREFIX=/api
<%_ } _%>
```

## Настройка окружения для live
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
<%_ if (isModeUniversal) { _%>
APP_PORT=3000
APP_NAME=<%= name %>
<%_ } _%>
NODE_ENV=production
<%_ if (isAxios) { _%>
API_HOST=mysite.com
API_PORT=443
API_PREFIX=/api
<%_ } _%>
```

## Запуск проекта
``` bash
# Установка зависимостей
$ <%= pmRun %> install

# Запуск dev сервера localhost:3000
$ <%= pmRun %> serve

# Запуск nuxt на production сервере
$ <%= pmRun %> build
<%_ if (isModeUniversal) { _%>
$ <%= pmRun %> start
<%_ } else { _%>
# Генерация статических html страниц
$ <%= pmRun %> generate
<%_ } _%>
```

Более детально о возможностях nuxt.js можно узнать тут [Nuxt.js документация](https://nuxtjs.org).
