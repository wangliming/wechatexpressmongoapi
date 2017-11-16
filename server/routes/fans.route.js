import express from 'express';
// import validate from 'express-validation';
// import paramValidation from '../../config/fans-param-validation';
import fansCtrol from '../controllers/fans.controller';

const router = express.Router(); // eslint-disable-line new-cap
// 上传粉丝到数据库
router.route('/uploadfans/').post(fansCtrol.uploadfans);
router.route('/getfans/').get(fansCtrol.list);
export default router;