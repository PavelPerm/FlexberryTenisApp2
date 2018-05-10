import { Model as MatchMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-match';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, MatchMixin, {

});
defineProjections(Model);
export default Model;
