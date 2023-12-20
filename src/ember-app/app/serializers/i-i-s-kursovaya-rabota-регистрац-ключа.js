import { Serializer as РегистрацКлючаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-регистрац-ключа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрацКлючаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
