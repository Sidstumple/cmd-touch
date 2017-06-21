var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';
  locals.filters = {
    year: req.params.year,
    course: req.params.courseType
  };

  view.query('year', keystone.list('Curriculum').model.findOne({
      slug: locals.filters.year
    }));

  view.query('blok', keystone.list('Course').model.find({
    year: locals.filters.year,
    blok: locals.filters.course
  }));

  view.query('courseType', keystone.list('CourseType').model.find());

  view.query('course', keystone.list('Course').model.find({
    category: locals.filters.course,
    year: locals.filters.year
  }));

  // Render view
  view.render('filter');
}
