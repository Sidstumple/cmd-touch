# CMD Touch
Repository for the end assignment of the minor Web Development at the University of Applied Sciences. This repository has a [code guideline](/code-styleguide.md), which should be followed.

## Live link
http://cmd-touch.herokuapp.com/curriculum

## Case
The open days of the study Communication & Multimedia Design (CMD) at the University of Applied Sciences Amsterdam are meant to give students insight into what the study entails and what they can expect. A notable addition to the open day is the large touchscreen where students can view the curriculum on. Multitouch gestures, however, are not well supported on the touchscreen, making it almost impossible to scroll. Tapping however works very well and is a fun, interactive way for people to get a clear overview of what CMD has to offer. The challenge I took on was making the website easily navigatable, inviting to look at, informative and easy to maintain for the administrator. 

## KeystoneJS, a Node CMS
To tackle the challenge of making the website easy to maintain for the administrator the first logical step was to find a suitable content management system (CMS). I researched a couple different CMSs before settling on Keystone.js. 
KeystoneJS is a database driven CMS that uses MongoDB, I have worked with MongoDB before and really liked the clear syntax of it. I chose Keystone above a CMS like Wordpress because it's completely written in Javascript and easy to customize to your own preferences. It uses MongoDB's models and has a lot of predefined types that you can use to make your text fields. 

## Performance Matters
If at an open day the internet disconnects suddenly the website uses a service worker to load the pages that have already been viewed from cache. The service worker also helps to load pages faster, especially those with images, here is a visual before and after of the loading time:
!(screenshots/nosw.gif)[without service worker] !(screenshots/sw.gif)[with service worker]


## MOSCOW
### Must haves:
- [x] Fit in viewport, no scrolling
- [x] Detail page
- [x] Filter by category
- [x] Dynamic, easy CMS
- [x] Fool proof interface
- [x] Following CMD's styleguide

### Should haves:
- [x] Inviting, user friendly interface

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
