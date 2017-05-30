var keystone = require('keystone');
var Types = keystone.Field.Types;

var Course = new keystone.List('Course', {
  map: {name:'title'},
  singular: 'course',
  plural: 'courses',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Course.add({
  title: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
  description: {type: Types.Html, wysiwyg: true, height: 400},
  blok: { type: Types.Select, options: 'blok 1, blok 2, blok 3, blok 4', default: 'blok 1' },
  year: { type: Types.Select, options: 'propedeuse, v1, v2, afstuderen', default: 'propedeuse' }
});

Course.register();
