# Генератор web проектов на основе Nuxt.js

Генератор проектов на основе nuxt.js призванный избавить от рутины при создании нового проекта. Все основые зависимости качующие из проекта в проект тут присутствуют.
В сборку включены следующие зависимости

* [@nuxtjs/dotenv](https://www.npmjs.com/package/@nuxtjs/dotenv)
* [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)
* [@nuxtjs/google-tag-manager](https://www.npmjs.com/package/@nuxtjs/google-tag-manager)
> Подключен и настроен в проекте по умолчанию. Для работы требуется ID 
* [bootstrap](https://www.npmjs.com/package/bootstrap)
* [element-ui](https://www.npmjs.com/package/element-ui)
* [nuxt-mq](https://www.npmjs.com/package/nuxt-mq)
* [vue-scrollto](https://www.npmjs.com/package/vue-scrollto)
* [plural-ru](https://www.npmjs.com/package/plural-ru)
> Фильтр склонения слов на основе числа
* [wnumb](https://www.npmjs.com/package/wnumb)
> Фильтр формата цен
* [video.js](https://www.npmjs.com/package/video.js)
> Подключен в проект в виде компонента `VideoPlayer`. В компонент встроен функционал для получения процента просмотра.
* [vue-awesome-swiper](https://www.npmjs.com/package/vue-awesome-swiper)
* [fingerprintjs2](https://www.npmjs.com/package/fingerprintjs2)
> Встроен в axios. При каждом запросе будет слать заголовок `X-Referer-Id` с значением в виде хеша
* [inputmask](https://www.npmjs.com/package/inputmask)
> Подключен в проект в виде компонента `InputMask`
* [vue-click-outside](https://www.npmjs.com/package/vue-click-outside)

Все зависимости, что описаны выше при выборе в генераторе будут включены и подключены в проект

## Системные требования
- Node >= 11.14.0 || >= 12.6.0

## Установка зависимостей
``` bash
yarn
```

## Добавить новую команду в терминал
``` bash
yarn link
```

## Генераторы
#### Создание нового проекта 
``` bash
nuxt-app new [options]

// Пример c ручным выбором пакетов и модулей
nuxt-app new

// Пример с настройками по умолчанию
nuxt-app new -d
```

| Опция              | По умолчанию | Описание                                  |
|--------------------|--------------|-------------------------------------------|
| `-d, --default`    | `false`      | Развернуть проект с опциями по умолчанию  |
| `--help`           |              | Документация                              |

Список модулей по умолчанию
#####ui
* [element-ui](https://www.npmjs.com/package/element-ui)
* [bootstrap](https://www.npmjs.com/package/bootstrap)

#####modules
* [@nuxtjs/axios](https://www.npmjs.com/package/@nuxtjs/axios)
* [@nuxtjs/google-tag-manager](https://www.npmjs.com/package/@nuxtjs/google-tag-manager)
* [@nuxtjs/dotenv](https://www.npmjs.com/package/@nuxtjs/dotenv)
* [nuxt-mq](https://www.npmjs.com/package/nuxt-mq)

#####components
* header
* footer
* inputmask

#####Прочие
* менеджер пакетов yarn
* spa мод

#### Создание нового модуля 
``` bash
nuxt-app generate-module --name <my-nuxt-module-name> [options]

// Пример
nuxt-app generate-module --name catalog -m -s
```

| Опция              | По умолчанию | Описание                                  |
|--------------------|--------------|-------------------------------------------|
| `--name <name>`    |              | Имя модуля                                |
| `-m, --middleware` | `false`      | Нужна middleware                          |
| `-s, --store`      | `false`      | Нужно хранилище                           |
| `--help`           |              | Документация                              |

#### Создание нового хранилища 
``` bash
nuxt-app generate-store --name <my-store-name>

// Пример
nuxt-app generate-store --name catalog
```

| Опция              | По умолчанию | Описание                                  |
|--------------------|--------------|-------------------------------------------|
| `--name <name>`    |              | Имя хранилища                             |
| `--help`           |              | Документация                              |

#### Создание нового компонента 
``` bash
nuxt-app generate-component --name <my-component-name> [options]

// Пример
nuxt-app generate-component --name AppFooter -g -s
```

| Опция              | По умолчанию | Описание                                  |
|--------------------|--------------|-------------------------------------------|
| `--name <name>`    |              | Имя компонента                            |
| `-g, --global`     | `false`      | Добавить компонент глобально              |
| `-s, --scoped`     | `false`      | Локальный CSS                             |
| `--help`           |              | Документация                              |

#### Установка аддонов
``` bash
nuxt-app install [...addons]

// Пример установки 1го модуля
nuxt-app install auth

// Пример установки нескольких модулей
nuxt-app install auth user cookie
```

| Аддоны             | Описание                                                                                  |
|--------------------|-------------------------------------------------------------------------------------------|
| `auth`             | Авторизация/Регистрация (работает в связке с модулем `cookie`)                            |
| `user`             | Модуль пользователя для создания профиля и работе с данными пользователя                  |
| `cookie`           | Модуль для универсальной работы с куками как на стороне клиента, так и на стороне сервера |
| `gallery`          | Модуль галереи с работами пользователей                                                   |
| `tests`            | Модуль тестов                                                                             |
