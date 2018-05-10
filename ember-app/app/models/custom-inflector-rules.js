import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('challenger', 'Challengers');
inflector.irregular('tournament', 'Tournaments');
inflector.irregular('player', 'Players');
inflector.irregular('match', 'Matchs');
inflector.irregular('game', 'Games');
inflector.irregular('toss', 'Tosss');

export default {};
