'use strict';
function showMessage() {
  let message = 'Привет, я JavaScript!'; // локальная переменная
  return message;
}
function showLocalScope() {
  const inside = showMessage();
  let outside;
  try {
    // Переменная message определена только внутри showMessage().
    outside = message;
  } catch (error) {
    outside = `${error.name}: локальная переменная недоступна вне функции`;
  }
  document.getElementById('scope').textContent = `Внутри функции: ${inside}\nСнаружи функции: ${outside}`;
}
function isPalindrome(input) {
  const normalized = Array.from(input.toLocaleLowerCase('ru-RU'))
    .filter(character => /[\p{L}\p{N}]/u.test(character)).join('');
  return normalized.length > 0 && normalized === Array.from(normalized).reverse().join('');
}
function checkPalindrome() {
  const value = document.getElementById('palindromeText').value;
  document.getElementById('palindrome').textContent =
    `Строка «${value}» ${isPalindrome(value) ? 'является' : 'не является'} палиндромом.`;
}
function squareNegativeElements(numbers) {
  return numbers.map(number => number < 0 ? number ** 2 : number);
}
function transformArray() {
  const values = document.getElementById('numbers').value.split(/[;,\s]+/).filter(Boolean);
  if (values.length <= 10 || values.some(value => !/^-?\d+$/.test(value) || !Number.isSafeInteger(Number(value)))) {
    alert('Введите более 10 целых чисел.'); return;
  }
  const input = values.map(Number);
  const changed = squareNegativeElements(input);
  document.getElementById('array').textContent =
    `До: [${input.join(', ')}]\nПосле: [${changed.join(', ')}]`;
}
class User {
  constructor(name) { this.name = name; }
  sayHi() { return `Меня зовут ${this.name}.`; }
}
function createUser() {
  const name = document.getElementById('userName').value.trim();
  if (!name) { alert('Введите имя.'); return; }
  const user = new User(name);
  document.getElementById('user').textContent = user.sayHi();
}
class Greeting {
  constructor(name) { this.userName = name; }
  showMessage() { return `Привет, ${this.userName}!`; }
}
function useGreeting() {
  const greeting = new Greeting('Вася');
  document.getElementById('greeting').textContent = greeting.showMessage();
}
class NameReverser {
  constructor(name) { this.name = name; }
  reverse() { return Array.from(this.name).reverse().join(''); }
}
function reverseName() {
  const name = document.getElementById('reverseNameInput').value.trim();
  if (!name) { alert('Введите имя.'); return; }
  const reverser = new NameReverser(name);
  document.getElementById('reversed').textContent = `Исходное имя: ${name}\nПеревёрнутое имя: ${reverser.reverse()}`;
}
