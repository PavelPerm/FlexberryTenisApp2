import { Serializer as MatchSerializer } from
  '../mixins/regenerated/serializers/tenis-app-match';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MatchSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
