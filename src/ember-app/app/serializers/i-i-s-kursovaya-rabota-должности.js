import { Serializer as ДолжностиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-должности';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДолжностиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
