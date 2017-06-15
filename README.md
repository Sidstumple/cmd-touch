# CMD Touch
Repository for the end assignment of the minor Web Development at the University of Applied Sciences. This repository has a [code guideline](/code-styleguide.md), which should be followed.

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
2. Create a .env file with the following variables:
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
This website runs on Keystone, which is a CMS for Node.js. 
