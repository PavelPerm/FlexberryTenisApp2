import { Serializer as GameSerializer } from
  '../mixins/regenerated/serializers/tenis-app-game';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(GameSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
