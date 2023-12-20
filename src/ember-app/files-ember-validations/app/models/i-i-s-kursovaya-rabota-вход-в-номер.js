import {
  defineNamespace,
  defineProjections,
  Model as ВходВНомерMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-вход-в-номер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВходВНомерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
