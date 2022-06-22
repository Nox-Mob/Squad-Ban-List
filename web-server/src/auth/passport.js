import passport from 'koa-passport';
import SteamStrategy from 'passport-steam';

import { API_SERVER, STEAM_API_KEY } from 'sbl-lib/config';
import { SteamUser } from 'sbl-lib/db/models';

passport.use(
  new SteamStrategy(
    {
      returnURL: API_SERVER + '/login',
      realm: API_SERVER,
      apiKey: STEAM_API_KEY
    },
    async (_, profile, done) => {
      const steamUsers = await SteamUser.bulkCreate(
        [
          {
            id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value,
            avatarMedium: profile.photos[1].value,
            avatarFull: profile.photos[2].value,
            isSBLUser: true
          }
        ],
        { updateOnDuplicate: ['isSBLUser'] }
      );

      return done(null, steamUsers[0]);
    }
  )
);

export default passport;
