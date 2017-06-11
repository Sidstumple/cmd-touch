var keystone = require('keystone');
var Types = keystone.Field.Types;

var CourseType = new keystone.List('CourseType', {
  map: {name:'title'},
  singular: 'coursetype',
  plural: 'coursetypes',
  autokey: {path: 'slug', from: 'title', unique: true}
});

CourseType.add({
  title: {type: String, required: true}
});

CourseType.register();
