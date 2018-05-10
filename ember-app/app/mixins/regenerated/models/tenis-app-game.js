import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  order: DS.attr('number'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  match: DS.belongsTo('tenis-app-match', { inverse: 'games', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      match: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_GameE', 'tenis-app-game', {
    order: Projection.attr('Order'),
    scoreP1: Projection.attr('Score p1'),
    scoreP2: Projection.attr('Score p2')
  });
  modelClass.defineProjection('GameE', 'tenis-app-game', {
    scoreP1: Projection.attr(''),
    scoreP2: Projection.attr(''),
    order: Projection.attr('')
  });
};
