var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';
  locals.filters = {
    year: req.params.year
  };

  view.query('year', keystone.list('Curriculum').model.findOne({
    slug: locals.filters.year
  }));

  view.query('allYears', keystone.list('Curriculum').model.find());

  view.query('courseType', keystone.list('CourseType').model.find());

  view.query('course', keystone.list('Course').model.find({
    year: locals.filters.year
  }).populate('courseType'));

  // Render view
  view.render('year');
}
