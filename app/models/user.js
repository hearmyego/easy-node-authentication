// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String,
        picturUrl    : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    profile          : {
        name         : String,
        phonenumer   : String,
        email        : String,
        gender       : String,
        birthday     : Date,
        location     : String,

        silentHoursStart : Number,
        silentHoursEnd   : Number,
        isActive     : { type: Boolean, default: true },
        lastLogin    : { type: Date, default: new Date().toUTCString() },
    },
    groups           : [String]

}, { timestamps: true });

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


userSchema.methods.hasFacebook = function() {
    return this.facebook.token ? true : false;
};
userSchema.methods.hasTwitter = function() {
    return this.twitter.token ? true : false;
};
userSchema.methods.hasGoogle = function() {
    return this.google.token ? true : false;
};
userSchema.methods.hasLocal = function() {
    return this.local.email ? true : false;
};


userSchema.virtual('profile.birthdayLocal').get(function () {
  if (this.profile.birthday) {
    return this.profile.birthday.toISOString();
  }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
