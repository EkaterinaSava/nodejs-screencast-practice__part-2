var util = require('util');

var phrases = {
  "Hello": "Привет",
  "world": "мир"
}

// конструкторы ошибок PhraseError & HttpError
// нам будут нужны: message name stack

// 1. PhraseError:
function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}
// наследование ошибки от Error
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}

// 2. HttpError:
function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError);
}

// наследование ошибки от Error
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';


// использование кастомных ошибок
function getPhrase(name) {
  if ( !phrases[name] ) {
    throw new PhraseError("Нет такой фразы: " + name); // HTTP 500 + уведомление
  }
  return phrases[name];
}


function makePage(url) {
  if ( url != 'index.html' ) {
    throw new HttpError(404, "Нет такой страницы"); // HTTP 404
  }
  // сгенерируем ошибку PhraseError:
  return util.format("%s, %s!", getPhrase("H*l**"), gerPhrase("world"));
  // без ошибок:
  //return util.format("%s, %s!", getPhrase("Hello"), gerPhrase("world"));
}

// проверка
try {
  // сгенерируем ошибку HttpError:
  // var page = makePage('index');
  // уберем ошибку:
  var page = makePage('index.html');
  console.log(page);
} catch(e) {
  if ( e instanceof HttpError ) {
    console.log(e.status, e.message);
  } else {
    console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
  }
}
