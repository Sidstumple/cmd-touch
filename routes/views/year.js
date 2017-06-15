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
    blok: [],
    courseType: [],
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

    var blok = keystone.list('Course').model.find({
      blok: locals.filters.course
    });

    blok.exec(function(err, result) {
      locals.data.blok = result;
    });

    var courseType = keystone.list('CourseType').model.find();

    courseType.exec(function(err, result) {
      locals.data.courseType = result;
    });

     var courses = keystone.list('Course').model.find({
       category: locals.filters.course,
       year: locals.filters.year
     });

     courses.exec(function(err, result) {
       locals.data.course = result;
       console.log(locals.data.course);
     })
  });

  // Render view
  view.render('year');
}
