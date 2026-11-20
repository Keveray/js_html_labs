'use strict';
function runQuiz() {
  let correct = 0;
  const questions = [
    ['Как называется планета, на которой мы живём?', ['земля']],
    ['Сколько будет 2 + 2?', ['4', 'четыре']]
  ];
  const messages = [];
  for (const [question, valid] of questions) {
    const answer = prompt(question);
    if (answer === null) { messages.push('Викторина прервана.'); break; }
    if (valid.includes(answer.trim().toLowerCase())) {
      correct += 1; messages.push(`${question} — верно :)`);
    } else messages.push(`${question} — неверно :(`);
  }
  messages.push(`Число правильных ответов: ${correct} из 2.`);
  document.getElementById('quiz').textContent = messages.join('\n');
}
function countTen() {
  const forNumbers = [];
  for (let i = 1; i <= 10; i++) forNumbers.push(i);
  const whileNumbers = [];
  let i = 1;
  while (i <= 10) { whileNumbers.push(i); i++; }
  document.getElementById('count').textContent =
    `for: ${forNumbers.join(', ')}\nwhile: ${whileNumbers.join(', ')}`;
}
function runToast() {
  let count = 0;
  let answer;
  do {
    count++;
    answer = prompt('Ещё по одной? (Введите 1, чтобы закончить)');
    if (answer === null) break;
  } while (answer.trim() !== '1');
  document.getElementById('toast').textContent = answer === null
    ? `Диалог отменён. Показано приглашений: ${count}.`
    : `Завершено после ${count} приглашений. До свидания!`;
}
function readJournal() {
  const n = Number(document.getElementById('journal').value);
  if (!Number.isInteger(n) || n < 1 || n > 200) {
    alert('Номер в журнале должен быть целым числом от 1 до 200.'); return null;
  }
  return n;
}
function factorial() {
  const n = readJournal(); if (n === null) return;
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) result *= i;
  document.getElementById('factorial').textContent = `${n}! = ${result.toString()}`;
}
function isPalindrome(input) {
  const value = Array.from(input.toLocaleLowerCase('ru-RU')).filter(ch => /[\p{L}\p{N}]/u.test(ch)).join('');
  return value.length > 0 && Array.from(value).reverse().join('') === value;
}
function checkSurname() {
  const surname = document.getElementById('surname').value.trim();
  document.getElementById('surnameResult').textContent = !surname
    ? 'Сначала введите фамилию.'
    : `«${surname}» ${isPalindrome(surname) ? 'является' : 'не является'} палиндромом.`;
}
function showPrimes() {
  const n = readJournal(); if (n === null) return;
  const primes = [];
  for (let x = 2; x <= n; x++) {
    let isPrime = true;
    for (let d = 2; d * d <= x; d++) {
      if (x % d === 0) { isPrime = false; break; }
    }
    if (isPrime) primes.push(x);
  }
  document.getElementById('primes').textContent =
    primes.length ? `Простые числа от 1 до ${n}: ${primes.join(', ')}` : 'В диапазоне нет простых чисел.';
}
function guessNumber() {
  const target = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  while (true) {
    const raw = prompt('Угадайте целое число от 1 до 100 (Отмена — выход):');
    if (raw === null) {
      document.getElementById('guess').textContent = `Игра прервана. Число было ${target}.`; return;
    }
    if (raw.trim() === '' || !Number.isInteger(Number(raw)) || Number(raw) < 1 || Number(raw) > 100) {
      alert('Введите целое число от 1 до 100.'); continue;
    }
    attempts++;
    const guess = Number(raw);
    if (guess === target) {
      alert(`Вы угадали! Число ${target}. Попыток: ${attempts}.`);
      document.getElementById('guess').textContent = `Угадано число ${target} за ${attempts} попыток.`;
      return;
    }
    alert(guess < target ? 'Загаданное число больше.' : 'Загаданное число меньше.');
  }
}
