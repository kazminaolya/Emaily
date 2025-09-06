const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);

		done(null, user);
	} catch (error) {
		done(error, null);
	}
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true,
	},
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id }).then((existingUser) => {
			if(existingUser) {
				// we already have this user
				done(null, existingUser);
			} else {
				new User({ googleId: profile.id })
					.save()
					.then((user) => done(null, user));
			}
		});
	}));
