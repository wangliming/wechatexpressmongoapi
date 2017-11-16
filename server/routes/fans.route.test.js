import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/fans-param-validation.test';
import fansCtrl from '../controllers/fans.controller.test';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/fans - Get list of fans */
  .get(fansCtrl.list);
router.route('/getbyid/:fansId')
    .get(fansCtrl.get);
router.route('/:wholeFansName')
  /** GET /api/fans/:fansId - Get fans */
  .get(fansCtrl.get);
router.route('/searchbyname/:vagueFansName')
    .get(fansCtrl.get);
router.route('/add/')
    .post(validate(paramValidation.createFans), fansCtrl.create);
router.route('/update/:wholeFansName')
    .post(validate(paramValidation.updateUser), fansCtrl.update);
/** Load user when API with userId route parameter is hit */
router.param('wholeFansName', fansCtrl.load);
router.param('vagueFansName', fansCtrl.loadbyname);
router.param('fansId', fansCtrl.loadbyid);
export default router;