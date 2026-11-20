'use strict';
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function average(values) {
  return values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(3) : 'нет элементов';
}
function generateFifteen() {
  const arr = Array.from({length: 15}, () => randomInt(-10, 30));
  const positives = arr.filter(value => value > 0);
  document.getElementById('fifteen').textContent =
    `Массив: [${arr.join(', ')}]\nПоложительных чисел: ${positives.length}\nИх среднее: ${average(positives)}`;
}
function readArray() {
  const raw = document.getElementById('arrayInput').value;
  const parts = raw.split(/[;,\s]+/).filter(Boolean);
  if (parts.length <= 10 || parts.some(item => !/^-?\d+$/.test(item) || !Number.isSafeInteger(Number(item)))) {
    alert('Введите более 10 целых чисел через запятую или пробел.'); return null;
  }
  return parts.map(Number);
}
function squareNegatives() {
  const arr = readArray(); if (!arr) return;
  const result = arr.map(value => value < 0 ? value * value : value);
  document.getElementById('squared').textContent =
    `Исходный массив: [${arr.join(', ')}]\nПосле замены: [${result.join(', ')}]`;
}
function analyzeArray() {
  const arr = readArray(); if (!arr) return;
  const positives = arr.filter(value => value > 0);
  const negatives = arr.filter(value => value < 0);
  const zeros = arr.filter(value => value === 0).length;
  document.getElementById('analysis').textContent =
    `Среднее положительных (${positives.length} шт.): ${average(positives)}\n` +
    `Среднее отрицательных (${negatives.length} шт.): ${average(negatives)}\n` +
    `Количество нулей: ${zeros}`;
}
function simulate() {
  const colors = ['красный', 'чёрный', 'белый'];
  const counts = [0, 0, 0];
  const maxByColor = [0, 0, 0];
  let previous = -1;
  let currentLength = 0;
  let longestColor = 0;
  let longestLength = 0;
  for (let i = 0; i < 1_000_000; i++) {
    const color = Math.floor(Math.random() * 3);
    counts[color]++;
    currentLength = color === previous ? currentLength + 1 : 1;
    if (currentLength > maxByColor[color]) maxByColor[color] = currentLength;
    if (currentLength > longestLength) { longestLength = currentLength; longestColor = color; }
    previous = color;
  }
  document.getElementById('simulation').textContent =
    `Всего испытаний: 1 000 000\n` +
    `Частота красного (0): ${counts[0]}\nЧастота чёрного (1): ${counts[1]}\nЧастота белого (2): ${counts[2]}\n` +
    `Максимум красных подряд: ${maxByColor[0]}\n` +
    `Максимум чёрных подряд: ${maxByColor[1]}\nМаксимум белых подряд: ${maxByColor[2]}\n` +
    `Самая длинная серия: ${longestLength} подряд, цвет — ${colors[longestColor]}.`;
}
