import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-должности', 'Unit | Model | i-i-s-kursovaya-rabota-должности', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
