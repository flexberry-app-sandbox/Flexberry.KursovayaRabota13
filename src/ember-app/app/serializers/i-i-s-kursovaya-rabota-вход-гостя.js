import { Serializer as ВходГостяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-вход-гостя';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВходГостяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
