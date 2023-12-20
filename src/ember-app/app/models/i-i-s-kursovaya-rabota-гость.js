import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГостьMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-гость';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГостьMixin, Validations, {
});

defineProjections(Model);

export default Model;
