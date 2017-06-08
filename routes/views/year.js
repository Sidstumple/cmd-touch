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

  locals.data = {
    year: [],
    course: []
  };

  // Load curriculum
  view.on('init', function(next) {
    var q = keystone.list('Curriculum').model.findOne({
      slug: locals.filters.year
    });

    q.exec(function(err, result) {
      locals.data.year = result;
      next(err);
    });

     var courses = keystone.list('Course').model.find({
       category: locals.filters.course,
       year: locals.filters.year
     });

     courses.exec(function(err, result) {
       locals.data.course = result;
     })
  });



  // Render view
  view.render('year');
}
