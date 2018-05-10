import { Model as PlayerMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-player';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, PlayerMixin, {

});
defineProjections(Model);
export default Model;
