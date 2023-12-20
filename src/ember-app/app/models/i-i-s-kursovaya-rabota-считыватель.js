import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СчитывательMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-считыватель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СчитывательMixin, Validations, {
});

defineProjections(Model);

export default Model;
