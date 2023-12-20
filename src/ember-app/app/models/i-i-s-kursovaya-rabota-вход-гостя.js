import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВходГостяMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-вход-гостя';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВходГостяMixin, Validations, {
});

defineProjections(Model);

export default Model;
