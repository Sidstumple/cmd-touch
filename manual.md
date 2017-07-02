## Keystone
Keystone is a CMS, it's easy to understand and work with. In this manual I'll explain how to use it.

## Index
1. [Models](#models)
2. [Curricula](#curricula)
3. [Course Types](#course-types)
4. [Courses](#courses)
5. [Deleting items](#deleting-items)

## [Models](#models)
The CMS uses 3 models which you can edit; Curricula, Course Types, and Courses.

### [Curricula](#curricula)
Curriculums consist of the study years, the values are now Propedeuse, Jaar 2, Jaar 3, and Afstudeerjaar. To edit the study years go to http://cmd-touch.herokuapp.com/keystone/curriculums.

![Add a year](/screenshots/manual/addyear.gif)

Adding a new year:
1. Click `Create curriculum` and add a title, click `Create` to proceed or `Cancel` to abord. 
2. Add an image and a description. The image is the icon shown on the [curriculum](http://cmd-touch.herokuapp.com/curriculum) page the description is shown on the year pages, f.e. [propedeuse](http://cmd-touch.herokuapp.com/curriculum/propedeuse).
3. Click `Save` to save your changes.

Editing a year:
1. Click the item you want to change.
2. Edit what you want to edit.
3. Click `Save` to save your changes or `reset changes` to reset.

### [Course Types](#course-types)
Course types consist of the possible course types a course can have. Course types are used to filter courses on the year pages (f.e. [propedeuse](http://cmd-touch.herokuapp.com/curriculum/propedeuse) . To edit course types go to http://cmd-touch.herokuapp.com/keystone/course-types

Adding a new course type:
1. Click `Create coursetype` and add a title, click `Create` to proceed or `Cancel` to abord. 
2. Add an image, this image appears next to the filter.
3. Click `Save` to save your changes.

Editing a course type: 
1. Click the item you want to change.
2. Edit what you want to edit.
3. Click `Save` to save your changes or `reset changes` to reset.

### [Courses](#courses)
Course consists of all courses in the curriculum. To edit courses go to: http://cmd-touch.herokuapp.com/keystone/courses

Adding a new course: 
1. Click `Create course` and add a title, click `Create` to proceed or `Cancel` to abord. 
2. Add an image, this image appears on the detail page of a course, f.e. http://cmd-touch.herokuapp.com/curriculum/afstudeerjaar/vak/afstudeerstage. This is optional, if no image is supplied a default image is added.
3. Add an embedded video, copy the embed tag from Vimeo or YouTube and paste it. This is optional, if no video is supplied a default image is added. See below how you can get the embed tag from Vimeo and YouTube.
4. Add a description, this appears on the detail page of the course. 
5. Add a type, options are: `Project`, `Vak`, `Stage`, and `Profilering`.
6. Add a year.
7. Add a blok.
8. Add course types.
9. Add connected courses, **Important**, only add connected courses on projects, this is how the page knows which courses to add under which projects. 
3. Click `Save` to save your changes.

Editing a course: 
1. Click the item you want to change.
2. Edit what you want to edit.
3. Click `Save` to save your changes or `reset changes` to reset.

Getting the embed tag from YouTube: 
1. Open the video you want to embed on [YouTube](https://www.youtube.com/).
2. Click `Share` (or `Delen`), and click `Embed` (or `Insluiten`).
3. Copy the supplied link and paste it in the `Embedded video` field of the course.

Getting the embed tag from Vimeo:
1. Open the video you want to embed on [Vimeo](https://vimeo.com/).
2. Click `Share` (or `Delen`), and copy the tag in the `Embed` (or `Insluiten`). field
3. Copy the supplied link and paste it in the `Embedded video` field of the course.

### [Deleting items](#deleting-items)
