import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-kursovaya-rabota-гость', { inverse: null, async: false }),
  входВНомер: DS.belongsTo('i-i-s-kursovaya-rabota-вход-в-номер', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-вход-гостя.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входВНомер: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-вход-гостя.validations.входВНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-kursovaya-rabota-вход-гостя', {
    гость: belongsTo('i-i-s-kursovaya-rabota-гость', 'Гость', {
      регистрацКлюча: belongsTo('i-i-s-kursovaya-rabota-регистрац-ключа', '', {
        номерКлюча: attr('Карта', { index: 1 }),
        комната: belongsTo('i-i-s-kursovaya-rabota-комната', '', {
          номерКомнаты: attr('Комната', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
