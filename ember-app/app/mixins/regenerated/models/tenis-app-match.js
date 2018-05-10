import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  maxGameScore: DS.attr('number'),
  minGamesForWin: DS.attr('number'),
  player1: DS.belongsTo('tenis-app-player', { inverse: null, async: false }),
  player2: DS.belongsTo('tenis-app-player', { inverse: null, async: false }),
  games: DS.hasMany('tenis-app-game', { inverse: 'match', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      player1: { presence: true },
      player2: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MatchE', 'tenis-app-match', {
    name: Projection.attr('Название'),
    startDate: Projection.attr('Дата начала'),
    maxGameScore: Projection.attr('Max кол-во очков'),
    minGamesForWin: Projection.attr('Кол-во выигранных игр для победы'),
    player1: Projection.belongsTo('tenis-app-player', 'Игрок 1', {
      lastName: Projection.attr('', { hidden: true }),
      firstName: Projection.attr('Имя'),
      rating: Projection.attr('Рейтинг')
    }, { displayMemberPath: 'lastName' }),
    player2: Projection.belongsTo('tenis-app-player', 'Игрок 2', {
      lastName: Projection.attr('', { hidden: true }),
      firstName: Projection.attr('Имя'),
      rating: Projection.attr('Рейтинг')
    }, { displayMemberPath: 'lastName' }),
    games: Projection.hasMany('tenis-app-game', 'Сыгранные игры', {
      scoreP1: Projection.attr('Очки И1'),
      scoreP2: Projection.attr('Очки И2'),
      order: Projection.attr('Порядок')
    })
  });
  modelClass.defineProjection('MatchL', 'tenis-app-match', {
    name: Projection.attr('Название'),
    startDate: Projection.attr('Дата начала'),
    scoreP1: Projection.attr('Очки И1'),
    scoreP2: Projection.attr('Очки И2'),
    player1: Projection.belongsTo('tenis-app-player', 'Игрок1 Фамилия', {
      lastName: Projection.attr('Игрок1 Фамилия'),
      firstName: Projection.attr('Игрок1 Имя', { hidden: true })
    }, { hidden: true }),
    player2: Projection.belongsTo('tenis-app-player', 'Игрок2 Фамилия', {
      lastName: Projection.attr('Игрок2 Фамилия'),
      firstName: Projection.attr('Игрок2 Имя', { hidden: true })
    }, { hidden: true })
  });
};
