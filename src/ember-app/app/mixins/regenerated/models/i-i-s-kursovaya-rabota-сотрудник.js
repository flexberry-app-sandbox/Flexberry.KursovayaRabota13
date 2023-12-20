import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  кодСотрудника: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-kursovaya-rabota-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-сотрудник.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-сотрудник.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-kursovaya-rabota-сотрудник', {
    кодСотрудника: attr('ID сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    должности: belongsTo('i-i-s-kursovaya-rabota-должности', 'Должность', {

    }, { index: 2, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-kursovaya-rabota-сотрудник', {
    кодСотрудника: attr('ID сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должности: belongsTo('i-i-s-kursovaya-rabota-должности', 'Должность', {
      должность: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true }),
    данныеПаспорта: attr('Серия и номер паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
