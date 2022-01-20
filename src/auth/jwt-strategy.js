import { Strategy, ExtractJwt } from 'passport-jwt';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: true,
  secretOrKey: JWT_SECRET
};

passport.use(
  new Strategy(options, payload => {
    // return user object from db using payload.email
  })
);
