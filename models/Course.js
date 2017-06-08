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
  category: { type: Types.Select, options: 'technisch, onderzoek, design, project', default: 'technisch' },
  year: { type: Types.Select, options: 'propedeuse, jaar-2, jaar-3, afstuderen', default: 'propedeuse'}
});

Course.register();
