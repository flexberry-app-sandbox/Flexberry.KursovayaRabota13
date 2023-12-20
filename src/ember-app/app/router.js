import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-вход-в-номер-l');
  this.route('i-i-s-kursovaya-rabota-вход-в-номер-e',
  { path: 'i-i-s-kursovaya-rabota-вход-в-номер-e/:id' });
  this.route('i-i-s-kursovaya-rabota-вход-в-номер-e.new',
  { path: 'i-i-s-kursovaya-rabota-вход-в-номер-e/new' });
  this.route('i-i-s-kursovaya-rabota-гость-l');
  this.route('i-i-s-kursovaya-rabota-гость-e',
  { path: 'i-i-s-kursovaya-rabota-гость-e/:id' });
  this.route('i-i-s-kursovaya-rabota-гость-e.new',
  { path: 'i-i-s-kursovaya-rabota-гость-e/new' });
  this.route('i-i-s-kursovaya-rabota-должности-l');
  this.route('i-i-s-kursovaya-rabota-должности-e',
  { path: 'i-i-s-kursovaya-rabota-должности-e/:id' });
  this.route('i-i-s-kursovaya-rabota-должности-e.new',
  { path: 'i-i-s-kursovaya-rabota-должности-e/new' });
  this.route('i-i-s-kursovaya-rabota-карта-l');
  this.route('i-i-s-kursovaya-rabota-карта-e',
  { path: 'i-i-s-kursovaya-rabota-карта-e/:id' });
  this.route('i-i-s-kursovaya-rabota-карта-e.new',
  { path: 'i-i-s-kursovaya-rabota-карта-e/new' });
  this.route('i-i-s-kursovaya-rabota-комната-l');
  this.route('i-i-s-kursovaya-rabota-комната-e',
  { path: 'i-i-s-kursovaya-rabota-комната-e/:id' });
  this.route('i-i-s-kursovaya-rabota-комната-e.new',
  { path: 'i-i-s-kursovaya-rabota-комната-e/new' });
  this.route('i-i-s-kursovaya-rabota-регистрац-ключа-l');
  this.route('i-i-s-kursovaya-rabota-регистрац-ключа-e',
  { path: 'i-i-s-kursovaya-rabota-регистрац-ключа-e/:id' });
  this.route('i-i-s-kursovaya-rabota-регистрац-ключа-e.new',
  { path: 'i-i-s-kursovaya-rabota-регистрац-ключа-e/new' });
  this.route('i-i-s-kursovaya-rabota-сотрудник-l');
  this.route('i-i-s-kursovaya-rabota-сотрудник-e',
  { path: 'i-i-s-kursovaya-rabota-сотрудник-e/:id' });
  this.route('i-i-s-kursovaya-rabota-сотрудник-e.new',
  { path: 'i-i-s-kursovaya-rabota-сотрудник-e/new' });
  this.route('i-i-s-kursovaya-rabota-считыватель-l');
  this.route('i-i-s-kursovaya-rabota-считыватель-e',
  { path: 'i-i-s-kursovaya-rabota-считыватель-e/:id' });
  this.route('i-i-s-kursovaya-rabota-считыватель-e.new',
  { path: 'i-i-s-kursovaya-rabota-считыватель-e/new' });
});

export default Router;
