import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import TenisAppbpa_MatchLForm from './forms/tenis-app-bpa-match-l';
import TenisAppbpa_PlayerLForm from './forms/tenis-app-bpa-player-l';
import TenisAppbpa_TournamentLForm from './forms/tenis-app-bpa-tournament-l';
import TenisAppbpa_GameEForm from './forms/tenis-app-bpa-game-e';
import TenisAppbpa_MatchEForm from './forms/tenis-app-bpa-match-e';
import TenisAppbpa_PlayerEForm from './forms/tenis-app-bpa-player-e';
import TenisAppbpa_TournamentEForm from './forms/tenis-app-bpa-tournament-e';
import TenisAppChallengerModel from './models/tenis-app-challenger';
import TenisAppGameModel from './models/tenis-app-game';
import TenisAppMatchModel from './models/tenis-app-match';
import TenisAppPlayerModel from './models/tenis-app-player';
import TenisAppTossModel from './models/tenis-app-toss';
import TenisAppTournamentModel from './models/tenis-app-tournament';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'tenis-app-challenger': TenisAppChallengerModel,
    'tenis-app-game': TenisAppGameModel,
    'tenis-app-match': TenisAppMatchModel,
    'tenis-app-player': TenisAppPlayerModel,
    'tenis-app-toss': TenisAppTossModel,
    'tenis-app-tournament': TenisAppTournamentModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'tenis-app': {
          caption: 'tenis-app',
          title: 'tenis-app',
          'tenis-app-bpa-match-l': {
            caption: 'tenis-app-bpa-match-l',
            title: 'tenis-app-bpa-match-l',

          },
          'tenis-app-bpa-player-l': {
            caption: 'tenis-app-bpa-player-l',
            title: 'tenis-app-bpa-player-l',

          },
          'tenis-app-bpa-tournament-l': {
            caption: 'tenis-app-bpa-tournament-l',
            title: 'tenis-app-bpa-tournament-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'tenis-app-bpa-match-l': TenisAppbpa_MatchLForm,
    'tenis-app-bpa-player-l': TenisAppbpa_PlayerLForm,
    'tenis-app-bpa-tournament-l': TenisAppbpa_TournamentLForm,
    'tenis-app-bpa-game-e': TenisAppbpa_GameEForm,
    'tenis-app-bpa-match-e': TenisAppbpa_MatchEForm,
    'tenis-app-bpa-player-e': TenisAppbpa_PlayerEForm,
    'tenis-app-bpa-tournament-e': TenisAppbpa_TournamentEForm,
  },

});

export default translations;
