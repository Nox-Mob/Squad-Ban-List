import { BanList } from 'sbl-lib/db/models';

export default {
  Organisation: {
    banLists: (parent) => {
      return BanList.findAll({
        where: { organisation: parent.id },
        order: [['name', 'ASC']]
      });
    }
  }
};
