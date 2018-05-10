import { Model as ChallengerMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-challenger';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ChallengerMixin, {

});
defineProjections(Model);
export default Model;
