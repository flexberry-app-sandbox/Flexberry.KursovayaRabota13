import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  уникальныйКод: DS.attr('string')
});

export let ValidationRules = {
  уникальныйКод: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-считыватель.validations.уникальныйКод.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СчитывательE', 'i-i-s-kursovaya-rabota-считыватель', {
    уникальныйКод: attr('Уникальный код', { index: 0 })
  });

  modelClass.defineProjection('СчитывательL', 'i-i-s-kursovaya-rabota-считыватель', {
    уникальныйКод: attr('Уникальный код', { index: 0 })
  });
};
