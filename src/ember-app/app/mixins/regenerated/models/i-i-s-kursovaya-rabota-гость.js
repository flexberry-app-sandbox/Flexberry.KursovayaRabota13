import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  датаРождения: DS.attr('date'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  регистрацКлюча: DS.belongsTo('i-i-s-kursovaya-rabota-регистрац-ключа', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  регистрацКлюча: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-гость.validations.регистрацКлюча.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-kursovaya-rabota-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('E-mail', { index: 4 }),
    регистрацКлюча: belongsTo('i-i-s-kursovaya-rabota-регистрац-ключа', 'Номер ключа', {
      комната: belongsTo('i-i-s-kursovaya-rabota-комната', '', {
        номерКомнаты: attr('Комната', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 5, displayMemberPath: 'номерКлюча' })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-kursovaya-rabota-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('E-mail', { index: 4 }),
    регистрацКлюча: belongsTo('i-i-s-kursovaya-rabota-регистрац-ключа', 'Номер ключа', {
      номерКлюча: attr('Номер ключа', { index: 5 }),
      комната: belongsTo('i-i-s-kursovaya-rabota-комната', '', {
        номерКомнаты: attr('Комната', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
