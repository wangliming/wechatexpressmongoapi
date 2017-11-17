'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _APIError = require('../helpers/APIError');

var _APIError2 = _interopRequireDefault(_APIError);

var _stream = require('stream');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fans Schema
 */
var FansSchema = new _mongoose2.default.Schema({
  fid: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  alias: {
    type: String
  },
  area: {
    type: String
  },
  avatar: {
    type: String
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  official: {
    type: Boolean,
    required: true
  },
  sex: {
    type: Number,
    required: true
  },
  signature: {
    type: String
  },
  special: {
    type: Boolean
  },
  star: {
    type: Boolean
  },
  strange: {
    type: Boolean
  },
  weixin: {
    type: String
  },
  uin: {
    type: Number
  },
  pid: { // 是否是父粉丝
    type: String
  },
  mid: { // 此粉丝所在机器的id
    type: String
  },
  fip: { // 粉丝所在机器的ip，请求使用
    type: String
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
FansSchema.method({});

/**
 * Statics
 */
FansSchema.statics = {
  getfansbyname: function getfansbyname(name) {
    return this.findOne({ name: name }).exec().then(function (fans) {
      if (fans) {
        return fans;
      }
      var err = new _APIError2.default('No such fans exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },
  getfansbyregexname: function getfansbyregexname(name) {
    var regex = new RegExp(name, 'i');
    return this.find({ name: regex }).exec().then(function (fanslist) {
      if (fanslist) {
        return fanslist;
      }
      var err = new _APIError2.default('No such fans exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },

  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get: function get(fid) {
    return this.find({ fid: fid }).exec().then(function (fans) {
      if (fans) {
        return fans;
      }
      var err = new _APIError2.default('No such user exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },


  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 50 : _ref$limit,
        _ref$customerid = _ref.customerid,
        customerid = _ref$customerid === undefined ? false : _ref$customerid;

    return this.find({ customerid: customerid }).sort({ createdAt: -1 }).skip(+skip).limit(+limit).exec();
  }
};

/**
 * @typedef Fans
 */
exports.default = _mongoose2.default.model('Fans', FansSchema);
module.exports = exports['default'];
//# sourceMappingURL=fans.model.js.map
