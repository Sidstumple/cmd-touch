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
  description: {type: Types.Html, wysiwyg: false, height: 400},
  courseType: {type: Types.Relationship, label: 'Course type', ref: 'CourseType', many: true},
  year: {type: Types.Relationship, label: 'Year', ref: 'Curriculum'},
  blok: {type: Types.Relationship, label: 'Blok', ref: 'Blok', many: true}
});

Course.register();
