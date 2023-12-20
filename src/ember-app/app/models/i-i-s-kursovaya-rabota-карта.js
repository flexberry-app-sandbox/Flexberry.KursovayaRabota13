import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КартаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-карта';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КартаMixin, Validations, {
});

defineProjections(Model);

export default Model;
