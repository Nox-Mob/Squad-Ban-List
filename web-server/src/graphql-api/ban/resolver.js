import { BanList, SteamUser } from 'sbl-lib/db/models';

export default {
  Ban: {
    steamUser: (parent) => {
      return SteamUser.findByPk(parent.steamUser);
    },
    banList: (parent) => {
      return BanList.findByPk(parent.banList);
    }
  }
};
