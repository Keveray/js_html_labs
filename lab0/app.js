// Фамилия: [ВПИШИТЕ СВОЮ ФАМИЛИЮ ПЕРЕД СДАЧЕЙ]
'use strict';
function showHello() {
  alert('Hello, World!');
  document.getElementById('hello').textContent = 'Hello, World!';
}
function askNumber() {
  const raw = prompt('Введите любое число:');
  const output = document.getElementById('number');
  if (raw === null) { output.textContent = 'Ввод отменён.'; return; }
  if (raw.trim() === '' || !Number.isFinite(Number(raw))) {
    output.textContent = 'Нужно ввести корректное число.'; return;
  }
  const a = Number(raw);
  output.textContent = `В переменной a хранится: ${a}. Тип: ${typeof a}.`;
}
// Основное сообщение видно без действий пользователя.
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hello').textContent = 'Hello, World!';
});
