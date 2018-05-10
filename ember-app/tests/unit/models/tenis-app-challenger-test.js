import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tenis-app-challenger', 'Unit | Model | tenis-app-challenger', {
  // Specify the other units that are required for this test.
  needs: [
    'model:tenis-app-challenger',
    'model:tenis-app-game',
    'model:tenis-app-match',
    'model:tenis-app-player',
    'model:tenis-app-toss',
    'model:tenis-app-tournament'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
