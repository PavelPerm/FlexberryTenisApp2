import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tenis-app-game', 'Unit | Serializer | tenis-app-game', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:tenis-app-game',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:tenis-app-challenger',
    'model:tenis-app-game',
    'model:tenis-app-match',
    'model:tenis-app-player',
    'model:tenis-app-toss',
    'model:tenis-app-tournament'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});