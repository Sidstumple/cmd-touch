var keystone = require('keystone');
var Types = keystone.Field.Types;

var Blok = new keystone.List('Blok', {
  map: {name:'title'},
  singular: 'blok',
  plural: 'blokken',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Blok.add({
  title: {type: String, required: true}
});

Blok.register();
