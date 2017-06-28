var keystone = require('keystone');
var Types = keystone.Field.Types;

var Course = new keystone.List('Course', {
  map: {name: 'title'},
  singular: 'course',
  plural: 'courses',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Course.add({
  title: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
  embeddedVideo: {type: Types.Html, wysiwyg: false, height: 40},
  description: {type: Types.Html, wysiwyg: false, height: 400},
  type: {type: Types.Select, options: 'project, vak, stage, profilering', default: 'vak'},
  year: {type: Types.Select, options: 'propedeuse, jaar-2, jaar-3, afstudeerjaar', default: 'propedeuse'},
  blok: {type: Types.Select, options: 'blok-1, blok-2, blok-3, blok-4, semester-1, semester-2', default: 'blok-1'},
  courseType: {type: Types.Relationship, label: 'Course type', ref: 'CourseType', many: true},
  connectedCourses: {type: Types.Relationship, label: 'Connected Courses', ref: 'Course', many: true}
});

Course.register();
