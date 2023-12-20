import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-сотрудник';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудникMixin, Validations, {
});

defineProjections(Model);

export default Model;
