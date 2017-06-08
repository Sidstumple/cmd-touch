var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';

  locals.filters = {
    year: req.params.year,
    course: req.params.course,
    courseType: req.params.courseType
  };

  locals.data = {
    year: [],
    course: [],
    courseType: []
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

     var course = keystone.list('Course').model.findOne({
       slug: locals.filters.course
     });

     course.exec(function(err, result) {
       locals.data.course = result;
     })

     var courseType = keystone.list('Course').model.find({
       category: locals.filters.courseType
     })

     // create random suggestions based on category
     courseType.exec(function(err, result) {
       var suggestions = []
       while(suggestions.length < 3){
         var randomnumber = Math.ceil(Math.random() * result.length)
         if(suggestions.indexOf(randomnumber) > -1) continue;
         suggestions[suggestions.length] = randomnumber;
       }

       for(i = 0; i < suggestions.length; i++) {
         var courseSuggestions = result[suggestions[i]];
         locals.data.courseType.push(courseSuggestions);
       }


       console.log(locals.data.courseType);
     })

  });

  // Render view
  view.render('course');
}
