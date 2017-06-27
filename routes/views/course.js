var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';

  locals.filters = {
    year: req.params.year,
    course: req.params.course,
    courseType: []
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

  var course = keystone.list('Course').model.findOne({
    slug: locals.filters.course
  }).populate('courseType');

  course.exec(function(err, result) {
    result.courseType.forEach(function(course) {
      var slug = course.slug;
      // console.log(slug);
      locals.filters.courseType.push(slug);
    })
  })

  //  create semi random suggestions based on category
    var courseType = keystone.list('Course').model.find().populate({
      path: 'courseType',
      model: 'CourseType',
    });
    courseType.exec(function(err, result) {
    //   result.map(function(course) {
    //   course.courseType.map(function(type) {
    //     var types = type.slug;
    //     locals.data.courseType.push(types);
    //   });
    //   var allTypes = course.courseType;
    //   var savedTypes = locals.filters.courseType;
    //
    //   var filteredArray = allTypes.filter(function(el){
    //     return savedTypes.indexOf(el) == 0;
    //   });
    //   locals.data.types = filteredArray;
    // })
    //
    //   console.log(locals.data.types);
      
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
            // console.log('undefined');
          }
        }
        //  console.log(locals.data.courseType);
      })

  // Render view
  view.render('course');
}
