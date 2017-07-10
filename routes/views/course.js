var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';

  locals.filters = {
    year: req.params.year,
    course: req.params.course,
  };

  locals.data = {
    courseType: [],
    types: [],
    filtered: []
  };

  // Load curriculum
  view.query('year', keystone.list('Curriculum').model.findOne({
    slug: locals.filters.year
  }));

  view.query('course', keystone.list('Course').model.findOne({
    slug: locals.filters.course
  }).populate({path: 'courseType connectedCourses', populate: {path: 'courseType', model: 'CourseType'}}));

  view.query('allYears', keystone.list('Curriculum').model.find());



  // Render view
  view.render('course');
}
