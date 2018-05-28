import Ember from 'ember';
import EditFormController from 'ember-flexberry/controllers/edit-form';
import ratingElo from '../utils/rating-elo';

export default EditFormController.extend({
  parentRoute: 'tenis-app-bpa-match-l',
  newRating1: 0,
  newRating2: 0,
  _ratingChanged: Ember.observer('model.games', function() {
    let games = this.get('model.games');
    // рассчитаем изменение рейтинга
    let [r1, r2] = [this.model.get('player1.rating'), this.model.get('player2.rating')];
    const lastGame = this.model.get('games.lastObject');
    let scoreElo = 0;

    if (lastGame === undefined || lastGame.get('scoreP1') === undefined || lastGame.get('scoreP2') === undefined) {
      return false;
    }
    if (lastGame.get('scoreP1') > lastGame.get('scoreP2')) {
      scoreElo = 1;
    } else if (lastGame.get('scoreP1') < lastGame.get('scoreP2')) {
      scoreElo = -1;
    }
    [r1, r2] = ratingElo(r1, r2, scoreElo);
    this.set('newRating1', r1);
    this.set('newRating2', r2);
  })
});
