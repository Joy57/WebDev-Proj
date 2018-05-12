var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
mongoose.connect ("mongodb://localhost/my_camp");

//SCHEMA
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);



// var campgrounds = [
//     { name: "Yellow night", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f0c67da1e9bc_340.jpg"},
//     { name: "Mountain view", image: "https://pixabay.com/get/ea36b40a2efd083ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
//     { name: "Night View", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
//     { name: "Yellow night", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f0c67da1e9bc_340.jpg"},
//     { name: "Mountain view", image: "https://pixabay.com/get/ea36b40a2efd083ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
//     { name: "Night View", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
//     { name: "Yellow night", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f0c67da1e9bc_340.jpg"},
//     { name: "Mountain view", image: "https://pixabay.com/get/ea36b40a2efd083ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
//     { name: "Night View", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"}

// ]


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX --SHOW ALL CAMPS
//this page displays all campgrounds
app.get("/campgrounds", function(req, res){
    //get campgrounds from database
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{camps:allCampgrounds});
        }
    });
});

//CREATE --ROUTE add new camp to database
//logic of making new campground and redirect
app.post("/campgrounds", function(req, res){
    // res.send("POST ROUTE");
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    //create new campground and save to database
    Campground.create(newCampground, function(err, createdCampground){
            if(err){
                console.log(err);
            }
            else{
               //redirect
               res.redirect("/campgrounds")
            }
        });

    // campgrounds.push(newCampground);
    // re-direct back to the campgrounds page
    // res.redirect("/campgrounds");
});
//NEW -- show form to create new camps
//form
app.get("/campgrounds/new", function(req, res){
    res.render("new");
}); 

//SHOW --shows more info about a campground
app.get("/campgrounds/:id", function(req, res){
    //find the camp with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            //render show template with that campground
            res.render("show", {camps:foundCampground});
        }
    });
    // req.params.id
    // //render show template with that campground
    // res.render("show");
});

//listener
app.listen(3000, function(){
    console.log("Camp server started...");
});