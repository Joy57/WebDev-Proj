project plan
------------    
# add landing page
# add campgrounds page that lists all campgrounds

Each campgrounds will have:
    * name
    * image

    
#layout and basic styling
* Create header and footer partials
* Add in Bootstrap

# style the campground pages
* Add a better header/title
* Make campgrounds display in a grid

# style navbar and form
* add a navbar to all templates
* style the new campground form

# add mongoose
* setup campground model
* use campground model inside routes

# show page
* add description to campground model
* add an option to remove campground
* add a show route/template

RESTful routes
--------------
name   | URL          |   Verb  |  Description
-------|--------------|---------|-------------------------------------
Index  | /profile     |   GET   |  Display a list of all profiles
NEW    | /profile/new |   GET   |  Display form to create new profile
CREATE | /profile     |   POST  |  Add new profile to DB
SHOW   | /profile/:id |   GET   |  Shows info about one dog


# Refactor mongoose code
* create a models directory
* Use module.exports
* Require everything correctly

# Add seeds file
* add a seeds.js file
* run the seeds file every time the server starts