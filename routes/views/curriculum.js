var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req,res);
  var locals = res.locals;

  // Set locals
  locals.section = 'curriculum';

  // Load curriculum
  view.query('curriculum', keystone.list('Curriculum').model.find());

  // Render view
  view.render('curriculum');
}
