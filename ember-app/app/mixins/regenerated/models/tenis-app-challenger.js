import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  player: DS.belongsTo('tenis-app-player', { inverse: null, async: false }),
  tournament: DS.belongsTo('tenis-app-tournament', { inverse: 'challenger', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      player: { presence: true },
      tournament: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_ChallengerE', 'tenis-app-challenger', {
    player: Projection.belongsTo('tenis-app-player', 'Player', {
      lastName: Projection.attr('Last name', { hidden: true })
    }, { displayMemberPath: 'lastName' })
  });
  modelClass.defineProjection('ChallengerE', 'tenis-app-challenger', {
    player: Projection.belongsTo('tenis-app-player', '', {
      lastName: Projection.attr(''),
      firstName: Projection.attr(''),
      rating: Projection.attr('')
    })
  });
};
