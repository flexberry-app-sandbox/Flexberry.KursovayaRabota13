import {
  defineNamespace,
  defineProjections,
  Model as КартаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-карта';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КартаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
