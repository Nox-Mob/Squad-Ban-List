import { ExportBanListConfig } from 'sbl-lib/db/models';

export default {
  ExportBanList: {
    exportBanListConfigs: (parent) => {
      return ExportBanListConfig.findAll({ where: { exportBanList: parent.id } });
    }
  }
};
