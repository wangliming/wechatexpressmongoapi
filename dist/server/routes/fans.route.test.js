'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _fansParamValidation = require('../../config/fans-param-validation.test');

var _fansParamValidation2 = _interopRequireDefault(_fansParamValidation);

var _fansController = require('../controllers/fans.controller.test');

var _fansController2 = _interopRequireDefault(_fansController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/fans - Get list of fans */
.get(_fansController2.default.list);
router.route('/getbyid/:fansId').get(_fansController2.default.get);
router.route('/:wholeFansName')
/** GET /api/fans/:fansId - Get fans */
.get(_fansController2.default.get);
router.route('/searchbyname/:vagueFansName').get(_fansController2.default.get);
router.route('/add/').post((0, _expressValidation2.default)(_fansParamValidation2.default.createFans), _fansController2.default.create);
router.route('/update/:wholeFansName').post((0, _expressValidation2.default)(_fansParamValidation2.default.updateUser), _fansController2.default.update);
/** Load user when API with userId route parameter is hit */
router.param('wholeFansName', _fansController2.default.load);
router.param('vagueFansName', _fansController2.default.loadbyname);
router.param('fansId', _fansController2.default.loadbyid);
exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=fans.route.test.js.map
