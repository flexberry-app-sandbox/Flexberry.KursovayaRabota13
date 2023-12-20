import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-комната', 'Unit | Serializer | i-i-s-kursovaya-rabota-комната', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-комната',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kursovaya-rabota-вход-в-номер',
    'model:i-i-s-kursovaya-rabota-вход-гостя',
    'model:i-i-s-kursovaya-rabota-гость',
    'model:i-i-s-kursovaya-rabota-должности',
    'model:i-i-s-kursovaya-rabota-карта',
    'model:i-i-s-kursovaya-rabota-комната',
    'model:i-i-s-kursovaya-rabota-регистрац-ключа',
    'model:i-i-s-kursovaya-rabota-сотрудник',
    'model:i-i-s-kursovaya-rabota-считыватель',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
