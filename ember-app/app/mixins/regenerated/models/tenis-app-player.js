import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  rating: DS.attr('number', { defaultValue: 1400 }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('bpa_PlayerE', 'tenis-app-player', {
    lastName: Projection.attr('Last name'),
    firstName: Projection.attr('First name'),
    rating: Projection.attr('Rating')
  });
  modelClass.defineProjection('bpa_PlayerL', 'tenis-app-player', {
    lastName: Projection.attr('Last name'),
    firstName: Projection.attr('First name'),
    rating: Projection.attr('Rating')
  });
};
