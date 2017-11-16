import express from 'express';
import fansRoutes from './fans.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);
// fans routes at /fans
router.use('/fans',fansRoutes );
// router.use('/fans',(req, res) =>
//   res.send('OK111')
// );

export default router;
