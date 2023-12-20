import {
  defineNamespace,
  defineProjections,
  Model as ВходГостяMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-вход-гостя';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВходГостяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
