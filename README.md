# Node.js Screencast Practice

Практика на основе серии лекций по [Node.js от Ильи Кантора](http://learn.javascript.ru/screencast/nodejs)

Part 2 – видео #7-#...:

* Ведение в npm / установка пакетов
* Структура npm-пакета / свойства package.json
* Глобальные модули / установка npm-пакетов глобально

--

Самые часто используемые модули:
* Модуль util и наследование (файл module-util.js):
  - метод util.inspect();
  - метод util.format();
  - метод util.inherits();
* Модуль console (файл module-console.js):
  - console.log(); / console.info();
  - console.error(); / console.warn();
  - console.trace();

--

* Наследование ошибок от Error (файл error.js):
  - создание двух кастомных ошибок, наследующих от Error
* События, EventEmitter и утечки памяти (файл event-emitter.js):
  - пример простейшего EventEmitter
  - обработка ошибок
  - объект Request, без утечек памяти
  - утечка памяти с предупреждением от EventEmitter
  - исправление утечки
