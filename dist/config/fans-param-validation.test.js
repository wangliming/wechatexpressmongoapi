'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/fans
  createFans: {
    body: {
      // name: Joi.string().required(),
      // phone: Joi.string().required(),
      // avtar: Joi.string(),
      // area: Joi.string()
    }
  },

  // UPDATE /api/fans/update/:wholeFansName
  updateUser: {
    body: {
      name: _joi2.default.string().required(),
      phone: _joi2.default.string().required(),
      avtar: _joi2.default.string(),
      area: _joi2.default.string()
    },
    params: {
      wholeFansName: _joi2.default.string().required()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=fans-param-validation.test.js.map
