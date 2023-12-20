import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('number')
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-карта.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартаE', 'i-i-s-kursovaya-rabota-карта', {
    номерКарты: attr('Номер карты', { index: 0 })
  });

  modelClass.defineProjection('КартаL', 'i-i-s-kursovaya-rabota-карта', {
    номерКарты: attr('Номер карты', { index: 0 })
  });
};
