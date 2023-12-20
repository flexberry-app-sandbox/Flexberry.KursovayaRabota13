import { Serializer as ВходВНомерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-вход-в-номер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВходВНомерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
