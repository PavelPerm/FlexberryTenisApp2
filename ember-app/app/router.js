import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('tenis-app-bpa-match-l');
  this.route('tenis-app-bpa-match-e',
  { path: 'tenis-app-bpa-match-e/:id' });
  this.route('tenis-app-bpa-match-e.new',
  { path: 'tenis-app-bpa-match-e/new' });
  this.route('tenis-app-bpa-player-l');
  this.route('tenis-app-bpa-player-e',
  { path: 'tenis-app-bpa-player-e/:id' });
  this.route('tenis-app-bpa-player-e.new',
  { path: 'tenis-app-bpa-player-e/new' });
  this.route('tenis-app-bpa-tournament-l');
  this.route('tenis-app-bpa-tournament-e',
  { path: 'tenis-app-bpa-tournament-e/:id' });
  this.route('tenis-app-bpa-tournament-e.new',
  { path: 'tenis-app-bpa-tournament-e/new' });
});

export default Router;
