import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количествоМест: DS.attr('number'),
  номерКомнаты: DS.attr('number'),
  этаж: DS.attr('number'),
  считыватель: DS.belongsTo('i-i-s-kursovaya-rabota-считыватель', { inverse: null, async: false })
});

export let ValidationRules = {
  количествоМест: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-комната.validations.количествоМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-комната.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-комната.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  считыватель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-комната.validations.считыватель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-kursovaya-rabota-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    количествоМест: attr('Количество мест', { index: 2 }),
    считыватель: belongsTo('i-i-s-kursovaya-rabota-считыватель', 'Уникальный код считывателя', {

    }, { index: 3, displayMemberPath: 'уникальныйКод' })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-kursovaya-rabota-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    количествоМест: attr('Количество мест', { index: 2 }),
    считыватель: belongsTo('i-i-s-kursovaya-rabota-считыватель', 'Уникальный код считывателя', {
      уникальныйКод: attr('Уникальный код считывателя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
