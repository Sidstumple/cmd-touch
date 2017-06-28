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
  }).populate('courseType'));


  view.query('allYears', keystone.list('Curriculum').model.find());

  view.on('init', function(next) {
    var course = keystone.list('Course').model.find().populate({
      path: 'courseType',
    })

    course.exec(function(err, result) {
      var suggestions = [];
      while(suggestions.length < 4){
        var randomnumber = Math.ceil(Math.random() * result.length)
        if(suggestions.indexOf(randomnumber) > -1) continue;
        suggestions[suggestions.length] = randomnumber;
      }
      for(i = 0; i < suggestions.length; i++) {
        if (result[suggestions[i]] !== undefined) {
          var courseSuggestions = result[suggestions[i]];
          locals.data.courseType.push(courseSuggestions);
        }
        else {
          console.log('undefined');
        }
      }
      next(err);
    })
  })


  // Render view
  view.render('course');
}
