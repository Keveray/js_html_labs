'use strict';
let user = { name: 'Джон', age: 30 };
user.sayHi = function() { alert('Привет!'); };
function showObjectGreeting() {
  user.sayHi();
  document.getElementById('greeting').textContent = `Метод sayHi() вызван для ${user.name}, возраст: ${user.age}.`;
}
const buyer = {
  name: 'Анна', age: 25, city: 'Москва', email: 'anna@example.com',
  loyaltyCard: true, ordersCount: 12
};
function showBuyer() {
  document.getElementById('buyer').textContent =
    `Имя: ${buyer.name}\nГород: ${buyer.city}\nКоличество заказов: ${buyer.ordersCount}`;
}
const users = [
  {id: 1, name: 'Анна'}, {id: 2, name: 'Иван'}
];
const restaurants = [
  {id: 7, name: 'Бистро', address: 'ул. Лесная, 8'},
  {id: 8, name: 'Пиццерия', address: 'ул. Садовая, 2'}
];
const orders = [
  {id: 101, userId: 1, restaurantId: 7, dish: 'Суп', status: 'готов'},
  {id: 102, userId: 2, restaurantId: 8, dish: 'Пицца', status: 'готовится'}
];
function showOrder() {
  const id = Number(document.getElementById('orderId').value);
  const order = orders.find(item => item.id === id);
  const customer = users.find(item => item.id === order.userId);
  const restaurant = restaurants.find(item => item.id === order.restaurantId);
  document.getElementById('order').textContent = order.status === 'готов'
    ? `Заказ №${order.id} готов!\nПокупатель: ${customer.name}\nРесторан: ${restaurant.name}\nБлюдо: ${order.dish}`
    : `Заказ №${order.id} ещё готовится.\nПокупатель: ${customer.name}\nРесторан: ${restaurant.name}`;
}
function GroupMember(name) {
  this.name = name;
  this.isAdmin = false;
}
function showGroup() {
  const names = document.getElementById('members').value.split(/[,\n;]+/).map(name => name.trim()).filter(Boolean);
  if (!names.length) { alert('Введите имена участников группы.'); return; }
  const members = names.map(name => new GroupMember(name));
  document.getElementById('group').textContent = members.map((member, i) =>
    `${i + 1}. ${member.name} — администратор: ${member.isAdmin}`).join('\n');
}
function Student(name, group) {
  this.name = name;
  this.group = group;
  this.sayHi = function() { return `Меня зовут: ${this.name}. Группа: ${this.group}.`; };
}
function showStudent() {
  const name = document.getElementById('studentName').value.trim();
  const group = document.getElementById('studentGroup').value.trim();
  if (!name || !group) { alert('Введите имя и группу.'); return; }
  const student = new Student(name, group);
  document.getElementById('student').textContent = student.sayHi();
}
