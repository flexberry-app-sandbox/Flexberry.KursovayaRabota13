import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрацКлючаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-регистрац-ключа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрацКлючаMixin, Validations, {
});

defineProjections(Model);

export default Model;
