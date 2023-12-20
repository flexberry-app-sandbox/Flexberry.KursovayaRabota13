import { Serializer as СчитывательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-считыватель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СчитывательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
