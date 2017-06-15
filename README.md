# CMD Touch
Repository for the end assignment of the minor Web Development at the University of Applied Sciences. This repository has a [code guideline](/code-styleguide.md), which should be followed.

## Live link
http://cmd-touch.herokuapp.com/curriculum

## MOSCOW
### Must haves:
- [ ] Fit in viewport, no scrolling
- [ ] Detail page
- [ ] Filter by Category
- [ ] Dynamic, easy CMS
- [ ] Fool proof interface
- [ ] Folowing CMD's styleguide

### Should haves:
- [ ] Inviting, user friendly interface
- [ ] Extra space for student work

## Dependencies
- `keystone`(https://www.npmjs.com/package/keystone)
- `lodash`(https://www.npmjs.com/package/lodash)
- `moment`(https://www.npmjs.com/package/moment)
- `cloudinary`(https://www.npmjs.com/package/cloudinary)
- `express-handlebars`(https://www.npmjs.com/package/express-handlebars)
- `handlebars`(https://www.npmjs.com/package/handlebars)
- `node-sass`(https://www.npmjs.com/package/node-sass)
- `node-sass-middleware`(https://www.npmjs.com/package/node-sass-middleware)
- `dotenv`(https://www.npmjs.com/package/dotenv)
- `keystone-email`(https://www.npmjs.com/package/keystone-email)
- `async`(https://www.npmjs.com/package/async)

## Install
1. Clone this repository
2. Create a .env file with the following keys:
```.env
COOKIE_SECRET
CLOUDINARY_URL
MONGO_URI
```
3. Open the terminal, navigate to the cloned folder
4. run `npm install`
5. run `node keystone`
6. open http://localhost:3000/curriculum for the frontend and http://localhost:3000/keystone to edit the backend.
7. For login credentials send an email to info@cydstumpel.nl

## Keystone
This website runs on Keystone, which is a CMS for Node.js. Keystone works with MongoDB models, to add a model:
```javascript
var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list
var Curriculum = new keystone.List('Curriculum', {
  map: {name:'title'},
  singular: 'curriculum',
  plural: 'curricula',
  autokey: {path: 'slug', from: 'title', unique: true} //gives every item made in curriculum a unique slug based on the title
});

// Gives the ability to add a title and an image
Curriculum.add({
  title: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
});

// Register Curriculum and make it available in the backend
Curriculum.register();
```
To send it to a page:
```javascript
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
```

