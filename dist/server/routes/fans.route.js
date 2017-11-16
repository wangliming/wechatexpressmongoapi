'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fans = require('../controllers/fans.controller');

var _fans2 = _interopRequireDefault(_fans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap
// 上传粉丝到数据库

// import validate from 'express-validation';
// import paramValidation from '../../config/fans-param-validation';
router.route('/uploadfans/').post(_fans2.default.uploadfans);
router.route('/getfans/').get(_fans2.default.list);
exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=fans.route.js.map
