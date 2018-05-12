var express = require("express"),
    app     = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    var campgrounds = [
        { name: "Yellow night", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f0c67da1e9bc_340.jpg"},
        { name: "Mountain view", image: "https://pixabay.com/get/ea36b40a2efd083ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"},
        { name: "Night View", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f6c17ea3ebb1b1_340.jpg"}
    ]
    res.render("campgrounds",{camps:campgrounds});
});


app.listen(3000, function(){
    console.log("Camp server started...");
});