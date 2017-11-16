'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fans = require('./fans.route');

var _fans2 = _interopRequireDefault(_fans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', function (req, res) {
  return res.send('OK');
});
// fans routes at /fans
router.use('/fans', _fans2.default);
// router.use('/fans',(req, res) =>
//   res.send('OK111')
// );

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=index.route.js.map
