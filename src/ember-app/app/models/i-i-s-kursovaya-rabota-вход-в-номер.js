import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВходВНомерMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-вход-в-номер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВходВНомерMixin, Validations, {
});

defineProjections(Model);

export default Model;
