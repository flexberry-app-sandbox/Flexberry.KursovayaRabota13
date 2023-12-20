import {
  defineNamespace,
  defineProjections,
  Model as РегистрацКлючаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-регистрац-ключа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрацКлючаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
