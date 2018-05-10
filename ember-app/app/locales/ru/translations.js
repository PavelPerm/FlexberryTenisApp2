import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Tenis-app',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tenis-app',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tenis-app',
          title: 'Tenis-app'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'tenis-app': {
          caption: 'tenis-app',
          title: 'tenis-app',
          'tenis-app-bpa-match-l': {
            caption: 'Матчи',
            title: '',

          },
          'tenis-app-bpa-player-l': {
            caption: 'Игроки',
            title: '',

          },
          'tenis-app-bpa-tournament-l': {
            caption: 'Турниры',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
