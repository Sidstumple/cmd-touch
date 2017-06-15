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

  // locals.data = {
  //   year: [],
  //   courseType: [],
  //   course: []
  // };

  // Load curriculum
  // view.on('init', function(next) {
  //   var q = keystone.list('Curriculum').model.findOne({
  //     slug: locals.filters.year
  //   });
  //
  //   q.exec(function(err, result) {
  //     locals.data.year = result;
  //     console.log(result, 'year');
  //   });
  //   var blok = keystone.list('Course').model.find({
  //     blok: locals.filters.course
  //   });
  //
  //   blok.exec(function(err, result) {
  //     locals.data.course = result;
  //     console.log(result, 'blok');
  //   });
  //
  //   var courseType = keystone.list('CourseType').model.find();
  //
  //   courseType.exec(function(err, result) {
  //     locals.data.courseType = result;
  //     console.log(result, 'courseType');
  //   });
  //
  //    var courses = keystone.list('Course').model.find({
  //      category: locals.filters.course,
  //      year: locals.filters.year
  //    });
  //
  //    courses.exec(function(err, result) {
  //      locals.data.course = result;
  //      console.log(result, 'courses');
  //      next(err);
  //    })
  // });

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
  view.render('year');
}
