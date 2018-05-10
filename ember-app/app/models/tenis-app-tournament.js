import { Model as TournamentMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-tournament';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TournamentMixin, {

});
defineProjections(Model);
export default Model;
