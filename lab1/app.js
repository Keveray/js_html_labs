'use strict';
function getNumber(question) {
  const input = prompt(question);
  if (input === null) return null;
  if (input.trim() === '' || !Number.isFinite(Number(input))) {
    alert('Введите корректное число.'); return null;
  }
  return Number(input);
}
function storeNumber() {
  const a = getNumber('Введите любое число:');
  if (a === null) return;
  document.getElementById('stored').textContent = `a = ${a}; тип данных: ${typeof a}`;
}
function calculate() {
  const a = getNumber('Введите первое число:');
  if (a === null) return;
  const b = getNumber('Введите второе число:');
  if (b === null) return;
  const div = b === 0 ? 'не определено (деление на ноль)' : a / b;
  const rem = b === 0 ? 'не определено (деление на ноль)' : a % b;
  document.getElementById('calc').textContent = [
    `${a} + ${b} = ${a + b}`,
    `${a} - ${b} = ${a - b}`,
    `${a} × ${b} = ${a * b}`,
    `${a} / ${b} = ${div}`,
    `${a} % ${b} = ${rem}`,
    `${a} ** ${b} = ${a ** b}`
  ].join('\n');
}
function guessThought() {
  const result = getNumber('Умножьте задуманное число на 2, прибавьте 7. Что получилось?');
  if (result === null) return;
  const thought = (result - 7) / 2;
  document.getElementById('guessed').textContent = `Вы задумали число ${thought}. Проверка: ${thought} × 2 + 7 = ${result}.`;
}
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function writeAge() {
  const name = prompt('Введите ваше имя:');
  if (name === null) return;
  if (!name.trim()) { alert('Имя не должно быть пустым.'); return; }
  const born = getNumber('Введите год рождения:');
  if (born === null) return;
  const now = new Date().getFullYear();
  if (!Number.isInteger(born) || born < 1900 || born > now) {
    alert('Укажите корректный год рождения (1900 — текущий год).'); return;
  }
  const age = now - born;
  const doc = document.getElementById('ageFrame').contentDocument;
  doc.open();
  doc.write('<!doctype html><html lang="ru"><head><meta charset="UTF-8"></head><body style="font:16px Arial;color:#18243a">' +
    `<p>${escapeHTML(name)}: ${age}</p>` + '</body></html>');
  doc.close();
}
function showType() {
  const raw = prompt('Введите что-нибудь, например 42:');
  if (raw === null) return;
  const converted = Number(raw);
  document.getElementById('types').textContent =
    `Значение prompt(): ${JSON.stringify(raw)}; typeof: ${typeof raw}\n` +
    `После Number(): ${converted}; typeof: ${typeof converted}` +
    (Number.isNaN(converted) ? ' (NaN — число некорректно)' : '');
}
