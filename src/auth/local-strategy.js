import { Strategy } from 'passport-local';

const options = {
  usernameField: 'email',
  passwordField: 'password',
  session: false
};

passport.use(
  new Strategy(options, (email, password) => {
    // return user object with email
  })
);
