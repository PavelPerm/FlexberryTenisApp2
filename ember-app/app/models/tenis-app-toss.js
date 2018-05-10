import { Model as TossMixin, defineProjections } from
  '../mixins/regenerated/models/tenis-app-toss';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TossMixin, {

});
defineProjections(Model);
export default Model;
