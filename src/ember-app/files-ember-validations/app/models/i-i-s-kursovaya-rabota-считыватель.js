import {
  defineNamespace,
  defineProjections,
  Model as СчитывательMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-считыватель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СчитывательMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
