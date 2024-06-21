// Длина строки
const checkStringLength = (string, lengthNumber) => string.length <= lengthNumber;

/* eslint-disable */
console.log(`Длина проверяемой строки меньше или равна 20 - ${checkStringLength('проверяемая строка', 20)}`);
console.log(`Длина проверяемой строки меньше или равна 18 - ${checkStringLength('проверяемая строка', 18)}`);
console.log(`Длина проверяемой строки меньше или равна 10 - ${checkStringLength('проверяемая строка', 10)}`);
/* eslint-enable */

// Палиндром
function isStringPalindrome(string) {
  const trimmedString = string.replaceAll(/[^а-яА-Яa-zA-Z0-9]/g, '').toLowerCase();
  let reversedString = '';
  for (let i = trimmedString.length - 1; i >= 0; i--) {
    reversedString += trimmedString[i];
  }
  return trimmedString === reversedString;
}

/* eslint-disable */
console.log(`Проверяемая строка является палиндромом - ${isStringPalindrome('топот')}`);
console.log(`Проверяемая строка является палиндромом - ${isStringPalindrome('ДовОд')}`);
console.log(`Проверяемая строка является палиндромом - ${isStringPalindrome('Кекс')}`);
console.log(`Проверяемая строка является палиндромом - ${isStringPalindrome('Лёша на полке клопа нашёл ')}`);
/* eslint-enable */

// Получить число из строки
function extractNumber(string) {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let number = '';
  for (const char of string) {
    if (!Number.isNaN(parseInt(char, 10))) {
      number += char;
    }
  }
  return number ? parseInt(number, 10) : NaN;
}

/* eslint-disable */
console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));
/* eslint-enable */
