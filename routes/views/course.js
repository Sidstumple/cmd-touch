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
    courseType: []
  };

  // Load curriculum
  view.query('year', keystone.list('Curriculum').model.findOne({
    slug: locals.filters.year
  }));

  view.query('course', keystone.list('Course').model.findOne({
    slug: locals.filters.course
  }));

  // view.query('courseType', keystone.list('Course').model.find({
  //   category: locals.filters.courseType
  // }))

    //  create semi random suggestions based on category
     var courseType = keystone.list('Course').model.find({
       category: locals.filters.courseType
     });

     courseType.exec(function(err, result) {
       var suggestions = []
       while(suggestions.length < 5){
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
       console.log(locals.data.courseType);
     })

  // Render view
  view.render('course');
}
