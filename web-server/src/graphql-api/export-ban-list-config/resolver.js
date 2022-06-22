import { BanList, ExportBanList } from 'sbl-lib/db/models';

export default {
  ExportBanListConfig: {
    exportBanList: (parent) => {
      return ExportBanList.findByPk(parent.exportBanList);
    },
    banList: (parent) => {
      return BanList.findByPk(parent.banList);
    }
  }
};
