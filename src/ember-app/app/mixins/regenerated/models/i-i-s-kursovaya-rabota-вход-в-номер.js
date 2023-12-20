import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  входГостя: DS.hasMany('i-i-s-kursovaya-rabota-вход-гостя', { inverse: 'входВНомер', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-вход-в-номер.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-вход-в-номер.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходВНомерE', 'i-i-s-kursovaya-rabota-вход-в-номер', {
    дата: attr('Дата', { index: 0 }),
    входГостя: hasMany('i-i-s-kursovaya-rabota-вход-гостя', 'Вход гостя', {
      гость: belongsTo('i-i-s-kursovaya-rabota-гость', 'Гость', {
        регистрацКлюча: belongsTo('i-i-s-kursovaya-rabota-регистрац-ключа', '', {
          номерКлюча: attr('Карта', { index: 1 }),
          комната: belongsTo('i-i-s-kursovaya-rabota-комната', '', {
            номерКомнаты: attr('Комната', { index: 2 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ВходВНомерL', 'i-i-s-kursovaya-rabota-вход-в-номер', {
    дата: attr('Дата', { index: 0 })
  });
};
