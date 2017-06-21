var keystone = require('keystone');
var Types = keystone.Field.Types;

var Curriculum = new keystone.List('Curriculum', {
  map: {name:'title'},
  singular: 'curriculum',
  plural: 'curricula',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Curriculum.add({
  title: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
  description: {type: Types.Html, wysiwyg: false, height: 400}
});

Curriculum.register();
