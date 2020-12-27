import axios from 'axios';
import { classifyBanReason } from '../utils/index.js';

export default async function (source) {
  const { data } = await axios.get(source);

  const bans = [];
  for (const line of data.split('\n')) {
    let [match, steamUser, expires, reason] = line.match(/([0-9]{17}):([0-9]+) ?\/\/(.+)/);

    if (!match) continue;

    expires = parseInt(expires);
    expires = expires ? new Date(expires * 1000) : null;

    bans.push({
      id: `${steamUser},${expires ? expires.getTime() : 'null'}`,
      steamUser,
      expires,
      expired: !(expires === null || expires.getTime() > Date.now()),
      reason: classifyBanReason(reason),
      rawReason: reason
    });
  }

  return bans;
}
