// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'          : '1739476839614012',
        'clientSecret'      : 'd87717bec1a5b00786d7823371c73af8',
        'callbackURL'       : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'        : 'https://graph.facebook.com/v2.5/me?fields=id,email,first_name,middle_name,last_name,name,name',
        'profileFields'     : ['birthday', 'picture', 'gender', 'location', 'friends', 'address']
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'          : 'your-secret-clientID-here',
        'clientSecret'      : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/google/callback'
    }

};