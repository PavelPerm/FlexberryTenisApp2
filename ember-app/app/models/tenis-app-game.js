import { Model as GameMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-game';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, GameMixin, {

});
defineProjections(Model);
export default Model;
