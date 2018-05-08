var express           = require ("express"),
    mongoose          = require ("mongoose"),
    passport          = require ("passport"),
    bodyParser        = require ("body-parser"),
    User              = require ("./models/user"),
    LocalStrategy     = require("passport-local"),
    passportLocalMongoose = require ("passport-local-mongoose");



mongoose.connect("mongodb://localhost/auth_demo_app");
var app     = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "animals are the best",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//responsible for:
    /*
    - reading a session
    - taking a data from session, encoding, and decoding 
    */
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());//encode
passport.deserializeUser(User.deserializeUser());//decode

//----------
//ROUTES
//----------

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//Auths route
//show signup form
app.get("/register",function(req, res){
    res.render("register");
});
//Handles user sign up
app.post("/register", function(req, res){
    // req.body.username
    // req.body.password
    
    //make a new user object
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        //otherwise log the user in using local strategy
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//LOGIN routes
//render login form
app.get("/login", function(req, res){
    res.render("login")
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect:"/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("server started");
});