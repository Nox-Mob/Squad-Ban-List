import Router from 'koa-router';

import { ExportBan } from 'sbl-lib/db/models';

const router = new Router();

router.get('/:id', async (ctx) => {
  const exportBans = await ExportBan.findAll({ where: { exportBanList: ctx.params.id } });

  ctx.body = exportBans.map((exportBan) => `${exportBan.steamUser}:0`).join('\n');
});

export default router;
